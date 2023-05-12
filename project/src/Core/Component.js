const prevNodeObj = {};
let componentChange = null;
export default class Component {
  constructor(props) {
    this.props = props;
    this.state = {};
  }

  setState = (state) => {
    componentChange = this.constructor.name;

    const keys = Object.keys(state);
    if (keys.length) {
      keys.forEach((key) => {
        this.state[key] = state[key];
      });

      this.show(prevNodeObj[componentChange], this); //re-render
    }
  };

  compile = (Component, args = {}) => {
    const componentNode = new Component(args).render();
    const className = new Component().constructor.name;
    prevNodeObj[className] = componentNode;
    return componentNode;
  };

  show = (prevNode, Component) => {
    console.log(Component);
    if (typeof Component == "object") {
      const newNode = Component.render();

      prevNode.parentNode.replaceChild(newNode, prevNode);

      prevNodeObj[componentChange] = newNode;
    }
  };
}

//render()
//Lấy node từ render() => Lưu vào 1 thuộc tính

//Sau khi update node cũ thành node mới => gán node mới thành node cũ cho lần render sau (giống reduce)
