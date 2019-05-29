import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";

export default class RestaurantInfo extends Component {
  static navigationOptions = {
    title: "Restaurant Info",
    headerStyle: {
      backgroundColor: "#0066CC",
      color: "#FFF"
    },
    headerTintColor: "#FFF",
    headerTitleStyle: {
      color: "#FFF"
    }
  };

  render() {
    const place =
      this.props.navigation.state.params &&
      this.props.navigation.state.params.place;

    return (
      <ScrollView style={styles.root}>
        <View style={styles.infoHeader}>
          <Image
            source={{
              uri: `https://github.com/nanohop/RestaurantReview/blob/local-and-remote-images/server/shapes/square.png?raw=true`
            }}
            style={styles.image}
            resizeMode="contain"
          />

          <View style={styles.info}>
            <Text style={styles.name}> {place.name}</Text>
            <Text style={styles.address}> {place.address} </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}> Add Review </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff"
  },
  infoHeader: {
    flexDirection: "row"
  },
  info: {
    marginTop: 20
  },
  name: {
    fontSize: 24
  },
  address: {
    color: "grey",
    marginBottom: 5
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  button: {
    borderWidth: 1,
    borderColor: "#0066cc",
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: "#fff",
    marginTop: 10
  },
  buttonText: {
    color: "#0066cc",
    fontSize: 12,
    textAlign: "center"
  }
});
