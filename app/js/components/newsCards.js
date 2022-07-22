app.component("news-cards", {
  props: {
    title: {
      type: String,
    },
    img: {
      type: String,
    },
    available: {
      type: Boolean,
    },
    created_at: {
      type: String,
      default: "Sin fecha de registro",
    },
    categories_id: {
      type: Number,
    },
    
    id: {
      type: Number,
    },
    index: {
      type: Number,
    },
    subtitle: {
      type: String,
    },
  },
  data() {
    return {
      picture: "",
    };
  },
  methods: {
    clickNewsDetails(id, categories_id) {
      this.$emit("clicknewsdetail", id, categories_id);
    },
  },
  mounted() {


  },
  template:
    /*html*/

    `
    <div class="col-md-4 mb-5"  v-if="index>0">
        <div class="card mb-5 card-margin h-100 " >
            <img class="card-img-top  img-fluid img-fix" :src="img" :alt="title" >
            <div class=" card-img-overlay  overlay text-white text-center ">
                <div class="new-content"  >
                <h5 class="card-title pb-4">{{title}}</h5>
                <h6 class="card-subtitle mb-2 ">{{subtitle}}</h6>
                <p class="card-text"><small >{{created_at}}</small></p>
             
                </div>
                <p class="card-likes">
                    <button type="button" class="btn btn-outline-info btn-sm " @click="clickNewsDetails(id,categories_id)">
                    <i class="fa-solid fa-eye text-white" aria-hidden="true"></i><span class="text-white">Detalles</span>
                       
                    </button>
                </p>
               
            </div>
        
        </div>
    </div>
    <div  v-else>
    
            <div class="card  card-margin">
                <div class="row g-0" >
                     <div class="col-md-12 ">
                        <img :src="img" class=" img-fluid rounded-start" :alt="title">
                     </div>
                     <div class="card-img-overlay text-white justify-content-center text-center">
                        <div class="card-body principal-notice">
                            <div  @click="clickNewsDetails(id,categories_id)">
                                <h5 class="card-title ">{{title}}</h5>
                                <h6 class="card-subtitle">{{subtitle}}</h6>
                                <h6 class="card-text"><small>{{created_at}}</small></h6>
                            </div>
                            
                         </div>
                     </div>
                </div>
            </div>
        </div>
    `,
});
