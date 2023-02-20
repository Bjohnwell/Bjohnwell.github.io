var treasureLocation = Math.floor(Math.random() * 9);
var sadFace = Math.floor(Math.random() * 9);
var clicksLeft = 3;
var gameOver = false;


if(treasureLocation === sadFace) {
  treasureLocation = treasureLocation + 1;
if (treasureLocation >= 9 ) {
  treasureLocation = 0;
  }
}

console.log(treasureLocation)
console.log(sadFace)

const foodFinder = (index) => {
    console.log("index")
    console.log(index);
    if (gameOver === true) {
      return
    }
    clicksLeft--;
    if(clicksLeft === 0){
      alert('You are out of meals till next payday.')
      gameOver = true
    }
    document.getElementById('clicksLeft').innerHTML = clicksLeft;


    if (index === treasureLocation) {
      document.getElementById(index).innerHTML = '🥑';
      if(!gameOver)
      {
      alert('Congratulations You have crashed the housing market with your avocado toast')
    }
      gameOver = true
    } else if (sadFace === index) {
      document.getElementById(index).innerHTML = '😥';
      if(!gameOver){
      alert('Rent is due. Avocado toast is out of the budget!')
    }
      gameOver = true
    } else {
      document.getElementById(index).innerHTML = '🍞';
    }
    
  }
  const refreshFunction = ()=> {
    location.reload()
  }
  
