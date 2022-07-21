const app = Vue.createApp({
    data() {
        return {
            news: [],
            show_notice_details:false,
            selected_news:[],
            all_news: [],
            recomend_news: [],
            search: '',
            categories:[
                {id:1, name:'all', style:'btn-primary'}
            ],
        }
    }, mounted:function(){
        fetch('http://proyecto_interactivas_2.test/apis/public/api/categories')
        .then(response => response.json())
     .then(data=>{
         console.log(data);
         this.categories=data;
     });
        fetch('http://proyecto_interactivas_2.test/apis/public/api/news')
        .then(response => response.json())
     .then(data=>{
        console.log(data);
        this.news=data;
     });
        
        
    },
    methods: {
        showIndex(id){


            fetch("http://apis.test/api/news/detail/" + id)
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              this.selected_news = data;
              this.show_notice_details=true;
      
            });
            // //seleccionar el index del item
            // let index = this.all_news.findIndex(item => item.id == id);
            // this.selectedItem=index;
            // this.show_notice_details=true;
            // //tomar la cateogria del selectedItem
            // this.news = this.all_news;
            // let category = this.news[this.selectedItem].category;
            // let filterNews = this.news.filter(function (news) {
            //     return news.category === category && news.id != id;
            // });
            // this.recomend_news = filterNews;
            // //mover el scroll hacia arriba
            //  setTimeout(function () {
            //      window.scrollTo(0, 0);
            //  }, 2);
            //  document.getElementById('app').scrollIntoView({
            //     behavior: 'smooth'
            // });
            
      
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
            
        }
    },
    mounted() {
        this.ordenarNoticias('likes');    
        this.all_news = this.news;

        // se llama la api de categorias y se carga en el array de categorias
        fetch("http://apis.test/api/categories")
        .then((response) => response.json())
        .then((data) => {
          this.categories = data;
        });
        // se llama la api de noticias y se carga en el array de noticias
      fetch("http://apis.test/api/news")
        .then((response) => response.json())
        .then((data) => {
          this.news = data;
        });
       

    },
    computed: {
      
    },
});