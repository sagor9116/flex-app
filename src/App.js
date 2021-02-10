import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";


function App() {
  return (
    <>
      <Navbar />
      <div className="">
        <HomePage />
        <Footer />
      </div>      
    </>
  );
}

export default App;
