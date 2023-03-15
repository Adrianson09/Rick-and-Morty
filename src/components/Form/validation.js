const validation = (userData, errors, setErrors)=>{
  
    if(!userData.username){
        setErrors({ ...errors, username:'Este campo no puede estar vacio' });
    } else if (userData.username.length > 35){
        setErrors({ ...errors, username:'No puede superar los 35 caracteres' });
    } else if(!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(userData.username)){
        setErrors({ ...errors, username:'El email es invalido' });

    } else{
        setErrors({ ...errors, username:'' });

    }
// password

// ^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$
if (userData.password.length < 6 || userData.password.length > 10) {
    setErrors({ ...errors, password:'Longitud de password invalido' });
    
}
else if(!/\d/.test(userData.password)){
    setErrors({ ...errors, password:'El password debe al menos 1 numero' });

} else{
    setErrors({ ...errors, password:'' });

}
  
}


export default validation