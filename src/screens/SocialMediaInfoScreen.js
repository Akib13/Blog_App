import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Header, Input } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Entypo} from '@expo/vector-icons';

const SocialMediaInfoScreen = ({navigation}) => {
  const input = React.createRef();
    return (
      <View style={styles.container}>
        <StatusBar style="light"/>
                <Header
                    containerStyle={{
                    backgroundColor: 'purple',
                    justifyContent: 'space-around',}}
                    leftComponent={<Ionicons name="md-menu" size={25} color="white" onPress={()=>{
                        navigation.openDrawer();
                    }}/>}
                    centerComponent={{ text: 'Other Accounts', style: {fontSize:20, color: 'white' } }}
                    rightComponent={<Ionicons name="md-lock" size={25} color="white" 
                    onPress={()=>{
                        auth.setisLogged(false);
                        auth.setcurrentUser({});
                    }}/>}
                    />
        <View style={styles.row}>
          <Entypo name="facebook" size={24} color="black" />
          <Text style = {styles.textStyle}>www.facebook.com/abc.013</Text>
        </View>
        
        <View style={styles.row}>
          <Entypo name="github" size={24} color="black" />
          <Text style = {styles.textStyle}>www.github.com/abc.013</Text>
        </View>

        <View style={styles.row}>
          <Entypo name="twitter" size={24} color="black" />
          <Text style = {styles.textStyle}>www.twitter.com/abc.013</Text>
        </View>

        <View style={styles.row}>
          <Entypo name="linkedin" size={24} color="black" />
          <Text style = {styles.textStyle}>www.linkedin.com/abc.013</Text>
        </View>
        
        <View style = {{marginTop: 20 }}>
          <Input
            ref={input}
            placeholder='Add an account...'
            multiline={true}
            leftIcon={<Entypo name="plus" size={24} color="black" />}
            onChangeText={(text)=>{
                setPost(text); 
          }}
          />
        </View>
      </View>
    );
};

export default SocialMediaInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  textStyle: {
    fontWeight:"bold",
    alignSelf: "center",
    justifyContent:"center",
    marginTop: 10
  },
  row:{
    flexDirection:'row',
    alignSelf: "center",
    marginBottom:10,
    marginTop: 10,
  },
});
