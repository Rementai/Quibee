import React from "react";
import { View, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

const CustomDrawer = props => {
    return (
      <View style={{flex: 1}}>
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={{backgroundColor: '#333533'}}>
          <View
            style={{padding: 30}}>
            <Text
              style={{
                color: '#FAF9F6',
                fontSize: 28,
                fontWeight: 'bold',
                marginBottom: 5,
              }}>
              Quibee
            </Text>
          </View>
          <View style={{ borderTopWidth: 4, borderTopColor: '#FFD100'}}></View>
          <View style={{flex: 1, backgroundColor: '#202020', paddingTop: 10, paddingBottom: 540}}>
            <DrawerItemList {...props} />
          </View>
        </DrawerContentScrollView>
      </View>
    );
  };
  
  export default CustomDrawer;