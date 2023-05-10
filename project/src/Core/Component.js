export default class Component {
  constructor(props) {
    this.props = props;
    this.state = {};
  }

  setState = (state) => {
    const keys = Object.keys(state);

    if (keys.length) {
      keys.forEach((key) => {
        this.state[key] = state[key];
      });

      this.show(this); //re-render
    }
  };

  compile = (Component, args = {}) => {
    return new Component(args).render();
  };

  show = (Component, args = {}) => {
    const app = document.querySelector("#app");
    if (typeof Component == "object") {
      app.innerText = "";
      app.appendChild(Component.render());
    } else {
      app.appendChild(new Component(args).render());
    }
  };
}
