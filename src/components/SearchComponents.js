import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Modal,
  TextInput,
  FlatList,
  handleSearch,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { Colors } from "../globle/Styles";
import { Icon } from "react-native-elements";
import { useState, useRef } from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { filterData } from "../globle/Data";
import { filter } from "lodash";

const SearchComponents = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([...filterData]);
  const [modalVisible, setModalVisible] = useState(false);
  const [textInputFossued, setTextInputFossued] = useState(true);
  const textInput = useRef(0);
  const contains = ({ name }, query) => {
    if (name.includes(query)) {
      return true;
    }
    return false;
  };

  const handleSearch = (text) => {
    const dataS = filter(filterData, (userSearch) => {
      return contains(userSearch, text);
    });

    setData([...dataS]);
  };
  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <View style={styles.SearchArea}>
          <Icon
            name="search"
            style={styles.searchIcon}
            type="material"
            iconStyle={{ marginLeft: 5 }}
            size={30}
          />
          <Text style={{ fontSize: 15, color: Colors.grey2 }}>
            What are you looking for ?
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.view1}>
            <View style={styles.TextInput}>
              <Animatable.View
                animation={textInputFossued ? "fadeInRight" : "fadeInLeft"}
                duration={400}
              >
                <Icon
                  name={textInputFossued ? "arrow-back" : "search"}
                  onPress={() => {
                    if (textInputFossued) setModalVisible(false);
                    setTextInputFossued(true);
                  }}
                  style={styles.icon2}
                  type="material"
                  iconStyle={{ marginRight: 5 }}
                />
              </Animatable.View>
              <TextInput
                style={{ width: "90%", height: 40 }}
                placeholder=""
                autoFocus={false}
                ref={textInput}
                onFocus={() => {
                  setTextInputFossued(true);
                }}
                onBlur={() => {
                  setTextInputFossued(false);
                }}
                onChangeText={handleSearch}
              />

              <Animatable.View
                animation={textInputFossued ? "fadeInLeft" : ""}
                duration={400}
              >
                <Icon
                  name={textInputFossued ? "cancel" : null}
                  iconStyle={{ color: Colors.grey3 }}
                  type="material"
                  style={{ marginRight: -10 }}
                  onPress={() => {
                    textInput.current.clear();
                    // handleSearch();
                  }}
                />
              </Animatable.View>
            </View>
          </View>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  Keyboard.dismiss;
                  navigation.navigate("SearchResultScreen", {
                    item: item.name,
                  });
                  setModalVisible(false);
                  setTextInputFossued(true);
                }}
              >
                <View style={styles.view2}>
                  <Text style={{ color: Colors.grey2, fontSize: 15 }}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </Modal>
    </View>
  );
};

export default SearchComponents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text1: {
    color: Colors.grey3,
    fontSize: 16,
  },

  TextInput: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 0,
    borderColor: "#86939e",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },

  SearchArea: {
    marginTop: 15,
    marginLeft: 10,
    width: "94%",
    height: 40,
    backgroundColor: Colors.grey5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.grey4,
    flexDirection: "row",
    alignItems: "center",
  },

  searchIcon: {
    fontSize: 24,
    padding: 5,
    color: Colors.grey2,
  },

  view1: {
    height: 70,
    justifyContent: "center",

    paddingHorizontal: 10,
  },

  view2: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },

  icon2: {
    fontSize: 24,
    padding: 5,
    color: Colors.grey2,
  },
  modal: {
    flex: 1,
  },
});
