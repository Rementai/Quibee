import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FooterButton = () => {
    const navigation = useNavigation();

    const goToResultScreen = () => {
        navigation.navigate('Results');
    };

    return (
        <TouchableOpacity onPress={goToResultScreen} style={[styles.container]}>
            <Text style={[styles.text]}>Check!</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2D2C2C',
        width: 130,
        borderWidth: 3,
        borderRadius: 6,
        borderColor: '#171717',
    },

    text: {
        textAlign: 'center',
        color: '#FAF9F6',
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontWeight: "bold",
    },
});

export default FooterButton;
