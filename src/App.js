import Navbar from "./pages/Navbar";
import Options from "./pages/Options";
import Container from "./pages/Container.js";
import TradingViewWidget from "./pages/TradingViewWidget.js";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Container/>
      {/* <TradingViewWidget/> */}
    </div>
  );
}

export default App;
