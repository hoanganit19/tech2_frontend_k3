import Component from "../Core/Component";

export default class Footer extends Component {
  render() {
    const footer = document.createElement("footer");
    footer.innerHTML = "<h1>FOOTER</h1>";

    return footer;
  }
}
