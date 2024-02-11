const { createApp } = Vue

createApp({
  data() {
    return {
        
    }
  },

  methods: {
    
  },

  created() {
    
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {

            console.log(response.data.response)

        })
    },

}).mount('#app')


