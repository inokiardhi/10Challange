function getVillainName(birthday){
    const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
    const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
    //switch. loop, condition, array
    let firstName;
    let lastName;
  //   console.log(birthday)
    let date = birthday.getDate().toString().padStart(2, 0).split('')
  //   console.log(date[1])
    let month = birthday.getMonth();
  //   console.log(month)
    
    switch (month) {
        case 0:
          firstName = 'The Evil';
        break;
        case 1:
          firstName = 'The Vile';
        break;
        case 2:
          firstName = 'The Cruel';
        break;
        case 3:
          firstName = 'The Trashy';
        break;
        case 4:
          firstName = 'The Despicable';
        break;
        case 5:
          firstName = 'The Embarrassing'
        break;
        case 6:
          firstName = 'The Disreputable'
        break;
        case 7:
          firstName = 'The Atrocious'
        break;
        case 8:
          firstName = 'The Twirling'
        break;
        case 9:
          firstName = 'The Orange'
        break;
        case 10:
          firstName = 'The Terrifying'
        break;
        case 11:
          firstName = 'The Awkward'
        break;
        default:
          firstName = 'unknown'      
    }
  //   console.log(firstName);
  //   console.log(month)
   
    if(date[1] == 0){
      lastName = 'Mustache';
    } else if (date[1] == 1){
      lastName = 'Pickle';
    }else if (date[1] == 2){
      lastName = 'Hood Ornament';
    }else if (date[1] == 3){
      lastName = 'Raisin';
    }else if (date[1] == 4){
      lastName = 'Recycling Bin';
    }else if (date[1] == 5){
      lastName = 'Potato';
    }else if (date[1] == 6){
      lastName = 'Tomato';
    }else if (date[1] == 7){
      lastName = 'House Cat'
    }else if (date[1] == 8){
      lastName = 'Teaspoon'
    }else {
      lastName = 'Laundry Basket'
    }
  //   console.log(lastName);
    return `${firstName} ${lastName}`;
  }

  //------------------------------------------

  function getVillainName(birthday){
    const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
    const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
    
    let date = birthday.getDate() % 10
    let month = birthday.getMonth();
    return `The ${m[month]} ${d[date]}`;
  }