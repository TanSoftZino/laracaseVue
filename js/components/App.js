import AppButton from "./AppButton.js";
import Assignments from "./Assignments.js";


export default {
    template:
    `
<assignments></assignments>
<app-button>Submit</app-button>
`,

    components:{
        'app-button': AppButton,
        'assignments': Assignments,
    }
};