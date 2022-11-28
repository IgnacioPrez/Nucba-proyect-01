const pizzas = [
    {
        id:1,
        nombre:'Pizza Muzzarella',
        ingredientes:['masa siciliana','salsa','muzzarella','olivas verdes'],
        precio:450,
        img:'./assets/img/c9774488483c0405bfe595f54bc85bb4.jpg'
    },
    {
        id:2,
        nombre:'Pizza Napolitana con albahaca',
        ingredientes:['masa siciliana','salsa','muzzarella','tomates cubeteados','aceite de albahaca','olivas verdes'],
        precio:550,
        img:'./assets/img/deliciosa-pizza-napolitana-tablero_78826-3307.jpg'
    },
    {
        id:3,
        nombre:'Pizza Jamón y Muzzarella',
        ingredientes:['masa siciliana','salsa','muzzarella','olivas verdes','jamon'],
        precio:700,
        img: './assets/img/pizza-es-comida-italiana-que-sirve-tabla-circulo-madera_41043-529.jpg'
    },
    {
        id:4,
        nombre:'Pizza de Roquefort',
        ingredientes:['masa siciliana','salsa','muzzarella','olivas verdes','queso roquefort'],
        precio:900,
        img:'./assets/img/pizza-de-roquefort-y.jpg'
    },
    {
        id:5,
        nombre:'Pizza Fugazzeta',
        ingredientes:['masa siciliana','salsa','muzzarella','olivas verdes','ternera marinada en salsa inglesa'],
        precio:1070,
        img:'./assets/img/fugazzetta.jpg'

    },
    {
        id:6,
        nombre:'Pizza de Bondiola y Muzzarella',
        ingredientes:['masa siciliana','salsa','muzzarella','olivas verdes','bondiola'],
        precio:1300,
        img:'./assets/img/pizza-carne-variada-jamon-aceitunas_501050-749.jpg'

    }
]


const form = document.getElementById('formulario');
const inputNumber = document.getElementById('num');
const containerPizza = document.querySelector('.cont-pizza')
const card = document.getElementById('card')

let pizza = JSON.parse(localStorage.getItem('pizza')) || [];
const createHtmlPizza = ({nombre,precio,img,ingredientes}) => {
    return `
        <div class="card" id="card">
            <h2>${nombre}</h2>
            <p><span>Ingredientes</span>: ${ingredientes}</p>
            <img src=${img} alt="Imagen de pizza" />
            <div class="card-price">
                <h3 class="price">${precio}</h3>
                <div></div>
            </div>
        </div>
    
    `
}

const handleSubmit = () => {
    const pizzaNumber = parseInt(inputNumber.value);
    const result = pizzas.find(el => el.id === pizzaNumber)
    if(result){
        pizza = [result]
        renderElementPizza(pizza)
        localStorage.setItem('pizza',JSON.stringify(pizza))
    }

    else {
        checkInput(inputNumber);
        localStorage.removeItem('pizza')
        pizza=[]
        renderElementPizza(pizza)
    }
    inputNumber.value = ""

}
const renderElementPizza = (pizza) => {
    const ingredientes = pizza.map(ingredientes => createHtmlPizza(ingredientes)).join('');
    const eleccion = pizza.map(el => createHtmlPizza(el)).join('');
    containerPizza.innerHTML = eleccion
}
const getlocalStorage = () => localStorage.getItem('pizza') && renderElementPizza(pizza)

getlocalStorage()
form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSubmit();
})
