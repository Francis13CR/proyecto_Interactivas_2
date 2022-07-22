app.component("user-component", {
  props: {},
  data() {
    return {
      password: "",
      name: "",
      id: "",
      email: "",
      category_1: "",
      category_2: "",
    };
  },
  mounted() {
    this.name = localStorage.getItem("name");
    this.email = localStorage.getItem("email");
    this.id = localStorage.getItem("id");
  },
  methods: {
    submit() {

      var contrasenna = document.getElementById("password").value;
      var formData = new URLSearchParams();
      formData.append("password", contrasenna);
            formData.append("id", localStorage.getItem("id"));
      fetch("http://proyecto_interactivas_2.test/apis/public/api/password", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accesToken"),
        },
        body: formData,
      });
      
    },
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

        <h1 class="mx-3 mb-3 text-center fs-mm ">{{name}}</h1>
        <h3 class='mx-3 mb-3 text-center  '>{{email}}</h2>
        <div class="border-top border-bottom border-dark">
            <h2 class="text-center  fs-m mb-2 mt-3">Configuración</h2>

        </div>
        <div class="mx-2">
            </div>
            <div class="mt-5">
               <form id="changePassword" action="#">
                    <p class="mb-4 tp-serif fs-s">Cambio de Contraseña</p>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" aria-label="label_password" class="form-label mx-1">Nueva
                            Contraseña:  </label>
                        <input type="text" id='password' name="password" :value="password">    
                        <input type="button" class="btn btn-primary mx-1" @click="submit"> Nueva Contraseña
                    </div>
                </form>
           


        </div>
</div>
    `,
});
