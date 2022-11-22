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
    console.log('Nuestras pizzas 😁 ==> "')
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
        console.log(`Pizza Impar --> ${elem.nombre} $${elem.precio}`)
    })
}
idImpar(pizzas)


const precioMenor600 =(pizzas) => pizzas.precio < 600;
if(pizzas.some(precioMenor600)){
    console.log('Hay pizzas menor a $600')
}
else {
    console.log('No hay, lo siento')
}

pizzasEconómicas(pizzas)


const ingredientes = (pizzas) => {
    pizzas.forEach(pizza => {
        console.log(`Los ingredientes de la ${pizza.nombre} son:`)
        pizza.forEach(ingrediente => {
            console.log(ingrediente)
        })
    });
    
}

ingredientes(pizzas)