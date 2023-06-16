function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, '');
    let fraseOriginal = str;
     str = str.split('').reverse().join('');
     if(str === fraseOriginal){
      return true;
     } else {
         return false;
          
     }
  
}

 console.log (palindrome("eye"));
    
      
   
   
   


 


  
          



   


