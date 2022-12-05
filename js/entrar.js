


import Vacina  from "./Vacina.js"
import {app, auth, db} from '../config/firebase.js'
import {signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
import { signOut} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"

window.onload = () =>{
    var btnEntrar = document.getElementById('btnEntrar')
    btnEntrar.addEventListener('click', autenticar)
}


function autenticar(){
    
    const emailUser = document.getElementById('email').value;
    const senhaUser = document.getElementById('senha').value;

    
    signInWithEmailAndPassword(auth, emailUser, senhaUser)
    .then( (userCredential) => {
       const usuario = userCredential.user


        window.location.href = "home.html"

    })
    .catch( (error) => {
        var msg = document.getElementById('erroEmailSenha')
        if(error.code === "auth/user-not-found"){
            
           
            msg.style.visibility = "visible";
        }else if(error.code == "auth/invalid-email"){
            msg.innerHTML = "Email inválido"
            msg.style.visibility = "visible";

        }else if(error.code ===  "auth/wrong-password" ){
            msg.innerHTML = "Senha inválida"
            msg.style.visibility = "visible";
        }

      

       
        console.log(error.message)
    }) 

  

 }


function logOut() {
    signOut(auth)
    .then( () => {
        //this.setState({user:null})
        //this.props.history.push("/") 
        alert("usuario deslogado")
    })
        .catch(function(error){
            alert("erro ao deslogar")
        })
      }




 

 export { auth, logOut}