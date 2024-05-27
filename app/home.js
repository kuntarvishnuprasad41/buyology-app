import { ScrollView, View } from "react-native";
import LocationCard from "./components/universal/locationCard";
import Header from "./components/universal/header";
import MostPopular from "./components/universal/mostPopular";
import OrderStatusCard from "./components/universal/orderStatusCard";
import Banner from "./components/universal/banner";
import CategoryTabs from "./components/universal/imageTabs";
import Tabs from "./components/universal/tabs";
import { ProductCard } from "./components/universal/cards";
import Aed1100 from "./components/universal/aed1-100";

import BottomNavBar from "./components/universal/bottomNavBar";
import { useState } from "react";

function home() {
  const [popcat, setpopCat] = useState([
    { id: 0, name: "All", icon: "building-o", colors: "#155C9E" },
    { id: 6, name: "Mobiles", icon: "tshirt", colors: "#155C9E" },
    { id: 4, name: "Desktops", icon: "mobile", colors: "#155C9E" },
    { id: 5, name: "Accessories", icon: "desktop", colors: "#d4d4d4" },
    { id: 11, name: "Tablets", icon: "cogs", colors: "#155C9E" },
  ]);
  const [activeCat, setactiveCat] = useState("All");
  const categorySearch = (data) => {
    console.log(data);
  };

  return (
    <View>
      <ScrollView>
        <LocationCard location="Sharjah, UAE" />
        <Header />
        <Banner width="100%" height={150} image="" />

        <CategoryTabs
          data={popcat}
          bgcolor="transparent"
          tabVal={activeCat}
          settabData={categorySearch}
        />
        <Tabs
          data={popcat}
          bgcolor="transparent"
          tabVal={activeCat}
          heading={"true"}
          settabData={categorySearch}
        />
        <ProductCard
          data={popcat}
          bgcolor="transparent"
          tabVal={activeCat}
          settabData={categorySearch}
        />

        <Banner width="100%" height={150} image="a" />

        <MostPopular
          data={popcat}
          bgcolor="transparent"
          tabVal={activeCat}
          settabData={categorySearch}
        />

        <OrderStatusCard />

        <Aed1100
          data={popcat}
          bgcolor="transparent"
          tabVal={activeCat}
          settabData={categorySearch}
        />
      </ScrollView>
      <BottomNavBar />
    </View>
  );
}

export default home;
