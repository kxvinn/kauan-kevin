import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
const PercentageDimensionsBasics = () => {
return (
    <View style={{height:'100%'}}>
    <View
        style={{
            height: '15%',
            backgroundColor: 'powderblue',
        }}
        />

            <Text style={styles.heading}>Tela de Login</Text>
            <TextInput
            style = {styles.input}
            placeholder="senha"
            />
  </View>    
    );
    };       
    const styles = StyleSheet.create({
        heading: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 20,
        },
        input:{
            width:'80%',
            padding: 10,
            marginBottom: 10,
            borderwidth: 1,
            borderColor: 'gray',

        },
    }); 
    export default PercentageDimensionsBasics;
