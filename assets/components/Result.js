import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Result(props) {
  const {name, baseSalary, isss, afp, rent, netSalary, errorMessage} = props;
 
  return (
    <View style={styles.content}>
      {netSalary && (
        <View style={styles.boxResult}>
          <Text style={styles.title}>RESUMEN</Text>
          <DataResult
            title="Nombre:"
            value={`${name}`}
          />
          <DataResult
            title="Salario base:"
            value={`$${baseSalary}`}
          />
          <DataResult 
            title="Descuento ISSS (-3%):" 
            value={`$${isss}`}
            />
          <DataResult 
            title="Descuento AFP (-4%):" 
            value={`$${afp}`}
            /> 
          <DataResult 
            title="Descuento Renta (-5%):"
            value={`$${rent}`}
          />
          <DataResult 
            title="Salario neto:"
            value={`$${netSalary}`}
          />
        </View>
      )}
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  );
}

function DataResult(props) {
  const {title, value} = props;
 
  return (
    <View style={styles.value}>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 40
  },
  boxResult: {
    padding: 30
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20
  },
  value: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  error: {
    textAlign: 'center',
    color: '#f00',
    fontWeight: 'bold',
    fontSize: 20
  }
});