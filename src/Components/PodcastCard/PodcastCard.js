import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./PodcastCardStyle"

import { withNavigation } from "react-navigation";

class PodcastCard extends React.Component {

  onPress = () => {
    const navigation = this.props.navigation;
    const { data, getEpisodes, getDataSelectedPodcast } = this.props;
    getDataSelectedPodcast(data);
    getEpisodes(data.id);
    navigation.navigate("PodcastDetails", { data });
  };

  render() {
    const { data } = this.props;
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={{ flex: 1 }}
              source={{ uri: data.artworkUrl100 }}
              resizeMode="cover"
            />
          </View>
          <View style={styles.infoContainer}>
            <Text
              style={styles.infoText}
              ellipsizeMode="tail"
              numberOfLines={2}
            >
              {data.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}



export default withNavigation(PodcastCard);
