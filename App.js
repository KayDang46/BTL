import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Input, TextInput, Image, Pressable, TouchableOpacity } from 'react-native';
import React, { useState} from 'react';
import { Feather } from '@expo/vector-icons'; 


export default App = () => {
  let [text, onChangeText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity
          style={styles.searchIcon}
        >
          <Feather name="search" size={24} color="black" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          onChangeText={onChangeText}
          placeholder="Search"/>
      </View>

      <View>
        <TouchableOpacity>
          <Text>Button</Text>
        </TouchableOpacity>
      </View>
      
      <StatusBar hidden={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    borderRadius: 15,
    backgroundColor: 'white',
    padding: 10,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 10,
  }
});
