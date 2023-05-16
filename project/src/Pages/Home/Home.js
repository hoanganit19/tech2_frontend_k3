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

  handleUpdate = (text) => {
    console.log(text);
    this.setState({
      title: "Update mới",
    });
  };

  render() {
    const { title } = this.state;

    return this.html`
    <div class="home">
      <h1>${title}</h1>
      <button onclick="${() => {
        this.handleUpdate("Unicode");
      }}">Update</button>
    </div>
    `;
  }
}
