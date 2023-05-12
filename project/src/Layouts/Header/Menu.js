import Component from "../../Core/Component";

export default class Menu extends Component {
  render() {
    let col = document.createElement("div");
    col.className = "col-4";

    const nav = document.createElement("nav");
    nav.className = "header__menu";

    const ul = document.createElement("ul");

    //Item 1
    let li = document.createElement("li");

    let a = document.createElement("a");
    a.href = "#";
    a.innerText = "Home";

    li.appendChild(a);

    ul.appendChild(li);

    //Item 2
    li = document.createElement("li");

    a = document.createElement("a");
    a.href = "#";
    a.innerText = "About";

    li.appendChild(a);

    ul.appendChild(li);

    //Item 2
    li = document.createElement("li");

    a = document.createElement("a");
    a.href = "#";
    a.innerText = "Playlist";

    li.appendChild(a);

    ul.appendChild(li);

    //End item

    nav.appendChild(ul);

    col.appendChild(nav);

    return col;
  }
}
