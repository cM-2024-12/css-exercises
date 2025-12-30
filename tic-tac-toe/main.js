const gameboard = (function () {

    let scoreBoard = Array(9).fill('')
    const winningScore = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Middle column
        [2, 5, 8], // Right column
        [0, 4, 8], // Main diagonal
        [2, 4, 6]  // Anti-diagonal
    ]

    const setupBoard = () => {
        // Handle Start Button Click
        const startBtn = document.querySelector("#startBtn")
        startBtn.addEventListener("click", () => {
            renderBoard()
            if (!registerPlayers()) return 
            playerController.handleSquareClick()
            startBtn.disabled = true  // Disable during game
        })
        // Handle Reset Click 
        const resetBtn = document.querySelector("#resetBtn")
        resetBtn.addEventListener("click", resetBoard)
        startBtn.disabled = false  // Re-enable

    }

    const playRound = (i, player) => {
        const selectedSquare = document.querySelector(`#square${i}`)
        // validate move (if not empty)
        if (scoreBoard[i] !== '') {
            console.log(`Square ${i} Already Taken.`)
            return false
        }
        // update score
        updateScore(i, player);
        // update ui
        const mark = player.mark
        selectedSquare.textContent = mark
        console.log(`Square ${i} marked ${player.mark}`)
        // check for win  
        const winner = checkWin(scoreBoard)
        if (winner) {
            console.log(`${winner} wins!`)
            return winner
        }
        return true
    }

    // private helpers
    const createPlayer = (name, mark) => {
        console.log(`${name} created using '${mark}' Marker.`)
        return { name, mark}
    }

    const registerPlayers = () => {
        const player1input = document.getElementById("player1");
        const player2input = document.getElementById("player2");
        const player1value = player1input.value;
        const player2value = player2input.value;
        if (player1value.trim() !== '' && player2value.trim() !== '') {
            const Player1 = createPlayer(player1value, "X")
            const Player2 = createPlayer(player2value, "O")
            playerController.initPlayers(Player1, Player2)
            return true
        }
        alert('Enter both names!') 
        return false;

    }

    const renderBoard = () => {
        const container = document.querySelector(".container")
        container.replaceChildren()  
        for (let i = 0; i < 9; i++) {
            const square = document.createElement('div')
            square.id = `square${i}`
            square.className = 'square'
            container.appendChild(square)
        }
    }

    const resetBoard = () => {
        scoreBoard.fill('')
        const allSquares = document.querySelectorAll(".square")
        allSquares.forEach(square => square.remove())
    }
    
    // update gameboard array, keep private
    const updateScore = (i, player) => {
        scoreBoard[i] = player.mark
        returnScore()
    }

    // check score for winner
    const checkWin = (scoreBoard) => {
        for (let combo of winningScore) {
            const [a, b, c] = combo
            if (scoreBoard[a] && 
                scoreBoard[a] === scoreBoard[b] && 
                scoreBoard[a] === scoreBoard[c]) {
                return scoreBoard[a]
            }
        }
        return null  // No winner
    }

    // return score 
    const returnScore = () => {console.log(scoreBoard)}

    return {
        setupBoard, 
        renderBoard, // remove this later 
        playRound
    }
})()

const playerController = (function () {
    let currentPlayerIndex = 0
    const players = []
    
    const initPlayers = (p1, p2) => {
        players.length = 0 
        players.push(p1, p2)
        currentPlayerIndex = 0
    }
    
    const getCurrentPlayer = () => players[currentPlayerIndex]
    
    const switchTurn = () => {
        currentPlayerIndex = (currentPlayerIndex + 1) % 2
        updateTurnDisplay()
    }
    
    const updateTurnDisplay = () => {
        const display = document.getElementById('turnDisplay')
        if (display) {
            display.textContent = `${getCurrentPlayer().name}'s turn (${getCurrentPlayer().mark})`
        }
    }
    
    const handleSquareClick = () => {
        const allSquares = document.querySelectorAll(".square")
        allSquares.forEach(square => {
            square.addEventListener("click", (e) => {
                const squareInt = parseInt(e.target.id.replace('square', ''))
                const result = gameboard.playRound(squareInt, getCurrentPlayer())
                if (result === true) {  // Successful move
                    switchTurn()
                }
            })
        })
    }
    return {handleSquareClick, initPlayers}
})()


// Setup Game
gameboard.setupBoard();
