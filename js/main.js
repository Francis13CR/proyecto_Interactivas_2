const app = Vue.createApp({
    data() {
        return {
            news: [{
                    id: 1,
                    title: 'Se espera que las ventas de la ps5 lleguen a los 10 millones de dólares',
                    description: 'El equipo de Sony ha confirmado que las ventas de la consola PlayStation 5 llegarán a los 10 millones de dólares, según la compañía.',
                    image: './imgs/imgspruebas/ps4.jpeg',
                    available: true,
                    date: ' May 5, 2022, 9:05am EDT',
                    category: 'Juegos',
                    likes: 90
                },
                {
                    id: 2,
                    title: 'El actor Charlie Cox se confirma que seguirá  interpretando a daredevil',
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
                    description: 'Segun un nuevo estudio, la consola Xbox One X es la mas potente del mundo, y se espera que llegue a los 10 millones de dólares.',
                    image: './imgs/imgspruebas/xbox.jpg',
                    available: true,
                    date: 'Mar 31, 2022, 12:55pm EDT',
                    category: 'Juegos',
                    likes: 60
                },
              
            ],
            new_most_liked: []
        }
    },
    methods: {
    },
    mounted() {
        //pasar la noticia mas leida a la variable new_most_liked
        this.new_most_liked = this.news.sort((a, b) => b.likes - a.likes).slice(0, 1);
        //pasar available a false en la noticia mas leida dentro de news
        this.news.sort((a, b) => b.likes - a.likes).slice(0, 1).forEach(element => {
            element.available = false;
        });
    },
    computed: {
    },
});