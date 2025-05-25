import BestService from "../../components/BestServices/BestService";
import HeroCTA from "../../components/CallToAction/HeroCTA";
import FeaturedPosts from "../../components/FeaturedPost/FeaturedPosts";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/NavBar/Navbar";
import ProductGridPage from "../../components/ProductSection/ProductCard";
import Testimonials from "../../components/ReviewSection/ReviewSection";
import HeroPage from "../../LandingPage/HeroPage/HeroPage";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroPage />
      <ProductGridPage />
      <BestService />
      <FeaturedPosts />
      <Testimonials />
      <HeroCTA />
      <Footer />
    </div>
  );
}

export default Home;
