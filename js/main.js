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
    },
    createTask(){
      this.errorString = '';
      if(this.newMsgString.length < 5){
        this.errorString = 'Your task is too short!';
        this.newMsgString = '';
      }else if(this.tasks.find(task => task.text.toLowerCase() === this.newMsgString.toLowerCase())
      ){
        this.errorString = 'This item is already in your list!'
      }else{
        const newTask = {
          text: this.newMsgString,
          done: false
        }
        this.tasks.unshift(newTask);
        this.newMsgString = '';
      }
    }
  },

  mounted(){
    console.log('montato');
  }
}).mount('#app')