
import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView
} from 'react-native';

import colores from '../../styles/colores';

export default function DetalleMovimientoScreen() {
  return (
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>Detalle del movimiento</Text>
      <Text style={styles.subtitulo}>
        Consulta la información de esta operación de créditos.
      </Text>

      <View style={styles.tarjeta}>
        <View style={styles.icono}>
          <Text style={styles.iconoTexto}>↗</Text>
        </View>

        <Text style={styles.tipo}>Créditos recibidos</Text>
        <Text style={styles.cantidad}>+2 créditos</Text>
        <Text style={styles.estado}>Movimiento completado</Text>

        <View style={styles.separador} />

        <Text style={styles.etiqueta}>Concepto</Text>
        <Text style={styles.valor}>Servicio de asesoría de programación</Text>

        <Text style={styles.etiqueta}>Número de intercambio</Text>
        <Text style={styles.valor}>#025</Text>

        <Text style={styles.etiqueta}>Persona relacionada</Text>
        <Text style={styles.valor}>Juan Pérez</Text>

        <Text style={styles.etiqueta}>Fecha</Text>
        <Text style={styles.valor}>6 de noviembre de 2026</Text>

        <Text style={styles.etiqueta}>Duración del servicio</Text>
        <Text style={styles.valor}>2 horas</Text>

        <Text style={styles.etiqueta}>Créditos anteriores</Text>
        <Text style={styles.valor}>8 créditos</Text>

        <Text style={styles.etiqueta}>Créditos actuales</Text>
        <Text style={styles.creditos}>10 créditos</Text>

        <View style={styles.aviso}>
          <Text style={styles.avisoTexto}>
            Este movimiento corresponde a un intercambio completado.
            Cada hora de servicio equivale a un crédito.
          </Text>
        </View>

        <Pressable style={styles.boton}>
          <Text style={styles.textoBoton}>Volver a movimientos</Text>
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
    padding: 22,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colores.borde,
    alignItems: 'center',
    marginBottom: 25
  },
  icono: {
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: colores.naranjaClaro,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconoTexto: {
    fontSize: 35,
    color: colores.verde
  },
  tipo: {
    color: colores.texto,
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 12
  },
  cantidad: {
    color: colores.verde,
    fontSize: 29,
    fontWeight: 'bold',
    marginTop: 8
  },
  estado: {
    color: colores.verde,
    fontWeight: 'bold',
    marginTop: 7
  },
  separador: {
    height: 1,
    backgroundColor: colores.borde,
    width: '100%',
    marginVertical: 20
  },
  etiqueta: {
    color: colores.textoSecundario,
    fontSize: 13,
    alignSelf: 'flex-start',
    marginTop: 15
  },
  valor: {
    color: colores.texto,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 5
  },
  creditos: {
    color: colores.verde,
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 5
  },
  aviso: {
    backgroundColor: colores.naranjaClaro,
    padding: 13,
    borderRadius: 10,
    marginTop: 22,
    width: '100%'
  },
  avisoTexto: {
    color: colores.texto,
    lineHeight: 20
  },
  boton: {
    backgroundColor: colores.naranja,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginTop: 20
  },
  textoBoton: {
    color: colores.blanco,
    fontWeight: 'bold'
  }
});
