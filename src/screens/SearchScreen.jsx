import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import SearchComponents from "../components/SearchComponents";
import { filterData2 } from "../globle/Data";
import { Colors } from "../globle/Styles";
const SCREEN_WIDTH = Dimensions.get("window").width;
const SearchScreen = () => {
  return (
    <View>
      <SearchComponents />
      <View>
        <FlatList
          style={{ marginBottom: 1 }}
          data={filterData2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View style={styles.imageView}>
                <ImageBackground
                  style={styles.image}
                  source={item.image}
                  // resizeMode="contain"
                >
                  <View style={styles.textView}>
                    <Text style={{ color: Colors.cardbackground }}>
                      {item.name}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          )}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          ListHeaderComponent={
            <Text style={styles.listHeader}> Top categories</Text>
          }
        />
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  imageView: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN_WIDTH * 0.4475,
    height: SCREEN_WIDTH * 0.4475,
    marginLeft: SCREEN_WIDTH * 0.035,
    marginBottom: SCREEN_WIDTH * 0.035,
  },
  image: {
    height: SCREEN_WIDTH * 0.4475,
    width: SCREEN_WIDTH * 0.4475,
    borderRadius: 10,
  },

  listHeader: {
    fontSize: 20,
    color: Colors.grey2,
    paddingBottom: 10,
    marginLeft: 12,
    fontWeight: "700",
    alignSelf: "center",
    marginTop: 10,
  },

  textView: {
    height: SCREEN_WIDTH * 0.4475,
    width: SCREEN_WIDTH * 0.4475,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(52, 52, 52,0.3)",
  },
});
