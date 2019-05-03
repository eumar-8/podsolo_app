import React from "react";
import HomeScreen from "./src/Containers/HomeScreen";
import PodcastItem from "./src/Containers/PodcastItem";
import { createStackNavigator, createAppContainer } from "react-navigation";

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    PodcastDetails: PodcastItem
  },
  {
    initialRouteName: "Home"
  }
);
const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
