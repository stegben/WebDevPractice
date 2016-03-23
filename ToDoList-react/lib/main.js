'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoApp = function (_React$Component) {
  _inherits(TodoApp, _React$Component);

  function TodoApp(props, context) {
    _classCallCheck(this, TodoApp);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TodoApp).call(this, props, context));

    _this.state = {
      todos: [{ value: 'todo sample item 1', done: false }, { value: 'todo sample item 2', done: true }],
      inputText: ""
    };
    return _this;
  }

  _createClass(TodoApp, [{
    key: 'inputChange',
    value: function inputChange(event) {
      //this.state.inputText = event.target.value;
      this.setState({ inputText: event.target.value });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      var inputText = this.state.inputText;
      if ((event.which === 13 || event.keyCode === 13) && inputText !== '') {
        var origTodos = this.state.todos;
        this.setState({
          todos: origTodos.concat({ value: inputText, done: false }),
          inputText: ""
        });
      };
    }
  }, {
    key: 'handleDelete',
    value: function handleDelete(idx) {
      var todos = this.state.todos;
      todos.splice(idx, 1);
      this.setState({ todos: todos });
    }
  }, {
    key: 'handleCheck',
    value: function handleCheck(idx) {
      var todos = this.state.todos;
      var cur_todo = todos[idx];
      todos.splice(idx, 1, {
        value: cur_todo.value,
        done: !cur_todo.done
      });
      this.setState({ todos: todos });
    }
  }, {
    key: 'renderTodoItem',
    value: function renderTodoItem(input, idx) {
      return React.createElement(TodoItem, {
        content: input["value"],
        done: input["done"],
        key: idx,
        onCancel: this.handleDelete.bind(this, idx),
        onCheckClick: this.handleCheck.bind(this, idx)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state;
      var todos = _state.todos;
      var inputText = _state.inputText;

      return React.createElement(
        'section',
        { className: 'todoapp' },
        React.createElement(
          'h1',
          null,
          'Todo List'
        ),
        React.createElement('input', {
          value: inputText,
          onChange: this.inputChange.bind(this),
          onKeyDown: this.handleSubmit.bind(this),
          className: 'new-todo'
        }),
        React.createElement(
          'ul',
          { className: 'todo-list' },
          todos.map(function (item, idx) {
            return _this2.renderTodoItem(item, idx);
          })
        ),
        React.createElement(CountDisplay, { todos: this.state.todos })
      );
    }
  }]);

  return TodoApp;
}(React.Component);

var TodoItem = function (_React$Component2) {
  _inherits(TodoItem, _React$Component2);

  function TodoItem() {
    _classCallCheck(this, TodoItem);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TodoItem).apply(this, arguments));
  }

  _createClass(TodoItem, [{
    key: 'render',
    value: function render() {
      var _this4 = this;

      console.log(this.props.key);
      var done = this.props.done;
      return React.createElement(
        'li',
        { className: done ? "completed" : "" },
        React.createElement('input', {
          className: 'toggle',
          type: 'checkbox',
          checked: done,
          onChange: function onChange(event) {
            return _this4.props.onCheckClick();
          }
        }),
        React.createElement(
          'label',
          null,
          this.props.content
        ),
        React.createElement('button', {
          className: 'destroy',
          onClick: function onClick(event) {
            return _this4.props.onCancel();
          } })
      );
    }
  }]);

  return TodoItem;
}(React.Component);

var CountDisplay = function (_React$Component3) {
  _inherits(CountDisplay, _React$Component3);

  function CountDisplay() {
    _classCallCheck(this, CountDisplay);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CountDisplay).apply(this, arguments));
  }

  _createClass(CountDisplay, [{
    key: 'render',
    value: function render() {
      //const todos = this.props.todos;
      return React.createElement(
        'footer',
        { className: 'todo-count' },
        React.createElement(
          'span',
          null,
          React.createElement(
            'strong',
            null,
            this.props.todos.filter(function (v) {
              return !v["done"];
            }).length
          ),
          ' left'
        )
      );
    }
  }]);

  return CountDisplay;
}(React.Component);

ReactDOM.render(React.createElement(TodoApp, null), document.getElementById('root'));