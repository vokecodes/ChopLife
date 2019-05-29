import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
  Image
} from "react-native";
import axios from "axios";
import Header from "components/Header";
import RestaurantRow from "components/RestaurantRow";
import PizzaImage from "images/pizza.png";

const restaurants = [
  { name: "Fancy Cafe", address: "123, Mars City" },
  { name: "Dojo Cafe", address: "123, Venus City" },
  { name: "Cruxie Cafe", address: "123, Jupit City" },
  { name: "Tony Diner", address: "123, Mars City" },
  { name: "Vera Cafe", address: "123, Venus City" },
  { name: "Guity Kitche", address: "123, Jupit City" },
  { name: "Huil Cafe", address: "123, Mars City" },
  { name: "Thanos Cafe", address: "123, Venus City" },
  { name: "Boyo Cafe", address: "123, Jupit City" },
  { name: "Jim Kitchen", address: "123, Mars City" },
  { name: "Katie Diner", address: "123, Venus City" },
  { name: "Zen Cafe", address: "123, Jupit City" },
  { name: "Kano Cafe", address: "123, Mars City" },
  { name: "Ding Cafe", address: "123, Venus City" },
  { name: "Kanji Cafe", address: "123, Jupit City" },
  { name: "Lex Cafe", address: "123, Mars City" },
  { name: "Louis Diner", address: "123, Venus City" },
  { name: "Mother Cafe", address: "123, Jupit City" },
  { name: "Fries Cafe", address: "123, Mars City" },
  { name: "Boki Cafe", address: "123, Venus City" }
];

export default class RestaurantList extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    search: null
    // restaurants: []
  };

  // componentDidMount() {
  //   axios
  //     .get("http://localhost:5500/restaurants")
  //     .then(result => this.setState({ restaurants: result.data }));
  // }

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <View
          style={{
            marginTop: 30,
            alignItems: "center"
          }}
        >
          <Image source={PizzaImage} />
        </View>

        <Header />

        <TextInput
          style={styles.input}
          placeholder="Live Search"
          onChangeText={text => {
            this.setState({ search: text });
          }}
          value={this.state.search}
        />

        <FlatList
          data={restaurants.filter(place => {
            return (
              !this.state.search ||
              place.name
                .toLowerCase()
                .indexOf(this.state.search.toLowerCase()) > -1
            );
          })}
          renderItem={({ item, index }) => (
            <RestaurantRow
              place={item}
              index={index}
              navigation={this.props.navigation}
            />
          )}
          keyExtractor={item => item.name}
          initialNumToRender={16}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f5f5f5"
  }
});
