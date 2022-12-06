var answer
var first
var second
var result = 0

function EnterNumber(value){
    answer = document.getElementById("Answer")
    answer.value += value
}

function EnterOperator(value){
    answer = document.getElementById("Answer")
    switch(value){
        case '+':
            first = parseFloat(answer.value)
            answer.value= "+"
            break;

        case '-':
            first = parseFloat(answer.value)
            answer.value= "-"
            break;

        case '/':
            first = parseFloat(answer.value)
            answer.value= "/"
            break;

        case '*':
            first = parseFloat(answer.value)
            answer.value= "*"
            break;

    }
}

function EnterEqual(){

    switch(answer.value[0]){
        case '+':
            second = parseFloat(answer.value.slice(1))
            result = first+second
            answer.value = result
            break

        case '-':
            answer.value.slice(1)
            second = parseFloat(answer.value.slice(1))
            result = first-second
            answer.value = result
            break

        case '*':
            answer.value.slice(1)
            second = parseFloat(answer.value.slice(1))
            result = first*second
            answer.value = result
            break

        case '/':
            answer.value.slice(1)
            second = parseFloat(answer.value.slice(1))
            result = first/second
            answer.value = result
            break
    }      
}

function EnterClear(){
    answer.value = ""
}