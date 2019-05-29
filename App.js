import React, { Component } from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomNavigator,
  TabNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome5";
import RestaurantList from "components/RestaurantList";
import RestaurantInfo from "components/RestaurantInfo";
import About from "components/About";

const RootStack = createStackNavigator({
  Home: {
    screen: RestaurantList
  },
  Info: {
    screen: RestaurantInfo
  }
});

const App = createAppContainer(RootStack);

// const MainNavigator = TabNavigator(
//   {
//     RootStack: { screen: RootStack },
//     About: { screen: About }
//   },
//   {
//     navigationOptions: ({ navigation }) => {
//       return {
//         tabBarIcon: ({ tintColor }) => {
//           const route = navigation.state.routeName;
//           const name = {
//             List: "list",
//             About: "info-circle"
//           }[route];
//           return <Icon name={name} color={tintColor} size={22} />;
//         }
//       };
//     }
//   }
// );

// export default class Tab extends Component {
//   render() {
//     return <MainNavigator />;
//   }
// }

//     return <MainNavigator />;
//   }
// }

export default App;
