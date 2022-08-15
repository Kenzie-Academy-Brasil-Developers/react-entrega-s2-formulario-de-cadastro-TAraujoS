import RoutesMain from "./routes";
import GlobalStyle from "./styles/GlobalStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./contexts/AuthContext";
import TechProvider from "./contexts/TechsContext";

function App() {
  return (
    <AuthProvider>
      <TechProvider>
        <GlobalStyle />
        <RoutesMain />
        <ToastContainer />
      </TechProvider>
    </AuthProvider>
  );
}

export default App;
