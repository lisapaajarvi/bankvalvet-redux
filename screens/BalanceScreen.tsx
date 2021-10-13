import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAppSelector } from "../store/store";

function BalanceScreen() {
    const balance = useAppSelector(state => state.balance);
    const transactions = useAppSelector(state => [...state.transactions].reverse());

    return (
        <View style={styles.root}>
            <Text>Balance: {balance}$</Text>
            <Text>Transactions</Text>
            {transactions.map((transaction, index) => (
                <Text key={index}>{transaction}</Text>
            ))}
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