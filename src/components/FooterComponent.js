import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import FooterButton from './FooterButton';

const FooterComponent = () => {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.text]}>Get to know your ranking result</Text>
            <View style={[styles.button]}>
                <FooterButton />
            </View>
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#FFD100',
        alignItems: 'center',
    },

    text: {
        textAlign: 'center',
        marginLeft: 20,
        paddingVertical: 10,
        fontSize: 20,
        color: '#202020',
    },

    button: {
        marginBottom: 10,
    }
});

export default FooterComponent;