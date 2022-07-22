app.component('related', {
    props:{
        title: {
            type: String
        },
        img: {
            type: String
        },
        available: {
            type: Boolean
        },
        created_at: {
            type: String,
            default: 'Sin fecha de registro'
        },
        categories_id:{
            type:Number
        },
        name: {
            type: String
        },
        id: {
            type: Number,
          
        },
        index: {
            type: Number,
           
        },
        subtitle: {
            type: String
        },
        
    },
    data() {
        return {
            picture:""
        }
    },
    methods:{
        clickNewsDetails(id,categories_id){
            this.$emit('clicknewsdetail', id,categories_id);
        },
       
    },
    mounted() {
        this.picture="http://apis.test/storage/imgs/"+this.img;
        
     
    },
    template: 
    /*html*/
    
    `
    
    <div class="col-md-4 mb-5">
    
        <div class="card mb-5 card-margin h-100 " >
        <img class="card-img-top  img-fluid img-fix" :src="picture" :alt="title" >
            <div class=" card-img-overlay  overlay text-white text-center ">
                <div class="new-content"  >
                <h5 class="card-title pb-4">{{title}}</h5>
                <h6 class="card-subtitle mb-2 ">{{subtitle}}</h6>
                <p class="card-text"><small >{{created_at}}</small></p>
               
                </div>
                <p class="card-likes">
                    <button type="button" class="btn btn-outline-info btn-sm " @click="clickNewsDetails(id,categories_id)">
                    <i class="fa-solid fa-eye text-white" aria-hidden="true"></i><span class="text-white">Detalles</span>
                       
                        </button>
                </p>
                 
            </div>
        
        </div>
    </div>

    `,

    });