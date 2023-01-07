    const arr = ["rock", "paper", "scissors"]
    const copy = document.querySelector('.choices')
    let index = 0
    arr.forEach(ele => {
        copy.innerHTML += `
        <button onclick="copyInPlayerChoose(${index})" class= 'btn'>${ele}</button>
    `
    index++
    })
    let playerChoose = ''
    let randomPlay = ''
    let playerResult = 0
    let computerResult = 0
    let playerHand = document.querySelector(".player-choose")
    let computerHand = document.querySelector(".computer-choose")
    function copyInPlayerChoose(index){
        playerChoose = arr[index]
        // document.querySelector('.player-choose').innerHTML = playerChoose
        playerHand.innerHTML = `<img src="media/rock.png" alt="">`
        computerHand.innerHTML = `<img src="media/rock.png" alt="">`
        setTimeout(() => {
            let computer = computerChoose()
            result(playerChoose,computer)
            images(playerChoose,computer)
        },2000)
        document.querySelector(".player-choose img").style.animation = "shakeComputer 2s ease"
        document.querySelector(".computer-choose img").style.animation = "shakeComputer 2s ease"
        document.querySelector(".player-choose img").addEventListener("animationend", function() {
            this.style.animation = "";
        });
        document.querySelector(".computer-choose img").addEventListener("animationend", function() {
            this.style.animation = "";
        });
    }
    
    function computerChoose(){
        let randomNumber = Math.floor(Math.random() * 3) 
        randomPlay = arr[randomNumber]
        // document.querySelector(".computer-choose").innerHTML = randomPlay
        return randomPlay
    }
    const result = (p1, p2) => {
        if (p1 === p2) 
        return document.querySelector(".winner").innerHTML = 'Draw!';
        if ((p1 === 'rock' && p2 === 'scissors') || (p1 === 'paper' && p2 === 'rock') || (p1 === 'scissors' && p2 === 'paper')){
            playerResult++
            document.querySelector(".player-result").innerHTML = playerResult
            return document.querySelector(".winner").innerHTML = "You win";
        }else{
            computerResult++
            document.querySelector(".computer-result").innerHTML = computerResult
            return document.querySelector(".winner").innerHTML = "You lose, sucker!";
        }
    };
    
    function images(player, computer){
        playerHand.innerHTML = `<img src="media/${player}.png" alt="">`
        computerHand.innerHTML = `<img src="media/${computer}.png" alt="">`
    }
    
    function playAgain(){
        playerResult = 0
        document.querySelector(".player-result").innerHTML = playerResult
        computerResult = 0
        document.querySelector(".computer-result").innerHTML = computerResult
        document.querySelector(".winner").textContent = "Result" 
        playerHand.innerHTML = `<img src="media/rock.png" alt="">`
        computerHand.innerHTML = `<img src="media/rock.png" alt="">`
    }