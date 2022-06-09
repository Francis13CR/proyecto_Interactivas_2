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
        },
        id: {
            type: Number,
            default: 0
        },
        subtitle: {
            type: String,
            default: 'default text'
        },
        all_news: {
            type: Array
        },
    },
    methods: {
        close(i) {
            this.$emit('closnotice', i);
        },
        clickLike(id) {
            //aumentar el numero de likes
            this.$emit('clicklike', id);
        },
        clickNewsDetails(id) {
            this.$emit('clicknewsdetail', id);
        },
           
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
                            <p class="card-text text-center">
                                <button type="button" class="btn btn-outline-primary btn-sm" @click="clickLike(id)">
                                        <i :id="id" class="fa-regular fa-thumbs-up" aria-hidden="true"></i><span class="">{{likes}}</span>
                                </button>
                            </p>
                            <p class="card-text text-center mb-5">{{description}}</p>
                        </div>
               
                    </div>
                </div>
            </div>

            <h5 class="card-text  border-dark border-top text-center fs-2">Noticias similares</h5>
            <div class="row">
                <div  v-for="(n,i) in all_news" class="col-md-4">
                    <div class="card mb-5 card-margin h-75">
                        <img class="card-img-top  img-fluid img-fix" :src="n.image" :alt = "n.title" >
                        <div class=" card-img-overlay  overlay text-white text-center ">
                            <div class="similar-content "  >
                                <h5 class="card-title pb-1 ">{{n.title}}</h5>
                                <h6 class="card-subtitle mb-1 ">{{n.subtitle}}</h6>
                                <p class="card-text"><small >{{n.date}}</small></p>
                                <p class="icon_like"><i class="fa-regular fa-thumbs-up " aria-hidden="true"></i>{{n.likes}}</p>
                            </div>
                            <p class="card-likes">
                                <button type="button" class="btn btn-outline-info btn-sm " @click="clickNewsDetails(n.id)">
                                <i class="fa-solid fa-eye text-white" aria-hidden="true"></i><span class="text-white">Detalles</span>
                                </button>
                            </p>
                            <p class="mt-1 card-likes ">
                                <button type="button" class="btn btn-outline-primary btn-sm" @click="clickLike(n.id)">
                                    <i :id="n.id" class="fa-regular fa-thumbs-up text-white" aria-hidden="true"></i><span class="text-white">{{n.likes}}</span>
                                </button>
                            </p>  
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    `
});