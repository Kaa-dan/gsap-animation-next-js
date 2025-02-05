import Banner from "@/components/home/banner";
import MyWorks from "@/components/home/our-works";
import Services from "@/components/home/services";
import Header from "@/components/shared/header";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <MyWorks />
    </div>
  );
}
