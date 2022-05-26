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
            required: true,
        },
        likes: {
            type: Number,
            required: true,
            default: 0
        },
        id: {
            type: Number,
            required: true,
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
    template: 
    /*html*/
    
    `
    <div class="col-md-4"  v-if="index>0">
        <div class="card  mb-2 card-margin h-100" >
        <img class="card-img-top  img-fluid img-fix" :src="image" alt = "Card image cap" >
            <div class=" card-img-overlay text-white d-flex flex-column justify-content-center">
                <h5 class="card-title pb-4">{{title}}</h5>
                <h6 class="card-subtitle mb-2 ">{{subtitle}}</h6>
                <p class="card-text"><small >{{date}}</small></p>
                <p class="card-text card-likes"> <i class="material-icons ">favorite</i><br>{{likes}}</p>
                <div class="link d-flex">
                    <a href="#" class="card-link text-warning">Read More</a>
                    </div>
            </div>
        
        </div>
    </div>
    <div  v-else>
            <div class="card mb-3 card-margin">
                <div class="row g-0">
                     <div class="col-md-8">
                         <a href="vistaNoticia.html"><img :src="image" class=" img-fluid rounded-start" alt="..."></a>
                     </div>
                     <div class=" col-md-4">
                         <div class="card-body">
                             <h5 class="card-title font">{{title}}</h5>
                        
                             <p class="card-text"><small class="text-muted">{{date}}</small></p>
                             <p> <i class="material-icons">favorite</i>{{likes}}</p>
                         </div>
                     </div>
                </div>
            </div>
    </div>
    `,

    });