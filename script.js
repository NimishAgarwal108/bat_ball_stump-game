  function getcomputerChoice(){
    let randomNumber=Math.random()*3;
 
    if(randomNumber>0 && randomNumber<=1){
      return 'Bat';
    }
    else if(randomNumber<=2){
        return 'ball';  
      }
    else{
        return 'stump';
      }
  }