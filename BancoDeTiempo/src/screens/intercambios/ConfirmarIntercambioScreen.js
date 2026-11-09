
import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView
} from 'react-native';

import colores from '../../styles/colores';

export default function ConfirmarIntercambioScreen() {
  return (
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>Confirmar intercambio</Text>
      <Text style={styles.subtitulo}>
        Verifica los datos antes de confirmar el servicio
      </Text>

      <View style={styles.tarjeta}>
        <View style={styles.icono}>
          <Text style={styles.signo}>✓</Text>
        </View>

        <Text style={styles.servicio}>Clases de inglés</Text>
        <Text style={styles.proveedor}>Con Carlos Martínez</Text>

        <View style={styles.separador} />

        <Text style={styles.etiqueta}>Fecha del servicio</Text>
        <Text style={styles.valor}>06/11/2026</Text>

        <Text style={styles.etiqueta}>Duración realizada</Text>
        <Text style={styles.valor}>2 horas</Text>

        <Text style={styles.etiqueta}>Créditos correspondientes</Text>
        <Text style={styles.creditos}>2 créditos</Text>

        <View style={styles.aviso}>
          <Text style={styles.avisoTitulo}>Importante</Text>
          <Text style={styles.avisoTexto}>
            Al confirmar, se registrará el intercambio y se actualizarán
            los créditos de ambas personas cuando las dos hayan confirmado.
          </Text>
        </View>

        <Text style={styles.etiqueta}>Estado de confirmación</Text>

        <View style={styles.estadoFila}>
          <Text style={styles.persona}>Tu confirmación</Text>
          <Text style={styles.pendiente}>Pendiente</Text>
        </View>

        <View style={styles.estadoFila}>
          <Text style={styles.persona}>Carlos Martínez</Text>
          <Text style={styles.pendiente}>Pendiente</Text>
        </View>

        <Pressable style={styles.boton}>
          <Text style={styles.textoBoton}>Confirmar servicio realizado</Text>
        </Pressable>

        <Pressable style={styles.botonSecundario}>
          <Text style={styles.textoSecundario}>Volver</Text>
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
    marginBottom: 25,
    alignItems: 'center'
  },
  icono: {
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: '#DDF3E7',
    justifyContent: 'center',
    alignItems: 'center'
  },
  signo: {
    fontSize: 32,
    color: colores.verde,
    fontWeight: 'bold'
  },
  servicio: {
    fontSize: 21,
    fontWeight: 'bold',
    color: colores.texto,
    marginTop: 12
  },
  proveedor: {
    color: colores.textoSecundario,
    marginTop: 5
  },
  separador: {
    height: 1,
    backgroundColor: colores.borde,
    width: '100%',
    marginVertical: 18
  },
  etiqueta: {
    color: colores.textoSecundario,
    fontSize: 13,
    alignSelf: 'flex-start',
    marginTop: 14
  },
  valor: {
    color: colores.texto,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 5
  },
  creditos: {
    color: colores.verde,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 5
  },
  aviso: {
    backgroundColor: colores.naranjaClaro,
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
    width: '100%'
  },
  avisoTitulo: {
    fontWeight: 'bold',
    color: colores.texto,
    marginBottom: 6
  },
  avisoTexto: {
    color: colores.texto,
    lineHeight: 20
  },
  estadoFila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: colores.fondo,
    padding: 12,
    borderRadius: 9,
    marginTop: 8
  },
  persona: {
    color: colores.texto,
    fontWeight: 'bold'
  },
  pendiente: {
    color: colores.naranja,
    fontWeight: 'bold'
  },
  boton: {
    backgroundColor: colores.verde,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginTop: 22
  },
  textoBoton: {
    color: colores.blanco,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  botonSecundario: {
    borderWidth: 1,
    borderColor: colores.naranja,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginTop: 10
  },
  textoSecundario: {
    color: colores.naranja,
    fontWeight: 'bold'
  }
});
