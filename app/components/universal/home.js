import { ScrollView, View } from "react-native";
import LocationCard from "./locationCard";
import Header from "./header";
import MostPopular from "./mostPopular";
import OrderStatusCard from "./orderStatusCard";
import Banner from "./banner";
import CategoryTabs from "./imageTabs";
import Tabs from "./tabs";
import { ProductCard } from "./cards";
import Aed1100 from "./aed1-100";

import BottomNavBar from "./bottomNavBar";
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
