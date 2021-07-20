function validatePIN (pin) {
    //return true or false
    let regex = /^\d{4}$|^\d{6}$/
    // let regex2 = /^\d{6}$/
   if ( regex.test(pin)){
     return true;
   } else {
     return false;
   }
  }

  //-----------------------------------

  function validatePIN (pin) {
    return /^\d{4}$|^\d{6}$/.test(pin)
  }