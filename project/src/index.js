import App from "./App";
import Navigo from "navigo";
const app = document.querySelector("#app");

const router = new Navigo("/");

const appNode = new App().render();

if (appNode !== undefined) {
  app.appendChild(appNode);
}

//Lấy tất cả thẻ a có data-attribute là data-link
const links = app.querySelectorAll("[data-link]");
if (links.length) {
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      router.navigate(e.target.getAttribute("href"));
      app.innerText = "";
      new App().render();
    });
  });
}
