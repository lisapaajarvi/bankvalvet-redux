import React from "react";
import { View, Text, StyleSheet } from "react-native";

function BalanceScreen() {
    return (
        <View style={styles.root}>
            <Text>Balance</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default BalanceScreen;