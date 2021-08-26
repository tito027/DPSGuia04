import React from 'react'; 
import {StyleSheet, TextInput, View} from 'react-native';
import colors from '../utils/colors'; 

export default function Form(props) {
  const {setName, setBaseSalary} = props;

  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}>
        <TextInput 
          placeholder="Nombre"
          style={styles.input} onChange={(e) => setName(e.nativeEvent.text)} 
        />
        <TextInput 
          placeholder="Salario" 
          keyboardType="numeric" 
          style={[styles.input, styles.inputPercentage]} onChange={(e) => setBaseSalary(e.nativeEvent.text)} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    bottom: 0,
    width: '85%',
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 90,
    justifyContent: 'center',
    margin: '5%'
  },
  viewInputs: {
    flexDirection: 'row'
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: '60%',
    marginRight: 5,
    marginLeft: -5,
    color: '#000',
    paddingHorizontal: 15
  },
  inputPercentage: {
    width: '40%',
    marginLeft: 5
  }
});