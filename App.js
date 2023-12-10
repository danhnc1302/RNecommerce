import Navigation from "./navigation/Navigation";
import { Provider } from "react-redux";
import store from "./redux/store";
import {  ModalPortal } from "react-native-modals";
export default function App() {
  return (
    <Provider store={store}>
      <Navigation/>
      <ModalPortal/>
    </Provider>
  );
}

