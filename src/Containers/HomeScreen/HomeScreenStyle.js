import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#e1e8ee"
    },
    wrapper: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start"
    },
    item: {
        width: "50%" // is 50% of container width
    }
});

export  default styles