export default class Unicode {
  compile(Component) {
    return new Component().render();
  }

  show(Component) {
    const app = document.querySelector("#app");
    if (typeof Component == "object") {
      app.innerText = "";
      app.appendChild(Component.render());
    } else {
      app.appendChild(new Component().render());
    }
  }
}
