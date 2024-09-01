import { BrowserRouter } from "react-router-dom";
import Header from "./components/HeaderSection/Header";
import { ThemeProvider } from "./useContextHook/useTheme";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="">
          <Header />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
