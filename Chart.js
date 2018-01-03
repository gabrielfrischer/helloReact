import React, {Component} from 'react'
import { AreaChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { TouchableHighlight, View, Text,ScrollView,Button,DrawerButton,StyleSheet,Alert } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Card } from 'react-native-elements'
import Chart1 from './Chart1'
import Chart2 from './Chart2'
import Chart3 from './Chart3'
import Chart4 from './Chart4'
//import HomeScreen from './screens/HomeScreen'

class Chart extends React.PureComponent {

static navigationOptions = {
    title: 'Landing Page',
  };
    state = { data: ''
   }
   componentDidMount = () => {
      fetch('http://70.95.198.60/greet.php', {
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
const data2 = this.state.data.eventCountByDay
const data = typeof data2 !== 'undefined' ? data2.map((numbers)=>parseInt(numbers)) : [4,5,6,7]  
const data2act1 = this.state.data.eventCountByDay_act_1
const dataact1 = typeof data2act1 !== 'undefined' ? data2act1.map((numbers)=>parseInt(numbers)) : [4,5,6,7]  
const data2act2 = this.state.data.eventCountByDay_act_2
const dataact2 = typeof data2act2 !== 'undefined' ? data2act2.map((numbers)=>parseInt(numbers)) : [4,5,6,7]  
const data2act3 = this.state.data.eventCountByDay_act_3
const dataact3 = typeof data2act3 !== 'undefined' ? data2act3.map((numbers)=>parseInt(numbers)) : [4,5,6,7]  
const data2act4 = this.state.data.eventCountByDay_act_4
const dataact4 = typeof data2act4 !== 'undefined' ? data2act4.map((numbers)=>parseInt(numbers)) : [4,5,6,7]  
const beep = ()=> { this.props.navigation.navigate('Chart') }
const beep1 = ()=> { this.props.navigation.navigate('Chart1') }
const beep2 = ()=> { this.props.navigation.navigate('Chart2') }
const beep3 = ()=> { this.props.navigation.navigate('Chart3') }
const beep4 = ()=> { this.props.navigation.navigate('Chart4') }
            return (
         <ScrollView style={{backgroundColor:'black'}}><View stlye={{flex:1, marginTop:100, height:100,marginLeft:20,marginRight:20}}>
                <Card containerStyle={{borderRadius:10}}><TouchableHighlight onPress={beep}><View><Text>
               The last time you recorded data was {this.state.data.lastEvent}!
            </Text>

                <AreaChart
                    style={ { height: 300, width:300, marginLeft:100} }
                    dataPoints={ data }
                    contentInset={ { top: 30, bottom: 30, right:50 } }
                    curve={shape.curveNatural}
                    svg={{
                        fill: 'rgba(134, 65, 244, 0.2)',
                        stroke: 'rgb(134, 65, 244)',
                    }}
                /></View></TouchableHighlight></Card>
<Card containerStyle={{borderRadius:10}}><TouchableHighlight onPress={beep1}><View><Text>
               The last time you recorded walk data was {this.state.data.lastEvent_act_1}!
            </Text>
                <AreaChart
                    style={ { height: 300, width:300, marginLeft:100} }
                    dataPoints={ dataact1 }
                    contentInset={ { top: 30, bottom: 30, right:50 } }
                    curve={shape.curveNatural}
                    svg={{
                        fill: 'rgba(134, 65, 244, 0.2)',
                        stroke: 'rgb(134, 65, 244)',
                    }}
                /></View></TouchableHighlight></Card>
<Card containerStyle={{borderRadius:10}} ><TouchableHighlight onPress={beep2}><View><Text>
               The last time you recorded sit-down data was {this.state.data.lastEvent_act_2}!
            </Text>
                <AreaChart
                    style={ { height: 300, width:300, marginLeft:100} }
                    dataPoints={ dataact2 }
                    contentInset={ { top: 30, bottom: 30, right:50 } }
                    curve={shape.curveNatural}
                    svg={{
                        fill: 'rgba(134, 65, 244, 0.2)',
                        stroke: 'rgb(134, 65, 244)',
                    }}
                /></View></TouchableHighlight></Card>
<Card containerStyle={{borderRadius:10}}><TouchableHighlight onPress={beep3}><View><Text>
               The last time you recorded Stand-up data was {this.state.data.lastEvent_act_3}!
            </Text>
                <AreaChart
                    style={ { height: 300, width:300, marginLeft:100} }
                    dataPoints={ dataact3 }
                    contentInset={ { top: 30, bottom: 30, right:50 } }
                    curve={shape.curveNatural}
                    svg={{
                        fill: 'rgba(134, 65, 244, 0.2)',
                        stroke: 'rgb(134, 65, 244)',
                    }}
                /></View></TouchableHighlight></Card>
<Card containerStyle={{borderRadius:10}}><TouchableHighlight onPress={beep4}><View><Text>
               The last time you recorded Stand-Still data was {this.state.data.lastEvent_act_4}!
            </Text>
                <AreaChart
                    style={ { height: 300, width:300, marginLeft:100} }
                    dataPoints={ dataact4 }
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
  Home: { screen: Chart },
Chart1:{screen:Chart1},
  Chart2: { screen: Chart2 },
  Chart3: { screen: Chart3 },
  Chart4: { screen: Chart4 }
});  
export default Chart
