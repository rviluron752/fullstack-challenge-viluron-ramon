import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './Login.css'

const LoginControlled = () => {
  const { setCurrentUser } = useContext(UserContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = {
      username,
      password
    }
    localStorage.setItem('currentUser', JSON.stringify(user))
    setCurrentUser(user)
    navigate('/')
  }

  return (
    <div className='sign-in-container'>
    <span>Ingresa con tu usuario y contraseña</span>
    <form className='sign-in-form' onSubmit={handleSubmit}>
      <input
        className='input-form'
        type="text"
        placeholder='Nombre de usuario'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className='input-form'
        type='password'
        placeholder='Contraseña'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
       <button className='btn-form' type='submit'>Iniciar Sesión</button>
    </form>
  </div>
  )
}
export default LoginControlled