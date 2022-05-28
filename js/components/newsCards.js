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
            
        }
        },
    template: 
    /*html*/
    
    `
    <div class="col-md-4 mb-3"  v-if="index>0">
        <div class="card mb-5 card-margin h-100 " @click="clickNewsDetails(index)" >
        <img class="card-img-top  img-fluid img-fix pepe" :src="image" alt = "Card image cap" >
            <div class=" card-img-overlay  overlay text-white ">
                <h5 class="card-title pb-4">{{title}}</h5>
                <h6 class="card-subtitle mb-2 ">{{subtitle}}</h6>
                <p class="card-text"><small >{{date}}</small></p>
                <p class="card-text  "> <i class="material-icons ">favorite</i><br>{{likes}}</p>
            </div>
        
        </div>
    </div>
    <div  v-else>
    
            <div class="card mb-3 card-margin">
                <div class="row g-0" @click="clickNewsDetails(index)">
                     <div class="col-md-12">
                        <img :src="image" class=" img-fluid rounded-start" alt="...">
                     </div>
                     <div class="card-img-overlay text-white justify-content-center text-center">
                        <div class="card-body">
                            <h5 class="card-title font fs-1 mb-5">{{title}}</h5>
                            <h6 class="card-subtitle mb-2 fs-3 ">{{subtitle}}</h6>
                             <p class="card-text fs-4"><small>{{date}}</small></p>
                             <p> <i class="material-icons">favorite</i>{{likes}}</p>  
                         </div>
                     </div>
                </div>
            </div>
    </div>
    `,

    });