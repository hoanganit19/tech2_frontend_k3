import Component from "../../Core/Component";

export default class Navigation extends Component {
  render() {
    let col = document.createElement("div");
    col.className = "col-4";

    //Add header-nav
    const headerNav = document.createElement("div");
    headerNav.className = "header__nav d-flex";

    let span = document.createElement("span");

    span.innerHTML = '<i class="fa-solid fa-angle-left"></i>';

    headerNav.appendChild(span);

    span = document.createElement("span");

    span.innerHTML = '<i class="fa-solid fa-angle-right"></i>';

    headerNav.appendChild(span);

    col.appendChild(headerNav);

    return col;
  }
}
