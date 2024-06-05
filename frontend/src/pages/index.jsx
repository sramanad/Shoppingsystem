import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/headers/header";
import HomeHeroSlider from "@/components/hero-banner/home-hero-slider";
import BannerArea from "@/components/banner/banner-area";
import ProductBanner from "@/components/product-details/product-banner";
import Footer from "@/layout/footers/footer";

export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle='Home'/>
      <Header/>
      <HomeHeroSlider/>
      <br /><br />
      <BannerArea/>
      <ProductBanner/>
      <Footer/>
    </Wrapper>
  )
}
