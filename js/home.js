
    import Vacina  from "./Vacina.js"
    import { db} from '../config/firebase.js'
    import {onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
   import {query, collection,addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js"
   import { auth, logOut} from "./entrar.js"

    var pTitle = document.getElementById('pTitle').textContent
  
   /* var nomeVacina, dose, dataAplicacao, imgComprovante, dataProxDose
    var vac1 = new Vacina( 'BCG', 'Dose Única', '11/06/2022', '../imagens/compVacina.png', 'Não há próxima dose');
    var vac2 = new Vacina("Hepatite B", "1a. Dose", "11/08/2022", "../imagens/compVacina.png", "Próxima dose em: 11/10/2022")
    var vac3 = new Vacina("Rotavírus", "1a. Dose", "11/10/2022", "../imagens/compVacina.png", "Próxima dose em: 11/10/2023")
    var vac4 = new Vacina("Febre amarela", "1a. Dose", "11/10/2022", "../imagens/compVacina.png", "Próxima dose em: 11/10/2023")

    var listaVacinas = [vac1, vac2, vac3, vac4]
    var vacina = new Vacina() */

   
    
    window.onload = () =>{
       onAuthStateChanged(auth, (user) => {
        if(!user){
            window.location.href = "./entrar.html"
        }else{
            carregarVacinas()
        }
       })


       /* auth.onAuthStateChanged(function (user){
            if(!user.currentUser){
                
            }
        })*/
        
        
       
        const myVacine = document.getElementById("myvacine")
        var divComponent = document.getElementsByTagName("divComponent")

        var btnLogOut = document.getElementById('logout')
        btnLogOut.addEventListener('click', logOut)
      
    }
   
   /*
    function checkLogin(){
        firebase.auth().onAuthStateChanged((user)=> {
            if (user) {
                this.setState(
                    {user:user}
                )
              //  this.getPhotos(user.uid)
                this.props.history.push("/add");
            } else {
                window.location.href = "entrar.html"
            }
        });
    }  */
    
    const lista = query(collection(db, "vacinas"))


    const carregarVacinas = () => {
        onSnapshot(lista, (results) => {
            results.forEach(element => {
                var nomevacina = element.data().nome
                var dose = element.data().dose
                var dataAplicacao = element.data().data_vacinacao
                var imgComprovante = element.data().comprovante_vacina
                var dataProxDose = element.data().data_proxima_dose
                var id = element.id


               
               
                enviaDados(nomevacina, dose, dataAplicacao, imgComprovante, dataProxDose, id)
              
            })

        } )
    }


    function percorrerLista(){
   // alert('entrou na funcao percorrer lista')
    for(var i = 0 ; i < listaVacinas.length ; i++){
        var nomevacina = listaVacinas[i].getNomeVacina
        var dose = listaVacinas[i].getDose
        var dataAplicacao = listaVacinas[i].getDataAplicacao
        
        var imgComprovante = listaVacinas[i].getComprovante
        var dataProxDose = listaVacinas[i].getDataProxDose

        enviaDados( nomevacina,dose, dataAplicacao, imgComprovante, dataProxDose)

    }
}


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
       id.value

       
    var divComponent = document.createElement("div")
    divComponent.setAttribute("class", "componenteVacina")
    divComponent.setAttribute("id",id ) 
    //divComponent.setAttribute("id", "")

   
   
    
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

    divComponent.addEventListener('click', ( ) => {



        window.location.href = "./editar_vacina.html"

       


    })
        
    
    
   


} 

export {}

