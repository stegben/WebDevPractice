import React from 'react' ;

import ThreadItem from './ThreadItem' ;
import MessageItem from './MessageItem' ;
import initChatRecord from './record.json' ;


// ChatApp: 原本的 HTML
class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    let chatRecord = initChatRecord;
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

module.exports = ChatRoom
