import ReactDOM from "react-dom/client";

import HomePage from "./pages/Home";
import GlobalStyle from "./styles/global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <HomePage />
    <GlobalStyle />
  </>
);
