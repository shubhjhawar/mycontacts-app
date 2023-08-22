import { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import jwtDecode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import styles from '../../styles/search';

const Home = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [display, setDisplay] = useState(false);
  const [apiToken, setApiToken] = useState(null);
  const [data, setData] = useState([]);
  const [isData, setIsData] = useState(false);

  useEffect(() => {
    const getUserInfo = async () => {
      const token = await AsyncStorage.getItem("AccessToken");
      setApiToken(token);
      const decodedToken = jwtDecode(token);
      setUsername(decodedToken.user.username[0].toUpperCase());
    }
  
    getUserInfo();
    
  }, [])

  useEffect(() => {
    const getContacts = async () => {
      try {
        const response =  await axios.get(
          "http://192.168.0.16:5001/api/contacts",
          {
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiToken}`
            }
          }
        )
        setData(response.data);
        setIsData(true);
        // console.log("data fetched")
      } catch(error) {
        console.log(error);
        setIsData(false);
      }
    }

    getContacts();
    // console.log(data);

  }, [isData, data])
  

  const handleLogout = async () => {
    console.log("logout button clicked")
    await AsyncStorage.clear();
    router.push('/');
  }

  const navButton = () => {
    return(
        <TouchableOpacity style={styles.userBtn} onPress={() => setDisplay((display) => !display)}>
           <Text style={{fontSize: 18,}}>{username}</Text>
        </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen 
        options = {{
          headerStyle: {backgroundColor: "#87CEEB"},
          headerBackVisible:false,
          headerTitle:"",
          headerRight: navButton
        }}
      />
      <View>
        {display && (
          <TouchableOpacity style={styles.logoutContainer} onPress={handleLogout}>
            <Text style={{fontSize: 20}}>Logout</Text>
          </TouchableOpacity>
        )}
      </View>
      <ScrollView >
        <View style={styles.container}>
          <Text style={styles.heading}>My Contacts</Text>
        </View>
        {/* <FlatList 
          // data={data}
          data={[1,2,4,5,6,7,8,9]}
          renderItem={({item})=>(
            <Text >{item}</Text>
          )}
          keyExtractor={item => item.toString()}
          
        /> */}
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home