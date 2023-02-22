import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Icon } from 'react-native-elements';
const CourseDetails = () => {
    const [userData, setUserData] = useState([]);
    const getUserData = async () => {
        try {
            const response = await fetch("https://immortusx.github.io/courseapi/courseapi.json");
            const res = await response.json();
            setUserData(res);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getUserData()
    }, []);

    useEffect(() => {
        console.log(userData);
    }, [userData]);
    const courseCard = ({ item }) => {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.detailsContainer}>
                    <Text style={styles.courseHeader}>Course Plan</Text>
                    <Text style={styles.courseName}>{item.title}</Text>
                    <Text style={styles.mainHeader}>{item.course1}</Text>
                    <Text style={styles.mainHeader}>{item.course2}</Text>
                    <Text style={styles.mainHeader}>{item.course3}</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.priceStyle}><Icon
                            name='rupee'
                            type='font-awesome'
                            size={25}
                            color="white" /> {item.price}</Text>
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

export default CourseDetails

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "white",
        paddingHorizontal: 20
    },
    detailsContainer: {
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
    courseHeader: {
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 30,
        color: "midnightblue",
        fontVariant: ["small-caps"]
    },
    mainHeader: {
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 18,
        color: "cadetblue",
        fontVariant: ["small-caps"]
    },

    priceStyle: {
        color: "white",
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 25,
        fontVariant: ["small-caps"]
    },
    priceContainer: {
        marginVertical: 20,
        backgroundColor: "#004269",
        marginHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 33
    },
    courseName: {
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 18,
        color: "midnightblue",
        fontVariant: ["small-caps"],
        marginBottom: 20
    }
})