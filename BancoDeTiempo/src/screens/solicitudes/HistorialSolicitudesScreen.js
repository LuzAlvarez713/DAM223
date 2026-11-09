
import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView
} from 'react-native';

import colores from '../../styles/colores';

export default function HistorialSolicitudesScreen() {
  return (
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>Historial de solicitudes</Text>
      <Text style={styles.subtitulo}>
        Consulta el estado de todas las solicitudes que has enviado.
      </Text>

      <View style={styles.resumen}>
        <View style={styles.resumenItem}>
          <Text style={styles.numero}>8</Text>
          <Text style={styles.resumenTexto}>Total</Text>
        </View>

        <View style={styles.resumenItem}>
          <Text style={styles.numeroVerde}>5</Text>
          <Text style={styles.resumenTexto}>Aceptadas</Text>
        </View>

        <View style={styles.resumenItem}>
          <Text style={styles.numeroRojo}>2</Text>
          <Text style={styles.resumenTexto}>Rechazadas</Text>
        </View>
      </View>

      <Text style={styles.seccion}>Solicitudes anteriores</Text>

      <View style={styles.tarjeta}>
        <Text style={styles.nombre}>Asesoría de programación</Text>
        <Text style={styles.persona}>Para: Carlos Hernández</Text>
        <Text style={styles.fecha}>5 de noviembre de 2026</Text>
        <Text style={styles.creditos}>2 créditos</Text>

        <View style={styles.estadoAceptado}>
          <Text style={styles.textoAceptado}>Aceptada</Text>
        </View>

        <Pressable style={styles.boton}>
          <Text style={styles.textoBoton}>Ver detalles</Text>
        </Pressable>
      </View>

      <View style={styles.tarjeta}>
        <Text style={styles.nombre}>Clases de inglés</Text>
        <Text style={styles.persona}>Para: Andrea Pérez</Text>
        <Text style={styles.fecha}>3 de noviembre de 2026</Text>
        <Text style={styles.creditos}>1 crédito</Text>

        <View style={styles.estadoRechazado}>
          <Text style={styles.textoRechazado}>Rechazada</Text>
        </View>

        <Pressable style={styles.boton}>
          <Text style={styles.textoBoton}>Ver detalles</Text>
        </Pressable>
      </View>

      <View style={styles.tarjeta}>
        <Text style={styles.nombre}>Diseño de logotipo</Text>
        <Text style={styles.persona}>Para: Mariana López</Text>
        <Text style={styles.fecha}>1 de noviembre de 2026</Text>
        <Text style={styles.creditos}>2 créditos</Text>

        <View style={styles.estadoCancelado}>
          <Text style={styles.textoCancelado}>Cancelada</Text>
        </View>

        <Pressable style={styles.boton}>
          <Text style={styles.textoBoton}>Ver detalles</Text>
        </Pressable>
      </View>

      <View style={styles.aviso}>
        <Text style={styles.avisoTexto}>
          Aquí puedes consultar el seguimiento de tus solicitudes
          anteriores y revisar sus detalles.
        </Text>
      </View>

      <Pressable style={styles.botonSecundario}>
        <Text style={styles.textoSecundario}>Volver a mis solicitudes</Text>
      </Pressable>
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
    lineHeight: 20
  },
  resumen: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 22
  },
  resumenItem: {
    flex: 1,
    backgroundColor: colores.blanco,
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colores.borde
  },
  numero: {
    fontSize: 23,
    fontWeight: 'bold',
    color: colores.naranja
  },
  numeroVerde: {
    fontSize: 23,
    fontWeight: 'bold',
    color: colores.verde
  },
  numeroRojo: {
    fontSize: 23,
    fontWeight: 'bold',
    color: colores.rojo
  },
  resumenTexto: {
    color: colores.textoSecundario,
    fontSize: 11,
    marginTop: 5
  },
  seccion: {
    fontSize: 19,
    fontWeight: 'bold',
    color: colores.texto,
    marginTop: 25,
    marginBottom: 12
  },
  tarjeta: {
    backgroundColor: colores.blanco,
    borderRadius: 14,
    padding: 17,
    borderWidth: 1,
    borderColor: colores.borde,
    marginBottom: 14
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colores.texto
  },
  persona: {
    color: colores.textoSecundario,
    marginTop: 7
  },
  fecha: {
    color: colores.textoSecundario,
    fontSize: 12,
    marginTop: 5
  },
  creditos: {
    color: colores.naranja,
    fontWeight: 'bold',
    marginTop: 10
  },
  estadoAceptado: {
    backgroundColor: '#E2F5E9',
    padding: 9,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 12
  },
  textoAceptado: {
    color: colores.verde,
    fontWeight: 'bold'
  },
  estadoRechazado: {
    backgroundColor: '#FCE5E4',
    padding: 9,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 12
  },
  textoRechazado: {
    color: colores.rojo,
    fontWeight: 'bold'
  },
  estadoCancelado: {
    backgroundColor: colores.naranjaClaro,
    padding: 9,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 12
  },
  textoCancelado: {
    color: colores.naranja,
    fontWeight: 'bold'
  },
  boton: {
    backgroundColor: colores.naranja,
    padding: 12,
    borderRadius: 9,
    alignItems: 'center',
    marginTop: 14
  },
  textoBoton: {
    color: colores.blanco,
    fontWeight: 'bold'
  },
  aviso: {
    backgroundColor: colores.naranjaClaro,
    padding: 13,
    borderRadius: 10,
    marginTop: 10
  },
  avisoTexto: {
    color: colores.texto,
    lineHeight: 20
  },
  botonSecundario: {
    borderWidth: 1,
    borderColor: colores.naranja,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 25
  },
  textoSecundario: {
    color: colores.naranja,
    fontWeight: 'bold'
  }
});
