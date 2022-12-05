 

   import Vacina  from "./Vacina.js"
   import {app, db, storage} from '../config/firebase.js'

   import {onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
   import {query, getDoc, collection,addDoc,  doc, updateDoc, deleteDoc, onSnapshot, where } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js"
   import {uploadBytes, ref, getDownloadURL, deleteObject, uploadBytesResumable} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-storage.js"
   import {  auth,  logOut} from "./entrar.js"

   import { getIdVacina } from "./home.js"
  
   var idUser, idVacina

     window.onload = () =>{
        onAuthStateChanged(auth, (user) => {
            if(!user){
                window.location.href = "./entrar.html"
            }else{
                idUser = user.uid
                idVacina = getIdVacina


                const myVacine = document.getElementById("myvacine")
                myVacine.addEventListener('click',transfereHome)
                 var btnCadastrar = document.getElementById('btnCadastrar')
                 btnCadastrar.addEventListener('click', salvarAlteracoes)
                 var btnLogOut = document.getElementById('logout')
                btnLogOut.addEventListener('click', logOut)
        
               
               // btn_delete.addEventListener('click', excluir)
                carregarDados()
                var btn_delete = document.getElementById('btn_delete')
                btn_delete.addEventListener('click', excluir)
                renderFoto()
            }
           })
        
       


        
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
/*
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

   } */


   /*
 if (file) {

                const uploadTask = uploadBytesResumable(ref(storage, getPathFoto()), file)

                uploadTask.on('state_changed',
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        getById("barraProgresso").value = Math.trunc(progress)
                    },
                    (error) => {
                        console.log("Ocorreu um erro ao enviar o arquivo: " + error)
                    },
                    () => {
                        updateDoc(doc(db, "alunos", id), {
                            nome: getNome(),
                            dataNascimento: getDataNascimento(),
                            urlFoto: getUrlFoto(),
                            pathFoto: getPathFoto()
                        })
                            .then(() => {
                                getById("messageBody").innerHTML = "Aluno atualizado com sucesso!"

                                const myModal = new bootstrap.Modal(getById('staticBackdrop'), { keyboard: true })
                                getById("staticBackdrop").addEventListener('hidden.bs.modal', event => {
                                    window.location.href = "home.html"
                                })
                                myModal.show()
                            })
                            .catch((error) => {
                                console.log("Erro ao atualizar o documento: " + error)
                            })
                            .finally(() => {
                                showBtnSalvando(false)
                            })
                    }
                )
            } else {
                updateDoc(doc(db, "alunos", id), {
                    nome: getNome(),
                    dataNascimento: getDataNascimento(),
                    urlFoto: getUrlFoto(),
                    pathFoto: getPathFoto()
                })
                    .then(() => {
                        getById("messageBody").innerHTML = "Aluno atualizado com sucesso!"

                        const myModal = new bootstrap.Modal(getById('staticBackdrop'), { keyboard: true })
                        getById("staticBackdrop").addEventListener('hidden.bs.modal', event => {
                            window.location.href = "home.html"
                        })
                        myModal.show()
                    })
                    .catch((error) => {
                        console.log("Erro ao atualizar o documento: " + error)
                    })
                    .finally(() => {
                        showBtnSalvando(false)
                    })
            }

   */
    var refFile
    const getPath = () =>{
        return refFile
    }
    const setPath = (caminho) => {
        refFile = caminho
    }

   const salvarAlteracoes = () => {
    const comp = "compr"
    const refFile = "imagens/"+comp+"_"+getNome()+"_"+getDose()+".jpg"

    setPath(refFile)
    const uploadTask = uploadBytesResumable(ref(storage, refFile), file)

    updateDoc(doc(db, "vacinas"), idUser )
    .then((result) =>{
        console.log("arquivo enviado com sucesso "+result)
        getDownloadURL(ref(storage, refFile))
        .then((url) =>{
            console.log("url: "+ url)
            
                updateDoc(collection(db, "vacinas" , getIdUser()), {
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


   const excluir = (id) => {
    deleteObject(ref(storage, getPath()))
        .then(() => {
            console.log("Arquivo excluído com sucesso.")
            deleteDoc(doc(db, "alunos", id))
                .then(() => {
                    window.location.href = "home.html"
                })
                .catch((error) => {
                    console.log("Erro ao excluir documento: " + error)
                })
        })
        .catch((error) => {
            console.log("Erro ao excluir o arquivo.")
        })
}


   const carregarDados = () => {


    
        getDoc(doc(db, "vacinas", idVacina))
                .then((documento) => {
                    setNome(documento.data().nome)
                    setDataVacinacao(documento.data().data_vacinacao)
                    setMyFile(documento.data().comprovante_vacina)
                    setDataProxVac(documento.data().data_proxima_dose)
                    
                })
                .catch((error) => {
                    console.log("Erro ao recuperar o documento: " + error)
                })

                
    


        /*onSnapshot(lista, (results) => {
            results.forEach(element => {
                if(element.data().id_usuario ==  getIdUser() && element.id == getIdVacina()){
                    
                    var nomevacina = element.data().nome
                    var dose = element.data().dose
                    var dataAplicacao = element.data().data_vacinacao
                    var imgComprovante = element.data().comprovante_vacina
                    var dataProxDose = element.data().data_proxima_dose
                    var id = element.id
                    subirDados(nomevacina, dose, dataAplicacao, imgComprovante, dataProxDose, id)
                }
                


            
            
                
            
            })

        } ) */
}


   function subirDados(nomevacina, dose, dataAplicacao, imgComprovante, dataProxDose, id){
    setNome(nomevacina) 
    
    setDataVacinacao(dataAplicacao)   
    setMyFile(imgComprovante)   
    setDataProxVac(dataProxDose)

   }
 var picture
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