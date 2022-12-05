
 import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"


import {  auth, logOut} from "./entrar.js"

window.onload = () =>{
   
    var btnRecuperarSenha = document.getElementById('btnRecuperarSenha')
    btnRecuperarSenha.addEventListener('click',recuperarSenha )
}

const getEmail = () => {
    return document.getElementById('email').value;
}


const recuperarSenha = () => {
    const email = getEmail()

    sendPasswordResetEmail(auth, email)
    .then(() => {
        
        alert('Verifique seu email')
    })
    .catch(() => {
        
        alert('Erro ao solicitar recupeção de senha ')
    })
}

