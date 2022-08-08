import RoutesMain from "./components/routes";
import GlobalStyle from "./styles/GlobalStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <RoutesMain />
      <ToastContainer />
    </>
  );
}

export default App;
