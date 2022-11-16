
var tTitle = document.getElementById("pTitle").textContent



//var tTitle = document.querySelector("#pTitle").value

    //vacinas do estático
    //obs provavelmente tenho que usar um unico arquivo js para utilizar a classe vacina e no html colocar type="module"
    //email luanwma@hotmail.com senha teste@123456


    var logado = false



    import Vacina  from './Vacina.js';
    import {app, auth} from '../config/firebase.js'
    import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
    import {signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
    
    var nomeVacina, dose, dataAplicacao, imgComprovante, dataProxDose
    var vac1 = new Vacina( 'BCG', 'Dose Única', '11/06/2022', '../imagens/compVacina.png', 'Não há próxima dose');
    var vac2 = new Vacina("Hepatite B", "1a. Dose", "11/08/2022", "../imagens/compVacina.png", "Próxima dose em: 11/10/2022")
    var vac3 = new Vacina("Rotavírus", "1a. Dose", "11/10/2022", "../imagens/compVacina.png", "Próxima dose em: 11/10/2023")
    var vac4 = new Vacina("Febre amarela", "1a. Dose", "11/10/2022", "../imagens/compVacina.png", "Próxima dose em: 11/10/2023")

    var listaVacinas = [vac1, vac2, vac3, vac4]

    //var newVacine = new vacina()
    

  
    //console.log(listaVacinas)


    function addNewVacine(nome, dose, dataApl , compr, proxDose){
        var novaVac = new Vacina(nome, dose, dataApl, compr,proxDose )
        listaVacinas.add(novaVac)

    }

   

if(tTitle == 'Criar Conta'){
    var btnCadastrarConta = document.getElementById('btnCadastrarConta')
    btnCadastrarConta.addEventListener('click', criarConta)



}else if(tTitle == 'Entrar'){

    var btnEntrar = document.getElementById('btnEntrar')
    btnEntrar.addEventListener('click', autenticar)
}





 /*else if(tTitle == 'Nova Vacina'){

    const inputFile = document.querySelector("#myfile")

    const inputPicture = document.querySelector("#picture");
    const input2 = document.getElementById("picture")

    const pictText = "Choose an image";
    console.log(pictText);
    inputPicture.setAttribute("class", "testeteste");
    input2.setAttribute("class", "testeteste")

}*//*
else if(tTitle == 'Home'){
    

    function apresentarVacina(nomevacina, dose, dataAplicacao, imgComprovante, dataProxDose ){
        /* <div class="componenteVacina">
                    <h1 class="componentTitle">BCG</h1>
                    
                    <div class="cxlblDose">
                        <h2 class="lblTextDoseComp" >Dose Única</h2>
                    </div>
                    <p class="lblDataComp">11/06/2022</p>  --------------> feito
                    <div class="divImagem">
                        <img src="../imagens/compVacina.png" alt="Foto de comprovante da vacina"/> ->>fazendo
    
                    </div>
                    
                    <div class="proxDose"><p>Não há próxima dose</p> </div>
                    
    
                </div>
                */
               
    /*
         var divComponent = document.createElement("div")
         divComponent.setAttribute("class", "componenteVacina") 
        
         var titlecomponent = document.createElement("h1")
         titlecomponent.setAttribute("class", "componentTitle")  
         var nomeTitleTxt = nomevacina
         var nometitle = document.createTextNode(nomeTitleTxt) // aqui pode ser utilizado uma variavel
         titlecomponent.append(nometitle) //titlecomponent será inserido na div principal ----------------------> h1
    
         divComponent.appendChild(titlecomponent) //atribuindo a h1 à div ao componente
        
         
    
         var ndose = document.createElement("h2")
         ndose.setAttribute("class", "lblTextDoseComp" )
         var doseTexto = dose
         var numdose = document.createTextNode(doseTexto)
         ndose.append(numdose)
    
         var divh2 = document.createElement("div")
         divh2.setAttribute("class", "cxlblDose")
    
         divh2.appendChild(ndose) // atribuindo a tag h2 a div do h2 divh2 já é um no pai
    
         divComponent.appendChild(divh2) //atribuindo a divh2 (com o h2 já atribuido à divh2) ao elemento
    
         var pdata = document.createElement("p")
         pdata.setAttribute("class","lblDataComp" )
         var pTexto = dataAplicacao
         var pTxt = document.createTextNode(pTexto)
         pdata.append(pTxt)
    
         divComponent.appendChild(pdata) //colocando o p no componente
    
         var img = document.createElement("img")
         img.setAttribute("src", imgComprovante)
         img.setAttribute("alt","Foto de comprovante da vacina")
    
         var divimg = document.createElement("div")
         divimg.setAttribute("class", "divImagem")
         divimg.append(img)
    
         divComponent.appendChild(divimg) // colocando a div ja com a img no componente
    
    
         var divproxdose = document.createElement("div")
         divproxdose.setAttribute("class", "proxDose")
    
         var pTxtProx = document.createElement("p")
         var textPTextProx = dataProxDose
         var txtProx = document.createTextNode(textPTextProx)
         pTxtProx.append(txtProx)
    
         divproxdose.appendChild(pTxtProx)
    
         divComponent.appendChild(divproxdose)
        
         var divRecebeComponente = document.querySelector("#componenteDadosVacina")
         divRecebeComponente.appendChild(divComponent)
    
    
        
    
    }


}
*/

else if(tTitle == 'Home'){
    document.onload = percorrerLista()
    const myVacine = document.getElementById("myvacine")
    var comp = document.querySelector("componenteVacina")

    comp.addEventListener('click', function selectComponent(){
        

    })
    
        
   
    
   

   
    

    
}

if(tTitle == 'Nova Vacina'){
    
    var btnCadastrar = document.getElementById('btnCadastrar')
    btnCadastrar.addEventListener('click', criarVacina)
    const myVacine = document.getElementById("myvacine")
    myVacine.addEventListener('click', function transfereHome(){
        window.location.href= "./home.html" })

        
  
        
    var data_vac = document.getElementById('data_vacinacao')
    var nome_vac = document.getElementById('nome_vac')

   
    var picture = document.getElementById('picture')
    var myfile = document.getElementById('myfile')
    var picture2 = document.querySelector('#picture')
    var myfile2 = document.querySelector('#myfile')

    /*
    myfile2.addEventListener('change', function(e){
        var inputAlvo = e.target
        var arq = inputAlvo.files[0]
        if(arq){
            const reader = new FileReader()
            reader.addEventListener('load', function(e){
                const readerAlvo = e.target //pegando o endereço da imagem
                var img = document.createElement('img')
                img.classList.add('picture_img')
                img.src = readerAlvo.result;
                picture2.innerHTML = ''
                picture2.appendChild(img)
            })
        }
    }) */


    myfile.addEventListener('change', function(e){
        var inputTarget = e.target
        
        var file = inputTarget.files[0]

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

  



}

if(tTitle == 'Editar Vacina'){

    
    const myVacine = document.getElementById("myvacine")
    myVacine.addEventListener('click', function transfereHome(){
        window.location.href= "./home.html" })
}







function criarConta(){
    console.log(tTitle)
    

    let nome, dataNasc, email , senha, repetSenha;

    nome  = document.getElementById("nome").value;
    

    var elementos  = document.getElementsByName('sexo')
    var sex

    for(var i =0 ;i < elementos.length ; i++){
        if(elementos[i].checked){
            sex = elementos[i].value

        }

    }
  
    dataNasc = document.getElementById("data_nasc").value

    email = document.getElementById('email').value
   
    senha = document.getElementById('senha').value
    repetSenha = document.getElementById('repetsenha').value
    
    if(senha == 'null' || senha.length < 6 ){
        alert('Senha minima de 6 caracteres')
        corpoBody.formulario.entradasDados.senha.focus();
    
       return false
    }else if(senha != repetSenha ){
        alert('Senhas diferentes')
        corpoBody.formulario.entradasDados.repetSenha.focus();
        return false
    }else{
        createUserWithEmailAndPassword(auth, email, senha)
        .then( (user) =>{       //funcao de callback quando a requisiçao for solicitada com sucesso o firebase retorna um objeto que é pego no then 
            console.log(JSON.stringify(user))
        })
        .catch( (error) => {
            console.log(error.message)
        })

        logado =true
        window.location.href= "./home.html";
    }
   

}
/*
function apresentarVacina(nomevacina, dose, dataAplicacao, imgComprovante, dataProxDose ){
    /* <div class="componenteVacina">
                <h1 class="componentTitle">BCG</h1>
                
                <div class="cxlblDose">
                    <h2 class="lblTextDoseComp" >Dose Única</h2>
                </div>
                <p class="lblDataComp">11/06/2022</p>  --------------> feito
                <div class="divImagem">
                    <img src="../imagens/compVacina.png" alt="Foto de comprovante da vacina"/> ->>fazendo

                </div>
                
                <div class="proxDose"><p>Não há próxima dose</p> </div>
                

            </div>
            */
           
/*
     var divComponent = document.createElement("div")
     divComponent.setAttribute("class", "componenteVacina") 
    
     var titlecomponent = document.createElement("h1")
     titlecomponent.setAttribute("class", "componentTitle")  
     var nomeTitleTxt = nomevacina
     var nometitle = document.createTextNode(nomeTitleTxt) // aqui pode ser utilizado uma variavel
     titlecomponent.append(nometitle) //titlecomponent será inserido na div principal ----------------------> h1

     divComponent.appendChild(titlecomponent) //atribuindo a h1 à div ao componente
    
     

     var ndose = document.createElement("h2")
     ndose.setAttribute("class", "lblTextDoseComp" )
     var doseTexto = dose
     var numdose = document.createTextNode(doseTexto)
     ndose.append(numdose)

     var divh2 = document.createElement("div")
     divh2.setAttribute("class", "cxlblDose")

     divh2.appendChild(ndose) // atribuindo a tag h2 a div do h2 divh2 já é um no pai

     divComponent.appendChild(divh2) //atribuindo a divh2 (com o h2 já atribuido à divh2) ao elemento

     var pdata = document.createElement("p")
     pdata.setAttribute("class","lblDataComp" )
     var pTexto = dataAplicacao
     var pTxt = document.createTextNode(pTexto)
     pdata.append(pTxt)

     divComponent.appendChild(pdata) //colocando o p no componente

     var img = document.createElement("img")
     img.setAttribute("src", imgComprovante)
     img.setAttribute("alt","Foto de comprovante da vacina")

     var divimg = document.createElement("div")
     divimg.setAttribute("class", "divImagem")
     divimg.append(img)

     divComponent.appendChild(divimg) // colocando a div ja com a img no componente


     var divproxdose = document.createElement("div")
     divproxdose.setAttribute("class", "proxDose")

     var pTxtProx = document.createElement("p")
     var textPTextProx = dataProxDose
     var txtProx = document.createTextNode(textPTextProx)
     pTxtProx.append(txtProx)

     divproxdose.appendChild(pTxtProx)

     divComponent.appendChild(divproxdose)
    
     var divRecebeComponente = document.querySelector("#componenteDadosVacina")
     divRecebeComponente.appendChild(divComponent)




} */
/*
function criarVacina(nomevacina, dataAplicacao, dose, imgComprovante, dataProxDose){
    var newVac = new vacina(nomevacina, dose, dataAplicacao, imgComprovante, dataProxDose)
    listaVacinas.push(newVac)




}
*/



function autenticar(){
    
    
  
    
    const emailUser = document.getElementById('email').value;
    const senhaUser = document.getElementById('senha').value;

    signInWithEmailAndPassword(auth, emailUser, senhaUser)
    .then( (user) => {
        
        window.location.href="home.html";
        verificarLogado(user)
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







function lerDose(){
    var vetorRadios = document.getElementsByTagName('dose')
    for(var i = 0 ; i < vetorRadios.length ; i++){
        if(vetorRadios[i].checked){
            var dose = document.getElementById(vetorRadios[i].id.valueOf)
        }
    }
}



function criarVacina(){
    alert('entrou no criar vac')
    var nomeVacina, dose, dataAplicacao, imgComprovante, dataProxDose
    dataAplicacao = document.getElementById('data_vacinacao').value
    nomeVacina = document.getElementById('nome_vac').value
   
    alert('entrou no criar vac')
    var btnradios = document.getElementsByClassName('radio_text').valueOf;
    alert('entrou no criar vac')
    alert('nome '+nomeVacina)
    for(var i = 0 ; i < btnradios.length ; i++){
        if(btnradios[i].ariaChecked){
            var check = document.getElementById(btnradios[i].id.valueOf);
            dose = check
        }
    }
    imgComprovante = document.getElementById('myfile').value
    alert(imgComprovante)
    dataProxDose = document.getElementById('data_proxVac').value


    alert('nome: '+nomeVacina+'data: '+dataAplicacao+'dose: '+dose+ 'imag: '+imgComprovante+'data prox: '+dataProxDose)
    var newVac = new Vacina(nomeVacina, dose, dataAplicacao, imgComprovante, dataProxDose)
    listaVacinas.push(newVac)

    percorrerLista()



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

function enviaDados( nomevacina,dose, dataAplicacao, imgComprovante, dataProxDose){
    /* <div class="componenteVacina">
                <h1 class="componentTitle">BCG</h1>
                
                <div class="cxlblDose">
                    <h2 class="lblTextDoseComp" >Dose Única</h2>
                </div>
                <p class="lblDataComp">11/06/2022</p>  --------------> feito
                <div class="divImagem">
                    <img src="../imagens/compVacina.png" alt="Foto de comprovante da vacina"/> ->>fazendo

                </div>
                
                <div class="proxDose"><p>Não há próxima dose</p> </div>
                

            </div>
            */
        var id = nomevacina+"+"+dose

    var divComponent = document.createElement("div")
    divComponent.setAttribute("class", "componenteVacina")
    divComponent.setAttribute("id",id ) 
    
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




} 


