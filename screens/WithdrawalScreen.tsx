import React from "react";
import { View, Text, StyleSheet } from "react-native";

function WithdrawalScreen() {
    return (
        <View style={styles.root}>
            <Text>Withdrawal</Text>
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

export default WithdrawalScreen;