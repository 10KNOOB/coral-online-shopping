import Navbar from "./global/Navbar";
import Footer from "./global/Footer";
import Hero from "./pages/Hero";
import Brand from "./pages/Brand";
import PopularItems from "./pages/PopularItems";
import NewProducts from "./pages/NewProducts";
import BrandBanner from "./pages/BrandBanner";
import BestSeller from "./pages/BestSeller";
import Newsletter from "./pages/Newsletter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Brand />
      <PopularItems />
      <NewProducts />
      <BrandBanner />
      <BestSeller />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
