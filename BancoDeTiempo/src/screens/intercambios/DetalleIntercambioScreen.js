
import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView
} from 'react-native';

import colores from '../../styles/colores';

export default function DetalleIntercambioScreen() {
  return (
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>Detalle de intercambio</Text>
      <Text style={styles.subtitulo}>
        Consulta la información de tu intercambio
      </Text>

      <View style={styles.tarjeta}>
        <View style={styles.encabezado}>
          <Text style={styles.servicio}>Clases de inglés</Text>
          <Text style={styles.estado}>Completado</Text>
        </View>

        <Text style={styles.identificador}>Intercambio #INT-001</Text>

        <View style={styles.separador} />

        <Text style={styles.etiqueta}>Proveedor</Text>
        <Text style={styles.valor}>Carlos Martínez</Text>

        <Text style={styles.etiqueta}>Solicitante</Text>
        <Text style={styles.valor}>Luz Alvarez</Text>

        <Text style={styles.etiqueta}>Descripción del servicio</Text>
        <Text style={styles.valor}>
          Clases de inglés para mejorar la conversación y pronunciación.
        </Text>

        <Text style={styles.etiqueta}>Fecha del intercambio</Text>
        <Text style={styles.valor}>06/11/2026</Text>

        <Text style={styles.etiqueta}>Duración realizada</Text>
        <Text style={styles.valor}>2 horas</Text>

        <View style={styles.creditosBox}>
          <Text style={styles.creditosTitulo}>Créditos del intercambio</Text>
          <Text style={styles.creditos}>2 créditos</Text>
          <Text style={styles.creditosNota}>
            1 hora de servicio equivale a 1 crédito
          </Text>
        </View>

        <View style={styles.confirmacion}>
          <Text style={styles.confirmacionTexto}>
            ✓ Intercambio confirmado por ambas partes
          </Text>
        </View>

        <Pressable style={styles.boton}>
          <Text style={styles.textoBoton}>Calificar servicio</Text>
        </Pressable>

        <Pressable style={styles.botonSecundario}>
          <Text style={styles.textoSecundario}>Volver a intercambios</Text>
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
    borderColor: colores.borde,
    marginBottom: 25
  },
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8
  },
  servicio: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colores.texto
  },
  estado: {
    backgroundColor: '#DDF3E7',
    color: colores.verde,
    padding: 7,
    borderRadius: 8,
    fontWeight: 'bold'
  },
  identificador: {
    color: colores.textoSecundario,
    fontSize: 12,
    marginTop: 8
  },
  separador: {
    height: 1,
    backgroundColor: colores.borde,
    marginVertical: 18
  },
  etiqueta: {
    color: colores.textoSecundario,
    fontSize: 13,
    marginTop: 15
  },
  valor: {
    color: colores.texto,
    fontWeight: 'bold',
    marginTop: 5,
    lineHeight: 21
  },
  creditosBox: {
    backgroundColor: colores.naranjaClaro,
    padding: 15,
    borderRadius: 12,
    marginTop: 22,
    alignItems: 'center'
  },
  creditosTitulo: {
    color: colores.texto,
    fontWeight: 'bold'
  },
  creditos: {
    fontSize: 26,
    color: colores.verde,
    fontWeight: 'bold',
    marginTop: 8
  },
  creditosNota: {
    color: colores.textoSecundario,
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center'
  },
  confirmacion: {
    backgroundColor: '#DDF3E7',
    padding: 12,
    borderRadius: 10,
    marginTop: 18
  },
  confirmacionTexto: {
    color: colores.verde,
    fontWeight: 'bold',
    textAlign: 'center'
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
