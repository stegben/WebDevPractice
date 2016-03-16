function currySum(num) {
  var curSum = num;
  function nextCurrySum(next){
    curSum += next
    function nextNextCurrySum(next){
      return curSum += next
    }
    return nextNextCurrySum
  }
  return nextCurrySum
}
