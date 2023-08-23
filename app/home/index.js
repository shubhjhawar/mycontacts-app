import { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import jwtDecode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ContactCard from '../../components/ContactCard';
import AddContact from '../../components/AddContact';
import { useIsFocused } from '@react-navigation/native';

import styles from '../../styles/search';

const Home = () => {
  const router = useRouter();
  const isFocused = useIsFocused();
  const [username, setUsername] = useState("");
  const [display, setDisplay] = useState(false);
  const [apiToken, setApiToken] = useState(null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUserInfo = async () => {
      const token = await AsyncStorage.getItem("AccessToken");
      const decodedToken = jwtDecode(token);
      setUsername(decodedToken.user.username[0].toUpperCase());
    }
  
    getUserInfo();
    
  }, [])

  const getContacts = async () => {
    try {
      await fetch('http://192.168.0.16:5001/api/contacts', {
        method:"GET",
      headers:{
        'Authorization': 'Bearer ' + apiToken
      }
    })
    .then((response) => {
      if(!response.ok)
      {
        return response.json().then(data => {
          console.log(data);
        })
      } else {
        return response.json().then(data => {
          setData(data);
        })
      }
    })
    } catch {

    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {

    const getToken = async () => {
      const token = await AsyncStorage.getItem("AccessToken");
      setApiToken(token);
    }


    getToken();

    if(apiToken)
    {
      setIsLoading(true);

      setTimeout(() => {
        getContacts();
      }, 1000)
    }

  }, [apiToken, isFocused])

  const handleLogout = async () => {
    console.log("logout button clicked")
    await AsyncStorage.clear();
    router.push('/');
  }

  // console.log(data);

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
      <View style={styles.container}>
        <View >
          <Text style={styles.heading}>My Contacts</Text>
        </View>
        {isLoading ? (
          <ActivityIndicator size="large" colors="gray"/>
        ): data.length === 0 ? (
          <Text>You do not have any contacts at the moment!</Text>
        ): (
          <FlatList
          data={data}
          renderItem={({item}) => <ContactCard name={item.name} email={item.email} phone={item.phone} id={item._id}/>}
          keyExtractor={item => item?._id}
          />
        )}
      </View>
      <View style={styles.footerWrapper}>
        <AddContact />
      </View>
    </SafeAreaView>
  )
}

export default Home