import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, FlatList, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';

import moment from "moment";
import Ionicons from 'react-native-vector-icons/Ionicons';
import posts from '../model/posts';

const HomeScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();
  
  const renderPost = post => {
    return (
        <View style = {styles.feedItem}>
            <Image source = {post.avatar} style={styles.avatar} />
            <View style = {{ flex: 1 }}>
                <View style = {{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View>
                        <Text style = {styles.name}>{post.name}</Text>
                        <Text style = {styles.timestamp}>{moment(post.timestamp).fromNow()}</Text>
                    </View>

                    <Ionicons name = "ios-more" size={24} color="#73788B" />
                </View>

                <Text style = {styles.post}>{post.text}</Text>

                <Image source = {post.image} style={styles.postImage} resizeMode="cover" />

                <View style = {{ flexDirection: "row" }}>
                    <Ionicons name="ios-heart-empty" size={24} color="#73788B" style={{ marginRight: 16 }} />
                    <Ionicons name="ios-chatboxes" size={24} color="#73788B" />
                </View>
            </View>
        </View>
    );
};

return (
  <View style={styles.container}>
    <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
    {/*<Text style={{color: colors.text}}>Home Screen</Text>*/}
    <FlatList
          style = {styles.feed}
          data = {posts}
          renderItem={({ item }) => renderPost(item)}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
      />
  </View>
);

    /*return (
      <View style={styles.container}>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <Text style={{color: colors.text}}>Home Screen</Text>
      <Button
        title="Go to details screen"
        onPress={() => navigation.navigate("Details")}
      />
      </View>
    );*/
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor: "#EFECF4"
  },
  header: {
      paddingTop: 32,
      paddingBottom: 16,
      backgroundColor: "#FFF",
      alignItems: "center",
      justifyContent: "center",
      borderBottomWidth: 1,
      borderBottomColor: "#EBECF4",
      shadowColor: "#454D65",
      shadowOffset: { height: 5 },
      shadowRadius: 15,
      shadowOpacity: 0.2,
      zIndex: 10
  },
  headerTitle: {
      fontSize: 20,
      fontWeight: "500"
  },
  feed: {
      marginHorizontal: 16
  },
  feedItem: {
      backgroundColor: "#FFF",
      borderRadius: 5,
      padding: 8,
      flexDirection: "row",
      marginVertical: 8
  },
  avatar: {
      width: 36,
      height: 36,
      borderRadius: 18,
      marginRight: 16
  },
  name: {
      fontSize: 11,
      fontWeight: "500",
      color: "#454D65"
  },
  timestamp: {
      fontSize: 11,
      color: "#C4C6CE",
      marginTop: 4
  },
  post: {
      marginTop: 16,
      fontSize: 14,
      color: "#838899"
  },
  postImage: {
      width: undefined,
      height: 150,
      borderRadius: 5,
      marginVertical: 16
  }
});