
import React from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView
} from 'react-native';

import colores from '../../styles/colores';

export default function CalificarIntercambioScreen() {
  return (
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>Calificar intercambio</Text>
      <Text style={styles.subtitulo}>
        Comparte tu experiencia con la comunidad
      </Text>

      <View style={styles.tarjeta}>
        <Text style={styles.servicio}>Clases de inglés</Text>
        <Text style={styles.proveedor}>
          Servicio proporcionado por Carlos Martínez
        </Text>

        <View style={styles.separador} />

        <Text style={styles.pregunta}>¿Cómo calificas el servicio?</Text>

        <View style={styles.estrellas}>
          <Text style={styles.estrella}>★</Text>
          <Text style={styles.estrella}>★</Text>
          <Text style={styles.estrella}>★</Text>
          <Text style={styles.estrella}>★</Text>
          <Text style={styles.estrellaVacia}>☆</Text>
        </View>

        <Text style={styles.nota}>4 de 5 estrellas</Text>

        <Text style={styles.etiqueta}>Comentario</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe cómo fue tu experiencia..."
          placeholderTextColor={colores.textoSecundario}
          multiline
          textAlignVertical="top"
        />

        <Text style={styles.etiqueta}>Fecha del intercambio</Text>
        <Text style={styles.fecha}>06/11/2026</Text>

        <Pressable style={styles.boton}>
          <Text style={styles.textoBoton}>Enviar calificación</Text>
        </Pressable>

        <Pressable style={styles.botonSecundario}>
          <Text style={styles.textoSecundario}>Cancelar</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colores.fondo,
    padding: 20
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colores.texto,
    marginTop: 25
  },
  subtitulo: {
    color: colores.textoSecundario,
    marginTop: 6,
    marginBottom: 20
  },
  tarjeta: {
    backgroundColor: colores.blanco,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: colores.borde
  },
  servicio: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colores.texto
  },
  proveedor: {
    color: colores.textoSecundario,
    marginTop: 5
  },
  separador: {
    height: 1,
    backgroundColor: colores.borde,
    marginVertical: 18
  },
  pregunta: {
    fontWeight: 'bold',
    color: colores.texto,
    textAlign: 'center'
  },
  estrellas: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12
  },
  estrella: {
    fontSize: 38,
    color: colores.naranja
  },
  estrellaVacia: {
    fontSize: 38,
    color: colores.borde
  },
  nota: {
    textAlign: 'center',
    color: colores.textoSecundario,
    marginTop: 5
  },
  etiqueta: {
    fontWeight: 'bold',
    color: colores.texto,
    marginTop: 20,
    marginBottom: 8
  },
  input: {
    height: 110,
    borderWidth: 1,
    borderColor: colores.borde,
    borderRadius: 10,
    padding: 12,
    color: colores.texto
  },
  fecha: {
    backgroundColor: colores.fondo,
    padding: 12,
    borderRadius: 10,
    color: colores.texto
  },
  boton: {
    backgroundColor: colores.naranja,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 22
  },
  textoBoton: {
    color: colores.blanco,
    fontWeight: 'bold'
  },
  botonSecundario: {
    borderWidth: 1,
    borderColor: colores.naranja,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10
  },
  textoSecundario: {
    color: colores.naranja,
    fontWeight: 'bold'
  }
});
