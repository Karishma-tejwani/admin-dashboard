import Header from "./Components/Header";
import Footer from "./Components/Footer";
import PageContent from "./Components/PageContent";
import SideMenu from "./Components/SideMenu";
import { Space } from "antd";
import "./Style/Style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Space className="space">
        <SideMenu />
        <PageContent />
      </Space>
      <Footer />
    </div>
  );
}

export default App;
