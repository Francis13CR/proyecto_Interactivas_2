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
            default: 'jkhbghdjklnhgdflhgjdfhgufhgjdgmnbjfdhgfdjhgjdsngjkdnb     jkbkfdjsghjfhgdjsghjfhg'
           
        }
    },

  template:
       /*html*/
    `
    
        <div class="row">
          <div class="col-10 ">
             <div class="card-margin ">
                  <div class="row g-0">
                      <div class="justify-content-center ">
                         <h5 class="card-title text-center fw-bold fs-2">{{title}}</h5>
                         <img :src="image" class=" img-fluid  mx-auto" alt="...">
                         <p class="card-text"><small class="text-muted">{{date}}</small></p>
                         <p class="card-text  "> <i class="material-icons ">favorite</i><br>{{likes}}</p>
                         
                         <p class="card-text">{{category}}</p>
                         <p class="card-text">{{description}}</p>
                  
                        </div>
               
                    </div>
                </div>
            </div>
         </div>
    `  
});