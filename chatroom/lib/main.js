"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var initChatRecord = [{
  "name": "Elsa",
  "lastUpdate": "21:07",
  "imageSource": "http://lorempixel.com/50/50/people/1",
  "message": [{ "from-other": true, "content": "對啊" }, { "from-other": true, "content": "試著" }, { "from-other": true, "content": "靠左邊嘛" }, { "from-other": false, "content": "換我了" }, { "from-other": false, "content": "有看到嗎" }]
}, {
  "name": "Marshall",
  "lastUpdate": "12:27",
  "imageSource": "http://lorempixel.com/50/50/people/2",
  "message": [{ "from-other": true, "content": ": )" }]
}];

// ChatApp: 原本的 HTML

var ChatApp = function (_React$Component) {
  _inherits(ChatApp, _React$Component);

  function ChatApp(props) {
    _classCallCheck(this, ChatApp);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ChatApp).call(this, props));

    _this.renderThreadItem = function () {
      return React.createElement(
        "div",
        null,
        _this.state.message.map(function (item, idx) {
          return React.createElement(ThreadItem, {
            name: item["name"],
            time: item["lastUpdate"],
            lastMessage: item["message"][item["message"].length - 1]["content"],
            imgSrc: item["imageSource"],
            isShow: this.state.showIdx === idx,
            onClick: this.handleThreadClick.bind(this, idx),
            key: idx
          });
        }, _this)
      );
    };

    _this.renderMessageItem = function () {
      var idx = _this.state.showIdx;
      return React.createElement(
        "div",
        { className: "message-list" },
        _this.state.message[idx]["message"].map(function (message, index) {
          return React.createElement(MessageItem, {
            key: index,
            content: message["content"],
            from_other: message["from-other"]
          });
        }, _this)
      );
    };

    var chatRecord = _this.props.source;
    _this.state = {
      message: chatRecord,
      showIdx: 0,
      inputText: ""
    };
    return _this;
  }

  _createClass(ChatApp, [{
    key: "handleSubmit",
    value: function handleSubmit(event) {
      var inputText = this.state.inputText;
      var idx = this.state.showIdx;
      if ((event.which === 13 || event.keyCode === 13) && inputText !== '') {
        var new_message = { "from-other": false, "content": inputText };
        var new_message_set = this.state.message;
        new_message_set[idx]["message"] = new_message_set[idx]["message"].concat(new_message);
        this.setState({
          message: new_message_set,
          inputText: ""
        });
      };
    }
  }, {
    key: "handleInputMessageChange",
    value: function handleInputMessageChange(event) {
      this.setState({
        inputText: event.target.value
      });
    }
  }, {
    key: "handleThreadClick",
    value: function handleThreadClick(idx) {
      this.setState({
        showIdx: idx
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "chat-app clearfix" },
        React.createElement(
          "div",
          { className: "chat-app_left" },
          React.createElement(
            "div",
            { className: "heading" },
            React.createElement(
              "h3",
              { className: "messenger-title" },
              "Messager"
            )
          ),
          React.createElement(
            "div",
            { className: "thread-list" },
            this.renderThreadItem()
          )
        ),
        React.createElement(
          "div",
          { className: "chat-app_right" },
          React.createElement(
            "div",
            { className: "heading" },
            React.createElement(
              "div",
              { className: "current-target" },
              this.state.message[this.state.showIdx]["name"]
            )
          ),
          this.renderMessageItem(),
          React.createElement(
            "div",
            { className: "footer" },
            React.createElement("input", {
              className: "new-message",
              type: "text",
              value: this.state.inputText,
              onChange: this.handleInputMessageChange.bind(this),
              onKeyDown: this.handleSubmit.bind(this)
            })
          )
        )
      );
    }
  }]);

  return ChatApp;
}(React.Component);

var ThreadItem = function (_React$Component2) {
  _inherits(ThreadItem, _React$Component2);

  function ThreadItem() {
    _classCallCheck(this, ThreadItem);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ThreadItem).apply(this, arguments));
  }

  _createClass(ThreadItem, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "li",
        {
          className: this.props.isShow ? "thread-item-select" : "thread-item",
          key: this.props.key,
          onClick: this.props.onClick
        },
        React.createElement(
          "div",
          { className: "clearfix" },
          React.createElement(
            "div",
            { className: "thread-item_left" },
            React.createElement("img", _defineProperty({ className: "img-circle", src: this.props.imgSrc, width: "50", height: "50", alt: "" }, "className", "img"))
          ),
          React.createElement(
            "div",
            { className: "thread-item_right" },
            React.createElement(
              "div",
              { className: "thread-from" },
              this.props.name
            ),
            React.createElement(
              "div",
              null,
              React.createElement(
                "span",
                { className: "thread-content" },
                this.props.lastMessage
              )
            ),
            React.createElement(
              "span",
              { className: "thread-time" },
              this.props.time
            )
          )
        )
      );
    }
  }]);

  return ThreadItem;
}(React.Component);

var MessageItem = function (_React$Component3) {
  _inherits(MessageItem, _React$Component3);

  function MessageItem() {
    _classCallCheck(this, MessageItem);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(MessageItem).apply(this, arguments));
  }

  _createClass(MessageItem, [{
    key: "render",
    value: function render() {
      var from_other = this.props.from_other;
      var content = this.props.content;
      var class_name = "message-item";
      if (from_other) {
        class_name = class_name + " " + "message-from-other";
      } else {
        class_name = class_name + " " + "message-from-me";
      }
      return React.createElement(
        "div",
        { className: class_name },
        React.createElement(
          "span",
          null,
          content
        )
      );
    }
  }]);

  return MessageItem;
}(React.Component);

ReactDOM.render(React.createElement(ChatApp, { source: initChatRecord }), document.getElementById('root'));