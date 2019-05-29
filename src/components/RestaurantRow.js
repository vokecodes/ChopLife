import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Image
} from "react-native";

export default class RestaurantRow extends Component {
  state = {
    showInfo: false
  };

  infoPressed = () => {
    // this.setState({
    //   showInfo: !this.state.showInfo
    // });
    this.props.navigation.navigate("Info", {
      place: this.props.place
    });
  };

  render() {
    const { place, index } = this.props;
    return (
      <View
        key={place.name}
        style={{ backgroundColor: index % 2 === 0 ? "white" : "#f3f3f7" }}
      >
        <View style={styles.row}>
          <View style={styles.edges}>
            <Text>{index + 1}</Text>
          </View>

          <View style={styles.nameAddress}>
            <Text>{place.name}</Text>
            <Text style={styles.addressText}>{place.address}</Text>
          </View>
          <View style={styles.edges}>
            <TouchableHighlight
              onPress={this.infoPressed}
              style={styles.button}
              underlayColor="#5398DC"
            >
              <Text style={styles.buttonText}>Info</Text>
            </TouchableHighlight>
          </View>
        </View>

        {this.state.showInfo && (
          <View style={styles.info}>
            <Text>Restaurant Info</Text>
            <Image
              source={{
                uri: `https://github.com/nanohop/RestaurantReview/blob/local-and-remote-images/server/shapes/square.png?raw=true`
              }}
              style={{
                flex: 1,
                height: 100
              }}
              reszieMode="contain"
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  },
  edges: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    minWidth: 50
  },
  nameAddress: {
    flex: 8,
    flexDirection: "column"
  },
  addressText: {
    color: "grey"
  },
  button: {
    borderWidth: 1,
    borderColor: "#0066CC",
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: "#fff"
  },
  buttonText: {
    color: "#0066CC",
    fontSize: 12
  },
  info: {
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4
  }
});
