function currySum(num) {
  var curSum = num;
  function nextCurrySum(next){
    curSum += next
    function nextNextCurrySum(nextNext){
      return curSum += nextNext
    }
    return nextNextCurrySum
  }
  return nextCurrySum
}
