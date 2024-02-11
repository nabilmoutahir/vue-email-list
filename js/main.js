const { createApp } = Vue

createApp({
  data() {
    return {
        // array emails
        emails:[

        ],
    }
  },

  methods: {
    
  },

  created() {

    // loop for emails
    for (i = 0; i < 10; i++) {
        // random emails
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {

            console.log(response.data.response);

            const result = response.data.response;

            this.emails.push(result);

        })
    }

    },

    mounted() {
        console.log(this.emails)
    },
    

}).mount('#app')


