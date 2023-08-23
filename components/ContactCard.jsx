import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import styles from '../styles/search';

const ContactCard = ({name, email, phone}) => {
  return (
    <SafeAreaView style={styles.contactWrapper}>
        <View style={styles.contactContainer}>
            <Text style={styles.contactName}>{name}</Text>
            <Text style={styles.contactEmail}>Email - {email}</Text>
            <Text style={styles.contactPhone}>Contact Number - {phone}</Text>
        </View>
    </SafeAreaView>
  )
}

export default ContactCard