import "./Song.scss";
import Input from "../../Components/Form/Input";
import Component from "../../Core/Component";
export default class Song extends Component {
  constructor(props) {
    super(props);
    this.count = 0;
  }

  handleIncrement = () => {
    this.count++;
    this.show(this);
  };

  render() {
    console.log("re-render");
    const { id } = this.props.data;
    const song = document.createElement("h2");
    song.innerText = "Chi tiết bài hát: " + id;
    song.appendChild(this.compile(Input, { name: "name", title: "Tên" }));
    song.appendChild(this.compile(Input, { name: "email", title: "Email" }));
    song.appendChild(this.compile(Input, { name: "age", title: "Tuổi" }));

    const h1 = document.createElement("h1");
    h1.innerText = this.count;

    song.appendChild(h1);

    const button = document.createElement("button");
    button.innerText = "+";
    button.onclick = this.handleIncrement;

    song.appendChild(button);

    return song;
  }
}