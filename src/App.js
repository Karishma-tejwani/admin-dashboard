import Header from "./Components/Header";
import AppFooter from "./Components/AppFooter";
import PageContent from "./Components/PageContent";
import SideMenu from "./Components/SideMenu";
import { Space } from "antd";
import "./Style/Style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="menuContent">
        <SideMenu />
        <PageContent />
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
