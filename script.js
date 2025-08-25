  let score={
    win:0,
    loss:0,
    tie:0,
    displayScore:function(){
      return `wins:${score.win}, losses:${score.loss}, ties:${score.tie}`;
    }

  };  
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
        score.win++;
     return 'you win';
     
    }
    else if(computerChoice ==='Bat'){
      score.tie++;
      return 'match draw';
    }
    else{
      score.loss++;
      return 'you lose';
    }
  }
    else if(playerChoice === 'ball'){
      if(computerChoice === 'stump'){
         score.win++;
        return 'you win';
       
      }
      else if(computerChoice === 'ball'){
         score.tie++;
        return 'match draw';
       
      }
      else{
        score.loss++;
        return 'you lose';
      }
    }
      
    else{
      if(computerChoice === 'Bat'){
        score.win++;
        return 'you win';
      }
      else if(computerChoice === 'stump'){
        score.tie++;
        return 'match draw';
      }
      else{
         score.loss++;
        return 'you lose';
      }
    }
  }
  function showResult(playerChoice,computerChoice,resultMsg){
    alert(`you have chosen ${playerChoice} and computer choice is ${computerChoice}\n
    ${resultMsg}\n
    Your score is\n

    ${score.displayScore()}`);

  }
   