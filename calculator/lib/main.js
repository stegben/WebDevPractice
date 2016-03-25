"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var // 計算機 App
CalcApp = function (_React$Component) {
  _inherits(CalcApp, _React$Component);

  function CalcApp(props) {
    _classCallCheck(this, CalcApp);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CalcApp).call(this, props));

    _this.resetState = function () {
      _this.setState({
        curNum: 0,
        operator: null,
        operatorPressed: false,
        cachedNum: 0
      });
    };

    _this.clickNumber = function (newNum) {
      var curNum = _this.state.curNum;
      if (_this.state.operatorPressed) {
        _this.setState({
          cachedNum: curNum,
          curNum: newNum,
          operatorPressed: false
        });
      } else {
        _this.setState({
          curNum: curNum * 10 + newNum
        });
      }
    };

    _this.operationPressed = function (operation) {
      _this.setState({
        operator: operation,
        operatorPressed: true
      });
      if (_this.state.operator !== null & !_this.state.operatorPressed) {
        _this.setState({
          cachedNum: _this.state.curNum,
          curNum: _this.state.operator()
        });
      }
      console.log(_this.state.cachedNum);
    };

    _this.addPressed = function () {
      _this.operationPressed(function () {
        return _this.state.curNum + _this.state.cachedNum;
      });
    };

    _this.minusPressed = function () {
      _this.operationPressed(function () {
        return _this.state.cachedNum - _this.state.curNum;
      });
    };

    _this.multiplyPressed = function () {
      _this.operationPressed(function () {
        return _this.state.cachedNum * _this.state.curNum;
      });
    };

    _this.dividePressed = function () {
      _this.operationPressed(function () {
        return _this.state.cachedNum / _this.state.curNum;
      });
    };

    _this.equalPressed = function () {
      if (_this.state.operator !== null) {
        _this.setState({
          cachedNum: 0,
          operator: null,
          operatorPressed: true,
          curNum: _this.state.operator()
        });
      }
    };

    _this.changeSign = function () {
      var curNum = _this.state.curNum;
      _this.setState({
        curNum: -curNum
      });
    };

    _this.state = {
      curNum: 0,
      operator: null,
      operatorPressed: false,
      cacheNum: 0
    };
    return _this;
  }

  _createClass(CalcApp, [{
    key: "showNotImplemented",
    value: function showNotImplemented() {
      console.warn('This function is not implemented yet.');
    }
    /*
    renderNumberBtn = (num, idx) => {
      let numClassName = "calc-number"
      if (num === 0){
        numClassName = "calc-number-zero"
      }
      return (
        <CalcButton
          className={numClassName}
          onClick={this.clickNumber(num)}
        >
          {num}
        </CalcButton>
      );
    }
    */

  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "calc-app" },
        React.createElement(
          "div",
          { className: "calc-container" },
          React.createElement(
            "div",
            { className: "calc-output" },
            React.createElement(
              "div",
              { className: "calc-display" },
              parseFloat(this.state.curNum.toFixed(4).toString())
            )
          ),
          React.createElement(
            "div",
            { className: "calc-row" },
            React.createElement(
              CalcButton,
              { onClick: this.resetState },
              "AC"
            ),
            React.createElement(
              CalcButton,
              { onClick: this.changeSign },
              "+/-"
            ),
            React.createElement(
              CalcButton,
              { onClick: this.showNotImplemented.bind(this) },
              "%"
            ),
            React.createElement(
              CalcButton,
              { className: "calc-operator", onClick: this.dividePressed },
              "÷"
            )
          ),
          React.createElement(
            "div",
            { className: "calc-row" },
            React.createElement(
              CalcButton,
              { className: "calc-number", onClick: this.clickNumber.bind(this, 7) },
              "7"
            ),
            React.createElement(
              CalcButton,
              { className: "calc-number", onClick: this.clickNumber.bind(this, 8) },
              "8"
            ),
            React.createElement(
              CalcButton,
              { className: "calc-number", onClick: this.clickNumber.bind(this, 9) },
              "9"
            ),
            React.createElement(
              CalcButton,
              { className: "calc-operator", onClick: this.multiplyPressed },
              "X"
            )
          ),
          React.createElement(
            "div",
            { className: "calc-row" },
            React.createElement(
              CalcButton,
              { className: "calc-number", onClick: this.clickNumber.bind(this, 4) },
              "4"
            ),
            React.createElement(
              CalcButton,
              { className: "calc-number", onClick: this.clickNumber.bind(this, 5) },
              "5"
            ),
            React.createElement(
              CalcButton,
              { className: "calc-number", onClick: this.clickNumber.bind(this, 6) },
              "6"
            ),
            React.createElement(
              CalcButton,
              { className: "calc-operator", onClick: this.addPressed },
              "+"
            )
          ),
          React.createElement(
            "div",
            { className: "calc-row" },
            React.createElement(
              CalcButton,
              { className: "calc-number", onClick: this.clickNumber.bind(this, 1) },
              "1"
            ),
            React.createElement(
              CalcButton,
              { className: "calc-number", onClick: this.clickNumber.bind(this, 2) },
              "2"
            ),
            React.createElement(
              CalcButton,
              { className: "calc-number", onClick: this.clickNumber.bind(this, 3) },
              "3"
            ),
            React.createElement(
              CalcButton,
              { className: "calc-operator", onClick: this.minusPressed },
              "-"
            )
          ),
          React.createElement(
            "div",
            { className: "calc-row" },
            React.createElement(
              CalcButton,
              { className: "calc-number-zero", onClick: this.clickNumber.bind(this, 0) },
              "0"
            ),
            React.createElement(
              CalcButton,
              { className: "calc-number" },
              "."
            ),
            React.createElement(
              CalcButton,
              { className: "calc-operator", onClick: this.equalPressed },
              "="
            )
          )
        )
      );
    }
  }]);

  return CalcApp;
}(React.Component);

var CalcButton = function (_React$Component2) {
  _inherits(CalcButton, _React$Component2);

  function CalcButton() {
    _classCallCheck(this, CalcButton);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CalcButton).apply(this, arguments));
  }

  _createClass(CalcButton, [{
    key: "render",
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var children = _props.children;
      var onClick = _props.onClick;

      return React.createElement(
        "div",
        {
          className: 'calc-btn ' + (className ? className : ''),
          onClick: onClick
        },
        children
      );
    }
  }]);

  return CalcButton;
}(React.Component);

CalcButton.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func
};

CalcButton.defaultProps = {
  onClick: function onClick() {}
};

ReactDOM.render(React.createElement(CalcApp, null), document.getElementById('root'));