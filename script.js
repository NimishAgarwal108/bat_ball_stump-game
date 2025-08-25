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

  function getResult(playerChoice,computerChoice){
  
    if(playerChoice === 'Bat'){
      if(computerChoice === 'ball'){
     return 'you win';
    }
    else if(computerChoice ==='Bat'){
      return 'match draw';
    }
    else{
      return 'you lose';
    }
  }
    else if(playerChoice === 'ball'){
      if(computerChoice === 'stump'){
        return 'you win';
      }
      else if(computerChoice === 'ball'){
        return 'match draw';
      }
      else{
        return 'you lose';
      }
    }
      
    else{
      if(computerChoice === 'Bat'){
        return 'you win';
      }
      else if(computerChoice === 'stump'){
        return 'match draw';
      }
      else{
        return 'you lose';
      }
    }
  }
  function showResult(playerChoice,computerChoice,resultMsg){
    alert(`you have chosen ${playerChoice} and computer choice is ${computerChoice}\n${resultMsg}`);

  }