import { LS_KEY } from "./helpers";
import {
    onUserServiceAdd,
    onUserServiceLogin,
    onContactServiceAdd,
    onContactServiceGet,
    onContactServiceDelete,
} from "./api";


const refs = {
    form: document.querySelector('.js-form'),
    list: document.querySelector('.contacts-list'),
}

refs.form.addEventListener('submit', onContactAdd);

function onContactAdd(e) {
    e.preventDefault();
    const { name, number } = e.currentTarget.elements;
    
    const user = {
        name: name.value,
        number: number.value,
    }

    onContactServiceAdd(user).then((data) => {
        refs.list.insertAdjacentHTML('beforeend', creatrMarkup(data));
    })
    
}

function creatrMarkup({ id, name, number}) {
    return `<li class="contact-item">
  <p>${name}</p>
  <p>${number}</p>
  <button class='delete-btn' id='${id}' type="button">delete</button>
</li>`
}

onContactServiceGet().then(resp =>
    (refs.list.innerHTML = resp.map(creatrMarkup).join(''))
);


refs.list.addEventListener('click', onContactDelete);

async function onContactDelete(e) {
    if (!e.target.classList.contains('delete-btn')) {
        return;
    }
    await onContactServiceDelete(e.target.id);
    onContactServiceGet().then(resp =>
    (refs.list.innerHTML = resp.map(creatrMarkup).join(''))
);
}