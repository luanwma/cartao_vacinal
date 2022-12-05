



    //import Vacina  from "./Vacina.js"
    import { auth, db} from '../config/firebase.js'
    import {onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
    import {addDoc, collection } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
    import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
  
  
 window.onload = () =>{
    onAuthStateChanged(auth, (user) => {
        if(user){
            window.location.href = "./home.html"
        }else{
           
        }
       })
   
    var btnCadastrarConta = document.getElementById('btnCadastrarConta')
    btnCadastrarConta.addEventListener('click', criarConta)
 }

 const getNome = () =>{
    return document.getElementById("nome").value;
}

const getDataNascimento = () =>{
    return document.getElementById("data_nasc").value
}
const getEmail = () =>{
    return document.getElementById('email').value
}
const getSenha = () =>{
  return  document.getElementById('senha').value
}
const getRepetSenha = () =>{
    return document.getElementById('repetsenha').value
}

const getSexo = () =>{
    var elementos  = document.getElementsByName('sexo')
    var sexo
    for(var i =0 ;i < elementos.length ; i++){
        if(elementos[i].checked){
            sexo = elementos[i].value

        }

    }
    return sexo
}
const setNome = (nome) => {
    document.getElementById("nome").value = nome
}

const setDataNascimento = (dataNasc) => {
    document.getElementById("data_nasc").value = dataNasc
}
const setEmail = (email) =>{
    document.getElementById('email').value = email
}






function criarConta(){
   // console.log(tTitle)
    

    let nome, dataNasc, email , senha, repetSenha;

   // nome  = document.getElementById("nome").value;
   console.log("nome " +getNome())

   if(getSenha() == 'null' || getSenha().length < 6 ){
        alert('Senha minima de 6 caracteres')
        corpoBody.formulario.entradasDados.senha.focus();

        return false
    }else if(getSenha() != getRepetSenha() ){
        alert('Senhas diferentes')
        corpoBody.formulario.entradasDados.repetSenha.focus();
        return false
   
    }else{
        createUserWithEmailAndPassword(auth, getEmail(), getSenha())
       // .then( (user) =>{       //funcao de callback quando a requisiçao for solicitada com sucesso o firebase retorna um objeto que é pego no then 
        //    console.log(JSON.stringify(user))
       // })
       .then((userCredential) => {
            const user = userCredential.user;
          
            addDoc(collection(db, "usuarios"), {
                nome : getNome(),
                data_nascimento : getDataNascimento() ,
                email : getEmail(),
                sexo : getSexo(),
                idUser : user.uid
               
    
    
            })
            .then( (result) =>{
                console.log(JSON.stringify(result))
                window.location.href= "./entrar.html";

            })
            .catch( (error) => {
                console.log("erro ao persistir dados: "+error)
            })
       })
        .catch( (error) => {
            const errorCode =  error.code
            const errorMessage = error.message
            console.log(errorMessage)
            console.log(errorCode)
        })

       // cadastrarUsuario(auth, nome, dataNasc, email ,sex)
      //  logado =true
        
    }
   

}