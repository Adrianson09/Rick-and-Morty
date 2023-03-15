import styles from './Form.module.css'
import NavLogin from '../Nav/NavLogin'
import { useState } from 'react'
import validation from './validation'

export const Form = ({login}) => {

    const [userData, setUserData] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({ username: '', password: '' });
    
    const handleInputChange =(event)=>{
        const property = event.target.name;
        const value = event.target.value
         setUserData(
            {...userData, [property]: value}
         );
         validation({
            ...userData,
            [property]: value}, errors, setErrors
         )
    }

    const submitHandler = (event)=>{
        event.preventDefault()
        login(userData)
    }
  return (

    
    <div>
        <NavLogin/>
        <div className={styles.form}>
        <form action="" className={styles.form__container} onSubmit={submitHandler}>
            <h2>Login</h2>
            <div>
            <label htmlFor="username"> UserName: </label>
            <input onChange={handleInputChange} type="email" name='username'  placeholder='Escribe tu email...' value={userData.username} />
            <p>{errors.username}</p>
            </div>
            <div>
            <label htmlFor="password"> Password: </label>
            <input onChange={handleInputChange} type="password" name='password'  placeholder='Escribe tu password...'value={userData.password} />
            <p>{errors.password}</p>

            </div>
           
            <input type="submit" value='login' className={styles.submit} />
        </form>
        </div>
        
    </div>
  )
}
