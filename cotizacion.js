const open= document.getElementById('open');
const modal_container= document.getElementById('modal_container');
const close= document.getElementById('close');
const resultado_cotizacion=document.getElementById('resultado-cotizacion');

open.addEventListener('click', ()=>{
    modal_container.classList.add('show');
    
});

open.addEventListener('click',()=>{
    const nombre=document.getElementById("nombre").value;
    const apellido=document.getElementById("apellido").value;
    const cedula=document.getElementById("cedula").value;
    const direccion=document.getElementById("direccion").value;
    const vehiculo=document.getElementById('tipo-vehiculo');
    const vh=vehiculo.options[vehiculo.selectedIndex].text;
    const precio= document.getElementById('precio').value;
    let price=parseFloat(precio);
    if(vh=='Ford Focus'){
        let precio_final=price-((price*5)/100);
        resultado_cotizacion.innerHTML=`Cliente: ${nombre} ${apellido} <br> Cedula: ${cedula} <br> Direccion: ${direccion} <br> Tipo de vehiculo seleccionado: ${vh}
        <br> Precio:${price} <br> Precio con 5% de descuento: $${precio_final} `
    }else{
        let precio_final=price-((price*10)/100);
        resultado_cotizacion.innerHTML=`Cliente: ${nombre} ${apellido} <br> Cedula: ${cedula} <br> Direccion: ${direccion} <br> Tipo de vehiculo seleccionado: ${vh}
        <br> Precio: $${price} <br> Precio con 10% de descuento: $${precio_final} `  
    }
})






close.addEventListener('click', ()=>{
    modal_container.classList.remove('show');
});