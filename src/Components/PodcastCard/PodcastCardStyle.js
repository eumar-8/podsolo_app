import {StyleSheet} from "react-native";

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

export default styles