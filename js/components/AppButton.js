export default{
    template: `
          <div>what's up?</div>
          <button 
          :class= "{
            'bg-grey-200 hover:bg-gray-400 border rounded px-5 py-2 disabled:cursor-not-allowed': true,
            'bg-blue-200 hover:bg-blue-400': type === 'primary',
            'bg-grey-200 hover:bg-gray-400': type === 'secondary',
            'is-loading': processing
          }"
             :disabled="processing" @click="toggleButtonDisable"> 
          
          <slot/> 
          
          </button>
          `,
    mounted() {
       // alert('hello');
    },
    data() {
        return {
            processing: false,
        }
    },
    props:{
        type: {
         type: String,
         default: 'primary' 
        },

     },
    methods: {
         toggleButtonDisable() {
             this.processing = ! this.processing;
         }
    },
    
}