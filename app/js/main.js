const app = Vue.createApp({
    data() {
        return {
            news: [{
                    id: 1,
                    title: 'Se espera que las ventas de la ps5 lleguen a los 10 millones de dólares',
                    subtitle: 'Hola soy un subtitulo de la noticia',
                    description: 'El equipo de Sony ha confirmado que las ventas de la consola PlayStation 5 llegarán a los 10 millones de dólares, según la compañía.',
                    image: './imgs/imgspruebas/ps4.png',
                    available: true,
                    date: ' May 5, 2022, 9:05am EDT',
                    category: 'Juegos',
                    likes: 90
                },
                {
                    id: 2,
                    title: 'El actor Charlie Cox se confirma que seguirá  interpretando a daredevil',
                    subtitle: 'Hola soy un subtitulo de la noticia',
                    description: 'Despues de participar en la serie de netflix y en la ultima pelicula de spiderman, el actor Charlie Cox se confirma que seguirá  interpretando a daredevil, según la compañía.',
                    image: './imgs/imgspruebas/daredevil.jpg',
                    available: true,
                    date: 'May 4, 2022, 11:10am EDT',
                    category: 'Peliculas',
                    likes: 91
                },
                {
                    id: 3,
                    title: 'El anime spy x family se estrena en japón',
                    subtitle: 'Hola soy un subtitulo de la noticia',
                    description: 'Hay una nueva serie de anime en japón, el anime spy x family, se estrena en japón el dia 5 de mayo. Se trata de una serie de accion basada en el manga spy x family.',
                    image: './imgs/imgspruebas/spyxfamily.jpg',
                    available: true,
                    date: 'May 3, 2022, 1:20pm EDT',
                    category: 'Anime',
                    likes: 70
                },
                {
                    id: 4,
                    title: 'XBOX, la consola mas potente del mundo',
                    subtitle: 'Hola soy un subtitulo de la noticia',
                    description: 'Segun un nuevo estudio, la consola Xbox One X es la mas potente del mundo, y se espera que llegue a los 10 millones de dólares.',
                    image: './imgs/imgspruebas/xbox.jpg',
                    available: true,
                    date: 'Mar 31, 2022, 12:55pm EDT',
                    category: 'Juegos',
                    likes: 60
                },
                {
                    id: 5,
                    title: 'Moonknight, una pelicula prometedora',
                    subtitle: 'Hola soy un subtitulo de la noticia',
                    description: 'La nueva pelicula Moonknight, se estrena el dia 5 de mayo, y se trata de una serie de accion basada en los comics de marvel',
                    image: './imgs/imgspruebas/moon.jpg',
                    available: true,
                    date: 'JUN 06, 2022, 12:55pm EDT',
                    category: 'Peliculas',
                    likes: 40
                },
                {
                    id: 6,
                    title: 'El anime JOJOs Bizarre Adventure se estrena en japón',
                    subtitle: 'Hola soy un subtitulo de la noticia',
                    description: 'Hay una nueva serie de anime en japón, el anime JOJOs Bizarre Adventure, se estrena en japón el dia 5 de mayo. Se trata de una serie de accion basada en el legendario manga JOJOs Bizarre Adventure publicado hace 35 años.',
                    image: './imgs/imgspruebas/jojos.jpg',
                    available: true,
                    date: 'JUN 05, 2022, 12:55pm EDT',
                    category: 'Anime',
                    likes: 20
                },
              
                {
                    id: 7,
                    title: 'La temporada 4 de "Stranger Things" rompe varios récords de Netflix',
                    subtitle: 'Hola soy un subtitulo de la noticia',
                    description: 'La más reciente temporada de la aclamada serie debutó este fin de semana con cifras récord: es el estreno más visto de un programa en inglés de Netflix.',
                    image: './imgs/imgspruebas/strangerThings.jpg',
                    available: true,
                    date: '17:33 ET(21:33 GMT) 31 mayo, 2022',
                    category: 'Series',
                    likes: 50
                },
              
            ],
            show_notice_details:false,
            selectedItem:0,
            all_news: [],
            recomend_news: [],
            search: '',
            categories: [
                {
                    id: 1,
                    name: 'Juegos'
                },
                {
                    id: 2,
                    name: 'Anime'
                },
                {
                    id: 3,
                    name: 'Peliculas'
                },
                {
                    id: 4,
                    name: 'Series'
                },
                {
                    id: 5,
                    name: 'Todas'
                }
            ],
            user: {
                name: '',
                email: '',
                password: '',
                confirm_password: ''
            },
            //variable para saber si esta logueado o no
            isLogged: false,
            userLogged: {
                name: '',
                email: '',
                id: ''
            },
        }
    },
    methods: {
        showIndex(id){
            //seleccionar el index del item
            let index = this.all_news.findIndex(item => item.id == id);
            this.selectedItem=index;
            this.show_notice_details=true;
            //tomar la cateogria del selectedItem
            this.news = this.all_news;
            let category = this.news[this.selectedItem].category;
            let filterNews = this.news.filter(function (news) {
                return news.category === category && news.id != id;
            });
            this.recomend_news = filterNews;
            //mover el scroll hacia arriba
             setTimeout(function () {
                 window.scrollTo(0, 0);
             }, 2);
             document.getElementById('app').scrollIntoView({
                behavior: 'smooth'
            });
            
      
        },
        home(i){
            this.news = this.all_news;
            //obtener el url de donde nos encotramos
            let url = window.location.href;
           //si es diferente a index.html
            if(url.indexOf('index.html')==-1){
                //redireccionar a index.html
                window.location.href = 'index.html';
            }else{
                if(i==1){
                    this.show_notice_details=false;
                }
            }
        },
        likeCard(id){
            //obtener el indice del item seleccionado
            let index = this.news.findIndex(item => item.id == id);
            //verificar si la noticia ya fue dada like
            if(document.getElementById(id).classList.contains('fa')){
               //le quito el like
                this.news[index].likes--;
                document.getElementById(id).classList.remove('fa');
                document.getElementById(id).classList.add('fa-regular');
            }else{
                this.news[index].likes++;
                //eliminar la clase del boton
                document.getElementById(id).classList.remove('fa-regular');
                // agregar la clase del boton
                document.getElementById(id).classList.add('fa');
            }
        },
        showNoticeByCategory(category) {
            this.show_notice_details = false;
            if (category == 'Todas') {
                this.news = this.all_news;
            } else {
                this.news = this.all_news;
                let filterNews = this.news.filter(function (news) {
                    return news.category === category;
                })
                if(filterNews.length>0){
                    this.news = filterNews;
                }else{
                    this.news = [
                        {
                            id: 999,
                            title: 'No hay noticias para esta categoria',
                            subtitle: 'Nuevas noticias estaran disponibles pronto',
                            description: 'Las noticias de esta categoria estaran disponibles pronto',
                            image: './imgs/imgspruebas/dino.jpg',
                            available: true,
                            date: ' May 5, 2022, 9:05am EDT',
                            category: '',
                            likes: 0
                        }
                    ]
                }
            }
            this.selectedItem = 0;
        },
        ordenarNoticias(tipo){
            //ordenar por likes
            if(tipo=='likes'){
               this.news.sort(function (a, b) {
                   return b.likes - a.likes;
               });
            }
        },
        search_notice(){
            //buscar las noticias que coincidan con la busqueda ya sea por titulo o descripcion
            var filter = [];
            for(let i=0;i<this.all_news.length;i++){
                if(this.all_news[i].title.toLowerCase().indexOf(this.search.toLowerCase())>-1 || this.all_news[i].description.toLowerCase().indexOf(this.search.toLowerCase())>-1){
                    filter.push(this.all_news[i]);
                }
            }
            if(filter.length>0){
                this.show_notice_details = false;
                this.news = filter;
            }else{
                this.news = [
                    {
                        id: 999,
                        title: 'No hay noticias que coincidan con tu busqueda',
                        subtitle: 'Nuevas noticias estaran disponibles pronto',
                        description: 'Las noticias que coincidan con tu busqueda estaran disponibles pronto',
                        image: './imgs/imgspruebas/dino.jpg',
                        available: true,
                        date: ' May 5, 2022, 9:05am EDT',
                        category: '',
                        likes: 0
                    }
                ]
            }
            
        },
        login(e){
            e.preventDefault();
            let formData = new FormData();
            formData.append('email', document.getElementById('email_login').value);
            formData.append('password', document.getElementById('password_login').value);
            fetch('http://apis.test/api/login', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if(data.status == 'error'){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: data.message,
                    })
                }
                if(data.status == 'success'){
                    var name_user = data.user.name;
                    var email_user = data.user.email;
                    var id = data.user.id;
                    //ingresarlo a ala base de datos local
                     localStorage.setItem('isLogged', true);
                     localStorage.setItem('name', name_user);
                     localStorage.setItem('email', email_user);
                     localStorage.setItem('id', id);;
                    Swal.fire({
                        icon: 'success',
                        title: 'Inicio de sesion exitoso',
                        text: data.message,
                        timer: 4000,
                        timerProgressBar: true,
                        didOpen: () => {
                            Swal.showLoading()
                        },
                    }).then(() => {
                            window.location.href = 'index.html';
                    });
                }
            })
        },
        register(e){
            e.preventDefault();
            if(this.user.password != this.user.confirm_password){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Las contraseñas no coinciden',
                });
                return;
            }
            let formData = new FormData();  
            formData.append('name', this.user.name);
            formData.append('email', this.user.email);
            formData.append('password', this.user.password);
            //enviar los datos al servidor
            fetch('http://apis.test/api/register', {
                method: 'post',
                body: formData
            }).then(response => {
                return response.json();
            }).then(data => {
                if(data.status == "error"){
                    for (const key in data.errors) {
                        for (const error of data.errors[key]) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: error,
                            });
                        }
                    }
                }else if(data.status == "success"){
                    this.isLogged = true;
                    var name_user = data.data.name;
                    var email_user = data.data.email;
                    var id = data.data.id;
                    localStorage.setItem('isLogged', true);
                    localStorage.setItem('name', name_user);
                    localStorage.setItem('email', email_user);
                    localStorage.setItem('id', id);
                    Swal.fire({
                        icon: 'success',
                        title: 'Bienvenido',
                        text: 'Te has registrado correctamente',
                        timer: 3000,
                        timerProgressBar: true,
                       didOpen: () => {
                           Swal.showLoading()
                        },
                    }).then(() => {
                        window.location.href = 'index.html';
                    });
                    this.user = {
                        name: '',
                        password: '',
                        confirm_password: ''
                    }
                }
            });	
        },
        logout(){
            Swal.fire({
                icon: 'warning',
                title: '¿Estas seguro?',
                text: 'Estas a punto de cerrar tu sesion',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, cerrar sesion'
            }).then((result) => {
                if (result) {
                    localStorage.setItem('isLogged', false);
                    localStorage.removeItem('name');
                    localStorage.removeItem('email');
                    localStorage.removeItem('id');
                    Swal.fire({
                        icon: 'success',
                        title: 'Sesion cerrada',
                        text: 'Hasta pronto',
                        timer: 2000,
                        timerProgressBar: true,
                        didOpen: () => {
                            Swal.showLoading()
                        }
                    }).then(() => {
                        window.location.href = 'index.html';
                    });
                }
            })
        }
    },
    mounted() {
        this.ordenarNoticias('likes');    
        this.all_news = this.news;
        //consultar almacenamiento local para ver si el usuario esta logueado
        if(localStorage.getItem('isLogged')=='true'){
            this.isLogged = true;
            this.userLogged = {
                name: localStorage.getItem('name'),
                email: localStorage.getItem('email'),
                id: localStorage.getItem('id')
            }
        }else{
            this.isLogged = false;
        }

    },
    computed: {
      
    },
});