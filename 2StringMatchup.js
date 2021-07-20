function solve(a,b){
    let arr1 = [];
//     let arr2 = [];
//     let arr3 = [];
    
  let jmlh;
  for (let j = 0; j < b.length; j++) {//       
      jmlh = 0;
      for ( let i = 0; i < a.length; i++) {
        if (b[j] === a[i]){
         jmlh++
         
      }
        
    }
//      console.log(jmlh)
    arr1.push(jmlh);    
  }
//   console.log(arr1)
  return arr1;
}

//---------------------------------------

function solve(a,b){
    return b.map((item) => a.filter(itemA => item === itemA).length)
 }