

/*
var tTitle = document.getElementById("pTitle").textContent



//var tTitle = document.querySelector("#pTitle").value

    //vacinas do estático
    //obs provavelmente tenho que usar um unico arquivo js para utilizar a classe vacina e no html colocar type="module"
    //email luanwma@hotmail.com senha teste@123456


    var logado = false



    import Vacina  from './Vacina.js';
    import {app, auth} from '../config/firebase.js'

    import {db} from '../config/firebase.js'
    
     import {query, collection, onSnapshot, where} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
        


    //import {collection, addDoc} from "firebase/firestore"
   
   // import {Firestore } from '../config/firebase.js'
    import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
    import {signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
    import { sendPasswordResetEmail , signOut} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
    
    var nomeVacina, dose, dataAplicacao, imgComprovante, dataProxDose
    var vac1 = new Vacina( 'BCG', 'Dose Única', '11/06/2022', '../imagens/compVacina.png', 'Não há próxima dose');
    var vac2 = new Vacina("Hepatite B", "1a. Dose", "11/08/2022", "../imagens/compVacina.png", "Próxima dose em: 11/10/2022")
    var vac3 = new Vacina("Rotavírus", "1a. Dose", "11/10/2022", "../imagens/compVacina.png", "Próxima dose em: 11/10/2023")
    var vac4 = new Vacina("Febre amarela", "1a. Dose", "11/10/2022", "../imagens/compVacina.png", "Próxima dose em: 11/10/2023")

    var listaVacinas = [vac1, vac2, vac3, vac4]

 
    

    var newVac = new Vacina();

    

       

         
  



   
   









/*splice utilizado para inserir um valor em um array array.splice(posiçao onde vai inserir, vai deletar quantos elementos? se colocar 1 vai deletar o valor na posiçao passada nesse caso nao usa o 3 parametro, valor a ser inserido )
 var array = [1,2,3,4,5,6,7]
 adiciona 1000 entre o 5 e o 6
 array.splice(5,0,1000) posicao 5 deletar 0, inserir 1000 fica array = [1,2,3,4,5,1000,6,7]
 deletar 1000
 array.splice(5,1) deleta posicao, apenas 1
 array.indexOf(7) retorna a posiçao de um valor 6
 join
 coloca um ou mais valores entre os valores de um array

 array.join("..") -> 1..2..3..4..5..6..7
 array.reverse() -> 7,6,5,4,3,2,1

*/
















