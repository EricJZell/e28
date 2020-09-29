// Version 2
// const app = new Vue({
//     el: '#app',
//     data: {
//       item: "",
//       list: []
//     },
//     methods: {
//       addItem: function() {
//         if(!this.item.length){return;}
//         this.list.push(this.item);
//         this.item = "";
//       }
//     }
// });

// Version 3
const app = Vue.createApp({
  data() {
    return {
      item: '',
      list: []
    }
  },
  methods: {
    addItem() {
      if(!this.item.length){return;}
      this.list.push(this.item);
      this.item = "";
    }
  }
}).mount('#app')
