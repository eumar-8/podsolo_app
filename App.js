import React from "react";
import { HomeScreen, PodcastItemScreen }from "./src/Containers";
import { createStackNavigator, createAppContainer } from "react-navigation";

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    PodcastDetails: PodcastItemScreen
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
