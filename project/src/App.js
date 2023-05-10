import { publicRoute } from "./Routes/publicRoute";
import { protectedRoute } from "./Routes/protectedRoute";
import Component from "./Core/Component";
import DefaultLayout from "./Layouts/DefaultLayout";
export default class App extends Component {
  render = () => {
    const layout = this.compile(DefaultLayout);

    return layout;
  };
}
