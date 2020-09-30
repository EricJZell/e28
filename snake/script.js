const app = new Vue({
    el: '#app',
    data: {
      snake: { direction: 'left', body: [234]},
      board: new Array(400),
      goal: 125,
      score: 0
    },
    methods: {
      start() {
        Vue.set(this.board, this.goal, 'goal');
        var app = this;
        setInterval(function() {
          app.updateSnake();
        }, 200);
      },
      updateSnake() {
        var delta;
        if (this.snake.direction === 'right') { delta = 1; }
        if (this.snake.direction === 'left') { delta = -1; }
        if (this.snake.direction === 'up') { delta = -20; }
        if (this.snake.direction === 'down') { delta = 20; }
        var newHeadCoordinate = this.snake.body.slice(-1)[0] + delta;
        if (newHeadCoordinate === this.goal) {
          this.score++;
          this.goal = Math.floor(Math.random() * 400);
          Vue.set(this.board, this.goal, 'goal');
          Vue.set(this.board, newHeadCoordinate, 'obstacle');
        } else {
          delete this.board[this.snake.body[0]];
          Vue.set(this.board, newHeadCoordinate, 'snake');
          this.snake.body.shift();
        }
        this.snake.body.push(newHeadCoordinate);;
      }
    }
});
