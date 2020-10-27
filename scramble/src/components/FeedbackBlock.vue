<template>
  <div class="feedback"  v-show="guess">
    <span :class="['pad-me', { green: correct, red: !correct }]">
      {{ feedback }}
      <button @click="$emit('reset')" v-show="correct">Play Again</button>
    </span>
  </div>
</template>

<script>
export default {
    // Note how the data property receives a function in a Component
    data() {
        return {
        }
    },
    props: ['guess', 'correct'],
    computed: {
      feedback() {
        return (this.correct ? "yess" : "nooo");
      }
    },
    template: "#feedback-block",
    methods: {
      reset() {
        $emit('reset');
      }
    }
}
</script>

<style>
span.pad-me {
  padding: 10px;
}

.green {
  background-color: green;
}

.red {
  background-color: red;
}

.feedback {
  margin-top: 30px;
  color: white;
}
</style>
