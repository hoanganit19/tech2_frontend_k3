import "./Layout.scss";
import Component from "../Core/Component";
import Footer from "./Footer";
import Header from "./Header/Header";
import Navigo from "navigo";
import { publicRoute } from "../Routes/publicRoute";
import { protectedRoute } from "../Routes/protectedRoute";
import { Error404 } from "../Errors/Error404";
import Home from "../Pages/Home/Home";

export default class DefaultLayout extends Component {
  render() {
    const layout = document.createElement("div");
    layout.className = "container";
    layout.appendChild(this.compile(Header)); //Add header

    //Pages
    const router = new Navigo("/");
    if (Object.keys(publicRoute).length) {
      Object.keys(publicRoute).forEach((path) => {
        router.on(path, (params) => {
          layout.appendChild(this.compile(publicRoute[path], params));
        });
      });
    }
    if (Object.keys(protectedRoute).length) {
      Object.keys(protectedRoute).forEach((path) => {
        router.on(path, (params) => {
          layout.appendChild(this.compile(publicRoute[path], params));
        });
      });
    }
    router.on("*", () => {
      layout.appendChild(this.compile(Error404));
    });
    router.resolve();

    layout.appendChild(this.compile(Footer)); //Add footer

    return layout;
  }
}
