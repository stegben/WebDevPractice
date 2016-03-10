function currySum(num) {
  var execute = 3;
  curSum: num;
  return function(next){
    execute: this.execute
    if (execute < 1){
      return curSum ;
    } else {
      curSum += next;
      return this;
    }
  }
}
