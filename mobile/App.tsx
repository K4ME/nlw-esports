import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function Button(props: any) {
  return (
    <TouchableOpacity >
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world!!!</Text>

      <Button style={styles.button} title="teste 1" />
      <Button style={styles.button} title="teste 2" />
      <Button style={styles.button} title="teste 3" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    //color: '#fff',
  },
  button:{
    //backgroundColor: '#fff',
    //color: '#fff',
  }
});
