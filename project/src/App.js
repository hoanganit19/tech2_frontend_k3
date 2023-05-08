import Navigo from "navigo";
import Song from "./Pages/Song/Song";
import Home from "./Pages/Home/Home";
import Unicode from "./Core/Unicode";
export default class App extends Unicode {
  handleClick = (text) => {
    alert("ok: " + text);
  };

  render = () => {
    //Thiết lập Routing
    /*
    / => Home.js
    /bai-hat => Song.js
    /danh-sach-phat => Playlist.js
    */

    const router = new Navigo("/");
    router.on("/", () => {
      this.show(Home);
    });

    router.on("/bai-hat", () => {
      this.show(Song);
    });

    router.resolve();
  };
}
