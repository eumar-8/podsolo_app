import { StyleSheet} from "react-native";

 const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        paddingLeft: 20,
        alignItems: "center",
        paddingRight: 20,
        paddingBottom: 20,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        height: 100,
        width: "100%"
    },
    detailsWrapper: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        textAlign: "center"
    },
    artist: {
        color: "rgba(255, 255, 255, 0.72)",
        fontSize: 12,
        marginTop: 4
    },
    button: {
        width: 40,
        height: 40
    },
    moreButton: {
        alignItems: "center",
        justifyContent: "center"
    },
    moreButtonIcon: {
        height: 25,
        width: 25
    }
});

export default styles