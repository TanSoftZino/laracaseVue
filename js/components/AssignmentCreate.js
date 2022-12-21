export default {
    template: `
    <form @submit.prevent="add">

  <div class="bg-color border border-gray-600">

    <input v-model="newAssignment" placeholder="New Assignment..." style="color:red"/>
    <button type="submit" class="p-2 border-l">Add</button>

  </div>

</form>`
,

methods: {
    add() {
        this.assignments.push({
          name: this.newAssignment,
          complete: false,
          id: this.assignments.length+1
        });
        this.newAssignment = '';
      }
},

}