import { FlatList, StyleSheet, Text, View, Image, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
const Course = ({ navigation }) => {
    const [userData, setUserData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);

    const getUserData = async () => {
        try {
            const response = await fetch("https://immortusx.github.io/courseapi/courseapi.json");
            const res = await response.json();
            setUserData(res);
            setIsLoaded(false);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getUserData();
    }, []);
    useEffect(() => {
        console.log(userData);
    }, [userData])

    const courseCard = ({ item }) => {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.courseContainer}>
                    <View>
                        <Image
                            style={styles.cardImage}
                            source={item.image}
                            resizeMode="contain"
                        />
                    </View>
                    <Text style={styles.mainHeader}>{item.title}</Text>
                    <Text style={styles.mainDesc}>{item.description}</Text>
                    <View style={styles.buttonContainer}>
                        <Button title='Course Details'
                            style={styles.buttonStyle}
                            onPress={() => {
                                navigation.navigate("Course Details");
                            }} />
                    </View>
                </View>
            </View>
        )
    }
    return <FlatList
        keyExtractor={(item) => item.id}
        data={userData}
        renderItem={courseCard}
    />

}
export default Course

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "white",
        paddingHorizontal: 20
    },
    courseContainer: {
        padding: 20,
        backgroundColor: "rgba(255, 255, 255, 0.90)",
        textAlign: "center",
        shadowColor: "grey",
        borderRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
        marginVertical: 30


    },
    cardImage: {
        width: "100%",
        height: undefined,
        aspectRatio: 1
    },
    mainHeader: {
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 30,
        color: "midnightblue",
        fontVariant: ["small-caps"]
    },
    mainDesc: {
        padding: 15,
        textAlign: "left",
        fontSize: 20,
        color: "#7d7d7d"
    },
    buttonStyle: {
        fontWeight: "bold",
        borderRadius: 33
    }

})