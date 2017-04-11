import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';
import {  StackNavigator  } from 'react-navigation';
import Expo from 'expo';
import Button from 'react-native-button';
import SearchBar from 'react-native-material-design-searchbar';
import { MaterialCommunityIcons } from '@expo/vector-icons';

class MenuScreen extends React.Component {

  static navigationOptions = {
    header: {
       visible: false,
     },
  };
  render() {

    return (
      <View style={styles.view}>

        <Text style={styles.header}><MaterialCommunityIcons name="food" size={30} color="#676879" /> MENU</Text>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={{uri: 'https://www.mcdonalds.com/content/dam/usa/nutrition/items/slider/t-mcdonalds-Double-Quarter-Pounder-with-Cheese.png'}}
          />
          <View style={styles.food}>
              <Text style={styles.name}>Hamburger</Text>
              <Text style={styles.price}>12$</Text>
          </View>

        </View>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={{uri: 'https://www.mcdonalds.com/content/dam/usa/nutrition/items/slider/t-mcdonalds-Fries-Small-Medium.png'}}
          />
          <View style={styles.food}>
              <Text style={styles.name}>French Fries</Text>
              <Text style={styles.price}>12$</Text>
          </View>

        </View>
      </View>
    );
  }
}

class MapScreen extends React.Component {
  static navigationOptions = {
    header: {
       visible: false,
     },
  };
  _handlePress() {
     console.log('Pressed!');
   }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.view}>
        <SearchBar
           onSearchChange={() => console.log('On Focus')}
           height={40}
           onFocus={() => console.log('On Focus')}
           onBlur={() => console.log('On Blur')}
           placeholder={'54 Nguyen Luong Bang, Lien Chieu, Da Nang'}
           autoCorrect={false}
           padding={5}
           returnKeyType={'search'}
         />
       <Expo.MapView
          style={styles.map}
          initialRegion={{
            latitude: 16.076454,
            longitude: 108.153780,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        />
      <Button style={styles.mapButton}
            onPress={() => navigate('Menu')}>
          Pick this location
        </Button>
      </View>


    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: {
       visible: false,
     },
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image
          style={{width: 250, height: 150}}
          source={{uri: 'https://cdn.dribbble.com/users/310943/screenshots/2018609/loading.gif'}}
        />
        <Text style={{fontSize: 20, margin: 20}}>Choose your location</Text>
        <Button style={{color: '#fff', backgroundColor: '#36C75A', padding: 10, width: 200}}
          onPress={() => navigate('Map')}>
          Use my GPS location
        </Button>
      </View>
    );
  }
}

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Map: { screen: MapScreen },
  Menu: { screen: MenuScreen },
});

export default App;

const styles = StyleSheet.create({
  food: {
    flexDirection: 'column',
    margin: 10,
    alignItems: 'center'
  },
  name: {
    marginLeft: 10,
    fontSize: 18
  },
  price: {
    marginLeft: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff0017'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  card: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#e4e3e0',
    borderRadius: 50
  },
  header: {
    // backgroundColor: 'rgba(47,47,47,0.98)',
    color: '#676879',
    fontSize: 22,
    fontWeight: '900',
    padding: 10,
    // paddingLeft: 40,
    // borderStyle: 'solid',
    // borderBottomWidth: 3,
    // borderColor: '#36C75A',
    textAlign: 'center'
  },
  view: {
    marginTop: 24,
    flex: 1,
    flexDirection: 'column'
  },
  map: {
    height: 490
  },
  mapButton: {
    color: '#fff',
    backgroundColor: '#36C75A',
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold'
  },
  container: {
    marginTop: 25,
    flex: 1,
    backgroundColor: '#eaebed',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
