import Assignmentlist from "./Assignmentlist.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    data() {
        return {
            assignments: [
                { name: 'Finish project', complete: false, id: 1 },
                { name: 'Read Chapter 4', complete: false, id: 2 },
                { name: 'Turn in Homework', complete: false, id: 3 },
            ],
            newAssignment: '',
        }
    },
    components:{
        'assignment-list': Assignmentlist,
        'assignment-create': AssignmentCreate,
    },
    template: `
<assignment-list :assignments="filters.inProgress" title="In Progress" style="margin:20px auto;"></assignment-list>
<assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
<assignment-create></assignment-create>

`,

// computed: {
//     inProgressAssignments() {
//         return this.assignments.filter(assignment => ! assignment.complete);
//     },

//     completedAssignments() {
//         return this.assignments.filter(assignment => assignment.complete);
//     }
// },

computed: {
    filters() {
        return {
            inProgress: this.assignments.filter(assignment => ! assignment.complete),
            completed: this.assignments.filter(assignment => assignment.complete),
    
        };
    }
},
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