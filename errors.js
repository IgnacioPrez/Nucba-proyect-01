const small = document.getElementById('alert');

const inputError = message => {
    small.classList.add("error");
    small.textContent = message;
}

const inputSuccess = () => {
    small.classList.remove("error");
    small.classList.add("success");
    small.textContent = ""
}

const isEmpty = value => !value;

const checkInput = (input) => {
    const inputSelected = input.value
    const filtro = pizzas.every(el => el.id !== inputSelected)
    if(isEmpty(inputSelected)){
        inputError("Es necesario ingresar un numero")
    }
    else if(filtro){
        inputError("No tenemos en stock esa Piza")
    }
    else {
        inputSuccess()
    }
}