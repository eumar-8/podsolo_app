import React from "react";
import { HomeScreen, PodcastItemScreen }from "./src/Containers";
import { createStackNavigator, createAppContainer } from "react-navigation";

import { createStore, applyMiddleware } from "redux";
import combinedReducers from "./src/Ducks"
import { Provider } from "react-redux";
import thunk from 'redux-thunk'

// Apply thunk middleware
const middleware = applyMiddleware(thunk)

//create store
const store = createStore(combinedReducers,{}, middleware);

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
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>

        );
  }
}
