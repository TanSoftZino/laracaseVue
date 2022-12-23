export default {
    template: `
    <div :class="{
        'bg-grey-700 p-4 border border-grey-600 rounded-lg': true,
        'bg-white border-grey-800 rounded-lg text-black' : theme === 'light',
        'bg-black border-white rounded-lg text-white' : theme === 'dark' 
    }">
       <h2 class="font-bold">
       <slot name="heading" />
       </h2>
       
       <slot/>
       <footer>
  
            <slot name="footer"><span class="p-1 mt-2 bg-blue-100 text-sm text-black">My Footer Goes Here</span></slot>   

        </footer>

    </div>
    `,
    props: {
        hello: String,
        theme: String,
    }
}