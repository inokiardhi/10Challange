function getCount(str) {
    var vowelsCount = 0;
    
    // enter your majic here
  //   console.log(str)
    
    let cek = ['a', 'i', 'u', 'e', 'o'];
    console.log(str.length)
    console.log(cek.length)
    for( let i = 0; i < str.length; i++){
      if (cek.includes(str[i])){
        vowelsCount++;
      }
    }
  //   console.log(vowelsCount)
    return vowelsCount;
  }

  //--------------------------------------------

  function getCount(str) {
  //   return str.split('').filter(item => 'aiueo'.includes(item)).length
     return Array.from(str, item => item).filter(item => 'aiueo'.includes(item)).length
   
  }