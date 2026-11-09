
import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet
} from 'react-native';

import colores from '../../styles/colores';

export default function CancelarSolicitudScreen() {
  return (
    <View style={styles.contenedor}>
      <View style={styles.tarjeta}>
        <View style={styles.icono}>
          <Text style={styles.signo}>!</Text>
        </View>

        <Text style={styles.titulo}>Cancelar solicitud</Text>

        <Text style={styles.subtitulo}>
          ¿Estás seguro de que deseas cancelar esta solicitud?
        </Text>

        <View style={styles.detalles}>
          <Text style={styles.etiqueta}>Servicio</Text>
          <Text style={styles.valor}>Clases de inglés</Text>

          <Text style={styles.etiqueta}>Proveedor</Text>
          <Text style={styles.valor}>Carlos Martínez</Text>

          <Text style={styles.etiqueta}>Créditos estimados</Text>
          <Text style={styles.valor}>2 créditos</Text>

          <Text style={styles.etiqueta}>Estado</Text>
          <Text style={styles.estado}>Pendiente</Text>
        </View>

        <Pressable style={styles.botonCancelar}>
          <Text style={styles.textoBoton}>Sí, cancelar solicitud</Text>
        </Pressable>

        <Pressable style={styles.botonVolver}>
          <Text style={styles.textoVolver}>Conservar solicitud</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colores.fondo,
    justifyContent: 'center',
    padding: 20
  },
  tarjeta: {
    backgroundColor: colores.blanco,
    borderRadius: 18,
    padding: 22,
    borderWidth: 1,
    borderColor: colores.borde,
    alignItems: 'center'
  },
  icono: {
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: colores.naranjaClaro,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  signo: {
    fontSize: 38,
    fontWeight: 'bold',
    color: colores.naranja
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colores.texto,
    textAlign: 'center'
  },
  subtitulo: {
    color: colores.textoSecundario,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
    lineHeight: 21
  },
  detalles: {
    backgroundColor: colores.fondo,
    padding: 15,
    borderRadius: 12,
    width: '100%'
  },
  etiqueta: {
    color: colores.textoSecundario,
    fontSize: 12,
    marginTop: 8
  },
  valor: {
    color: colores.texto,
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 3
  },
  estado: {
    color: colores.naranja,
    fontWeight: 'bold',
    marginTop: 3
  },
  botonCancelar: {
    backgroundColor: colores.rojo,
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 22
  },
  textoBoton: {
    color: colores.blanco,
    fontWeight: 'bold'
  },
  botonVolver: {
    borderWidth: 1,
    borderColor: colores.naranja,
    padding: 14,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10
  },
  textoVolver: {
    color: colores.naranja,
    fontWeight: 'bold'
  }
});
