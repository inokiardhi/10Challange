function rowSumOddNumbers(n) {
    
    let sisiKiri = n*(n-1)+1;
    let arr = [sisiKiri];
    let jumlah = 0;
    
    for(let i = 0; i < n-1; i++){
      arr.push(arr[i] + 2)
    }
    
    for(let j = 0; j < arr.length; j++){
      jumlah += arr[j];
    }
    return jumlah
  }

  //--------------------------------

  function rowSumOddNumbers(n) {
    return Math.pow(n,3)
  }

  //--------------------------------

  function rowSumOddNumbers(n) {
    return n = n*n*n;
  }