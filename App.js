import Navigation from "./navigation/Navigation";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ModalPortal } from "react-native-modals";
import { UserContext } from "./context/UserContext";
export default function App() {
  return (
    <Provider store={store}>
      <UserContext>
        <Navigation />
        <ModalPortal />
      </UserContext>
    </Provider>
  );
}

