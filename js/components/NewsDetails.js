app.component('news-details', {
    props: {
        title: {
            type: String,
            default: 'default text'
        },
        category: {
            type: String,
            default: 'default text'
        },
        likes: {
            type: Number,
            required: true,
            default: 0
        },
        image: {
            type: String,
            default: '../imgs/imgspruebas/default-image.webp'
        },
        date: {
            type: String,
            default: 'default text'
        },
        description: {
            type: String,
            default: 'lorem ipsum default text '

        }
    },
    methods: {
        close(i) {
            this.$emit('closnotice', i);
        }
    },
    template:
    /*html*/
        `
        <div class="  ">
          <div class="col-12">
             <div class="mt-5 ">
                  <div class="row g-0">
                        
                      <div class="justify-content-center">
                      <button class="btn btn-primary mt-4 p-1 btn-sm " @click="close(1)"><i class="material-icons ">arrow_back</i></button>
                         <h5 class="card-title text-center tp-serif fs-2 ">{{title}}</h5>
                         <img :src="image" class="mt-2 img-fluid img-details mx-auto d-block mx-5 shadow" alt="...">
                         <p class="card-text text-center"><small class="text-muted">{{date}}</small></p>
                         <p class="card-text text-center  "> <i class="material-icons ">favorite</i>{{likes}}</p>
                         <p class="card-text text-center mb-5">{{description}}</p>
                        
                        </div>
               
                    </div>
                </div>
            </div>

            <p class="card-text mt-5 border-top border-dark text-center fs-2">Noticias similares</p>
            <div class="col-md-4 mb-3">
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
    
         </div>
      


         
    `
});