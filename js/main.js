const {createApp} = Vue;

createApp({
  data(){
    return{
      title: 'Tasks List',
      errorString: '',
      newMsgString: '',
      tasks: [
        {
          text: 'do the groceries',
          done: false
        },
        {
          text: 'make dentist appointment',
          done: true
        },
        {
          text: 'tidy your room',
          done: false
        }
      ]
    }
  },

  mounted(){
    console.log('montato');
  }
}).mount('#app')