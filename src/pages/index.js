import CategoriesBanner from "@components/CategoriesBanner/CategoriesBanner";
import ContactBanner from "@components/ContactBanner/ContactBanner";
import FeaturedProductsBanner from "@components/FeaturedProductsBanner/FeaturedProductsBanner";
import Layout from "@components/Layout/Layout";
import LoanBanner from "@components/LoanBanner/LoanBanner";
import OffersBanner from "@components/OffersBanner/OffersBanner";
import SalesBanner from "@components/SalesBanner/SalesBanner";
import { indexServerSideEffect } from "src/PageServerSideEffects/index-SeverSideEffects";

export default function Home() {
  return (
    <Layout>
      <>
        <CategoriesBanner />
        <ContactBanner />
        <SalesBanner />
        <LoanBanner />
        <FeaturedProductsBanner />
        <OffersBanner />
      </>
    </Layout>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      dehydratedState: await indexServerSideEffect(),
    },
  };
}
