const app = new Vue({
    el: '#app',
    data: {
      boxes: 10000,
      snake: {
        body: [5000],
        direction: "left"
      },
      goal: 1234
    },
    computed: {
      setClass() {
        // from https://stackoverflow.com/questions/4228356/integer-division-with-remainder-in-javascript
        // var row = Math.floor(index / this.rows);
        // var column = index % this.columns;
        debugger;
        return "snake";
        // if (this.snake.body.includes(index)) {
        //   return "snake";
        // } else if (index === this.goal) {
        //   return "goal";
        // }
      }
    },
    methods: {
      start: function() {
        setInterval(function() {
          console.log("Hello world");
          this.goal++;
        }, 1000)
      }
    }
});
