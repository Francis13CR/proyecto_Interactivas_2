app.component('news-details',{
    props:{
        title:{
            type: String,
            default: 'default text'
        },
        category:{
            type: String,
            default: 'default text'
        },
        likes: {
            type: Number,
            required: true,
            default: 0
        },
        image:{
            type: String,
            default: '../imgs/imgspruebas/default-image.webp'
        },
        date:{
            type: String,
            default: 'default text'
        },
        description:{
            type: String,
            default: 'lorem ipsum default text '
           
        }
    },
    methods:{
        close(i){
            this.$emit('closnotice', i);
        }
    },
  template:
       /*html*/
    `
    
        <div class="row">
          <div class="col-10 ">
             <div class="card-margin ">
                  <div class="row g-0">
                        
                      <div class="justify-content-center text-white ">
                      <button class="btn btn-primary p-1 btn-sm " @click="close(1)"><i class="material-icons ">arrow_back</i></button>
                         <h5 class="card-title text-center fw-bold fs-2 ">{{title}}</h5>
                         <img :src="image" class="mt-2 img-fluid img-details  mx-auto shadow" alt="...">
                         <p class="card-text"><small class="text-muted">{{date}}</small></p>
                         <p class="card-text">{{category}}</p>
                         <p class="card-text">{{description}}</p>
                        <p class="card-text  "> <i class="material-icons ">favorite</i>{{likes}}</p>
                         <button class="btn btn-secondary p-1 btn-sm " @click="close(1)">Cerrar</button>
                        </div>
               
                    </div>
                </div>
            </div>
         </div>
    `  
});