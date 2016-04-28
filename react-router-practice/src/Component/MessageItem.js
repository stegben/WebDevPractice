var React = require('react');


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
  };
};

module.exports = MessageItem;
