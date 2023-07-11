import React from 'react'
import { StyleSheet } from 'react-native'
import { Pressable, Text, View } from 'react-native'
import colors from '../assets/colors'
import { Ionicons } from '@expo/vector-icons';

const GoalItem = (props) => {
    return (

        <View style={styles.item}>
            <Text style={styles.itemText}>{props.text}</Text>

            <Pressable onPress={props.deleteGoalHandler.bind(this, props.id)}>
                <Ionicons name={"close-outline"} size={25} color={colors.white} />
            </Pressable>
        </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    item: {
        backgroundColor: colors.orange,
        width: "90%",
        marginLeft: "5%",
        borderRadius: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 16,
        paddingHorizontal: 20,
        marginBottom: 16,
    },
    itemText: {
        color: colors.white,
        fontSize: 17,
        fontWeight: "500"
    },
    itemIcon: {
        color: colors.white,
        fontSize: 16,
        fontWeight: "700",
    },
})