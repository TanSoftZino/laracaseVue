import Assignment from "./Assignment.js"
import AssignmentTags from "./AssignmentTags.js";
import panel from "./panel.js";

export default {
    components:{
        'assignment': Assignment,
        'assignment-tag': AssignmentTags,
        'panel': panel,
    },
    template: `
    
    <panel v-show="visible && assignments.length" class="w-70">
    <div class="flex justify-between">
    <h2 class="font-bold mb-2">{{ title }} <span> ({{assignments.length}}) </span></h2>
    
    <buttons v-show="toggable" @click="visible = false">&times</button>
    </div>
    <assignment-tag :initTag="assignments.map(a=>a.tag)" 
    :current-tag = "currentTag"
    @change = "currentTag = $event">
    
    </assignment-tag>

    <ul class="border border-gray-600 divide-y mt-4">
     <assignment v-for="assignment in filteredAssignments" :key="assignment.id"  :assignment="assignment"></assignment>
    </ul>
    <slot></slot>

    <template #footer>

    </template>

</panel>
    `,
    props: {
        assignments: Array,
        title: String,
        toggable:{type: Boolean, default:false}
    },
    data() {
      return {
        currentTag: 'all',
        visible: true,
      }
    },
    
    computed: {
        filteredAssignments()
        {
            if(this.currentTag == 'all') {
                return this.assignments;
            }
            return this.assignments.filter(a=> a.tag === this.currentTag);
        },
        
    },
}