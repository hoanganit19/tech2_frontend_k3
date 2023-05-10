import Component from "../Core/Component";
import Footer from "./Footer";
import Header from "./Header";
import Navigo from "navigo";
import { publicRoute } from "../Routes/publicRoute";
import { protectedRoute } from "../Routes/protectedRoute";
import { Error404 } from "../Errors/Error404";

export default class DefaultLayout extends Component {
  render() {
    // const main = document.createElement("main");
    // const header = this.compile(Header);
    // const footer = this.compile(Footer);
    // main.appendChild(header);
    // //Hiển thị components page
    // main.appendChild(footer);
    // return main;

    this.show(Header);

    const router = new Navigo("/");

    if (Object.keys(publicRoute).length) {
      Object.keys(publicRoute).forEach((path) => {
        router.on(path, (params) => {
          this.show(publicRoute[path], params);
        });
      });
    }

    if (Object.keys(protectedRoute).length) {
      Object.keys(protectedRoute).forEach((path) => {
        router.on(path, (params) => {
          this.show(protectedRoute[path], params);
        });
      });
    }

    router.on("*", () => {
      return this.show(Error404);
    });

    router.resolve();

    this.show(Footer);
  }
}
