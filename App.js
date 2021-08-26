import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import colors from './assets/utils/colors';
import Form from './assets/components/Forms';
import Footer from './assets/components/Footer';
import Result from './assets/components/Result';

export default function App() {
  const [name, setName] = useState('');
  const [baseSalary, setBaseSalary] = useState(null);
  const [isss, setIsss] = useState(null);
  const [afp, setAfp] = useState(null);
  const [rent, setRent] = useState(null);
  const [netSalary, setNetSalary] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if(name && baseSalary) calculate();
    else reset();
  }, [name, baseSalary]);

  const calculate = () =>{
    reset();
    if (!name) {
      setErrorMessage('Debe ingresar su nombre');
    } else if (!baseSalary) {
      setErrorMessage('Debe ingresar su salario base');
    } else {
      const dIsss = baseSalary * 0.03;
      const dAfp = baseSalary * 0.04;
      const dRent = baseSalary * 0.05;

      const total = baseSalary - dIsss - dAfp - dRent;

      setNetSalary(total.toFixed(2).replace('.', ','));
      setIsss(dIsss.toFixed(2).replace('.', ','));
      setAfp(dAfp.toFixed(2).replace('.', ','));
      setRent(dRent.toFixed(2).replace('.', ','))
    }
  };

  const reset = () => {
    setErrorMessage('');
    setNetSalary(null);
  };
  
  return (
    <>
    <StatusBar barStyle="light-content" />
    <SafeAreaView style={styles.Header}>
      <View style={styles.background} />
      <Text style={styles.HeadApp}>Calculadora de salario neto</Text>
      <Form
        setName={setName}
        setBaseSalary={setBaseSalary}
      />
    </SafeAreaView>
    <Result
      name={name}
      baseSalary={baseSalary}
      isss={isss}
      afp={afp}
      rent={rent}
      netSalary={netSalary}
      errorMessage={errorMessage}
    />
    <Footer></Footer>
    </>
  );
}

const styles = StyleSheet.create({
  Header:{
    backgroundColor: colors.PRIMARY_COLOR,
    height: 170,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center'
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 170,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1
  },
  HeadApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    margin: 15,
  }
});