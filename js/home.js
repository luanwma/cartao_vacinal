
    import Vacina  from "./Vacina.js"
    import { storage, db} from '../config/firebase.js'
    import {onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
    import {query, getDoc, collection,addDoc,  doc, updateDoc, deleteDoc, onSnapshot, where } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js"
    import {uploadBytes, ref, getDownloadURL, deleteObject, uploadBytesResumable} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-storage.js"
   import { auth, logOut} from "./entrar.js"

    

   var idUser, idVacina , pathFoto
   

  
    var btnDelc
    window.onload = () =>{

       idVacina = "1"
       
       onAuthStateChanged(auth, (user) => {
        if(!user){
            window.location.href = "./entrar.html"
        }else{
            idUser = user.uid
         
           // carregarVacinas()
           carregarVacV2()
        }
       })

      
        var divComponent = document.getElementsByTagName("divComponent")

        var btnLogOut = document.getElementById('logout')
        btnLogOut.addEventListener('click', logOut)
        var btnNovaVacina = document.getElementById("btnNovaVacina")
        btnNovaVacina.addEventListener('click', function () {
            sessionStorage.setItem('dados', idVacina);
         

          window.location.href = "./nova_vacina.html"

        })
      
    }

    function setIdVacina(id){
        idVacina = id
    }
    function getIdVacina(){
        return idVacina
    }

    function setIdDelete(id){
        idVacina = id
    }
    function getIdDelete(){
        return idVacina
    }
   
   
    const getPathFoto = () =>{
        return pathFoto
    }
    const setPathFoto = (path) =>{
        pathFoto = path
    }
   

    
    
    
    const getIdUser = () =>{
        return idUser
    }
   // const listaById = query(collection(db, "vacinas"), where("id_usuario", "==", idUser))

    


   /* const carregarVacinas = () => {

        const lista = query(collection(db, "vacinas"))



        onSnapshot(lista, (results) => {
            results.forEach(element => {
                if(element.data().id_usuario ==  getIdUser()){
                    var nomevacina = element.data().nome
                    var dose = element.data().dose
                    var dataAplicacao = element.data().data_vacinacao
                    var imgComprovante = element.data().comprovante_vacina
                    setPathFoto(imgComprovante)
                    var dataProxDose = element.data().data_proxima_dose
                    var id = element.id
                    enviaDados(nomevacina, dose, dataAplicacao, imgComprovante, dataProxDose, id)
                }
                


               
               
                
              
            })

        } )
    } */

    function deletarVacina(){

    
        var id = getIdDelete()
        alert("path excluir " + getPathFoto() + "id vac :" +id )

        var path = getPathFoto()
        deleteDoc(doc(db, "vacinas", id))
        .then( ()=>{
            alert("Vacina excluida "+ id)
            deleteObject(ref(storage, path))
            .then(() => {
                console.log("objeto excluido : "+ path +"com o id:"+ id)
                window.location.href = "./home.html"
                carregarVacV2()
            })
            .catch( () =>{
                console.log("objeto nao excluido ")
            })
        })
        .catch( () =>{
            console.log("vacina nao excluida ")
        })

       // 
    }

    const carregarVacV2 = () =>{
        var id = getIdUser()

        const busca = query(collection(db, "vacinas"), where("id_usuario", "==", id));
      //  const lista = query(collection(db, "vacinas"))
      //  const lista2 = query(lista, where("id_usuario", "==", id))


        onSnapshot(busca, (results) => {
            results.forEach(element => {
              //  if(element.data().id_usuario ==  getIdUser()){
                    var nomevacina = element.data().nome
                    var dose = element.data().dose
                    var dataAplicacao = element.data().data_vacinacao
                    var imgComprovante = element.data().comprovante_vacina
                    setPathFoto(imgComprovante)
                    var dataProxDose = element.data().data_proxima_dose
                    var id = element.id
                    enviaDados(nomevacina, dose, dataAplicacao, imgComprovante, dataProxDose, id)
             //   }
                


               
               
                
              
            })

        } )

    }


   /* function percorrerLista(){
   // alert('entrou na funcao percorrer lista')
    for(var i = 0 ; i < listaVacinas.length ; i++){
        var nomevacina = listaVacinas[i].getNomeVacina
        var dose = listaVacinas[i].getDose
        var dataAplicacao = listaVacinas[i].getDataAplicacao
        
        var imgComprovante = listaVacinas[i].getComprovante
        var dataProxDose = listaVacinas[i].getDataProxDose

        enviaDados( nomevacina,dose, dataAplicacao, imgComprovante, dataProxDose)

    }
} */






function enviaDados( nomevacina,dose, dataAplicacao, imgComprovante, dataProxDose, id ){
    /* <a> <div class="componenteVacina">
                <h1 class="componentTitle">BCG</h1>
                
                <div class="cxlblDose">
                    <h2 class="lblTextDoseComp" >Dose Única</h2>
                </div>
                <p class="lblDataComp">11/06/2022</p>  --------------> feito
                <div class="divImagem">
                    <img src="../imagens/compVacina.png" alt="Foto de comprovante da vacina"/> ->>fazendo

                </div>
                
                <div class="proxDose"><p>Não há próxima dose</p> </div>
                

            </div> </a>
            */
     

       
    var divComponent = document.createElement("div")
    divComponent.setAttribute("class", "componenteVacina")
    divComponent.setAttribute("id",id ) 
    //divComponent.setAttribute("id", "")
    var divBtnDel = document.createElement("div")
    divBtnDel.setAttribute("id", "divBtnDel")
    

    var btndel = document.createElement("button")
    btndel.setAttribute("id", "btnDel")
    var imgD = document.createElement("img")
    imgD.setAttribute("src", "../imagens/botao_deletar.png")
    imgD.setAttribute("width", "50px")
    imgD.setAttribute("heigth", "50px")
    btndel.appendChild(imgD)
    divBtnDel.appendChild(btndel)
    divComponent.appendChild(divBtnDel)   
    
    var titlecomponent = document.createElement("h1")
    titlecomponent.setAttribute("class", "componentTitle") 
    var  nomeTitleTxt = nomevacina
    //var nomeTitleTxt = "Dengue"
    var nometitle = document.createTextNode(nomeTitleTxt) // aqui pode ser utilizado uma variavel
    titlecomponent.append(nometitle) //titlecomponent será inserido na div principal ----------------------> h1

    divComponent.appendChild(titlecomponent) //atribuindo a h1 à div ao componente

    

    var ndose = document.createElement("h2")
    ndose.setAttribute("class", "lblTextDoseComp" )
    var doseTexto = dose
    //var doseTexto = "Dose Única"
    var numdose = document.createTextNode(doseTexto)
    ndose.append(numdose)

    var divh2 = document.createElement("div")
    divh2.setAttribute("class", "cxlblDose")

    divh2.appendChild(ndose) // atribuindo a tag h2 a div do h2 divh2 já é um no pai

    divComponent.appendChild(divh2) //atribuindo a divh2 (com o h2 já atribuido à divh2) ao elemento

    var pdata = document.createElement("p")
    pdata.setAttribute("class","lblDataComp" )
    var pTexto = dataAplicacao
   // var pTexto = "06/06/2016"
    var pTxt = document.createTextNode(pTexto)
    pdata.append(pTxt)

    divComponent.appendChild(pdata) //colocando o p no componente

    var img = document.createElement("img")
    img.setAttribute("src", imgComprovante)
   // img.setAttribute("src", "../imagens/compVacina.png")
    img.setAttribute("alt","Foto de comprovante da vacina")

    var divimg = document.createElement("div")
    divimg.setAttribute("class", "divImagem")
    divimg.append(img)

    divComponent.appendChild(divimg) // colocando a div ja com a img no componente

    
    var divproxdose = document.createElement("div")
    divproxdose.setAttribute("class", "proxDose")

    var pTxtProx = document.createElement("p")
    dataProxDose
    var textPTextProx = dataProxDose
  //  var textPTextProx = "Não há próxima dose"
    var txtProx = document.createTextNode(textPTextProx)
    pTxtProx.append(txtProx)

    divproxdose.appendChild(pTxtProx)

    divComponent.appendChild(divproxdose)

   

    
    var divRecebeComponente = document.querySelector("#componenteDadosVacina")
    divRecebeComponente.appendChild(divComponent)

   // vacina = new Vacina(nomevacina,dose, dataAplicacao, imgComprovante, dataProxDose)
    //vacina = {nomeVacina, dose, dataAplicacao, imgComprovante, dataProxDose}

   
    btndel.addEventListener('click', function(){
        setIdDelete(id)
        deletarVacina()
    } )

   /* btndel.addEventListener('click', function (){
        alert("path excluir " + getPathFoto() + "id vac :" +id )

        var path = getPathFoto()
        deleteDoc(doc(db, "vacinas", id))
        .then( ()=>{
            alert("Vacina excluida "+ id)
            deleteObject(ref(storage, path))
            .then(() => {
                console.log("objeto excluido : "+ path +"com o id:"+ id)
            })
            .catch( () =>{
                console.log("objeto nao excluido ")
            })
        })
        .catch( () =>{
            console.log("vacina nao excluida ")
        })

        window.location.href = "./home.html"
    
    })
      /*  deleteObject(ref(storage, getPathFoto() ))
        .then( ()=>{
            console.log("arquivo excluido com sucesso ")
            deleteDoc(doc(db, "vacinas", id))
            .then( () =>{
                alert("Vacina excluida")
                window.location.href = "./home.html"
            })
            .catch( (error)=>{
                console.log("erro ao excluir documento "+ error)
            })
        })
        .catch( (error) => {
            console.log("Erro ao excluir arquivo "+error)
        })

    }) */
    
    divimg.addEventListener('click', function () {
        sessionStorage.setItem('dados', id);
         

          window.location.href = "./nova_vacina.html"
    } ) 


        
    
    
   


} 



export {}

