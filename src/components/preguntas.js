const preguntas = [
    {// 1
        titulo: "¿Cuándo se dio la declaración de la independencia del Perú?",
        opciones:[
            {textoRespuesta: "El 28 de julio de 1821", isCorrect: true},
            {textoRespuesta: "El 29 de julio de 1822", isCorrect: false},
            {textoRespuesta: "El 30 de julio de 1823", isCorrect: false},
            {textoRespuesta: "El 31 de julio de 1824", isCorrect: false},
        ],
        imagen: [
            {img: "https://www.miraflores.gob.pe/wp-content/uploads/2020/07/43694BB8-26EE-4E63-9C0B-67C89F9C1789-1024x642.jpeg"}
        ]
    },
    {// 2
        titulo: "¿Quién lo cantó por primera vez el himno nacional del Perú?",
        opciones:[
            {textoRespuesta: "Rosa Merino (1821).", isCorrect: true},
            {textoRespuesta: "Roso Merino (1819).", isCorrect: false},
            {textoRespuesta: "Rose Merino (1825).", isCorrect: false},
            {textoRespuesta: "Rosi Merino (1830).", isCorrect: false},
        ],
        imagen: [
            {img: "https://imgmedia.wapa.pe/650x368/wapa/migration/imagen/2018/07/27/noticia-himno-nacional.png"}
        ]
    },
    {// 3
        titulo: "¿Cuáles son los símbolos patrios?",
        opciones:[
            {textoRespuesta: "el escudo y el himno nacional", isCorrect: false},
            /*{textoRespuesta: "La bandera, el escudo y el himno nacional", isCorrect: true},*/
            {textoRespuesta: "La bandera, y el himno nacional.", isCorrect: false},
            {textoRespuesta: "La bandera, el escudo", isCorrect: false},
            {textoRespuesta: "La bandera, el escudo y el himno nacional", isCorrect: true},
        ],
        imagen: [
            {img: "https://i.pinimg.com/originals/d2/4c/eb/d24ceb78c541c3bc1df6e1ca46f78a27.jpg"}
        ]
    },
    {// 4
        titulo: "¿Cuáles son los elementos del escudo nacional?",
        opciones:[
            {textoRespuesta: "La vicuña y la cornucopia", isCorrect: false},
            {textoRespuesta: "el árbol de la quina y la cornucopia", isCorrect: false},
            {textoRespuesta: "La vicuña, el árbol de la quina y la cornucopia", isCorrect: true},
            {textoRespuesta: "la cornucopia", isCorrect: false},
        ],        
        imagen: [
            {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Escudo_nacional_del_Per%C3%BA.svg/800px-Escudo_nacional_del_Per%C3%BA.svg.png"}
        ]
    },//5
    {
        titulo: "¿Quién es el héroe de la Batalla de Angamos?",
        opciones:[
            {textoRespuesta: "Miguel Grau “El caballero de los mares”", isCorrect: false},
            {textoRespuesta: "Miguel “El caballero de los mares”", isCorrect: false},
            {textoRespuesta: "“El caballero de los mares”", isCorrect: false},
            {textoRespuesta: "Miguel Grau Seminario “El caballero de los mares”.", isCorrect: true},
        ],        
        imagen: [
            {img: "https://imgmedia.elpopular.pe/1200x660/elpopular/original/2021/10/08/60fff55d8fcfb155e66c1e9c.webp"}
        ]
    },
    {// 6
        titulo: "¿Qué se celebra el 8 de octubre?",
        opciones:[
            {textoRespuesta: "Se conmemora.", isCorrect: false},
            {textoRespuesta: "Se conmemora la Batalla de Angamos.", isCorrect: true},
            {textoRespuesta: "Angamos.", isCorrect: false},
            {textoRespuesta: "Se conmemora la Batalla de las Nalgas", isCorrect: false},
        ],        
        imagen: [
            {img: "https://larepublica.pe/resizer/bv2XuyoKqWfY-CKxcCkoHJSb8Go=/480x282/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/ALXMYAK7T5HR5H6VGRQVFQHITE.jpg"}
        ]
    },
    {// 7
        titulo: "¿A qué altura está Machu Picchu?",
        opciones:[
            {textoRespuesta: "2.430 metros por encima del nivel del mar", isCorrect: true},
            {textoRespuesta: "A 2.490 metros por encima del nivel del mar", isCorrect: false},
            {textoRespuesta: "A 2.410 metros por encima del nivel del mar", isCorrect: false},
            {textoRespuesta: "A 2.530 metros por encima del nivel del mar", isCorrect: false},
        ],        
        imagen: [
            {img: "https://plusultra.com/wp-content/uploads/2021/08/altura-machu-picchu.jpg"}
        ]
    },
    {// 8
        titulo: "¿Qué día se celebra el día de la bandera?",
        opciones:[
            {textoRespuesta: "Cada 7 de junio.", isCorrect: true},
            {textoRespuesta: "Cada 8 de junio.", isCorrect: false},
            {textoRespuesta: "Cada 9 de junio.", isCorrect: false},
            {textoRespuesta: "Cada 10 de junio.", isCorrect: false},
        ],        
        imagen: [
            {img: "https://larepublica.pe/resizer/0tWSMtaIShm51oPG31THYKSQjmE=/480x282/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/6CZTZ7LZFVGW3FWM5FA43UUNVU.png"}
        ]
    },
    {// 9
        titulo: "¿A quién se le conocía como el “Brujo de los andes”?",
        opciones:[
            {textoRespuesta: "Cáceres", isCorrect: false},
            {textoRespuesta: "Avelino", isCorrect: false},
            {textoRespuesta: "Andrés Avelino Cáceres.", isCorrect: true},
            {textoRespuesta: "Andrés", isCorrect: false},
        ],        
        imagen: [
            {img: "https://www.grau.pe/wp-content/uploads/2018/04/15780636_1427265753992817_1391530105157120250_n-300x205.jpg"}
        ]
    },
    {// 10
        titulo: "¿Quién escribió “Las tradiciones peruanas”?",
        opciones:[
            {textoRespuesta: "Ricardo Palma.", isCorrect: true},
            {textoRespuesta: "Miguel Grau.", isCorrect: false},
            {textoRespuesta: "Simon Bolivar.", isCorrect: false},
            {textoRespuesta: "Don Omar", isCorrect: false},
        ],        
        imagen: [
            {img: "https://peru.info/archivos/publicacion/175-imagen-171824282019.jpg"}
        ]
    },
    {// 11
        titulo: "¿Quién es el héroe de la aviación civil peruana?",
        opciones:[
            {textoRespuesta: "Chávez.", isCorrect: false},
            {textoRespuesta: "JChávez.", isCorrect: false},
            {textoRespuesta: "J. F. Kennedy", isCorrect: false},
            {textoRespuesta: "Jorge Chávez.", isCorrect: true},
        ],        
        imagen: [
            {img: "https://elperuano.pe/fotografia/thumbnail/2017/09/23/000038581M.jpg"}
        ]
    },
    {// 12 Chile, Bolivia, Brasil, Colombia y Ecuador
        titulo: "¿Con qué países limita Perú?",
        opciones:[
            {textoRespuesta: "Chile,Ecuador,Colombia,OceanoPacifico", isCorrect: true},
            {textoRespuesta: "Ecuador", isCorrect: false},
            {textoRespuesta: "Colombia", isCorrect: false},
            {textoRespuesta: "Russia", isCorrect: false},
        ],        
        imagen: [
            {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/PER_orthographic_%28territorial_waters%29.svg/1200px-PER_orthographic_%28territorial_waters%29.svg.png"}
        ]
    },
        {// 12
            titulo: "¿Qué prócer de patria cruzó a nado del Callao a Lima?",
            opciones:[
                {textoRespuesta: "Jose", isCorrect: true},
                {textoRespuesta: "Olaya", isCorrect: false},
                {textoRespuesta: "JOlaya", isCorrect: false},
                {textoRespuesta: "José Olaya", isCorrect: false},
            ],        
            imagen: [
                {img: "https://infochorrillos.files.wordpress.com/2010/08/olaya.jpg"}
            ]
        }


        
    /*{// 13
        titulo: "¿Qué prócer de patria cruzó a nado del Callao a Lima?",
        opciones:[
            {textoRespuesta: "Jose.", isCorrect: false},
            {textoRespuesta: "Olaya.", isCorrect: false},
            {textoRespuesta: "JOlaya.", isCorrect: false},
            {textoRespuesta: "José Olaya.", isCorrect: true},
        ],        
        imagen: [
            {img: "https://i.pinimg.com/564x/34/9d/96/349d96088df86fcc36b8be088f7371bc.jpg"}
        ]
    },
    {//14
        titulo: "¿Quién fue el héroe del Combate del 2 de mayo?",
        opciones:[
            {textoRespuesta: "José Gálvez.", isCorrect: false},
            {textoRespuesta: "José Gálvez.", isCorrect: true},
            {textoRespuesta: "José Gálvez.", isCorrect: false},
            {textoRespuesta: "José Gálvez.", isCorrect: false},
        ],        
        imagen: [
            {img: "https://i.pinimg.com/564x/34/9d/96/349d96088df86fcc36b8be088f7371bc.jpg"}
        ]
    },    
    {//15
        titulo: "¿Cuáles son los idiomas oficiales del Perú?",
        opciones:[
            {textoRespuesta: "El español, quechua y aymara.", isCorrect: true},
            {textoRespuesta: "español", isCorrect: false},
            {textoRespuesta: "quechua", isCorrect: false},
            {textoRespuesta: "aymara", isCorrect: false},
        ],        
        imagen: [
            {img: "https://i.pinimg.com/564x/34/9d/96/349d96088df86fcc36b8be088f7371bc.jpg"}
        ]
    }*/
    
]

export default preguntas;