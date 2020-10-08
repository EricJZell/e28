const app = new Vue({
    el: '#app',
    data: {
      name: '',
      word: '',
      hint: '',
      words: [
        ['apple', 'Sometimes red, sometimes delicious'],
        ['washington', 'Rushmore’s left edge'],
        ['pumpkin', 'Halloween’s favorite fruit'],
        ['football', 'Play with your hands or feet, depending on your location']
      ],
      guessing: false,
      guess: '',
      newGuess: '',
    },
    mounted: function() {
      this.chooseWord();
    },
    methods: {
      begin() {
        this.guessing = true;
      },
      reset() {
        this.name = '';
        this.guessing = false;
        this.guess = '';
        this.newGuess = '';
        this.chooseWord();
      },
      chooseWord() {
        var oldWord = this.word;
        var newIndex;
        do {
          newIndex = Math.floor(Math.random() * this.words.length);
          this.word = this.words[newIndex][0];
        } while (this.word === oldWord);
        this.hint = this.words[newIndex][1];
      },
      submitGuess() {
        this.guess = this.newGuess.toLowerCase();
      }
    },
    computed: {
      scrambled() {
        return this.word.split('').sort(() => {return 0.5-Math.random()}).join('');
      },
      correct() {
        return (this.word === this.guess);
      },
      feedback() {
        if (this.correct) {
          return "YEss";
        } else {
          return "NOO";
        }
      }
    }
});
