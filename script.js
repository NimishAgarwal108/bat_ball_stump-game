/*let randomNumber=Math.random()*3;
  //this will generate random number 0 and 3
   let computerChoice ='';
  if(randomNumber>0 &&randomNumber<=1){
    computerChoice = 'Bat';
  }
  else if(randomNumber<=2){
     computerChoice='ball';  
  }
  else{
     computerChoice='stump';
  }*/

  function getcomputerChoice(){
    let randomNumber=Math.random()*3;
    let computerChoice ='';
    if(randomNumber>0 && randomNumber<=1){
      computerChoice = 'Bat';
    }
    else if(randomNumber<=2){
        computerChoice='ball';  
      }
    else{
        computerChoice='stump';
      }
  }