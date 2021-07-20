function evenNumbers(array, number) {
    // good luck
    let coba =[];
   for(let i = 0; i < array.length; i++){
     if(array[i] % 2 === 0 ){
        coba.push(array[i])
        }   
   }
    // console.log(coba)
    // console.log(number)
    let coba2 = coba.slice(-number)
    // console.log(coba2)
    return number = coba2;
  }

  //-------------------------------------------

  function evenNumbers(array, number) {
    // good luck
    return array.filter(item => item % 2 === 0).slice(-number)
  }