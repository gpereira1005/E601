let form = document.querySelector(`#form-contacto`);
let formElements = form.elements;
const getFormData = () => {
    let data = {};
    for (const element of formElements) {
        if (element.name.length > 0) {
            data[element.name] = element.value;
        }
    }
    return data;
};
let enviarContacto = document.getElementById('enviarContacto')
enviarContacto.onclick = event => {
    event.preventDefault();
    data = getFormData();
    form.reset();
    let contactos = JSON.parse(localStorage.getItem('contactos'));
    contactos.push(data);
    localStorage.setItem('contactos', JSON.stringify(contactos));
}