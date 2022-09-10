import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,Image, View } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image style={styles.ufrngram} source={require('./assets/images/ufrngram.png')}/>
        <FontAwesome5 name="paper-plane" size={24} color='black'/>
      </View>
      <View style={styles.stories}>
        <View style={styles.story}>
          <Image style={styles.imgstory} source={require('./assets/images/pernalonga.png')}/>
          <Text>@perna</Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.imgstory} source={require('./assets/images/patolino.png')}/>
          <Text>@perna</Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.imgstory} source={require('./assets/images/taz.png')}/>
          <Text>@taz</Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.imgstory} source={require('./assets/images/piupiu.png')}/>
          <Text>@piu.piu</Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.imgstory} source={require('./assets/images/spacejam.png')}/>
          <Text>@SJ.team</Text>
        </View>
       </View>
      <View style={styles.feed}>
        <View style={styles.post}>
          <View style={styles.postHeader}>
            <Image style={styles.postheaderimg} source={require('./assets/images/taz.png')}/>
            <Text>@taz</Text>
            <FontAwesome5 name="ellipsis-h" size={16} color='black'/>

          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    header: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  ufrngram: {
    height: 25,
    width: 110,   
  },
  stories: {
    flexDirection: 'row',
    height: 90,
    backgroundColor: '#fff',
  },
  story:{
    height: 90,
    width: 90,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  imgstory: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  feed:{
    flex: 1,
    backgroundColor: 'red',
  },
  post:{
    backgroundColor: 'blue',
  },
  postHeader:{
    height: 60,
    flexDirection: 'row',
  },
  postheaderimg: {
    height: 50,
    width: 50,
    borderRadius: 35,
  },

});
