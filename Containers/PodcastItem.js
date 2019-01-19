import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { getEpisodes } from "../api";
import AudioCard from "../Components/AudioCard";

export default class PodcastItem extends React.Component {
  state = {
    episodes: false
  };

  data = () => {
    const { navigation } = this.props;
    const data = navigation.getParam("data", {});
    return data;
  };
  static navigationOptions = ({ navigation }) => {
    const data = navigation.getParam("data", { artistName: "" });
    return {
      title: data.artistName,
      headerStyle: {
        backgroundColor: "#30343f"
      },
      headerTintColor: "#fff"
    };
  };

  componentDidMount = () => {
    const { navigation } = this.props;
    const data = navigation.getParam("data", {});
    this.setState({ data }, () => {
      console.log("***************", data);
    });
    //console.log("***************", data);
    getEpisodes(data.id, 12).then(episodes => {
      this.setState({ episodes }, () => {
        console.log("#######################", this.state.episodes[0]);
      });
    });
  };

  renderContent = () => {
    const { navigation } = this.props;
    const data = navigation.getParam("data", {});
    // if (this.state.episodes !== false) {
    //   audio(this.state.episodes.enclousures[0].url);
    // }

    return (
      <View>
        <LinearGradient colors={["#3a6186", "#89253e"]}>
          <View style={styles.imageContainer}>
            <Image
              style={{ flex: 1 }}
              source={{ uri: data.artworkUrl100 }}
              resizeMode="contain"
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoName}>{data.name}</Text>

            <Text style={styles.infoEpisodes}>12 Episodes</Text>
          </View>
          {/* <View style={styles.playContainer}> */}
          <AudioCard />
          {/* </View> */}
        </LinearGradient>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderContent()}
        {/* <Text>{data.name}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageContainer: {
    height: 192,
    marginTop: 20,
    borderRadius: 4,
    overflow: "hidden"
  },
  infoContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 88
  },
  playContainer: {
    height: 100
  },
  infoName: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  infoArtistName: {
    color: "#ffffff",
    marginBottom: 10,
    fontSize: 17,
    fontWeight: "bold"
  },
  infoEpisodes: {
    fontSize: 17,
    color: "#ffff99"
  }
  // playContainer: {
  //   flex: 1,
  //   flexDirection: "row"
  // }
});
