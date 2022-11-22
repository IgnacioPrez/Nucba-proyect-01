const pizzas = [
    {
        id:1,
        nombre:'Pizza Muzzarella',
        ingredientes:['masa siciliana','salsa','muzzarella','olivas verdes'],
        precio:450,
    },
    {
        id:2,
        nombre:'Pizza Napolitana con albahaca',
        ingredientes:['masa siciliana','salsa','muzzarella','tomates cubeteados','aceite de albahaca','olivas verdes'],
        precio:550,
    },
    {
        id:3,
        nombre:'Pizza Jamón y Muzzarella',
        ingredientes:['masa siciliana','salsa','muzzarella','olivas verdes','jamon'],
        precio:700,
    },
    {
        id:4,
        nombre:'Pizza de Roquefort',
        ingredientes:['masa siciliana','salsa','muzzarella','olivas verdes','queso roquefort'],
        precio:900,
    },
    {
        id:5,
        nombre:'Pizza Fugazzeta',
        ingredientes:['masa siciliana','salsa','muzzarella','olivas verdes','ternera marinada en salsa inglesa'],
        precio:1070,
    },
    {
        id:6,
        nombre:'Pizza de Bondiola y Muzzarella',
        ingredientes:['masa siciliana','salsa','muzzarella','olivas verdes','bondiola'],
        precio:1300,
    }
]


const form = document.getElementById('formulario');
const inputNumber = document.getElementById('num');
const containerPizza = document.querySelector('.cont-pizza')


let pizza = [];

const createHtmlPizza = ({nombre,precio}) => {
    return `
        <div class="card">
            <h2>${nombre}</h2>
            <div class="card-price">
                <h3 class="price">${precio}</h3>
                <div></div>
            </div>
        </div>
    
    `
}

const handleSubmit = (e) => {
    const pizzaNumber = parseInt(inputNumber.value);
    const result = pizzas.find(el => el.id === pizzaNumber)
    if(result){
        pizza = [result]
        renderElementPizza(pizza)
    }
    else {
        checkInput(inputNumber);
    }
    inputNumber.value = ""

}
const renderElementPizza = (pizza) => {
    const eleccion = pizza.map(el => createHtmlPizza(el)).join('');
    containerPizza.innerHTML = eleccion
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSubmit();
})
