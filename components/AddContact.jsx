import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';

import styles from '../styles/search';

const AddContact = () => {
    const router = useRouter();
  return (
    <TouchableOpacity style={styles.footer} onPress={() => router.push('/new')}>
        <Text style={{fontSize:20}}>Add New Contact</Text>
    </TouchableOpacity>
  )
}

export default AddContact