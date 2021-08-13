class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
  }

  createBoard() {
    this.ctx.clearRect(0, 0,1200,800);
  }

  drawLines() {
    this.ctx.beginPath()
      this.ctx.arc(100,50,30,0,100,false)
      this.ctx.stroke()
  }

  writeCorrectLetter(index) {
    // not sure
  }

  writeWrongLetter(letter, errorsLeft) {
    // not sure
  }

  drawHangman(errorsLeft) {
    // not sure
  }

  gameOver() {
    // not sure
  }

  winner() {
    // not sure
  }
}
