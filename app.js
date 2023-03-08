const btn_entrar = document.getElementById('btn_entrar')

const entrar = () =>{
    // let user = document.getElementById('user').value
    // let pass = document.getElementById('pass').value
    //     if(user == "usuario" && pass == "password"){

            let menu = document.getElementById('menu')
            menu.style.display = 'block'

            let form_inicio = document.getElementById('form_inicio')
            form_inicio.style.display = 'none'
        // }
        // else{
        //     alert("Usuario o contraseña incorrecta")
        // }
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
    let user = document.getElementById('user').value = ""
    let pass = document.getElementById('pass').value = ""


}
btn_salir.addEventListener('click',salir)


const btn_form_celulares = document.getElementById('btn_celulares_form')

const guardar_info_celulares = () =>{
        let celulares = []
        let datos = []
        let nombre = document.getElementById('nombre_celu').value 
        datos[0]=nombre
        let referencia = document.getElementById('referencia_celu').value
        datos[1]=referencia
        let codigo = document.getElementById('codigo_celu').value
        datos[2]=codigo
        let valor = document.getElementById('valor_celu').value
        datos[3]=valor
        let cantidad = document.getElementById('cantidad_celu').value
        datos[4]=cantidad
        let box = document.getElementById('box_celu').value
        datos[5]=box

        console.log(datos);

        let div = document.createElement('div')
        let section = document.getElementById('form_celulares')
        let p = document.createElement('p')
        p.textContent = nombre
        console.log(p);
        section.append(div)
        div.append(p)


        
        

}

btn_form_celulares.addEventListener('click',guardar_info_celulares)





