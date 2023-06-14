import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex justify-center w-full whole overflow-hidden">
      <div className="App text-white">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
