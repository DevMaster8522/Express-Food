import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  FlatList,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import HomeHeader from "../components/HomeHeader";
import { useState } from "react";
import { Colors } from "../globle/Styles";
import { Icon } from "react-native-elements";
import { filterData, restaurantsData } from "../globle/Data";
import { FoodCard } from "../components/FoodCard";
import CountDown from "react-native-countdown-component";

function HomeScreen({ navigation }) {
  const SCREEN_WIDTH = Dimensions.get("window").width;
  const [delivery, setDelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState("0");

  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <View
          style={{ backgroundColor: Colors.cardbackground, paddingBottom: 5 }}
        >
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setDelivery(true);
              }}
            >
              <View
                style={{
                  ...styles.deliveryBtn,
                  backgroundColor: delivery ? Colors.buttons : Colors.grey5,
                }}
              >
                <Text style={styles.DeliveryText}>{"Delivery"}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setDelivery(false);
                navigation.navigate("RestaurantMap");
              }}
            >
              <View
                style={{
                  ...styles.deliveryBtn,
                  backgroundColor: delivery ? Colors.grey5 : Colors.buttons,
                }}
              >
                <Text style={styles.DeliveryText}>{"Pick-Up"}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.filterView}>
          <View style={styles.adressView}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon
                type="material-community"
                name="map-marker"
                color={Colors.grey1}
                size={26}
              />
              <Text style={{ marginLeft: 5 }}>{"22 gali no 3"}</Text>
            </View>
            <View style={styles.clockView}>
              <Icon
                type="material-community"
                name="clock-time-four"
                color={Colors.grey1}
                size={26}
              />
              <Text style={{ marginLeft: 5 }}>{"Now"}</Text>
            </View>
          </View>
          <View
            style={{
              alignItems: "center",
              marginLeft: 20,
            }}
          >
            <Icon
              type="material-community"
              name="tune"
              color={Colors.grey1}
              size={26}
            />
          </View>
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>{"Categories"}</Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            showsVerticalScrollIndicator={false}
            data={filterData}
            keyExtractor={(item) => {
              item.id;
            }}
            extraData={indexCheck}
            renderItem={({ item, index }) => (
              <Pressable
                onPress={() => {
                  setIndexCheck(item.id);
                }}
              >
                <View
                  style={
                    indexCheck === item.id
                      ? { ...styles.smallCardSelected }
                      : { ...styles.smallCard }
                  }
                >
                  <Image
                    style={{ height: 60, width: 60, borderRadius: 30 }}
                    source={item.image}
                    resizeMode="contain"
                  />
                  <View>
                    <Text
                      style={
                        indexCheck === item.id
                          ? { ...styles.smallCardTextSelected }
                          : { ...styles.smallCardText }
                      }
                    >
                      {item.name}
                    </Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>{"Free Delivery Now"}</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Text
            style={{
              marginLeft: 15,
              marginRight: 15,
              fontSize: 16,
              marginTop: 10,
            }}
          >
            {"Options changing in"}
          </Text>
          <CountDown
            until={3600}
            size={14}
            digitStyle={{ backgroundColor: Colors.lightgreen }}
            digitTxtStyle={{ color: Colors.cardbackground }}
            timeToShow={["M", "S"]}
            timeLabels={{ m: "Min", s: "Sec" }}
          />
        </View>
        <View>
          <FlatList
            style={{ marginBottom: 10, marginTop: 10 }}
            horizontal={true}
            data={restaurantsData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>{"Promotions Available"}</Text>
        </View>
        <View>
          <FlatList
            style={{ marginBottom: 10, marginTop: 10 }}
            horizontal={true}
            data={restaurantsData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Restaurants in your Area</Text>
        </View>

        <View style={{ width: SCREEN_WIDTH, paddingTop: 10 }}>
          {restaurantsData.map((item) => (
            <View key={item.id} style={{ paddingBottom: 20 }}>
              <FoodCard
                screenWidth={SCREEN_WIDTH * 0.95}
                images={item.images}
                restaurantName={item.restaurantName}
                farAway={item.farAway}
                businessAddress={item.businessAddress}
                averageReview={item.averageReview}
                numberOfReview={item.numberOfReview}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      {delivery && (
        <View style={styles.floatButton}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("RestaurantMap");
            }}
          >
            <Icon
              name="place"
              type="material"
              size={32}
              color={Colors.buttons}
            />
            <Text style={{ color: Colors.grey2 }}>Map</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

export { HomeScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deliveryBtn: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
  },
  DeliveryText: {
    marginLeft: 5,
    fontSize: 16,
  },
  filterView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  clockView: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    backgroundColor: Colors.cardbackground,
    borderRadius: 10,
    paddingHorizontal: 5,
    marginRight: 10,
  },
  adressView: {
    flexDirection: "row",
    backgroundColor: Colors.grey5,
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginRight: 10,
    marginLeft: 20,
    justifyContent: "space-evenly",
  },
  headerTextView: {
    backgroundColor: Colors.grey5,
    paddingVertical: 2,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.grey2,
    paddingLeft: 10,
  },
  smallCardSelected: {
    borderRadius: 10,
    backgroundColor: Colors.buttons,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  smallCard: {
    borderRadius: 10,
    backgroundColor: Colors.grey5,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  smallCardTextSelected: {
    fontWeight: "normal",
    color: Colors.cardbackground,
  },
  smallCardText: {
    fontWeight: "normal",
    color: Colors.grey2,
  },
  floatButton: {
    position: "absolute",
    bottom: 10,
    right: 15,
    backgroundColor: "white",
    elevation: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
  },
});
