import RoutesMain from "./components/routes";
import GlobalStyle from "./styles/GlobalStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <RoutesMain />
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
