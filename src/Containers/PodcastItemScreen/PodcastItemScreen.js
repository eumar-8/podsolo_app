import React from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { getEpisodes } from "../../api/api";
import { AudioCard } from "../../Components";
import styles from "./PodcastItemScreenStyle"

export default class PodcastItemScreen extends React.Component {
  state = {
    episodes: false,
    episodePlaying: null
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
    this.setState({ data });
    getEpisodes(data.id).then(episodes => {
      this.setState({ episodes });
    });
  };

  renderContent = () => {
    const { navigation } = this.props;

    return (
      <View>
        <LinearGradient
          colors={["#3a6186", "#89253e"]}
          style={{ height: "100%" }}
        >
          {this.state.episodes &&
            this.state.episodes.length > 0 &&
            this.renderEpisodeList()}
          <AudioCard
            episode={this.state.episodePlaying || this.state.episodes[0]}
          />
        </LinearGradient>
      </View>
    );
  };

  renderPodcastTitle = () => {
    const data = this.props.navigation.getParam("data", {});
    return (
      <View>
        <View style={styles.imageContainer}>
          <Image
            style={{ flex: 1 }}
            source={{ uri: data.artworkUrl100 }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.infoContainer}>
          <Text  style={styles.infoName}>{data.name}</Text>
          {this.state.episodes && this.state.episodes.length > 0 && (
            <Text style={styles.infoEpisodes}>{`${
              this.state.episodes.length
            } Episodes`}</Text>
          )}
        </View>
      </View>
    );
  };

  renderEpisodeList = () => {
    return (
      <FlatList
        ListHeaderComponent={this.renderPodcastTitle()}
        style={{ marginBottom: 100 }}
        data={this.state.episodes.map((item, i) => ({
          ...item,
          key: "key" + i
        }))}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                padding: 20,
                justifyContent: "center",
                borderBottomColor: "#ccc",
                borderBottomWidth: 1,
                borderTopColor: index === 0 && "#ccc",
                borderTopWidth: index === 0 && 1
              }}
            >
              <TouchableOpacity onPress={this.playEpisode.bind(this, item)}>
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    );
  };

  playEpisode = episode => {
    this.setState({ episodePlaying: episode });
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

