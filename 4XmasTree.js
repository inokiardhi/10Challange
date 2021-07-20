function xMasTree(n){
    //complete this code
    
  let daun = []
   for(let i = 1; i <= n; i++){ //3
    let tes ='';
    //  console.log(tes)
     
     for (let j = 1; j <= n-i; j++){ //2
       tes += '_';
    //    console.log(tes)
     }
     
     for (let k = 1; k <= i*2-1; k++){//1
       tes += '#'
    //    console.log(tes)
     }
       for (let j = 1; j <= n-i; j++){
       tes += '_';
    //    console.log(tes)
     }
     daun.push(tes);
//      console.log(daun)
     
   }
   
  let maxWidth = (n * 2) - 1; // 5
//   console.log(maxWidth)
  let center = (maxWidth + 1) / 2; 
//   console.log(center)
 
  for(let p = 1; p <= 2; p++){
    let btg = [];
    for(let q = 1; q <= maxWidth; q++){
      if(q === center){
        btg += '#';
      } else {
        btg += '_';
      }
    }
    daun.push(btg)
//     console.log(daun)    
  }
  return daun;
}
