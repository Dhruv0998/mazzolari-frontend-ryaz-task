import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Bestsellers from "./components/Bestsellers";
import Explore from "./components/Explore";
import SimilarProducts from "./components/SimilarProducts";
import Latest from "./components/Latest";
import Offer from "./components/Offer";
import AllProducts from "./components/AllProducts";
import ExploreCatalog from "./components/ExploreCatalog";
import ShopNow from "./components/ShopNow";
import Footer from "./components/Footer";

function App() {
  return (

    <div className="App">
      <Navbar />
      <Header />
      <Categories />
      <Bestsellers />
      <Explore />
      <SimilarProducts />
      <Latest />
      <Offer />
      <AllProducts />
      <ExploreCatalog />
      <ShopNow />
      <Footer />
    </div>

  );
}

export default App;
