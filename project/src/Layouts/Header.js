import Component from "../Core/Component";

export default class Header extends Component {
  render() {
    const header = document.createElement("header");
    header.innerHTML = "<h1>HEADER</h1>";

    return header;
  }
}
