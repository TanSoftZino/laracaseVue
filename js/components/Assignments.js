import Assignmentlist from "./Assignmentlist.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    data() {
        return {
            assignments: [],
            newAssignment: ''
        }
    },
    components:{
        'assignment-list': Assignmentlist,
        'assignment-create': AssignmentCreate,
    },
    template: `
    <section class="flex gap-8 mt-6">
<assignment-list :assignments="filters.inProgress" title="In Progress"> <assignment-create @add="add"></assignment-create></assignment-list>
<assignment-list :assignments="filters.completed" title="Completed" toggable></assignment-list>


</section>

`,

computed: {
    filters() {
        return {
            inProgress: this.assignments.filter(assignment => !assignment.complete),
            completed: this.assignments.filter(assignment => assignment.complete),
    
        };
    }
},

created() {
    fetch('http://localhost:2001/assignments')
    .then(response => response.json())
    .then(data => {
        this.assignments = data;
    });
},


methods: {
    add(name) {
      this.assignments.push({
        name: name,
        complete: false,
        id: this.assignments.length+1
      });
      this.newAssignment = '';
    }
},

}