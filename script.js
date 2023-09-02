let result='';
        let score=JSON.parse(localStorage.getItem('score'))||
        {
                wins:0,
                loses:0,
                Ties:0
        };
    function playGame(playerMove)
    {
        const computerMove=pickComputerMove();    
    if(playerMove=='Rock')
    {
        
        if(computerMove=='Rock')
                {
                    result='Tie'
                }
                else if(computerMove=='Paper')
                {
                    result="You Lost"
                }
                else{
                    result='You won';
                }
    }
      else if(playerMove=='Paper'){
        if(computerMove=='Rock')
                {
                    result='You won'
                }
                else if(computerMove=='Paper')
                {
                    result='Tie';
                }
                else{
                    result='You lost'
                }
      }
      else{
        if(computerMove=='Rock'){
                result='You lost'}
            else if(computerMove=='Paper')
            {
                result='You won'
            }
            else{
                result='Tie'
            }
      }
      if(result=='You won'){
        score.wins=score.wins+1;
      }else if(result=='Tie'){
        score.Ties=score.Ties+1;
      }
      else{
        score.loses=score.loses+1;
      }
      localStorage.setItem('score',JSON.stringify(score));
      alert(`You chose ${playerMove} computer chose ${computerMove},${result} 
Wins:${score.wins} Loses:${score.loses} Ties:${score.Ties}`)
    }

        function pickComputerMove()
        {
            let compMove='';
            const randomNum=Math.random()
            console.log(randomNum)
            if(randomNum>=0 && randomNum<1/3)
            {
                compMove='Rock'
            }
            else if(randomNum>=1/3 && randomNum<2/3)
            {
                compMove='Paper'
            }
            else{
                compMove='Scissor'
            }
            return compMove;
        }
