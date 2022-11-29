const navbarEsp = ["ESP>ENG","Inicio", "Proyectos", "Contacto"]

const navbarEng = ["ENG>ESP","Home", "Projects", "Contact"]

const homeEsp = ["Bienvenidos a mi portfolio!", 
    "Te cuento un poco sobre mi", 
    "Me llamo Ignacio Correa, resido en Buenos Aires, Argentina y tengo 27 años.", 
    "Actualmente me encuentro estudiando programacion web, poseo conocimiento en HTML, CSS, y JavaScript, ademas del manejo de librerias como Boostrap, D3 y React.",
    "Busco desarrollarme profesionalmente en el mundo de la programacion, ejercitando mis habilidades actuales y adquiriendo nuevos conocimientos en otros lenguajes, como Python y Java.",
    "Soy una persona con grandes habilidades de adaptacion, a la hora de trabajar en equipo considero que la comunicacion y el respeto son fundamentales. Me considero una persona detallista. He trabajado por muchos años en la atencion y servicio al cliente, lo que me brindo habilidades interpersonales."    
]

const homeEng = ["Welcome to my portfolio!",
    "About me",
    "My name is Ignacio Correa, i live in Buenos Aires, Argentina and i'm 27 years old",
    "I find my self studying web design, i have knowledge on HTML, CSS and Javascript, i also manage libraries and frameworks like Boostrap, D3 and React.",
    "I seek to develop professionally in the world of programming, excercising my actual skills and earning new knowledge of other languages",
    "I'm a person with great capacities of adaptation, at work i think that the communication and being polite are fundamental. I also define my self as a punctilious person. I've worked for many years in customer support and customer service, which gave me a lot of intrapersonal skills."
]

const accordEsp = ["Mis certificaciones", "Mis habilidades tecnicas"]

const accordEng = ["My certifications", "My hard skills"]

const certEsp = ["Diseño web adaptable en FCC", 
    "Algoritmos y estructura de datos con JavaScript en FCC",
    "Desarrollo Front-end con librerias en FCC"
]

const certEng = ["Responsive web desing in FCC",
    "Javascript Algorithms and data structure in FCC",
    "Front-end development libraries in FCC"
]

const proTituloEsp = ["Estos son algunos de los proyectos que he realizado:",
"Juego: Ta-Te-Ti",
"Piedra, papel o tijera",
"Contador Pomodoro",
"Slide de perfiles",
"Contador basico",
"Calculadora con JS"
]

const proTituloEng = ["These are some of the projects i've worked on:",
"Game: Tic-tac-toe",
"Rock, paper or scissors",
"25 + 5 Clock",
"Profile slides",
"Basic counter",
"Javascript calculator"
]

const descEsp = ["El juego de tic tac toe para dos personas.",
"En este juego podrás hacer elecciones contra el programa.",
"Un contador de pomodoro con tiempos intercambiables.",
"Aqui he construido un slide de perfiles utilizando a mis mascotas como ejemplos.",
"En este proyecto, he creado un contador que suma de a una unidad.",
"Calculadora no cientifica creada con Javascript"
]

const descEng = ["The classic game Tic, tac, toe for two persons",
"In this game you can play against the IA",
"A 25+5 clock with interchangeable timers",
"Here i've created a profiles slider using my pets as examples",
"A simple counter that add one units per time",
"A non-cientific calculator made with Javascript",]

let switchLang = true;

const lang = document.getElementById("idioma");
const nav1 = document.getElementById("nav-1")
const nav2 = document.getElementById("nav-2")
const nav3 = document.getElementById("nav-3")
const home1 = document.getElementById("home-1") 
const home2 = document.getElementById("home-2") 
const home3 = document.getElementById("home-3") 
const home4 = document.getElementById("home-4") 
const home5 = document.getElementById("home-5") 
const home6 = document.getElementById("home-6")
const accord1 = document.getElementById("accord-1")
const accord2 = document.getElementById("accord-2")
const cert1 = document.getElementById("cert-1")
const cert2 = document.getElementById("cert-2")
const cert3 = document.getElementById("cert-3")
const titulo1 = document.getElementById("titulo-1")
const titulo2 = document.getElementById("titulo-2")
const titulo3 = document.getElementById("titulo-3")
const titulo4 = document.getElementById("titulo-4")
const titulo5 = document.getElementById("titulo-5")
const titulo6 = document.getElementById("titulo-6")
const titulo7 = document.getElementById("titulo-7")
const desc1 = document.getElementById("desc-1")
const desc2 = document.getElementById("desc-2")
const desc3 = document.getElementById("desc-3")
const desc4 = document.getElementById("desc-4")
const desc5 = document.getElementById("desc-5")
const desc6 = document.getElementById("desc-6")
const despedida = document.getElementById("despedida")

langSwitcher();

function langSwitcher(){
    if(switchLang === true){
        lang.innerHTML = navbarEsp[0];
        nav1.innerHTML = navbarEsp[1]
        nav2.innerHTML = navbarEsp[2]
        nav3.innerHTML = navbarEsp[3]
        home1.innerHTML = homeEsp[0]
        home2.innerHTML = homeEsp[1]
        home3.innerHTML = homeEsp[2]
        home4.innerHTML = homeEsp[3]
        home5.innerHTML = homeEsp[4]
        home6.innerHTML = homeEsp[5]
        accord1.innerHTML = accordEsp[0]
        accord2.innerHTML = accordEsp[1]
        cert1.innerHTML = certEsp[0]
        cert2.innerHTML = certEsp[1]
        cert3.innerHTML = certEsp[2]
        titulo1.innerHTML = proTituloEsp[0]
        titulo2.innerHTML = proTituloEsp[1]
        titulo3.innerHTML = proTituloEsp[2]
        titulo4.innerHTML = proTituloEsp[3]
        titulo5.innerHTML = proTituloEsp[4]
        titulo6.innerHTML = proTituloEsp[5]
        titulo7.innerHTML = proTituloEsp[6]
        desc1.innerHTML = descEsp[0]
        desc2.innerHTML = descEsp[1]
        desc3.innerHTML = descEsp[2]
        desc4.innerHTML = descEsp[3]
        desc5.innerHTML = descEsp[4]
        desc6.innerHTML = descEsp[5]
        despedida.innerHTML = "Gracias por tomarte el tiempo de leer mi portfolio! Lo agradezco de corazon, y espero que pronto podamos trabajar juntos.";
        switchLang = false;
    } else{
        lang.innerHTML = navbarEng[0];
        nav1.innerHTML = navbarEng[1]
        nav2.innerHTML = navbarEng[2]
        nav3.innerHTML = navbarEng[3]
        home1.innerHTML = homeEng[0]
        home2.innerHTML = homeEng[1]
        home3.innerHTML = homeEng[2]
        home4.innerHTML = homeEng[3]
        home5.innerHTML = homeEng[4]
        home6.innerHTML = homeEng[5]
        accord1.innerHTML = accordEng[0]
        accord2.innerHTML = accordEng[1]
        cert1.innerHTML = certEng[0]
        cert2.innerHTML = certEng[1]
        cert3.innerHTML = certEng[2]
        titulo1.innerHTML = proTituloEng[0]
        titulo2.innerHTML = proTituloEng[1]
        titulo3.innerHTML = proTituloEng[2]
        titulo4.innerHTML = proTituloEng[3]
        titulo5.innerHTML = proTituloEng[4]
        titulo6.innerHTML = proTituloEng[5]
        titulo7.innerHTML = proTituloEng[6]
        desc1.innerHTML = descEng[0]
        desc2.innerHTML = descEng[1]
        desc3.innerHTML = descEng[2]
        desc4.innerHTML = descEng[3]
        desc5.innerHTML = descEng[4]
        desc6.innerHTML = descEng[5]
        despedida.innerHTML = "Thank you for taking your time to read my portfolio! I'm grateful from the bottom of my heart, and i hope we get to work together soon."
        switchLang = true;
    }
}

lang.addEventListener("click", e =>{
   langSwitcher()
})
