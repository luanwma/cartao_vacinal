      


   import Vacina  from "./Vacina.js"
   import {app,  db, storage} from '../config/firebase.js'

  // import {db} from '../config/firebase.js'
  // import {getStorage} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js"
  import {onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
    
   import {query, collection,addDoc, updateDoc, doc, getDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js"
   import {uploadBytes, ref, getDownloadURL, } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-storage.js"

   import { auth, logOut} from "./entrar.js"
   

   var newVac
    
   var file = null
   var picture, check
    
   var idUser, idVacina = null

    window.onload = () =>{
        onAuthStateChanged(auth, (user) => {
        if(!user){
            window.location.href = "./entrar.html"
        }else{
          idUser = user.uid
          idVacina = sessionStorage.getItem('dados');
          if(idVacina == null ){
            alert("id Vacina null")
          }else{
            alert("id da vacina "+idVacina)
          }
          
        }
       })
      
       
       
        
        const myVacine = document.getElementById("myvacine")
        myVacine.addEventListener('click',transfereHome )
        var btnLogOut = document.getElementById('logout')
        btnLogOut.addEventListener('click', logOut)

         var btnCadastrar = document.getElementById('btnCadastrar')
         btnCadastrar.addEventListener('click', cadastrarVacina)
         
        
      
        renderFoto()




        
    }

    const getIdVacina = () =>{
        return idVacina
    }

    const getIdUser = () =>{
        return idUser
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
        var check
        var btnradios = document.getElementsByClassName('radio_text');
    
         for(var i = 0 ; i < btnradios.length ; i++){
            if(btnradios[i].checked){
                 check = document.getElementById(btnradios[i].id).value;
                //agora está correto
                
            }
        }
        return check
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

   


  
    var myfile
/*
   const cadastrarVacina = () => {
        const comp = "compr"
        const refFile = "imagens/"+comp+"_"+getNome()+"_"+getDose()+".jpg"
        uploadBytes(ref(storage, refFile), file )
        .then((result) =>{
            console.log("arquivo enviado com sucesso "+result)
            getDownloadURL(ref(storage, refFile))
            .then((url) =>{
                console.log("url: "+ url)
                
                    addDoc(collection(db, "vacinas"), {
                        nome : getNome(),
                        data_vacinacao : getDataVacinacao() ,
                        dose : getDose(),
                        data_proxima_dose : getDataProxVac(),
                        comprovante_vacina : url

                        
                    
            
            
                    })
                    .then( (result) =>{
                        console.log(JSON.stringify(result))
                        window.location.href= "./home.html";

                    })
                    .catch( (error) => {
                        console.log("erro ao persistir dados: "+error)
                    })

                })
            .catch((erro) => {
                console.log("erro ao obter url "+ erro)

            })


        })
        .catch((erroup) =>{
            console.log("erro ao enviar arquivo "+erroup)
        })

   }
   */

   


   const cadastrarVacina = () => {

    if(idVacina != null){
        const comp = "compr"
        const refFile = "imagens/"+comp+"_"+getNome()+"_"+getDose()+".jpg"

            uploadBytes(ref(storage, refFile), file )
            .then((result) =>{
                console.log("arquivo enviado com sucesso "+result)
                getDownloadURL(ref(storage, refFile))
                .then((url) =>{
                    console.log("url: "+ url)
                    
                        updateDoc(doc(db, "vacinas", idVacina), {
                            nome : getNome(),
                            data_vacinacao : getDataVacinacao() ,
                            dose : getDose(),
                            data_proxima_dose : getDataProxVac(),
                            comprovante_vacina : url,
                            id_usuario : getIdUser()

                            
                        
                
                
                        })
                        .then( (result) =>{
                            console.log(JSON.stringify(result))
                            window.location.href= "./home.html";

                        })
                        .catch( (error) => {
                            console.log("erro ao persistir dados: "+error)
                        })

                    })
                .catch((erro) => {
                    console.log("erro ao obter url "+ erro)

                })


            })
            .catch((erroup) =>{
                console.log("erro ao enviar arquivo "+erroup)
            })

    }else{

        const comp = "compr"
        const refFile = "imagens/"+comp+"_"+getNome()+"_"+getDose()+".jpg"

            uploadBytes(ref(storage, refFile), file )
            .then((result) =>{
                console.log("arquivo enviado com sucesso "+result)
                getDownloadURL(ref(storage, refFile))
                .then((url) =>{
                    console.log("url: "+ url)
                    
                        addDoc(collection(db, "vacinas"), {
                            nome : getNome(),
                            data_vacinacao : getDataVacinacao() ,
                            dose : getDose(),
                            data_proxima_dose : getDataProxVac(),
                            comprovante_vacina : url,
                            id_usuario : getIdUser()

                            
                        
                
                
                        })
                        .then( (result) =>{
                            console.log(JSON.stringify(result))
                            window.location.href= "./home.html";

                        })
                        .catch( (error) => {
                            console.log("erro ao persistir dados: "+error)
                        })

                    })
                .catch((erro) => {
                    console.log("erro ao obter url "+ erro)

                })


            })
            .catch((erroup) =>{
                console.log("erro ao enviar arquivo "+erroup)
            })




    }

    

}

    function transfereHome(){
        window.location.href= "./home.html" 
    }

       

   export {}