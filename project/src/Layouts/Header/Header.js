import Component from "../../Core/Component";
import Navigation from "./Navigation";
import Menu from "./Menu";

export default class Header extends Component {
  //Event Handler
  handleToggleMenu = () => {}; //handleToggleMenu(), onclick = handleToggleMenu

  render() {
    // const header = document.createElement("header");
    // header.className = "header";
    // const row = document.createElement("div");
    // row.className = "row";
    // const navigation = this.compile(Navigation);
    // const menu = this.compile(Menu);
    // row.appendChild(navigation);
    // row.appendChild(menu);
    // header.appendChild(row);
    // return header;

    return this.html`<header><h1>Header</h1></header>`;
  }
}
