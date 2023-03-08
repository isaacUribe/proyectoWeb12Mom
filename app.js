const btn_entrar = document.getElementById('btn_entrar')

const entrar = () =>{
    let menu = document.getElementById('menu')
    menu.style.display = 'block'

    let form_inicio = document.getElementById('form_inicio')
    form_inicio.style.display = 'none'
}

btn_entrar.addEventListener('click', entrar)

const btn_celulares = document.getElementById('btn_celulares')

const celulares = () =>{
    let for_celular = document.getElementById('form_celulares')
    for_celular.style.display = 'block'

    let portatiles = document.getElementById('form_portatiles').style.display = 'none'
    let clientes = document.getElementById('form_clientes').style.display = 'none'
}

btn_celulares.addEventListener('click',celulares)

const btn_portatiles = document.getElementById('btn_portatiles')

const portatiles = () =>{
    let for_portatil = document.getElementById('form_portatiles')
    for_portatil.style.display = 'block'
    let celulares = document.getElementById('form_celulares').style.display = 'none'
    let clientes = document.getElementById('form_clientes').style.display = 'none'
}

btn_portatiles.addEventListener('click',portatiles)

const btn_clientes = document.getElementById('btn_clientes')

const clientes = () =>{
    let for_cliente = document.getElementById('form_clientes')
    for_cliente.style.display = 'block'
    let celulares = document.getElementById('form_celulares').style.display = 'none'
    let portatiles = document.getElementById('form_portatiles').style.display = 'none'
}

btn_clientes.addEventListener('click',clientes)

const btn_salir = document.getElementById('btn_salir')

const salir = () =>{
    let inicio = document.getElementById('form_inicio').style.display = 'block'
    let clientes = document.getElementById('form_clientes').style.display = 'none'
    let celulares = document.getElementById('form_celulares').style.display = 'none'
    let portatiles = document.getElementById('form_portatiles').style.display = 'none'
    let menu = document.getElementById('menu')
    menu.style.display = 'none'

}
btn_salir.addEventListener('click',salir)





