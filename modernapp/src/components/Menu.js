import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'react-native-elements'
const Menu = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity
                style={styles.btnStyle}
                onPress={() => { navigation.navigate("Course") }}
            >
                <Icon
                name='stumbleupon'
                type='font-awesome'
                size={30}
                color='black' />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btnStyle}
                onPress={() => { navigation.navigate("About") }}
            >
                <Icon
                name='exclamation-circle'
                type='font-awesome'
                size={30}
                color='black' />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btnStyle}
                onPress={() => { navigation.navigate("Contact") }}
            >
                <Icon
                name='phone'
                type='font-awesome'
                size={30}
                color='black' />
            </TouchableOpacity>
            
            <TouchableOpacity
                style={styles.btnStyle}
                onPress={() => { navigation.navigate("Student") }}
            >
                <Icon
                name='users'
                type='font-awesome'
                size={30}
                color='black' />
            </TouchableOpacity>
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    btnStyle: {

    },
    textStyle: {
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "uppercase"

    }

})