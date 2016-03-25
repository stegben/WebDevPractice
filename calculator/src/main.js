// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curNum: 0,
      operator: null,
      operatorPressed: false,
      cacheNum: 0,
    };
  }

  resetState = () => {
    this.setState({
      curNum: 0,
      operator: null,
      operatorPressed: false,
      cachedNum: 0,
    });
  }

  showNotImplemented() {
    console.warn('This function is not implemented yet.');
  }

  clickNumber = (newNum) => {
    const curNum = this.state.curNum;
    if (this.state.operatorPressed){
      this.setState({
        cachedNum: curNum,
        curNum: newNum,
        operatorPressed: false,
      });
    } else {
      this.setState({
        curNum: curNum * 10 + newNum,
      });
    }
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
  operationPressed = (operation) => {
    this.setState({
      operator: operation,
      operatorPressed: true,
    });
    if (this.state.operator !== null & !this.state.operatorPressed){
      this.setState({
        cachedNum: this.state.curNum,
        curNum: this.state.operator(),
      });
    }
    console.log(this.state.cachedNum);
  }

  addPressed = () => {
    this.operationPressed(
      () => this.state.curNum + this.state.cachedNum
    );
  }

  minusPressed = () => {
    this.operationPressed(
      () => this.state.cachedNum - this.state.curNum
    );
  }

  multiplyPressed = () => {
    this.operationPressed(
      () => this.state.cachedNum * this.state.curNum
    );
  }

  dividePressed = () => {
    this.operationPressed(
      () => this.state.cachedNum / this.state.curNum
    );
  }

  equalPressed = () => {
    if (this.state.operator !== null){
      this.setState({
        cachedNum: 0,
        operator: null,
        operatorPressed: true,
        curNum: this.state.operator(),
      });
    }
  }

  changeSign = () => {
    const curNum = this.state.curNum;
    this.setState({
      curNum: -curNum
    });
  }

  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{parseFloat(this.state.curNum.toFixed(4).toString())}</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.resetState}>AC</CalcButton>
            <CalcButton onClick={this.changeSign}>+/-</CalcButton>
            <CalcButton onClick={this.showNotImplemented.bind(this)}>%</CalcButton>
            <CalcButton className="calc-operator" onClick={this.dividePressed}>÷</CalcButton>
          </div>
          <div className="calc-row">
            {/*[7, 8, 9].map(this.renderNumberBtn, this)*/}
            <CalcButton className="calc-number" onClick={this.clickNumber.bind(this, 7)}>7</CalcButton>
            <CalcButton className="calc-number" onClick={this.clickNumber.bind(this, 8)}>8</CalcButton>
            <CalcButton className="calc-number" onClick={this.clickNumber.bind(this, 9)}>9</CalcButton>
            <CalcButton className="calc-operator" onClick={this.multiplyPressed}>X</CalcButton>
          </div>
          <div className="calc-row">
            {/*[4,5,6].map(this.renderNumberBtn, this)*/}
            <CalcButton className="calc-number" onClick={this.clickNumber.bind(this, 4)}>4</CalcButton>
            <CalcButton className="calc-number" onClick={this.clickNumber.bind(this, 5)}>5</CalcButton>
            <CalcButton className="calc-number" onClick={this.clickNumber.bind(this, 6)}>6</CalcButton>
            <CalcButton className="calc-operator" onClick={this.addPressed}>+</CalcButton>
          </div>
          <div className="calc-row">
            {/*[1,2,3].map(this.renderNumberBtn, this)*/}
            <CalcButton className="calc-number" onClick={this.clickNumber.bind(this, 1)}>1</CalcButton>
            <CalcButton className="calc-number" onClick={this.clickNumber.bind(this, 2)}>2</CalcButton>
            <CalcButton className="calc-number" onClick={this.clickNumber.bind(this, 3)}>3</CalcButton>
            <CalcButton className="calc-operator" onClick={this.minusPressed}>-</CalcButton>
          </div>
          <div className="calc-row">
            {/*[0].map(this.renderNumberBtn, this)*/}
            <CalcButton className="calc-number-zero" onClick={this.clickNumber.bind(this, 0)}>0</CalcButton>
            <CalcButton className="calc-number">.</CalcButton>
            <CalcButton className="calc-operator" onClick={this.equalPressed}>=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}


class CalcButton extends React.Component {
  render() {
    const { className, children, onClick } = this.props;
    return (
      <div
        className={'calc-btn ' + (className ? className : '')}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
}

CalcButton.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func
};

CalcButton.defaultProps = {
  onClick: () => {}
};


ReactDOM.render(<CalcApp />, document.getElementById('root'));
