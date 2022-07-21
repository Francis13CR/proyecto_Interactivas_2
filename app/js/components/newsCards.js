app.component('news-cards', {
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
        clickNewsDetails(id){
            this.$emit('clicknewsdetail', id);
        },
       
    },
    mounted() {
        this.picture="http://apis.test/storage/imgs/"+this.img;
        console.log(this.picture);
    },
    template: 
    /*html*/
    
    `
    <div class="col-md-4 mb-5"  v-if="index>0">
        <div class="card mb-5 card-margin h-100 " >
        <img class="card-img-top  img-fluid img-fix" :src="picture" :alt="title" >
            <div class=" card-img-overlay  overlay text-white text-center ">
                <div class="new-content"  >
                <h5 class="card-title pb-4">{{title}}</h5>
                <h6 class="card-subtitle mb-2 ">{{subtitle}}</h6>
                <p class="card-text"><small >{{created_at}}</small></p>
                <p class="icon_like"><i class="fa-regular fa-thumbs-up " aria-hidden="true"></i>{{}}</p>
                </div>
                <p class="card-likes">
                    <button type="button" class="btn btn-outline-info btn-sm " @click="clickNewsDetails(id)">
                    <i class="fa-solid fa-eye text-white" aria-hidden="true"></i><span class="text-white">Detalles</span>
                       
                        </button>
                </p>
                <p class="mt-1 card-likes ">
                    <button type="button" class="btn btn-outline-primary btn-sm" @click="clickLike(id)">
                        <i :id="id" class="fa-regular fa-thumbs-up text-white" aria-hidden="true"></i><span class="text-white">{{}}</span>
                    </button>
                </p>  
            </div>
        
        </div>
    </div>
    <div  v-else>
    
            <div class="card  card-margin">
                <div class="row g-0" >
                     <div class="col-md-12 ">
                        <img :src="picture" class=" img-fluid rounded-start" :alt="title">
                     </div>
                     <div class="card-img-overlay text-white justify-content-center text-center">
                        <div class="card-body principal-notice">
                            <div  @click="clickNewsDetails(id)">
                                <h5 class="card-title ">{{title}}</h5>
                                <h6 class="card-subtitle">{{subtitle}}</h6>
                                <h6 class="card-text"><small>{{created_at}}</small></h6>
                            </div>
                            <p>
                              <button type="button" class="btn btn-outline-primary btn-sm" @click="clickLike(id)">
                                <i :id="id" class="fa-regular fa-thumbs-up " aria-hidden="true"></i>{{}}
                              </button>
                            </p>  
                         </div>
                     </div>
                </div>
            </div>
        </div>
    `,

    });