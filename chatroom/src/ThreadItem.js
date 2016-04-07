var React = require('react');

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
  };
};

module.exports = ThreadItem;
