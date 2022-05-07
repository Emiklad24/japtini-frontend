import CategoriesBanner from "@components/CategoriesBanner/CategoriesBanner";
import ContactBanner from "@components/ContactBanner/ContactBanner";
import FeaturedProductsBanner from "@components/FeaturedProductsBanner/FeaturedProductsBanner";
import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import LoanBanner from "@components/LoanBanner/LoanBanner";
import OffersBanner from "@components/OffersBanner/OffersBanner";
import SalesBanner from "@components/SalesBanner/SalesBanner";

export default function Home() {
  return (
    <>
      <Header />
      <CategoriesBanner />
      <ContactBanner />
      <SalesBanner />
      <LoanBanner />
      <FeaturedProductsBanner />
      <OffersBanner />
      <Footer />
    </>
  );
}

/*"husky": {
      "hooks": {
        "pre-commit": "lint-staged",
        "pre-push": "yarn lint:fix && yarn format && yarn build && git add -A ."
      }
    },}*/
