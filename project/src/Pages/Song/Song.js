import "./Song.scss";
export default class Song {
  render() {
    const element = document.createElement("h2");
    element.innerText = "Chi tiết bài hát";
    return element;
  }
}
