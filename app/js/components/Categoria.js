app.component('news-menu-button',{
    props:{
        name:{
            type: String,
            default: 'default text'
        },
        id: {
            type: Number,
            default: 0
        }
    },
    methods:{
        clickNewsCategory(category){
            console.log("click -> " + category);
            this.$emit('clicknewscategory', category);
        }
    },
    template:
    /*html*/
    
    `
    <div class="form-check">
   <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
   <label class="form-check-label" for="flexCheckDefault" v-model="clickNewsCategory(name)">{{name}}</label>
 </div>
    
    `
    
    
});