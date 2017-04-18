import { AppRegistry, StyleSheet, Text, ScrollView, View, Image, TextInput } from 'react-native';

const styles = StyleSheet.create({
  final: {
    backgroundColor: '#ccdf15',
    marginTop: 25,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  okButton: {
    marginTop: 200,
    color: '#fff',
    backgroundColor: '#36C75A',
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold'
  },

  paymentHeader: {
    color: '#353535',
    backgroundColor: '#f8f8f8',
    fontSize: 22,
    fontWeight: '900',
    padding: 20,
    paddingTop: 10,
    marginBottom: 20,
    textAlign: 'center'
  },
 reviewHeader: {
   // backgroundColor: 'rgba(47,47,47,0.98)',
   color: '#353535',
   backgroundColor: '#f8f8f8',
   fontSize: 22,
   fontWeight: '900',
   padding: 20,
   marginBottom: 20,
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
 reviewButton: {
   marginTop: 282,
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

export default styles;
