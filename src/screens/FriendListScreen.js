import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Header, Input } from 'react-native-elements';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { Entypo} from '@expo/vector-icons';

const FriendListScreen = ({navigation}) => {
  const input = React.createRef();
    return (
      <View style={styles.container}>
        <StatusBar style="light"/>
                <Header
                    containerStyle={{
                    backgroundColor: 'gray',
                    justifyContent: 'space-around',}}
                    leftComponent={<Ionicons name="md-menu" size={25} color="white" onPress={()=>{
                        navigation.openDrawer();
                    }}/>}
                    centerComponent={{ text: 'Friend List', style: {fontSize:20, color: 'white' } }}
                    rightComponent={<Ionicons name="md-lock" size={25} color="white" 
                    onPress={()=>{
                        auth.setisLogged(false);
                        auth.setcurrentUser({});
                    }}/>}
                    />
        <View style = {{marginTop: 5 }}>
          <Input
            ref={input}
            placeholder='Search for a person...'
            multiline={true}
            leftIcon={<Entypo name="star" size={24} color="black" />}
            onChangeText={(text)=>{
                setPost(text); 
          }}
          />
        </View>

        <View style={{flexDirection:'row', alignSelf: "center", marginTop: 20, marginBottom: 20}}>
            <Entypo name="users" size={24} color="black" />
            <Button
                color = "green"
                title="Add Friend"
                onPress={() => alert("Select a person first")}
            />
        </View>

        <Text style = {{marginLeft: 20, fontWeight: "bold", fontStyle: "italic"}}>Friends:</Text>
        
        <View style={styles.row}>
          <Entypo name="user" size={24} color="black" />
          <Text style = {styles.textStyle}>John Cena</Text>
        </View>
        
        <View style={styles.row}>
          <Entypo name="user" size={24} color="black" />
          <Text style = {styles.textStyle}>Ronaldo</Text>
        </View>

        <View style={styles.row}>
          <Entypo name="user" size={24} color="black" />
          <Text style = {styles.textStyle}>Messi</Text>
        </View>

        <View style={styles.row}>
          <Entypo name="user" size={24} color="black" />
          <Text style = {styles.textStyle}>Mark Zukarburg</Text>
        </View>
        
        
      </View>
    );
};

export default FriendListScreen;

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
    marginBottom:10,
    marginTop: 10,
    marginLeft: 20
  },
});
