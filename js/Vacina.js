
//função
/*
const vacina = function(nomeVacina, dose, dataAplicacao, imgComprovante, dataProxVac){
    fNomeVacina = nomeVacina,
    fDose = dose,
    fDataAplicacao = dataAplicacao,
    fImgComprovante = imgComprovante,
    fDataProx = dataProxVac

    this.getNomeVacina = function(){
        return fNomeVacina
    }
    this.getDose = function(){
        return fDose
    }
    this.getDataAplicacao = function(){
        return fDataAplicacao
    }
    this.getComprovante = function(){
        return fImgComprovante
    }
    this.getProximaDose = function(){
        return fDataProx
    }

}
*/


//classes  object prototype permite inserir variaveis com o mesmo valor para todos os objetos ja criados (se colocar mesma variavel altera os valores de todos os objetos ja criados 
//e novos metodos ( se utilizar a mesma assinatura sobreescreve) na classe utilizando
//vacina.prototype.nomevariavel = valor variavel ou metodo vacina.prototype.nomefuncao = function(){ }
//Object.prototype

 class Vacina{
   
    constructor(nomeVacina, dose, dataAplicacao, imgComprovante, dataProxDose){
        this.nomeVacina =nomeVacina
        this.dose = dose
        this.dataAplicacao = dataAplicacao
        this.imgComprovante = imgComprovante
        this.dataProxDose = dataProxDose

    }

    set setNomeVacina(nomeVacina){
        this.nomeVacina =  nomeVacina
    }
    set setDose(dose){
        this.dose = dose
    }
    set setDataAplicacao(dataAplicacao){
        this.dataAplicacao = dataAplicacao
    }
    set setComprovante(imgComprovante){
        this.imgComprovante = imgComprovante
    }
    set setDataProxDose(dataProxDose){
        this.dataProxDose = dataProxDose
    }

    get getNomeVacina(){
        return this.nomeVacina
    }
    get getDose(){
        return this.dose
    }
    get getDataAplicacao(){
        return this.dataAplicacao
    }
    get getComprovante(){
        return this.imgComprovante
    }
    get getDataProxDose(){
        return this.dataProxDose
    }
    





}

export default Vacina

