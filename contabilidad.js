const open= document.getElementById('open');
const modal_container= document.getElementById('modal_container');
const close= document.getElementById('close');
const rol=document.getElementById('resultado-rol');

open.addEventListener('click', ()=>{
    modal_container.classList.add('show');
});
open.addEventListener('click',()=>{
    const nombre=document.getElementById("nombre").value;
    const apellido=document.getElementById("apellido").value;
    const cedula=document.getElementById("cedula").value;
    const cargo=document.getElementById('cargo');
    const cargo_empleado=cargo.options[cargo.selectedIndex].text;
    const horas_extra= document.getElementById('horas-extra').value;
    let horas=parseFloat(horas_extra);
    if(cargo_empleado=='Administrativo'){
        let salario_final=700.00+((horas*10));
        rol.innerHTML=`Empleado: ${nombre} ${apellido} <br> Cedula: ${cedula} <br> Cargo: ${cargo_empleado}<br> Salario final: $${salario_final} `
    }else if(cargo_empleado=='Supervisor'){
        let salario_final=650.00+((horas*10));
        rol.innerHTML=`Empleado: ${nombre} ${apellido} <br> Cedula: ${cedula} <br> Cargo: ${cargo_empleado}<br> Salario final: $${salario_final} `
    }else if(cargo_empleado=='Operario'){
        let salario_final=440.00+((horas*10));
        rol.innerHTML=`Empleado: ${nombre} ${apellido} <br> Cedula: ${cedula} <br> Cargo: ${cargo_empleado}<br> Salario final: $${salario_final} `
    }else if(cargo_empleado=='Control de calidad'){
        let salario_final=490.00+((horas*10));
        rol.innerHTML=`Empleado: ${nombre} ${apellido} <br> Cedula: ${cedula} <br> Cargo: ${cargo_empleado}<br> Salario final: $${salario_final} `
    }
})



close.addEventListener('click', ()=>{
    modal_container.classList.remove('show');
});