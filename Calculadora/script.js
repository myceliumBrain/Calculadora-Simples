//pegando o valor onde aparecerá os resultados;
var resultados = document.getElementById("divResult");
var firstValue = document.getElementById("divfirstValue")
var resultFinal = "";


function addValue(num){
    if (resultados.textContent.length < 10){
    resultados.innerHTML = resultados.innerHTML + num;
    resultFinal = resultFinal + num
    }
}

function addOperator(operator){
    resultados.innerHTML = ""

    resultFinal = resultFinal + operator
    firstValue.innerHTML = resultFinal
}


function clearValue(){
    resultados.innerHTML = ""
    firstValue.innerHTML = ""
    resultFinal = ""
}
//algumas alterações: 
//1) valor maiordo que 99999999 dá erro -> isso é necessário para que o valor não ultrapasseo tamanho da div calculadora
//2) no else, foi criado uma function para controlar o tamanho das casas decimais -> isso é necessário para que o valor não ultrapasse o tamanho da
    //div calculadora (ex:0.333333333333 que continua sendo menor do que 999999999)  
    
function equal(){
    if (eval(resultFinal) > 9999999999){
        resultados.innerHTML = "Memory Error"
        firstValue.innerHTML = "bip bip x.x"
    }
    else{
        const round = (num, casasDec) =>{
            return +(parseFloat(num).toFixed(casasDec))
        }
        resultados.innerHTML = round(eval(resultFinal),3)
        resultFinal = "(" + resultFinal + ")"
        firstValue.innerHTML = ""
    }
}