import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Perfil() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Mi Perfil</Text>
      <Text>Nombre: Luz Alvarez</Text>
      <Text>Carrera: ITIID</Text>
      <Text>Materia: Desarrollo de Aplicaciones Móviles</Text>
      <Text>Cuatrimestre: Cuarto</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    padding: 20,
    backgroundColor: '#E8F0FE',
    borderRadius: 12,
    margin: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#2455A4',
  },
});