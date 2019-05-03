import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    imageContainer: {
        height: 192,
        marginTop: 15,
        borderRadius: 4,
        overflow: "hidden",

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
        color: "#ffff99",
        marginBottom:20
    }

});


export default styles