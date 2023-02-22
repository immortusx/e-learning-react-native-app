import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { color } from 'react-native-elements/dist/helpers';


const UserData = () => {
  const [userData, setUserData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const getUserData = async () => {
    try {
      const response = await fetch("https://thapatechnical.github.io/userapi/users.json");
      const res = await response.json();
      setUserData(res);
      setIsLoaded(false);
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    console.log(userData);
  }, [userData]);


  const showData = ({ item }) => {
    return (
      <View style={styles.userCard}>
        <View style={styles.dataContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageView}
              source={{ uri: item.image }}
              resizeMode="contain" />
          </View>
          <View style={styles.mainContent}>
            <View style={styles.bioDataContainer}>
              <Text style={styles.bioHeader}>Bio Data</Text>
              <Text style={styles.idNumber}>{item.id < 10 ? `#0${item.id}` : `#{item.id}`}</Text>
            </View>
            <Text style={styles.myName}>Name : {item.name}</Text>
            <Text style={styles.myName}>Mobile : {item.mobile}</Text>
            <Text style={styles.myName}>Email : {item.email}</Text>
            <Text style={styles.myName}>Website : {item.website}</Text>
          </View>
        </View>
      </View>
    )
  }
  return <FlatList
    keyExtractor={(item) => item.id}
    data={userData}
    renderItem={showData}
  />
  {/**
    <View>
       
      {userData.map((data) => {
        return <View>
          <Text>{data.name}</Text>
          <Text>{data.email}</Text>
        </View>
      })}
      
    </View>
    */}

}

export default UserData;

const styles = StyleSheet.create({
  userCard: {
    backgroundColor: "white",
    paddingHorizontal: 20
  },
  dataContainer: {
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.90)",
    textAlign: "center",
    shadowColor: "grey",
    borderRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
  },
  imageContainer: {
    marginVertical: 0.2
  },
  imageView: {
    width: "100%",
    height: undefined,
    aspectRatio: 1
  },
  bioDataContainer: {
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "space-evenly"

  },
  bioHeader: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white"
  },
  idNumber: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white"
  },
  mainContent: {
    padding: 20,
    lineHeight: 0.5,
    textAlign: "left",
    backgroundColor: "black",
  },
  myName: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "500",
    color: "white",
    marginBottom: 10
  }
})