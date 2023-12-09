import React from "react";
import {
    Text,
    View,
    StyleSheet
} from "react-native"

export default function ProductInfoScreen() {
    return (
        <View style={styles.container}>
            <Text>ProductInfoScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})