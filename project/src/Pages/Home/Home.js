import "./Home.scss";
import Navigo from "navigo";
import Component from "../../Core/Component";

export default class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return this.html`<h1>HomePage</h1>`;
  }
}
