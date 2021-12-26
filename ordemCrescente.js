const showDebug = false;
const debugLog = function(){
  if(showDebug){
    console.log.apply(window,Array.from(arguments));
  }
}
const isInSequence = checkFunction => (array,maxMissed) => {
  const recur = (missed,currentIndex,array) => {
    debugLog("array:",array,"missed:",missed,"index:",currentIndex);
    if(currentIndex>=array.length-1) return true;
    var next = currentIndex+1;
    if(!checkFunction(array[next-1],array[next])){
      debugLog("------------miss");
      missed++
      if(missed>maxMissed){
        return false;
      }
      if(next>=array.length-1){
        array=array.slice(-1);
      }else if(currentIndex===0) {
        array = array.slice(currentIndex+1);
      }else{
        return recur(
          missed,0,array.slice(0,currentIndex).concat(array.slice(currentIndex+1))
        ) || recur(
          missed,0,array.slice(0,next).concat(array.slice(next+1))
        )
      }
      next = 0;
    }

    return recur(missed,next,array);
  }
  return recur(0,0,array);
}

const test = (expected,value,message) =>
  (expected!==value)
    ? console.error("Failed, expected:",expected,"got:",value,"message:",message)
    : console.info("Passed:",message)
;
console.clear();

const increasing = isInSequence((current,next)=>current<next);
test(false,increasing([1, 3, 2, 1],1),"[1, 3, 2, 1]  false");
test(true,increasing([1, 3, 2],1),"[1, 3, 2]  true");
test(false,increasing([1, 2, 1, 2],1),"[1, 2, 1, 2]  false");
test(false,increasing([3, 6, 5, 8, 10, 20, 15],1),"[3, 6, 5, 8, 10, 20, 15] false");
test(false,increasing([1, 1, 2, 3, 4, 4],1),"[1, 1, 2, 3, 4, 4] false");
test(false,increasing([1, 4, 10, 4, 2],1),"[1, 4, 10, 4, 2] false");
test(true,increasing([10, 1, 2, 3, 4, 5],1),"[10, 1, 2, 3, 4, 5]  true");
test(false,increasing([1, 1, 1, 2, 3],1),"[1, 1, 1, 2, 3] false");
test(true,increasing([0, -2, 5, 6] ,1),"[0, -2, 5, 6]   true");
test(false,increasing([1, 2, 3, 4, 5, 3, 5, 6] ,1),"[1, 2, 3, 4, 5, 3, 5, 6]  false");
test(false,increasing([40, 50, 60, 10, 20, 30] ,1),"[40, 50, 60, 10, 20, 30] false");
test(true,increasing([1, 1] ,1),"[1, 1]  true");
test(true,increasing([1, 2, 5, 3, 5] ,1),"[1, 2, 5, 3, 5]  true");
test(false,increasing([1, 2, 5, 5, 5]  ,1),"[1, 2, 5, 5, 5]  false");
test(false,increasing([10, 1, 2, 3, 4, 5, 6, 1] ,1),"[10, 1, 2, 3, 4, 5, 6, 1] false");
test(true,increasing([1, 2, 3, 4, 3, 6]  ,1),"[1, 2, 3, 4, 3, 6]   true");
test(true,increasing([1, 2, 3, 4, 99, 5, 6] ,1),"[1, 2, 3, 4, 99, 5, 6]  true");
test(true,increasing([123, -17, -5, 1, 2, 3, 12, 43, 45] ,1),"[123, -17, -5, 1, 2, 3, 12, 43, 45]  true");
test(true,increasing([3, 5, 67, 98, 3] ,1),"[3, 5, 67, 98, 3]  true");
