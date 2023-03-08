const btn_entrar = document.getElementById('btn_entrar')

const entrar = () =>{
    let user = document.getElementById('user').value
    let pass = document.getElementById('pass').value
        if(user == "usuario" && pass == "password"){

            let menu = document.getElementById('menu')
            menu.style.display = 'block'

            let form_inicio = document.getElementById('form_inicio')
            form_inicio.style.display = 'none'
        }
        else{
            alert("Usuario o contraseña incorrecta")
        }
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


        if(nombre == ""){

        }else{
            let div = document.createElement('div')
            let section = document.getElementById('form_celulares')
            let p = document.createElement('p')
            let p2 = document.createElement('p')
            let p3 = document.createElement('p')
            let p4 = document.createElement('p')
            let p5 = document.createElement('p')
            let p6 = document.createElement('p')
            div.className = 'card'
            p.textContent = "Nombre: " + nombre
            p2.textContent = "Referecia: " + referencia
            p3.textContent = "Codigo: " + codigo
            p4.textContent = "Valor: " + valor
            p5.textContent = "Cantidad Vendida: " + cantidad
            p6.textContent = "Imagen: " + box

            section.append(div)
            div.append(p)
            div.append(p2)
            div.append(p3)
            div.append(p4)
            div.append(p5)
            div.append(p6)
        }

        

        
        
}

btn_form_celulares.addEventListener('click',guardar_info_celulares)

function vaciar_celulares(){
    let nombre = document.getElementById('nombre_celu').value = ""
    let referencia = document.getElementById('referencia_celu').value =""
    let codigo = document.getElementById('codigo_celu').value = ""
    let valor = document.getElementById('valor_celu').value = ""
    let cantidad = document.getElementById('cantidad_celu').value = ""
    let box = document.getElementById('box_celu').value = ""
}

const btn_form_portatiles = document.getElementById('btn_portatiles_form')

const guardar_info_portatiles = () =>{
        let datos = []
        let nombre = document.getElementById('nombre_port').value 
        datos[0]=nombre
        let referencia = document.getElementById('referencia_port').value
        datos[1]=referencia
        let codigo = document.getElementById('codigo_port').value
        datos[2]=codigo
        let valor = document.getElementById('valor_port').value
        datos[3]=valor
        let cantidad = document.getElementById('cantidad_port').value
        datos[4]=cantidad
        let box = document.getElementById('box_port').value
        datos[5]=box

        if(nombre == ""){

        }else{
            let div = document.createElement('div')
            let section = document.getElementById('form_portatiles')
            let p = document.createElement('p')
            let p2 = document.createElement('p')
            let p3 = document.createElement('p')
            let p4 = document.createElement('p')
            let p5 = document.createElement('p')
            let p6 = document.createElement('p')
            div.className = 'card'
            p.textContent = "Nombre: " + nombre
            p2.textContent = "Referecia: " + referencia
            p3.textContent = "Codigo: " + codigo
            p4.textContent = "Valor: " + valor
            p5.textContent = "Cantidad Vendida: " + cantidad
            p6.textContent = "Imagen: " + box

            section.append(div)
            div.append(p)
            div.append(p2)
            div.append(p3)
            div.append(p4)
            div.append(p5)
            div.append(p6)
        }

        

        
        
}

btn_form_portatiles.addEventListener('click',guardar_info_portatiles)

function vaciar_portatiles(){
    let nombre = document.getElementById('nombre_port').value = ""
    let referencia = document.getElementById('referencia_port').value =""
    let codigo = document.getElementById('codigo_port').value = ""
    let valor = document.getElementById('valor_port').value = ""
    let cantidad = document.getElementById('cantidad_port').value = ""
    let box = document.getElementById('box_port').value = ""
}


const btn_form_clientes = document.getElementById('btn_clientes_form')

const guardar_info_clientes = () =>{
        let datos = []
        let nombre = document.getElementById('nombre_cli').value 
        datos[0]=nombre
        let referencia = document.getElementById('documento_cli').value
        datos[1]=referencia
        let codigo = document.getElementById('celular_cli').value
        datos[2]=codigo
        let valor = document.getElementById('direccion_cli').value
        datos[3]=valor
        let cantidad = document.getElementById('correo_cli').value
        datos[4]=cantidad

        if(nombre == ""){

        }else{
            let div = document.createElement('div')
            let section = document.getElementById('form_clientes')
            let p = document.createElement('p')
            let p2 = document.createElement('p')
            let p3 = document.createElement('p')
            let p4 = document.createElement('p')
            let p5 = document.createElement('p')
            
            div.className = 'card'
            p.textContent = "Nombre: " + nombre
            p2.textContent = "Documento: " + referencia
            p3.textContent = "Celular: " + codigo
            p4.textContent = "Direccion: " + valor
            p5.textContent = "Correo: " + cantidad
            

            section.append(div)
            div.append(p)
            div.append(p2)
            div.append(p3)
            div.append(p4)
            div.append(p5)
            
        }

        

        
        
}

btn_form_clientes.addEventListener('click',guardar_info_clientes)

function vaciar_clientes(){
    let nombre = document.getElementById('nombre_cli').value = ""
    let referencia = document.getElementById('documento_cli').value =""
    let codigo = document.getElementById('celular_cli').value = ""
    let valor = document.getElementById('direccion_cli').value = ""
    let cantidad = document.getElementById('correo_cli').value = ""
}






