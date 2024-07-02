let a = prompt("Unesite prvi broj:")
const operacija = prompt("Unesite operaciju (+,-,*,/):")
let b = prompt("Unesite drugi broj:")

a = Number(a)
b = Number(b)

switch(operacija) {
    case "+": {
        alert("Rezultat sabiranja: " + (a + b))
        break
    }
    case "-": {
        alert("Rezultat oduzimanja: " + (a - b))
        break
    }
    case "*": {
        alert("Rezultat mnozenja: " + (a * b))
        break
    }
    case "/": {
        alert("Rezultat deljenja: " + (a / b))
        break
    }
    default: {
        alert("Operacija koju ste uneli nije validna (+,-,*,/)")
    }
    
}