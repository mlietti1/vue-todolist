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

  methods:{
    deleteTask(index){
      this.errorString = '';
      if (this.tasks[index].done){
        this.tasks.splice(index, 1);
      }else{
        this.errorString = 'You cannot remove a task if it is not completed!';
      }
    }
  },

  mounted(){
    console.log('montato');
  }
}).mount('#app')