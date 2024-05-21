function Login (){

    const submitHandler = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

        console.log(regexEmail.test(email));

        if(email === '' || password === '' ) {
            console.log("Los campos no pueden estar vacíos");
            return;
        }

        if (email !== '' && !regexEmail.test(email)){
            console.log('Debes escribir una dirección de correo válida');
        }
    }
    return (
      <>
        <h2>Formulario de Login</h2>

        <form onSubmit={submitHandler}>
          <label>
          <span>Correo electrónico</span> <br />
          <input type="text" name="email" />
          </label>
          <br />
          <label>
          <span>Contraseña</span>
          <input type="password" name="password" />
          </label>
          <br />
          <button type="submit">Ingresar</button>
        </form>
   </>
  )

}

export default Login; 
