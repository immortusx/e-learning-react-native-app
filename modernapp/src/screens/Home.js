import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Menu from '../components/Menu';

const Home = () => {
    const description = "An online learning platform is a webspace or portal for educational content and resources that offers a student everything they need in one place: lectures, ...";
    return (
        <View>
            <View style={styles.viewContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.imageStyle} source={require("../../assets/cover.jpg")} />
                    <Text style={[styles.welcomeStyle, styles.commonText]}>Welcome</Text>
                    <Text style={[styles.learingStyle, styles.commonText]}>e-Learning</Text>
                    <Text style={styles.descStytle}>{description}</Text>
                </View>
            </View>
            <View style={{backgroundColor: "white"}}>
                <View style={styles.lineStyle}></View>
                <Menu />
                <View style={ {
                    marginVertical: 5
                }}></View>
            </View>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    viewContainer: {
        backgroundColor: "white"
    },
    imageContainer: {
        marginHorizontal: 10
    },
    imageStyle: {
        marginVertical: 60,
        height: undefined,
        width: "100%",
        aspectRatio: 1,
        borderRadius: 10
    },
    commonText: {
        textAlign: "center",
        fontVariant: ["small-caps"],
        fontWeight: "bold"
    },
    welcomeStyle: {
        fontSize: 40,
        color: "purple"
    },
    learingStyle: {
        fontSize: 60,
        color: "pink"
    },
    descStytle : {
        padding: 10,
        alignSelf: "center",
        fontWeight: "bold",
        fontStyle: "italic",
        padding: 20
    },
    lineStyle: {
        width: "95%",
        borderWidth: 1,
        borderColor: "slategray",
        alignSelf: "center",
        marginBottom: 10
    }




})