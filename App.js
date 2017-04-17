import React from 'react';
import { AppRegistry, StyleSheet, Text, ScrollView, View, Image, TextInput } from 'react-native';
import {  StackNavigator  } from 'react-navigation';
import Expo from 'expo';
import Button from 'react-native-button';
import SearchBar from 'react-native-material-design-searchbar';
import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import ItemCheckbox from 'react-native-item-checkbox';
// import { Sae, Fumi } from 'react-native-textinput-effects';
// import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { CreditCardInput } from "react-native-credit-card-input";
var Spinner = require('rn-spinner');


class CheckoutScreen extends React.Component {
  static navigationOptions = {
    header: {
       visible: false,
     },
  };
  constructor(props) {
    super(props);
    this.state = { num1: 1, num2: 1 };
  }
  _onChange() {

  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.checkout}>

        <Text style={styles.reviewHeader}><Octicons name="checklist" size={30} color="#353535"/> REVIEW</Text>

        <View style={styles.item}>
          <Text style={styles.itemName}>Hamburger</Text>
            <Spinner
             min={1}
             default={1}
             color="#ff0017"
             numColor="#ff0017"

             fontSize={18}
             width={100}
             onNumChange={(num1)=>this.setState({num1})}
             />
           <Text style={styles.x}> x </Text>
          <Text style={styles.itemPrice}>&#36;3.99</Text>

        </View>

        <View style={styles.item}>
          <Text style={styles.itemName}>Coffee</Text>
            <Spinner
             min={1}
             default={1}
             color="#ff0017"
             numColor="#ff0017"

             fontSize={18}
             width={100}
             onNumChange={(num2)=>this.setState({num2})}
             />
           <Text style={styles.x}> x </Text>
          <Text style={styles.itemPrice}>&#36;1</Text>

        </View>

        <View>
          <Text style={styles.total}>Total   ${ this.state.num1 * 3.99 + this.state.num2 } </Text>

          // <CreditCardInput onChange={this._onChange} />
        </View>
      </View>
    );
  }
}

class MenuScreen extends React.Component {
  static navigationOptions = {
    header: {
       visible: false,
     },
  };


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.view}>

        <Text style={styles.header}><MaterialCommunityIcons name="food" size={30} color="#676879"/> MENU</Text>

        <ScrollView>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{uri: 'https://www.mcdonalds.com/content/dam/usa/nutrition/items/slider/t-mcdonalds-Double-Quarter-Pounder-with-Cheese.png'}}
            />

            <View style={styles.food}>
                <Text style={styles.name}>Hamburger</Text>
                <Text style={styles.price}>&#36;3.99</Text>
            </View>

            <ItemCheckbox size={36} color="#36C75A"/>
          </View>

          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{uri: 'https://www.mcdonalds.com/content/dam/usa/nutrition/items/slider/t-mcdonalds-Fries-Small-Medium.png'}}
            />

            <View style={styles.food}>
                <Text style={styles.name}>French Fries</Text>
                <Text style={styles.price}>&#36;1.79</Text>
            </View>

            <ItemCheckbox size={36} color="#36C75A"/>
          </View>

          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{uri: 'https://www.mcdonalds.com/content/dam/usa/nutrition/items/slider/t-mcdonalds-Chicken-McNuggets-4pc.png'}}
            />

            <View style={styles.food}>
                <Text style={styles.name}>Chicken Nuggets</Text>
                <Text style={styles.price}>&#36;4.99</Text>
            </View>

            <ItemCheckbox size={36} color="#36C75A"/>
          </View>

          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{uri: 'https://www.mcdonalds.com/content/dam/usa/nutrition/items/slider/t-mcdonalds-Premium-Southwest-Salad-with-Buttermilk-Crispy-Chicken.png'}}
            />

            <View style={styles.food}>
                <Text style={styles.name}>Southwest Salad</Text>
                <Text style={styles.price}>&#36;4.79</Text>
            </View>

            <ItemCheckbox size={36} color="#36C75A"/>
          </View>

          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{uri: 'https://www.mcdonalds.com/content/dam/usa/nutrition/items/slider/t-mcdonalds-Coffee-Medium.png'}}
            />

            <View style={styles.food}>
                <Text style={styles.name}>Coffee</Text>
                <Text style={styles.price}>&#36;1</Text>
            </View>

            <ItemCheckbox size={36} color="#36C75A"/>
          </View>
        </ScrollView>


        <Button style={styles.mapButton}
              onPress={() => navigate('Checkout')}>
            Checkout
          </Button>


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
  componentDidMount() {
    Expo.Font.loadAsync({
      'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    });
    Expo.Font.loadAsync({
      'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    });
    Expo.Font.loadAsync({
      'Arial': require('./assets/fonts/Montserrat-Medium.ttf'),
    });
  }
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
  Checkout: {screen: CheckoutScreen}
});

export default App;

const styles = StyleSheet.create({
  reviewHeader: {
    // backgroundColor: 'rgba(47,47,47,0.98)',
    color: '#353535',
    backgroundColor: '#f8f8f8',
    fontSize: 22,
    fontWeight: '900',
    padding: 20,
    marginBottom: 20,
    // paddingLeft: 40,
    // borderStyle: 'solid',
    // borderBottomWidth: 3,
    // borderColor: '#36C75A',
    textAlign: 'center'
  },
  total: {
    fontWeight: '900',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 210
  },
  x: {
    fontWeight: '300',
    fontSize: 20,
  },
  itemName:  {
    // fontFamily: 'Montserrat-Medium',
    fontSize: 20,
    fontWeight: '300',
    color: '#1d1d1d',
    // marginRight: 20,
    width: 140

  },
  itemPrice:  {
    // fontFamily: 'Montserrat-Bold',
    fontWeight: '300',
    fontSize: 20,
    // marginRight: 20,
    color: "#1d1d1d",
    width: 70
  },
  item: {
    flexDirection: 'row',
    margin: 10,
    marginBottom: 0,
    marginTop: 0,
    padding: 15,
    alignItems: 'center',
    // backgroundColor: '#dbe1f1',
    borderStyle: 'solid',
    borderBottomWidth: 3,
    // borderTopWidth: 3,
    borderColor: '#f5f5f5',
  },
  checkout: {
    marginTop: 24,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  food: {
    flexDirection: 'column',
    margin: 10,
    alignItems: 'center',
    width: 170
  },
  name: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'Montserrat-Medium'
  },
  price: {
    marginLeft: 20,
    fontSize: 16,
    // fontWeight: 'bold',
    color: '#ff0017',
    fontFamily: 'Montserrat-Bold'
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45
  },
  card: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#e4e3e0',
    borderRadius: 45
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
