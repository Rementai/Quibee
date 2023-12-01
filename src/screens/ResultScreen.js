import React from "react";
import { View, StyleSheet } from "react-native";

import HeaderComponent from "../components/HeaderComponent";

function ResultScreen({}) {
    return (
        <View style={(styles.main)}>
            <HeaderComponent screenName="Result" />
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#202020',
    },
});

export default ResultScreen;