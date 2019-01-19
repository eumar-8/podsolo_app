import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

import { withNavigation } from "react-navigation";

class PodcastCard extends React.Component {
  onPress = () => {
    const navigation = this.props.navigation;
    const { data } = this.props;
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

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginBottom: 16,
    justifyContent: "flex-start",
    alignItems: "stretch",
    borderRadius: 4,
    overflow: "hidden"
  },
  imageContainer: {
    height: 180
  },
  infoContainer: {
    paddingVertical: 10,
    paddingHorizontal: 1,
    //justifyContent: "center",
    //alignItems: "center",
    height: 88
    //backgroundColor: "#437883"
  },
  infoText: {
    color: "floralwhite",
    fontSize: 16,
    fontWeight: "300"
  }
});

export default withNavigation(PodcastCard);
