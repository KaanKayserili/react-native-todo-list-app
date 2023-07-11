import React, { useState } from 'react';
import { Text } from 'react-native';
import { Pressable } from 'react-native';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';
import colors from '../assets/colors';
import { TouchableOpacity } from 'react-native';

const GoalInput = (props) => {

    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    function closeGoalHandler() {
        setEnteredGoalText("")
        props.setVisible(false);
    }

    return (
        <Modal visible={props.visible} animationType="slide" transparent={true}>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={goalInputHandler}
                        value={enteredGoalText}

                    />
                    <View style={styles.buttonHolder}>
                        <TouchableOpacity onPress={addGoalHandler}>
                            <Text style={styles.buttonText}>Add Goal</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={closeGoalHandler}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        width: "70%",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: colors.darkGray,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 10,
        paddingTop: "12.5%",
        paddingBottom: "7.5%"
    },
    textInput: {
        width: "82.5%",
        borderWidth: 1.5,
        borderColor: colors.lightgray,
        borderRadius: 100,
        paddingVertical: 10,
        paddingHorizontal: 16,
        color: colors.lightgray,
        fontSize: 20,
    },
    buttonHolder: {
        color: colors.orange,
        fontSize: 20,
        marginTop: "5%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: colors.orange,
        fontWeight: "600",
        fontSize: 16.5,
        padding: 10
    },
})