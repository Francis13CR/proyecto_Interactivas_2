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
              
            ],
            show_notice_details:false,
            selectedItem:0,
            all_news: [],
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
                }
            ],
        }
    },
    methods: {
        showIndex(index){
            this.selectedItem=index;
             
           this.show_notice_details=true;
      
        },
        home(i){
            this.news = this.all_news;
            if(i==1){
                this.show_notice_details=false;
            }
        },
        likeCard(index){
            
            //verificar si la noticia ya fue dada like
            if(document.getElementById(index ).classList.contains('fa')){
               //le quito el like
                this.news[index].likes--;
                document.getElementById(index).classList.remove('fa');
                document.getElementById(index).classList.add('fa-regular');
            }else{
                this.news[index].likes++;
                //eliminar la clase del boton
                document.getElementById(index).classList.remove('fa-regular');
                // agregar la clase del boton
                document.getElementById(index).classList.add('fa');
            }
        },
        showNoticeByCategory(category) {
            console.log(category);
            if (category == 'all') {
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
    },
    mounted() {
        //ordenar por likes
        this.news.sort(function (a, b) {
            return b.likes - a.likes;
        });
        this.all_news = this.news;
    },
    computed: {
    },
});