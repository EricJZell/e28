const app = new Vue({
    el: '#app',
    data: {
      boxes: [
        'unplayed', 'unplayed', 'unplayed',
        'unplayed', 'unplayed', 'unplayed',
        'unplayed', 'unplayed', 'unplayed'
      ],
      winningCombos: [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ],
      turn: 'player',
      winner: ''
    },
    methods: {
      playerPick(index, $event) {
        if (this.turn === 'computer' || this.boxes[index] !== 'unplayed') {
          return;
        }
        this.boxes[index] = 'player'
        this.checkWinner('player');
        this.turn = 'computer';
      },
      computerPick() {
        var unplayed = []
        for (var i = 0; i < 9; i++) {
          if (this.boxes[i] === 'unplayed') {
            unplayed.push(i);
          }
        }
        var randomIndex = Math.floor(Math.random() * unplayed.length);
        this.boxes[unplayed[randomIndex]] = 'computer';
        this.checkWinner('computer');
        this.turn = 'player';
      },
      checkWinner(player) {
        for (var combo of this.winningCombos) {
          if (
            this.boxes[combo[0]] === player &&
            this.boxes[combo[1]] === player &&
            this.boxes[combo[2]] === player
          ) {
            this.winner = player
            return true;
          }
        }
      },
      gameOver() {
        return !!this.winner || (this.boxes.indexOf('unplayed') === -1)
      }
    }
});
