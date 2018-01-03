import React, {Component} from 'react'
import { AreaChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { View, Text,ScrollView,Button,DrawerButton,TouchableHighlight } from 'react-native'
import { StackNavigator } from 'react-navigation'
//import HomeScreen from './screens/HomeScreen'
import { Card } from 'react-native-elements'
class Chart3 extends React.PureComponent {

static navigationOptions = {
    title: 'Stand-Up',
  };
    state = {
      data: ''
   }
   componentDidMount = () => {
      fetch('http://70.95.198.60/metric_history.php', {
         method: 'POST',
	  headers: new Headers({
             'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
    }),
  body: "user=1"
      })
      .then((response) => response.json())
      .then((responseJson) => {
      //   console.log(responseJson);
         this.setState({
            data: responseJson
         })
      })
      .catch((error) => {
         console.error(error);
      });
   } 
    render() {
const data2 = this.state.data.metric7
console.log(data2);
const data4 = typeof data2 !== 'undefined' ? data2.map((numbers)=>parseFloat(numbers)) : [4,5,6,7] 
const data25 = this.state.data.metric8
console.log(data25);
const data5 = typeof data25 !== 'undefined' ? data25.map((numbers)=>parseFloat(numbers)) : [4,5,6,7]  
const data26 = this.state.data.metric9
console.log(data26);
const data6 = typeof data26 !== 'undefined' ? data26.map((numbers)=>parseFloat(numbers)) : [4,5,6,7]  
            return (
<ScrollView style={{backgroundColor:'black'}}><View stlye={{flex:1, marginTop:100, height:100,marginLeft:20,marginRight:20}}>
                <Card containerStyle={{borderRadius:10}}><TouchableHighlight><View><Text>
This is the history of your Force Development!
            </Text>

                <AreaChart
                    style={ { height: 300, width:300, marginLeft:100} }
                    dataPoints={ data4 }
                    contentInset={ { top: 30, bottom: 30, right:50 } }
                    curve={shape.curveNatural}
                    svg={{
                        fill: 'rgba(134, 65, 244, 0.2)',
                        stroke: 'rgb(134, 65, 244)',
                    }}
                /></View></TouchableHighlight></Card>
 <Card containerStyle={{borderRadius:10}}><TouchableHighlight><View><Text>
This is the history of your Stand-Up Duration!
            </Text>

                <AreaChart
                    style={ { height: 300, width:300, marginLeft:100} }
                    dataPoints={ data5 }
                    contentInset={ { top: 30, bottom: 30, right:50 } }
                    curve={shape.curveNatural}
                    svg={{
                        fill: 'rgba(134, 65, 244, 0.2)',
                        stroke: 'rgb(134, 65, 244)',
                    }}
                /></View></TouchableHighlight></Card>
 <Card containerStyle={{borderRadius:10}}><TouchableHighlight><View><Text>
This is the history of your Stand-Up Sway!
            </Text>

                <AreaChart
                    style={ { height: 300, width:300, marginLeft:100} }
                    dataPoints={ data6 }
                    contentInset={ { top: 30, bottom: 30, right:50 } }
                    curve={shape.curveNatural}
                    svg={{
                        fill: 'rgba(134, 65, 244, 0.2)',
                        stroke: 'rgb(134, 65, 244)',
                    }}
                /></View></TouchableHighlight></Card>
</View>
</ScrollView>
            )
        }
 
}
const App = StackNavigator({
  Home: { screen: Chart3 },
});  
export default Chart3
