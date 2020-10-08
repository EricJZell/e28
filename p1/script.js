const app = new Vue({
    el: '#app',
    data: {
      boxes: [],
      winningCombos: [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ],
      turn: '',
      result: '',
      history: [],
      record: { wins: 0, losses: 0, ties: 0 }
    },
    mounted: function() {
      this.reset();
    },
    watch: {
      boxes() {
        if (this.checkWinner('player')) {
          this.result = "You won!";
          this.record.wins++;
        } else if (this.checkWinner('computer')) {
          this.result =  "The computer won.";
          this.record.losses++;
        } else if (this.checkForTie()) {
          this.result = "The game has ended in a tie";
          this.record.ties++;
        }
        if (this.result) {
          this.history.push(this.result);
        }
      }
    },
    methods: {
      reset() {
        this.result = '';
        this.boxes = [
          'unplayed', 'unplayed', 'unplayed',
          'unplayed', 'unplayed', 'unplayed',
          'unplayed', 'unplayed', 'unplayed'
        ];
        this.turn = (this.history.length % 2 === 0 ? 'computer' : 'player');
      },
      playerPick(index, $event) {
        if (this.result || this.turn === 'computer' || this.boxes[index] !== 'unplayed') {
          return;
        }
        Vue.set(this.boxes, index, 'player');
        this.turn = 'computer';
      },
      computerPick() {
        if (!this.smartPick()) {
          this.pickRandom();
        }
        this.turn = 'player';
      },
      smartPick() {
        for (var p of ['computer', 'player']) {
          for (var combo of this.winningCombos) {
            var pCount = 0;
            var unplayedIndex = null;
            for (var i of combo) {
              if (this.boxes[i] === 'unplayed') {
                unplayedIndex = i;
              } else if (this.boxes[i] === p) {
                pCount++;
              }
            }
            if ((unplayedIndex || unplayedIndex === 0) && (pCount === 2)) {
              Vue.set(this.boxes, unplayedIndex, 'computer');
              return true;
            }
          }
        }
        return false;
      },
      pickRandom() {
        var unplayed = []
        for (var i = 0; i < 9; i++) {
          if (this.boxes[i] === 'unplayed') {
            unplayed.push(i);
          }
        }
        var randomIndex = Math.floor(Math.random() * unplayed.length);
        Vue.set(this.boxes, unplayed[randomIndex], 'computer');
      },
      checkWinner(player) {
        for (var combo of this.winningCombos) {
          if (
            this.boxes[combo[0]] === player &&
            this.boxes[combo[1]] === player &&
            this.boxes[combo[2]] === player
          ) { return true; }
        }
      },
      checkForTie() {
        return (this.boxes.indexOf('unplayed') === -1);
      }
    }
});
