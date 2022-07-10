const name = 'John';

const app = Vue.createApp({
  // template: `
  //   <h1>Hola Mundo</h1>
  //   <p>{{1+1}}</p>
  //   <p>{{message}}</p>
  // `,
  // methods: {},
  // watch: {},
  data() {
    return {
      quote: 'Soy batman',
      author: 'Bruce Wayne',
    };
  },
  methods: {
    changeQuote() {
      this.author = 'Kevin Echeverri';
      this.capitalize();
    },
    capitalize() {
      this.quote = this.quote.toUpperCase();
    }
  }
});

app.mount('#myApp'); 