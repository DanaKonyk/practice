import"./modulepreload-polyfill-ec808ebb.js";import{o as u}from"./api-57ab9633.js";const r={form:document.querySelector(".js-form"),list:document.querySelector(".contacts-list")};r.form.addEventListener("submit",s);function s(t){t.preventDefault();const{name:e,number:n}=t.currentTarget.elements,o={name:e.value,number:n.value};u(o).then(c=>{r.list.insertAdjacentHTML("beforeend",a(c))})}function a({id:t,name:e,number:n}){return`<li class="contact-item">
  <p>${e}</p>
  <p>${n}</p>
  <button id='${t}' type="button">delete</button>
</li>`}
