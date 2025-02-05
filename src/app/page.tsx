import Banner from "@/components/home/banner";
import Footer from "@/components/home/footer";
import MyWorks from "@/components/home/our-works";
import Results from "@/components/home/resuts";
import Services from "@/components/home/services";
import Header from "@/components/shared/header";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <MyWorks />
      <Results />
      <Footer />
    </div>
  );
}
