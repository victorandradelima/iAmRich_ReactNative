import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Provider as PaperProvider, Appbar } from 'react-native-paper';
import { BLUEGREY, BlueGrey } from 'react-native-material-color';

export default class App extends Component {
  render() {
    return (
      <PaperProvider >
        <View style={styles.main}>
          <Appbar dark={true} style={styles.appBar}>
            <Appbar.Content title="I am Rich" />
          </Appbar>
          <View style={styles.content}>
            <Image style={styles.imgDiamond} source={require('./images/diamond.png')} />
          </View>
        </View>
      </PaperProvider>
    );
  }
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: BlueGrey,
  },
  appBar: {
    backgroundColor: BLUEGREY[900],
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgDiamond: {
    resizeMode: 'contain',
    height: 256,
    width: 256,
  }
});