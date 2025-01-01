import FooterPage from "./FooterPage/FooterPage";
import HeaderPage from "./HeaderPage/HeaderPage";
import { AppProvider } from "./UseContect/AppProvider";

function App() {
  return (
    <div>
      <AppProvider>
        <header>
          <HeaderPage />
        </header>

        <footer style={{ marginTop: "10%" }}>
          <FooterPage />
        </footer>
      </AppProvider>
    </div>
  );
}

export default App;
