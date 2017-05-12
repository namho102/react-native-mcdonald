import React from 'react';
import { AppRegistry, StyleSheet, Text, ScrollView, View, Image, TextInput } from 'react-native';
import {  StackNavigator  } from 'react-navigation';
import Expo from 'expo';
import Button from 'react-native-button';
import SearchBar from 'react-native-material-design-searchbar';
import { MaterialCommunityIcons, Octicons, MaterialIcons } from '@expo/vector-icons';
import ItemCheckbox from 'react-native-item-checkbox';
// import { Sae, Fumi } from 'react-native-textinput-effects';
// import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { CreditCardInput } from "react-native-credit-card-input";
import Spinner from 'rn-spinner';
import styles from './Styles'

class FinalScreen extends React.Component {
  static navigationOptions = {
    header: {
       visible: false,
     },
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.final}>
        <Image
          style={{width: 260, height: 195}}
          source={{uri: 'https://cdn.dribbble.com/users/31664/screenshots/1838645/thank-you-loop-2.gif'}}
        />
      <Text style={{fontSize: 22, fontWeight: '900', color: '#fff'}}>Your order is on its way!!!</Text>
      </View>
    );
  }
}


class PaymentScreen extends React.Component {
  static navigationOptions = {
    header: {
       visible: false,
     },
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.view} >
          <Text style={styles.paymentHeader}><MaterialCommunityIcons name="cash-multiple" size={30} color="#353535"/> PAYMENT INFO</Text>
          <CreditCardInput />

            <Button style={styles.okButton}
                  onPress={() => navigate('Final')}>
                OK
            </Button>
      </View>
    );
  }
}

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

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.checkout} >

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

        </View>

        <Button style={styles.reviewButton}
              onPress={() => navigate('Payment')}>
            Save & Pay
          </Button>
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
              source={{uri: 'https://www.mcdonalds.com/content/dam/usa/nutrition/items/slider/t-mcdonalds-Big-Mac.png'}}
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
              source={{uri: 'https://www.mcdonalds.com/content/dam/usa/nutrition/items/slider/t-mcdonalds-HASH-BROWNS.png'}}
            />

            <View style={styles.food}>
                <Text style={styles.name}>Hash Browns</Text>
                <Text style={styles.price}>&#36;2.39</Text>
            </View>

            <ItemCheckbox size={36} color="#36C75A"/>
          </View>


          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{uri: 'https://www.mcdonalds.com/content/dam/usa/nutrition/items/slider/t-mcdonalds-Sausage-Burrito.png'}}
            />

            <View style={styles.food}>
                <Text style={styles.name}>Sausage Burrito</Text>
                <Text style={styles.price}>&#36;3.69</Text>
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


        <View style={styles.card}>
          <Image
            style={styles.image}
            source={{uri: 'https://www.mcdonalds.com/content/dam/usa/nutrition/items/slider/t-mcdonalds-Chocolate-McCafe-Shake-Medium.png'}}
          />

          <View style={styles.food}>
              <Text style={styles.name}>Chocolate Shake</Text>
              <Text style={styles.price}>&#36;2.19</Text>
          </View>

          <ItemCheckbox size={36} color="#36C75A"/>
        </View>

        <View style={styles.card}>
          <Image
            style={styles.image}
            source={{uri: 'https://www.mcdonalds.com/content/dam/usa/nutrition/items/slider/t-mcdonalds-Fruit-n-Yogurt-Parfait.png'}}
          />

          <View style={styles.food}>
              <Text style={styles.name}>Fruit Yogurt</Text>
              <Text style={styles.price}>&#36;2.49</Text>
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
  constructor(props) {
    super(props);
    this.state = {
      coordinate:  {
        latitude: 16.076454,
        longitude: 108.153780,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    }
  };
  }
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
          initialRegion={this.state.coordinate}
        >
          <Expo.MapView.Marker  coordinate={this.state.coordinate}  />
        </Expo.MapView>
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
  Checkout: {screen: CheckoutScreen},
  Payment: {screen: PaymentScreen},
  Final: {screen: FinalScreen}
});

export default App;
