import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext"
import bandera from "../images/Bandera_del_peru.jpg"
import "../components/css/styleHome.css"
import { useEffect, useState, useStates } from "react"
import preguntas from "./preguntas";
import axios from "axios"
import { async } from "@firebase/util"

//const UrlPost = "https://localhost:7163/usuarios/AlumnosConExamenTerminados";
const UrlPost = "http://www.apiirest.somee.com/usuarios/AlumnosConExamenTerminados";

export function Home() {

  const { user, logout, loading } = useAuth()
  const navigate = useNavigate()

  const [ preguntaActual, setPreguntaAntual] = useState(0);
  const [puntacion, setPuntacion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(10);
  const [Disabled, setDisabled] = useState(false);

  useEffect(() => {
    const intervalo = setInterval(() => {
      if(tiempoRestante > 0) setTiempoRestante((prev) => prev - 1);
      if(tiempoRestante === 0) setDisabled(true);
    }, 1000);
    return () => clearInterval(intervalo);
  }, [tiempoRestante]);

/*  const datos = () => {
    fetch('https://my-json-server.typicode.com/SrDeLasTinieblas/apiRest/db')
.then(Response => Response.json())
.then(data => {setPregunta(data[0])})
console.log(pregunta)
  }*/

  /*useEffect(() =>
    fetch("https://my-json-server.typicode.com/SrDeLasTinieblas/apiRest/db").then
    (res=>console.log(res))
  )*/

  //const [ pregunta, setPregunta ] = useState();
  /*useEffect(() => {
    fetch('https://my-json-server.typicode.com/SrDeLasTinieblas/apiRest/db')
      .then((res) => res.json())
      .then((dato) => setPregunta(dato))
      /*.catch((err) => console.log("dddd"+err));  
     console.log(dato)
    
  },[])*/


  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  const PeticionPost= async() =>{
    //Access-Control-Allow-Headers: Authorization
    //shopApi.post(peticion, dataPeticion).then(respuesta => { console.log("respuesta.status") })
    await axios.post(UrlPost, 
      {
        nombre: user.email.replace('@gmail.com',''),
        email: user.email,
        puntuacion: String(puntacion) + " / " + preguntas.length
      }
      ).then(response =>{
        //alert(puntacion)
    }).catch(err => console.log("error: "+err));
  }
  const [Usuario, setUsuario] = useState([]);

  const requestInit = {
    method: 'POST', // -- Aqui estamos diciendo que el metodo que vamos a usar es POST --
    headers: { 'Content-Type': 'application/json' }, // -- Aqui estamos diciendo que el tipo de contenido que vamos a enviar es un json --
    body: JSON.stringify(Usuario) // -- Aqui estamos diciendo que el body que vamos a enviar es un json --
  }
   /* fetch(post, requestInit)
    .then(response => response.json())
    .then(response => setUsuario(response))*/

    //await axios.post(post, requestInit).then(respuesta => { console.log("respuesta.status") })

   /* setUsuario({
      nombre: "",
            email: "",
            puntuacion: ""
        })*/

  /*const headers = {
    "Content-Type": "application/json",
    Authorization: apiKey,
  };
  //const url = "http://localhost:5000/api/expenses/get-expenses";

  axios.get(url, { headers });
*/
/*  const PrimeraRespuesta = () => {
    alert(user.email);  
  }
  const Segundaespuesta = () => {
    alert("Segundaespuesta");  
  }
  const TerceraRespuesta = () => {
    alert("TerceraRespuesta");  
  }
  const CuartaRespuesta = () => {
    alert("CuartaRespuesta");  
  }*/

  function handleAnswerSubmit(isCorrect, e ){

    if (isCorrect) setPuntacion(puntacion + 1);
      e.target.classList.add(isCorrect ? "correct" : "incorrect");
      if(preguntaActual === preguntas.length - 1){
        setIsFinished(true);
        PeticionPost()
      }else{
        setPreguntaAntual(preguntaActual + 1)
        setTiempoRestante(10);
        //console.log("==> "+puntacion);
      }
  }

  if(isFinished)
  return(
    <main>
      <div className="app">
        <div className="juego-Terminado">
          <span > {" "}Obtuviste {puntacion} de {preguntas.length} {" "}</span>
            {/*PeticionPost()*/}

          {/*<button>
            volver a jugar
          </button>*/}
        </div>
      </div>
    </main>
  )


  if (loading) return <h3>loading</h3>
  //console.log(user)

  return <div className="App">
  {/*Home {user.email}*/}

     {/*<div className="email">
     user.email
</div>*/}
    
{<div className="historia_delPeruIMG">
      <img src={bandera} />
</div>}


<div className="preguntas" >
  <div>
    {!Disabled ? (
      <span className="tiempo-restante">
        Tiempo Restante: {tiempoRestante}{" "}
      </span>
     ) :(
      <button className="next" onClick={() => {
      setTiempoRestante(10);
      setDisabled(false);
      setPreguntaAntual(preguntaActual + 1)
      }}
      >Siguiente
      </button>
     ) 
      }
  </div>

  <span className="tiempoRestante"> {/*Tiempo Restante: {tiempoRestante}{" "}*/}</span><br></br>
      <span>Pregunta {preguntaActual + 1} de </span>{preguntas.length}
      <h4>{preguntas[preguntaActual].titulo}</h4>
    </div>

    <div className="imagen" >
        {preguntas[preguntaActual].imagen.map((images) => (
          <img 
          src={images.img}
          width = "250px"
          height = "250px"
          >
            </img>
        ))}
      </div>

      <div className="buttons-Respuesta" >
        {preguntas[preguntaActual].opciones.map((respuesta) => (
          <button
          disabled={Disabled}
          key={respuesta.textoRespuesta}
          onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e) } className="button" >
            {respuesta.textoRespuesta}
            </button>
        ))}

      </div>



    {/*<div className="buttons-next-or-back" >
      <button className="Back" >Back</button>
      <button className="Continue" >Continue</button>
        </div>*/}
    {<button className="button" onClick={handleLogout}>Logout</button>}


  </div>
}