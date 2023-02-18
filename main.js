// Arreglo 
let inmuebles = [
    {idinmueble:'01',direccion:'calle 4 # 4-4',telefono:'23456',precio:'250',estado:true},
    {idinmueble:'02',direccion:'calle 5 # 4-4',telefono:'23456',precio:'250',estado:false},
    {idinmueble:'03',direccion:'calle 6 # 4-4',telefono:'23456',precio:'250',estado:true},
    {idinmueble:'04',direccion:'calle 7 # 4-4',telefono:'23456',precio:'250',estado:false},
    {idinmueble:'05',direccion:'calle 8 # 4-4',telefono:'23456',precio:'250',estado:true}
    ];
// instaciar en html 
    let idinmueble    = document.getElementById("idinmueble");
    let midinmueble   = document.getElementById("midinmueble");
    let direccion     = document.getElementById("direccion");
    let mdireccion    = document.getElementById("mdireccion");
    let telefono      = document.getElementById("telefono");
    let mtelefono     = document.getElementById("mtelefono");
    let precio        = document.getElementById("precio");
    let mprecio       = document.getElementById("mprecio");
    let disponible    = document.getElementById("disponible");
    let nodisponible  = document.getElementById("nodisponible");
    let buscar        = document.getElementById("buscar");
    let listar        = document.getElementById("listar");
    let alerta        = document.getElementById("alerta");

    // evento mostrar mensajes 
    idinmueble.addEventListener('focus',function(){
        midinmueble.textContent= "Id. inmueble es obligatorio"
    })
    idinmueble.addEventListener('blur',function(){
        midinmueble.textContent= ""
    })

    direccion.addEventListener('focus',function(){
        mdireccion.textContent= "la direccion es obligatorio"
    })
    direccion.addEventListener('blur',function(){
        mdireccion.textContent= ""
    })

    telefono.addEventListener('focus',function(){
        mtelefono.textContent= "El telefono es obligatorio"
    })
    telefono.addEventListener('blur',function(){
        mtelefono.textContent= ""
    })

    precio.addEventListener('focus',function(){
        mprecio.textContent= "El precio es obligatorio"
    })
    precio.addEventListener('blur',function(){
        mprecio.textContent= ""
    })

    // enviar
    enviar.addEventListener('click',()=>{
        // buscar que idinmueble no se repita con find 
        let encuentra = inmuebles.find(item => item.idinmueble == idinmueble.value)
        if(encuentra == undefined){
            // agregar objeto en el arreglo de obj inmuebles
            inmuebles.push(
                {
                    idinmueble  :idinmueble.valuec,
                    direccion   :direccion.value,
                    telefono    :telefono.value,
                    precio      :precio.value,
                    estado      :disponible.checked
                }
            );
            console.log(inmuebles);
            alerta.classList.remove("d-none")
            alerta.classList.add("alert-success")
            alerta.textContent="inmueble guardado correctamente"
        }else{
            console.log(inmuebles);
            alerta.classList.remove("d-none")
            alerta.classList.add("alert-danger")
            alerta.textContent="inmueble ya existe"     
        }
        setTimeout(()=>{
            alerta.classList.add("d-none")
        },3000)
    })