import AppButton from "./AppButton.js";
import Assignments from "./Assignments.js";
import panel from "./panel.js";

export default {
    template:
    `
<div class="grid gap-2">

    <assignments></assignments>
    <app-button>Submit</app-button>
    <panel> 
      <template v-slot:heading> 
        Hello World 
      </template>

      random body
    </panel>
    <panel> 

      random body
    </panel>
   <panel>
    <template v-slot:footer>
      
    </template>
    </panel>

    <panel theme="dark"> 
      <template v-slot:heading> 
        Hello World 
      </template>

      random body
    </panel>

    <panel theme="light"> 
      <template v-slot:heading> 
        Hello World 
      </template>

      random body
    </panel>
    
</div>
`,

    components:{
        'app-button': AppButton,
        'assignments': Assignments,
        'panel' : panel,
    }
};