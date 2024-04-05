function handleCalc(num) {
    value = document.calc.display.value += num
}

function reset(){
    document.calc.display.value = ""
}

function calculate(){
    result = eval(value)
    document.calc.display.value = result.toLocaleString('pt-br')
}
