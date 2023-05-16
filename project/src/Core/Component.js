import App from "../App";
const prevNodeObj = {};
let componentChange = null;
export default class Component {
  constructor(props) {
    this.props = props;
    this.state = {};
  }

  setState = (state) => {
    componentChange = this.constructor.name;
    const prevRender = this.render();

    const keys = Object.keys(state);
    if (keys.length) {
      keys.forEach((key) => {
        this.state[key] = state[key];
      });

      const app = document.querySelector("#app");

      const render = this.render();

      const newContent = app.innerHTML.replace(prevRender, render);

      app.innerHTML = newContent;

      //this.show(prevNodeObj[componentChange], this); //re-render
    }
  };

  compile = (Component, args = {}) => {
    const componentNode = new Component(args).render();

    const className = new Component().constructor.name;
    prevNodeObj[className] = componentNode;
    return componentNode;
  };

  show = (prevNode, Component) => {
    if (typeof Component == "object") {
      const newNode = Component.render();

      prevNode.parentNode.replaceChild(newNode, prevNode);

      prevNodeObj[componentChange] = newNode;
    }
  };

  html = ([first, ...string], ...values) => {
    const currentClass = this.constructor.name;
    const result = values
      .reduce(
        (prevValue, newValue) => {
          return prevValue.concat(newValue, string.shift());
        },
        [first]
      )
      .filter((item) => (item && item !== true) || item == 0)
      .map((item) => {
        if (typeof item === "function") {
          window[currentClass + item.name] = item;
          return currentClass + item.name + "(event)";
        }
        return item;
      });

    return result.join("");
  };
}

//render()
//Lấy node từ render() => Lưu vào 1 thuộc tính

//Sau khi update node cũ thành node mới => gán node mới thành node cũ cho lần render sau (giống reduce)
