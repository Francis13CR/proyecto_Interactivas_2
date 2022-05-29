app.component('card-category',{

    props:{
        // name:{
        //     id: {
        //         type: Number,
        //         default: 0
        //     },
        //     type: String,
        //     default: 'default text'
        // },

    },
    methods:{
        // clickNewsCategory(category){
        //     console.log("click -> " + category);
        //     this.$emit('clicknewscategory', category);
        // }
    },
    template:
    /*html*/
    `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Seleccione una categoria</h5>
          
        </div>
        <div class="modal-body">
        <p class="card-text"><small class="text-muted"></small></p>
        </div>
        <div class="modal-footer">
         
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
    `


})