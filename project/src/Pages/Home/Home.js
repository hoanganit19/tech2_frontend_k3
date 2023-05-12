import "./Home.scss";
import Navigo from "navigo";
import Component from "../../Core/Component";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      title: "Home Page",
      btn: "Cập nhật",
    };
  }

  render() {
    console.log("re-render");

    const h1 = document.createElement("h1");
    h1.innerText = this.state.title;

    const a = document.createElement("a");
    a.href = "/bai-hat/10";
    a.innerText = "Nghe bài hát";
    a.dataset.link = "";

    const button = document.createElement("button");
    button.innerText = this.state.btn;
    button.onclick = () => {
      this.setState({
        title: "Update..." + Math.random(),
        btn: "Đã update",
      });
    };

    const element = document.createElement("div");
    element.appendChild(h1);
    element.appendChild(a);
    element.append(button);

    return element;
  }
}
