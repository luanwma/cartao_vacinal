/*
    import Vacina  from './Vacina.js';
    import {app, auth} from '../config/firebase.js'
    import main from './mmain.js'
   
   /*
    var nomeVacina, dose, dataAplicacao, imgComprovante, dataProxDose
    var vac1 = new Vacina( 'BCG', 'Dose Única', '11/06/2022', '../imagens/compVacina.png', 'Não há próxima dose');
    var vac2 = new Vacina("Hepatite B", "1a. Dose", "11/08/2022", "../imagens/compVacina.png", "Próxima dose em: 11/10/2022")
    var vac3 = new Vacina("Rotavírus", "1a. Dose", "11/10/2022", "../imagens/compVacina.png", "Próxima dose em: 11/10/2023")
    var vac4 = new Vacina("Febre amarela", "1a. Dose", "11/10/2022", "../imagens/compVacina.png", "Próxima dose em: 11/10/2023")

    var listaVacinas = [vac1, vac2, vac3, vac4]


   
    var pTitle = document.getElementById('pTitle').textContent
    function verificarLogado(){
        const logado = false
        
        
        if(window.localStorage.getItem('user')){
            logado = true
        }else {
            logado = false
        }
        return logado
    }
    if(pTitle == 'Home'){

        if(verificarLogado == true){
            document.onload = percorrerLista()
        }else {
            window.location.href = "./entrar.html"
        }

       
        

        
    }
    

   /*
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
    /*
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
            
/*
        var divComponent = document.createElement("div")
        divComponent.setAttribute("class", "componenteVacina") 
        
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




    } */

    if(pTitle == 'Nova Vacina'){
        
            var btnCadastrar = document.getElementById('btnCadastrar')
            btnCadastrar.addEventListener('click', criarVacina)
           
            var picture = document.getElementById('picture')
            var myfile = document.getElementById('myfile')
            var picture2 = document.querySelector('#picture')
            var myfile2 = document.querySelector('#myfile')


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
                    reader.readAsDataURL(arq)
                }
            }) 

            
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
                   
                        picture.appendChild(img2)

                    })    

                    reader.readAsDataURL(file)
                   
                }
            })
            

          
        

        
    }