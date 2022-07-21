app.component('user-Component',{
    props:{
        name:{
            type: String,
            default: 'default text'
        },
        id: {
            type: Number,
            default: 0
        },
        email: {
            type: String,
            default: 'default text'
        },
        category_1: {
            type: String,
            default: 'default text'
        },
        category_2: {
            type: String,
            default: 'default text'
        }
    },
    methods:{
        savePassword(){


        }
    },
    template:
    /*html*/
    
    `
    <div class="perfil mt">

        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle mt-5 mx-auto d-block"
            width="80" height="80" viewBox="0 0 24 24" stroke-width="1" stroke="#11151c" fill="none"
            stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="10" r="3" />
            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
        </svg>

        <h1 class="mx-3 mb-3 text-center fs-mm ">{{name}}}</h1>
        <div class="border-top border-bottom border-dark">
            <h2 class="text-center  fs-m mb-2 mt-3">Configuración</h2>

        </div>
        <div class="mx-2">
            <div class="mt-5 ">
                <p class="mb-4 tp-serif fs-s">Categorias que Sigues</p>
                <div class="row">
                    <div class="d-flex flex-row bd-highlight mb-3">
                        <div class="p-2 bd-highlight">{{category_1}}</div>
                        <div class="p-2 bd-highlight">{{category_2}}</div>

                    </div>
                </div>
            </div>
            <div class="mt-5">
               <form id="changePassword" @submit="password" method="post" action="http://proyecto_interactivas_2.test/app/index.html">
                    <p class="mb-4 tp-serif fs-s">Cambio de Contraseña</p>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" aria-label="label_password" class="form-label">Nueva
                            Contraseña</label>
                            <hr>
                        <input type="text" name="newPassword">    
                        <button class="btn btn-primary mx-1" type="submit" value="send"> Cambiar Contraseña</button>
                    </div>
                </form>
            </div>


        </div>
</div>
    `
    
     
});