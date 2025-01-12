import BottomBar from "./BottomBar/BottomBar";
import Component from "./Component/Component";
import FooterPage from "./FooterPage/FooterPage";
import HeaderPage from "./HeaderPage/HeaderPage";
import { AppProvider } from "./UseContect/AppProvider";

function App() {
  return (
    <div>
      <AppProvider>
        <header
          style={{
            position: "sticky",
            top: "0",
            zIndex: "99",
            boxShadow: "0px 4px 6px rgb(236, 218, 231)",
          }}
        >
          <HeaderPage />
        </header>
        <main>
          <Component />
        </main>

        <footer>
          <FooterPage />
        </footer>
        <BottomBar />
      </AppProvider>
    </div>
  );
}

export default App;
