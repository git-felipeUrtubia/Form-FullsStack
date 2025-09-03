
const btn_next = document.getElementById("btn-next");
const btn_submit = document.getElementById("btn-submit");
const form_register_style = document.querySelector(".form-register-style");
const form_box_check = document.querySelector(".form-box-check");
const inputsForm1 = form_register_style.querySelectorAll("input");
const input_email = document.getElementById('input-email'); 
const input_passd = document.getElementById('input-passd');
const input_conf_passd = document.getElementById('input-conf-passd');
const content_message = document.querySelector('.content-message');
const message = form_register_style.querySelector("p");

btn_next.addEventListener('click', () => {
    

    // verificar si campos vacios para avanzar
    let vacio = Array.from(inputsForm1).some(input => 
    input.value.trim() == "" || 
    input.value.trim() == null);

    // verificar formato de email
    let email_check = input_email.value.trim();
    const format_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/; 

    // verificar contraseña
    let passd_1 = input_passd.value.trim();
    let passd_2 = input_conf_passd.value.trim();

    if (vacio) {

        content_message.style.display = "flex";
        message.textContent = "* inputs vacios";

    }else if(!format_email.test(email_check)) {

        content_message.style.display = "flex";
        message.innerHTML = "";
        message.innerHTML = 
        '* Asegúrate de escribir un correo valido. Ejemplo: <a href="#" >nombre@ejemplo.com</a>';

    }else if(passd_1.length < 8) {

        content_message.style.display = "flex";
        message.textContent = "* La contraseña debe tener minimo 8 caracteres.";
    }else if(passd_1 !== passd_2) {
        
        content_message.style.display = "flex";
        message.textContent = "* Las contraseñas no coinciden. Por favor, inténtalo de nuevo.";
    
    }else {

        form_register_style.style.transform = 'translateY(-120vh)';
        form_box_check.style.transform = 'translateY(0vh)';
    
    }

});

const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');


btn_submit.addEventListener('click', () => {
    const obj1 = Object.fromEntries(new FormData(form1));
    const dataCheck = new FormData(form2);

    let user = {
        first_name: obj1.first_name,
        last_name: obj1.last_name,
        email: obj1.email,
        passd: obj1.passd,
        conf_passd: obj1.conf_passd,
        phone: obj1.phone,
        generos: dataCheck.getAll("genero")
    };

    alert(`Usuario guardado: 
        first name: ${user["first_name"]}
        last name: ${user["last_name"]}
        email: ${user["email"]}
        contraseña: ${user["passd"]}
        confirmar contraseña: ${user["conf_passd"]}
        phone: ${user["phone"]}
        generos: ${user["generos"]}`)

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

})











