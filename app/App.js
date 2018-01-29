import React from 'react';
import { Alert, Button, TextInput, StyleSheet, Text, View } from 'react-native';
import SharedPreferences from 'react-native-shared-preferences';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
    var self = this;
    SharedPreferences.getItem("AZURE_CONN_STRING", function(Value){
      self.state.text = Value;
    });
  }
  _onPressButton(event ) {
    Alert.alert('You set the settings to ' + event);
    console.log(event);
    console.log(this);
    SharedPreferences.setItem("AZURE_CONN_STRING",this.state.text);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.header,styles.bgBlue]}>
          <Text>Melay {this.state.text}</Text>          
        </View>
        <View style={[styles.pane2, styles.bgGreen]}>
          <Text>Please Specify your connection string</Text>
          <TextInput
            style={{height: 40}}
            placeholder="your connection string"
            onChangeText={(text) => this.setState({text:text})}
            value={this.state.text}
          />
        </View>
        <View style={styles.pane}>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
        <View style={styles.pane2}>
        <Button
            onPress={this._onPressButton}
            title="Save Changes"
            color="#841584"
          />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header : {
    height: 40,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',   
  },
  pane: {
    flex: 1
  },
  pane2: {
    flex: 2
  },
  pane3: {
    flex: 3
  },
  bgGreen:{
    backgroundColor: 'green',
  },
  bgBlue:{
    backgroundColor: 'powderblue',
  },
});