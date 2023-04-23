import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import { header } from "./components/header";
function component() {
  const element = document.createElement("div");
  element.innerHTML =
    "Hello World! Unicode <button class='btn btn-primary'>Xem ngay</button>";
  return element;
}
document.body.appendChild(component());

console.log(moment);
console.log(header);
