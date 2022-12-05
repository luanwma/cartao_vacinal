 

   import Vacina  from "./Vacina.js"
   import {app, db} from '../config/firebase.js'

   import {onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
   import {query, collection,addDoc, onSnapshot, where } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js"
   import {uploadBytes, ref, getDownloadURL} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-storage.js"
   import {  auth,  logOut} from "./entrar.js"
  

     window.onload = () =>{
        onAuthStateChanged(auth, (user) => {
            if(!user){
                window.location.href = "./entrar.html"
            }else{
               
            }
           })
        
        const myVacine = document.getElementById("myvacine")
        myVacine.addEventListener('click',transfereHome )
         var btnCadastrar = document.getElementById('btnCadastrar')
         btnCadastrar.addEventListener('click', cadastrarVacina)
         var btnLogOut = document.getElementById('logout')
        btnLogOut.addEventListener('click', logOut)
      
        renderFoto()


        
    }

    const setNome = (nomeVacina) => {
        document.getElementById("nome_vac").value = nomeVacina
    }
    const setDataVacinacao = (data_vacinacao) => {
        document.getElementById('data_vacinacao').value = data_vacinacao
    }
    const setMyFile = (myfile) =>{
        document.getElementById('myfile').value = myfile
    }

    const setDataProxVac = (data_proxVac) =>{
        document.getElementById('data_proxVac').value = data_proxVac
    }

    const getNome = () =>{
        return  document.getElementById("nome_vac").value 
    }
    const getDataVacinacao = () => {
       return  document.getElementById('data_vacinacao').value 
    }
    const getMyFile = () =>{
        return document.getElementById('myfile').value 
    }
    const getDataProxVac = () =>{
       return  document.getElementById('data_proxVac').value 
    }

    const getDose = () =>{
        var btnradios = document.getElementsByClassName('radio_text');
    
         for(var i = 0 ; i < btnradios.length ; i++){
            if(btnradios[i].checked){
                 check = document.getElementById(btnradios[i].id).value;
                //agora está correto
                
            }
        }
    }



     
    function transfereHome(){
        window.location.href= "./home.html" }

        var myfile

 function editarVacina(){
       

       var nomeVacina, dose, dataAplicacao, imgComprovante, dataProxDose, file
       dataAplicacao = document.getElementById('data_vacinacao').value
       nomeVacina = document.getElementById('nome_vac').value
      
       
       btnradios = document.getElementsByClassName('radio_text');
    
         for(var i = 0 ; i < btnradios.length ; i++){
            if(btnradios[i].checked){
                 check = document.getElementById(btnradios[i].id).value;
                //agora está correto
                
            }
        }

        var picture = document.getElementById('picture')
        myfile = document.getElementById('myfile')
       
         myfile.addEventListener('change', function(e){
            var inputTarget = e.target
        
            file = inputTarget.files[0]

              if(file){
                  const reader = new FileReader()
                  reader.addEventListener('load', function(e){
                      const readerTarget = e.target
                      var img = document.createElement('img')
                      img.classList.add('picture_img')
                      img.src = readerTarget.result
                      img.setAttribute("src", readerTarget.result)
                      var img2 = document.createElement('img')
                     
                      picture.innerHTML = '<input type="file" accept="image/*" id="myfile" name="comprovante_vacina" '
                 
                      picture.appendChild(img)

                  })    

                  reader.readAsDataURL(file)
                  
                 
              }
    })

      
       dataProxDose = document.getElementById('data_proxVac').value


      // alert('nome: '+nomeVacina+'data: '+dataAplicacao+'dose: '+dose+ 'imag: '+imgComprovante+'data prox: '+dataProxDose)
       const newVac = new Vacina(nomeVacina, check, dataAplicacao, imgComprovante, dataProxDose)
       listaVacinas.push(newVac)
       return true

    



   }

   function renderFoto() {

        
    picture = document.getElementById('picture')
    myfile = document.getElementById('myfile')
    
  
  myfile.addEventListener('change', function(e){
       var inputTarget = e.target
       
        file = inputTarget.files[0]

       if(file){
           const reader = new FileReader()
           reader.addEventListener('load', function(e){
               const readerTarget = e.target
               var img = document.createElement('img')
               img.classList.add('picture_img')
               img.src = readerTarget.result
               img.setAttribute("src", readerTarget.result)
              
              
               picture.innerHTML = '<input type="file" accept="image/*" id="myfile" name="comprovante_vacina" '
          
               picture.appendChild(img)

           })    

           reader.readAsDataURL(file)
     
          
       }
   }) 


}





export {}