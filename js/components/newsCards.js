app.component('news-cards', {
    props:{
        title: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        available: {
            type: Boolean,
            
        },
        date: {
            type: String,
            required: true,
            default: 'Sin fecha de registro'
        },
        category: {
            type: String,
        },
        likes: {
            type: Number,
            required: true,
            default: 0
        },
        id: {
            type: Number,
            default: 0
        },
        index: {
            type: Number,
            required: true,
            default: 0
        },
        subtitle: {
            type: String,
        }
    },
    methods:{
        clickNewsDetails(index){
            this.$emit('clicknewsdetail', index);
        },
        //boton de likes para cada noticia
        clickLike(index){
            
            //aumentar el numero de likes
            this.$emit('clicklike', this.index);
        }
    },
    template: 
    /*html*/
    
    `
    <div class="col-md-4 mb-3"  v-if="index>0">
        <div class="card mb-5 card-margin h-100 " >
        <img class="card-img-top  img-fluid img-fix" :src="image" :alt = "title" >
            <div class=" card-img-overlay  overlay text-white text-center ">
                <div class="new-content"  >
                <h5 class="card-title pb-4">{{title}}</h5>
                <h6 class="card-subtitle mb-2 ">{{subtitle}}</h6>
                <p class="card-text"><small >{{date}}</small></p>
                <p class="icon_like"><i class="fa-regular fa-thumbs-up " aria-hidden="true"></i>{{likes}}</p>
                </div>
                <p class="card-likes">
                    <button type="button" class="btn btn-outline-info btn-sm " @click="clickNewsDetails(index)">
                    <i class="fa-solid fa-eye text-white" aria-hidden="true"></i><span class="text-white">Detalles</span>
                       
                        </button>
                </p>
                <p class="mt-1 card-likes ">
                    <button type="button" class="btn btn-outline-primary btn-sm" @click="clickLike(index)">
                        <i :id="index" class="fa-regular fa-thumbs-up text-white" aria-hidden="true"></i><span class="text-white">{{likes}}</span>
                    </button>
                </p>  
            </div>
        
        </div>
    </div>
    <div  v-else>
    
            <div class="card  card-margin">
                <div class="row g-0" >
                     <div class="col-md-12 ">
                        <img :src="image" class=" img-fluid rounded-start" :alt="title">
                     </div>
                     <div class="card-img-overlay text-white justify-content-center text-center">
                        <div class="card-body principal-notice">
                            <div  @click="clickNewsDetails(index)">
                                <h5 class="card-title ">{{title}}</h5>
                                <h6 class="card-subtitle">{{subtitle}}</h6>
                                <p class="card-text"><small>{{date}}</small></p>
                            </div>
                            <p>
                              <button type="button" class="btn btn-outline-primary btn-sm" @click="clickLike(index)">
                                <i :id="index" class="fa-regular fa-thumbs-up " aria-hidden="true"></i>{{likes}}
                              </button>
                            </p>  
                         </div>
                     </div>
                </div>
            </div>
    </div>
    `,

    });