
const btn_next = document.getElementById("btn-next");
const btn_submit = document.getElementById("btn-submit");

const form_register_style = document.querySelector(".form-register-style");
const form_box_check = document.querySelector(".form-box-check");

const inputsForm1 = form_register_style.querySelectorAll("input");
const message = form_register_style.querySelectorAll("p");
const content_message = document.querySelector('.content-message');

let element = [];
btn_next.disabled = false;
btn_next.addEventListener('click', () => {
    
    let vacio = false;

    inputsForm1.forEach(input => {
        if (input.value.trim() === "" || input.value == null) {
            vacio = true;
            // alert(`El campo "${input.name}" está vacío`);
            message.textContent = `Verificar ${input.name}`;
        }
    });

    if (vacio) {
        btn_next.disabled = true;
    }else {
        btn_next.disabled = false;
        form_register_style.style.transform = 'translateY(-120vh)';
        form_box_check.style.transform = 'translateY(0vh)';
    }

});

const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');


btn_submit.addEventListener('click', (event) => {
    event.preventDefault();

    const obj1 = Object.fromEntries(new FormData(form1));
    const dataCheck = new FormData(form2);

    let datos = {
        full_name: obj1.full_name,
        email: obj1.email,
        passd: obj1.passd,
        conf_passd: obj1.conf_passd,
        phone: obj1.phone,
        generos: dataCheck.getAll("genero")
    };

    // for(let key in datos) {
    //     console.log(key, datos[key])
    // }

})









