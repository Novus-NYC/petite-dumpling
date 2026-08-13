import Header from "@/lib/components/Header";
import FirstSection from "@/lib/components/FirstSection";
import MenuPosterSection from "@/lib/components/MenuPosterSection";
import MenuSection from "@/lib/components/MenuSection";
import OrderFeaturesSection from "@/lib/components/OrderFeaturesSection";
import LocationsSection from "@/lib/components/LocationsSection";

export default function Home() {
  return (
    <>
      <Header />
      <FirstSection />
      <MenuSection />
      <MenuPosterSection />
      <LocationsSection />
      <OrderFeaturesSection />
    </>
  );
}
