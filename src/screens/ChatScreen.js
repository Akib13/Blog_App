import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Header, Input } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Entypo} from '@expo/vector-icons';

const ChatScreen = ({navigation}) => {
  const input = React.createRef();
    return (
      <View style={styles.container}>
        <StatusBar style="light"/>
                <Header
                    containerStyle={{
                    backgroundColor: '#00bfff',
                    justifyContent: 'space-around',}}
                    leftComponent={<Ionicons name="md-menu" size={25} color="white" onPress={()=>{
                        navigation.openDrawer();
                    }}/>}
                    centerComponent={{ text: 'Inbox', style: {fontSize:20, color: 'white' } }}
                    rightComponent={<Ionicons name="md-lock" size={25} color="white" 
                    onPress={()=>{
                        auth.setisLogged(false);
                        auth.setcurrentUser({});
                    }}/>}
                    />
        <View style = {{marginTop: 5 }}>
          <Input
            ref={input}
            placeholder='Search for a friend...'
            multiline={true}
            leftIcon={<Entypo name="users" size={24} color="black" />}
            onChangeText={(text)=>{
                setPost(text); 
          }}
          />
        </View>
        <Text style = {styles.textStyle}>Chat Screen</Text>
        <Text style = {styles.textStyle}>(Friend list will be added here...</Text>
        <Text style = {styles.textStyle}>Please Stay Tuned...)</Text>
        <View style = {{marginTop: 320 }}>
          <Input
            ref={input}
            placeholder='Send a message...'
            multiline={true}
            leftIcon={<Entypo name="pencil" size={24} color="black" />}
            onChangeText={(text)=>{
                setPost(text); 
          }}
          />
        </View>
      </View>
    );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  textStyle: {
    fontWeight:"bold",
    alignSelf: "center",
    justifyContent:"center",
    marginTop: 10
  }
});
