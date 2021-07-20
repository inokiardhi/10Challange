function accum(s) {
    // your code  
    let a = s.toLowerCase().split('');
    
  
    let arr = [];
    
    for (let i = 0; i < s.length; i++){
    let abjad = '';     
    
      for(let o = 0; o <= i; o++){    
  
        
        if( o === 0){
         abjad += a[i].toUpperCase();     
        } 
      
        else {
          abjad += a[i];   
        }     
      
        
      } 
      arr.push(abjad)
    }
     return arr.join('-')
  }
  
  
//------------------------------------------

function accum(s) {
    // your code
    return Array.from(s, (item, index) => item.toUpperCase() + item.toLowerCase().repeat(index)).join("-")
  }