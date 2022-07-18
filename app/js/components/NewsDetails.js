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
                            <button class="btn btn-primary mt-5 p-1 btn-sm " @click="close(1)"><i class="material-icons ">arrow_back</i></button>
                            <h5 class="card-title mx-5 tp-serif fs-2 ">{{title}}</h5>
                            <img :src="image" class="mt-2 img-fluid  img-details  d-block mx-5 shadow" alt="...">
                            <p class="card-text  mx-5"><small class="text-muted">{{date}}</small></p>
                            <p class="card-text  mx-5 mb-5">{{description}}</p>
                        </div>
               
                    </div>
                </div>
            </div>    
        </div>
    `
});