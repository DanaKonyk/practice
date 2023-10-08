import{o as s,a,b as l}from"./api-8f5988ca.js";const n={form:document.querySelector(".js-form"),list:document.querySelector(".contacts-list")};n.form.addEventListener("submit",u);function u(t){t.preventDefault();const{name:e,number:o}=t.currentTarget.elements,c={name:e.value,number:o.value};s(c).then(i=>{n.list.insertAdjacentHTML("beforeend",r(i))})}function r({id:t,name:e,number:o}){return`<li class="contact-item">
  <p>${e}</p>
  <p>${o}</p>
  <button class='delete-btn' id='${t}' type="button">delete</button>
</li>`}a().then(t=>n.list.innerHTML=t.map(r).join(""));n.list.addEventListener("click",d);async function d(t){t.target.classList.contains("delete-btn")&&(await l(t.target.id),a().then(e=>n.list.innerHTML=e.map(r).join("")))}
