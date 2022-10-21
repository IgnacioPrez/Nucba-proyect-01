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

const stockDePizaas = (pizzas) => {
    console.log('"User-friendly: Nuestras pizzas 😁 ==> "')
    pizzas.map((elemnt) => {
         console.log(`${elemnt.nombre}  $${elemnt.precio}`)
    })
}
stockDePizaas(pizzas)


const idImpar = (pizzas) => {
    const pizzasImpares = pizzas.filter((pizza) => {
        return pizza.id %2 !== 0;
    })
    return pizzasImpares.map((elem)=> {
        console.log(`"User-friendly": Pizza Impar --> ${elem.nombre} $${elem.precio}`)
    })
}
idImpar(pizzas)


const pizzasEconómicas = (pizza) => {
    pizza.forEach(element => {
        if(element.precio < 600){
            console.log(`"User-friendly": Pizza económica con un costo menor a $600 😁😎--> ${element.nombre}`)
        }
    });
}

pizzasEconómicas(pizzas)


const ingredientes = (pizzas) => {
    let ingredientes = [];
    const nombres = []
    let pizzaCompleta = [];

    pizzas.forEach((elem) => nombres.push(elem.nombre))
    pizzas.forEach((elem) => ingredientes.push(elem.ingredientes) )
    
    for(let i = 0; i < ingredientes.length; i++){
        pizzaCompleta.push(ingredientes[i].concat(nombres[i]))
        
    }
    pizzaCompleta.map((elem) => {
        elem.sort((a,b) => { return a.length > b.length ?  -1 :  1})
       console.log(`"User-friendly": DE MÍ PARA TÍ -->  ${elem.join(' ')}`)
    })
    
}

ingredientes(pizzas)