import {useState} from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { useRouter } from 'expo-router';

import styles from '../styles/search';
import trash from "../assets/icons/trash.png";

const ContactCard = ({name, email, phone, id}) => {
  const router = useRouter();
  const [apiToken, setApiToken] = useState();
  const [error, setError] = useState();
  
  const DeleteContact = async () => {
    try {
        const response = await axios.delete(
            `http://192.168.0.16:5001/api/contacts/${id}`,
            {
              headers: {
                'Authorization': 'Bearer ' + apiToken
              }
            }
          );

        if(response.status===200)
        {
            router.push('/home');
        }
        else if(response.status===400)
        {
            setError(response.data.message)
        }
      } catch (error) {
        console.error('Error:', error);
        setError("Something went wrong, try again!")
      }
    }


  const handleDelete = () => {
      const getToken = async () => {
          const token = await AsyncStorage.getItem("AccessToken");
          setApiToken(token);
      }
    
      getToken();

      // if(apiToken)
      // {
      //   DeleteContact();
      // }
      console.log("delete button clicked")
  }

  return (
    <SafeAreaView style={styles.contactWrapper}>
        <View style={styles.contactContainer}>
            <Text style={styles.contactName}>{name}</Text>
            <Text style={styles.contactEmail}>Email - {email}</Text>
            <Text style={styles.contactPhone}>Contact Number - {phone}</Text>
            <TouchableOpacity style={styles.deleteWrapper}onPress={handleDelete}>
              <Image 
                source={trash}
                alt="delete"
                
                style={styles.deleteBtn}
              />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default ContactCard