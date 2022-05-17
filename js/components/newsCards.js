app.component('news-cards', {
    props:{
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        available: {
            type: Boolean,
            required: true,
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
        }
    },
    template: `
    <div class="card  mb-2 card-margin h-100" >
       <img class="card-img-top  img-fluid img-fix" :src="image" alt = "Card image cap" >
        <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
            <hr>
            <p class="card-text">{{description}}</p>
            <p class="card-text"><small class="text-muted">{{date}}</small></p>
            <p class="card-text card-likes"> <i class="material-icons ">favorite</i><br>{{likes}}</p>
        </div>
       
    </div>
    `,

    });