export default {
  data(){
    return {
     newAssignment: '',
    }
 },
    template: `
    <form @submit.prevent="add">

  <div class="bg-color border border-gray-600 flex">

    <input v-model="newAssignment" placeholder="New Assignment..." style="color:red"/>
    <button type="submit" class="p-2 border-l">Add</button>

  </div>

</form>`
,

methods: {
    add() {
        this.$emit('add',this.newAssignment);
        this.newAssignment = '';
      }
},

}