import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { withdraw } from '../store/bankActions';
import { useAppDispatch } from '../store/store';

function WithdrawalScreen() {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState<number>();

    const onSave = () => {
        if (!value) return;
        // dispatch({ type: "WITHDRAWAL", payload: value });
        dispatch(withdraw(value));
    }

    return (
        <View style={styles.root}>
            <Text>Withdrawal</Text>
            <TextInput
                keyboardType="number-pad"
                placeholder="Amount"
                value={value ? String(value): undefined}
                onChangeText={(value) => setValue(Number(value))}
            />
            <Button title="Save" onPress={onSave}/>
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