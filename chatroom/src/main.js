var initChatRecord = [
  {
    "name": "Elsa",
    "lastUpdate": "21:07",
    "imageSource": "http://lorempixel.com/50/50/people/1",
    "message": [
      {"from-other": true, "content": "對啊"},
      {"from-other": true, "content": "試著"},
      {"from-other": true, "content": "靠左邊嘛"},
      {"from-other": false, "content": "換我了"},
      {"from-other": false, "content": "有看到嗎"},
    ],
  },
  {
    "name": "Marshall",
    "lastUpdate": "12:27",
    "imageSource": "http://lorempixel.com/50/50/people/2",
    "message": [
      {"from-other": true, "content": ": )"},
    ],
  },
]


// ChatApp: 原本的 HTML
class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    let chatRecord = this.props.source;
    this.state = {
      message: chatRecord,
      showIdx: 0,
      inputText: "",
    };
  }

  handleSubmit(event) {
    const inputText = this.state.inputText;
    const idx = this.state.showIdx;
    if ((event.which === 13 || event.keyCode === 13) && inputText !== '') {
      let new_message = {"from-other": false, "content": inputText};
      let new_message_set = this.state.message;
      new_message_set[idx]["message"] = new_message_set[idx]["message"].concat(new_message);
      this.setState({
        message: new_message_set,
        inputText: ""
      });
    };
  };

  handleInputMessageChange(event){
    this.setState({
      inputText: event.target.value
    });
  }

  handleThreadClick(idx){
    this.setState({
      showIdx: idx
    });
  }

  renderThreadItem = () => {
    return (
      <div>
        {this.state.message.map(function(item, idx){
          return (
            <ThreadItem
              name={item["name"]}
              time={item["lastUpdate"]}
              lastMessage={item["message"][item["message"].length - 1]["content"]}
              imgSrc={item["imageSource"]}
              isShow={this.state.showIdx === idx}
              onClick={this.handleThreadClick.bind(this, idx)}
              key={idx}
            />
          );
        }, this)}
      </div>
    );
  }

  renderMessageItem = () => {
    const idx = this.state.showIdx;
    return(
      <div className="message-list">
        {this.state.message[idx]["message"].map(function(message, index){
          return (
            <MessageItem
              key={index}
              content={message["content"]}
              from_other={message["from-other"]}
            />
          );
        }, this)}
      </div>
    )
  }

  render() {
    return (
      <div className="chat-app clearfix">
        <div className="chat-app_left">
          <div className="heading">
            <h3 className="messenger-title">Messager</h3>
          </div>
          <div className="thread-list">
            {this.renderThreadItem()}
          </div>
        </div>
        <div className="chat-app_right">
          <div className="heading">
            <div className="current-target">{this.state.message[this.state.showIdx]["name"]}</div>
          </div>
          {this.renderMessageItem()}
          <div className="footer">
            <input
              className="new-message"
              type="text"
              value={this.state.inputText}
              onChange={this.handleInputMessageChange.bind(this)}
              onKeyDown={this.handleSubmit.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

class ThreadItem extends React.Component {
  render() {
    return (
      <li
        className={this.props.isShow ? "thread-item-select" : "thread-item"}
        key={this.props.key}
        onClick={this.props.onClick}
      >
        <div className="clearfix">
          <div className="thread-item_left">
            <img className="img-circle" src={this.props.imgSrc} width="50" height="50" alt="" className="img"/>
          </div>
          <div className="thread-item_right">
            <div className="thread-from">
              {this.props.name}
            </div>
            <div>
              <span className="thread-content">
                {this.props.lastMessage}
              </span>
            </div>
            <span className="thread-time">
              {this.props.time}
            </span>
          </div>
        </div>
      </li>
    );
  }
}

class MessageItem extends React.Component {
  render() {
    const from_other = this.props.from_other;
    const content = this.props.content;
    let class_name = "message-item";
    if (from_other) {
      class_name = class_name + " " + "message-from-other";
    } else {
      class_name = class_name + " " + "message-from-me";
    }
    return (
      <div className={class_name}>
        <span>{content}</span>
      </div>
    );
  }
}

ReactDOM.render(
  <ChatApp source={initChatRecord}/>,
  document.getElementById('root')
);
