const app = new Vue({
    el: '#app',
    data: {
      boardWidth: 30,
      boardArea: null,
      snake: null,
      board: [],
      goal: null,
      score: 0,
      obstacleCount: 5,
      obstacles: [],
      interval: null,
      scores: [],
      startingCoordinate: 0
    },
    created: function() {
      this.boardArea = this.boardWidth ** 2;
    },
    methods: {
      reset() {
        this.board = new Array(this.boardArea);
        this.score = 0;
        this.snake = { direction: null, body: [this.startingCoordinate] };
        Vue.set(this.board, this.startingCoordinate, 'snake');
        this.obstacles = [];
        for (var i = 0; i < this.obstacleCount; i++) {
          var obstacle = Math.floor(Math.random() * this.boardArea);
          this.obstacles.push(obstacle);
          Vue.set(this.board, obstacle, 'obstacle');
        }
        this.setGoal();
      },
      start() {
        this.reset();
        var app = this;
        this.interval = setInterval(function() {
          app.updateSnake();
        }, 125);
      },
      stop() {
        clearInterval(this.interval);
      },
      setGoal() {
        do {
          this.goal = Math.floor(Math.random() * this.boardArea);
        } while (this.snake.body.includes(this.goal) || this.obstacles.includes(this.goal));
        Vue.set(this.board, this.goal, 'goal');
      },
      processUserInput($event) {
        this.snake.direction = $event.key;
      },
      updateSnake() {
        var delta;
        if (this.snake.direction === 'ArrowRight') { delta = 1; }
        else if (this.snake.direction === 'ArrowLeft') { delta = -1; }
        else if (this.snake.direction === 'ArrowUp') { delta = -this.boardWidth; }
        else if (this.snake.direction === 'ArrowDown') { delta = this.boardWidth; }
        else { return; }
        var newHeadCoordinate = this.snake.body.slice(-1)[0] + delta;
        if (this.obstacles.includes(newHeadCoordinate) || this.snake.body.includes(newHeadCoordinate)) {
          this.stop();
          this.scores.push(this.score);
          alert('game over');
        }
        if (newHeadCoordinate === this.goal) {
          this.score++;
          this.setGoal();
        } else {
          delete this.board[this.snake.body[0]];
          this.snake.body.shift();
        }
        Vue.set(this.board, newHeadCoordinate, 'snake');
        this.snake.body.push(newHeadCoordinate);;
      }
    }
});
