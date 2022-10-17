
import { useState } from "react"
import {useAuth} from '../context/authContext'
import { useNavigate } from "react-router-dom"

export function Register() {

const [username, setUsername] = useState({
  email: '',
  password: ''
})

const {signup} = useAuth()
const navigate = useNavigate()
const [error, setError] = useState()

const handleChange = ({target: {name, value}}) => {
  setUsername({...username,[name]: value})
  //console.log(name, value)
}

const handleSubmit = async e => {
  e.preventDefault()
  setError('') 
  try{
    await signup(username.email, username.password)
    navigate('/')
  }catch(err){
    //console.log(err.code)
    if(err.code === 'auth/invalid-email'){
      setError('Correo invalido')
    }else if(err.code === 'auth/weak-password'){
      setError('Contraseña minimo de de 6 digitos')
    }
    else if(err.code === 'auth/email-already-in-use'){
      setError('Correo ya esta en uso')
    }
  }

}
    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit} className="form-signin">
      <h2 className="form-signin-heading">Please Registrate</h2>
      <input 
      type="text" 
      className="form-control" 
      name="email" 
      id="email"
      placeholder="Email Address" 
      onChange={handleChange}
      required="" />

      <input 
      type="password" 
      className="form-control" 
      name="password" 
      id="password"
      placeholder="Password" 
      onChange={handleChange}
      required="" />

      <label className="checkbox">
        <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me 
        </label>

      {<button className="btn btn-lg btn-primary btn-block" type="submit">Registrarse</button>}
    </form>
      </div>
    )
  }
  