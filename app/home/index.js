import { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import jwtDecode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import styles from '../../styles/search';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

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
      const decodedToken = jwtDecode(token);
      setUsername(decodedToken.user.username[0].toUpperCase());
    }
  
    getUserInfo();
    
  }, [])

  const getContacts = async () => {
    await fetch('http://192.168.0.16:5001/api/contacts', {
      method:"GET",
      headers:{
        'Authorization': 'Bearer ' + apiToken
      }
    })
    .then((response) => {
      if(!response.ok)
      {
        console.log("not ok")
        return response.json().then(data => {
          console.log(data);
        })
      } else {
        console.log("ok");
        return response.json().then(data => {
          setData(data);
        })
      }
    })
  }

  useEffect(() => {

    const getToken = async () => {
      const token = await AsyncStorage.getItem("AccessToken");
      setApiToken(token);
      console.log(apiToken);
    }


    getToken();

    if(apiToken)
    {
      console.log("api call")
      getContacts();
    }

  }, [apiToken])
  
  

  // useEffect(() => {
  //   const MAX_RETRIES = 3; // Maximum number of retries
  //   let retries = 0;
  
  //   const getContactsWithRetry = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://192.168.0.16:5001/api/contacts",
  //         {
  //           headers: {
  //             'Authorization': 'Bearer ' + apiToken
  //           }
  //         }
  //       );
  //       console.log("API call successful");
  //       setData(response.data);
  //     } catch (error) {
  //       console.log("API call failed:", error);
  //       if (retries < MAX_RETRIES) {
  //         const delay = Math.pow(2, retries) * 1000; // Increase delay exponentially
  //         console.log(`Retrying in ${delay}ms...`);
  //         retries++;
  //         setTimeout(getContactsWithRetry, delay);
  //       } else {
  //         console.log("Max retries reached. Unable to fetch data.");
  //       }
  //     }
  //   };
  
  //   if (!isData) {
  //     getContactsWithRetry();
  //   }
  // }, []);
  
  

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
      <View >
        <View >
          <Text style={styles.heading}>My Contacts</Text>
        </View>
        <FlatList
        data={data}
        renderItem={({item}) => <Item title={item.email || "herere"} />}
        keyExtractor={item => item?._id}
      />
        
      </View>
    </SafeAreaView>
  )
}

export default Home