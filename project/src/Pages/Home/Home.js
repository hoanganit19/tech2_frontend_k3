import "./Home.scss";
import Navigo from "navigo";
import Unicode from "../../Core/Unicode";

export default class Home extends Unicode {
  render() {
    console.log("re-render");

    const router = new Navigo("/");

    const h1 = document.createElement("h1");
    h1.innerText = "HomePage";

    const a = document.createElement("a");
    a.href = "/bai-hat";
    a.innerText = "Nghe bài hát";
    a.dataset.link = "";

    const button = document.createElement("button");
    button.innerText = "Update";
    button.onclick = () => {
      h1.innerText = "Update";
      this.show(this);
    };

    const element = document.createElement("div");
    element.appendChild(h1);
    element.appendChild(a);
    element.append(button);

    return element;
  }
}
