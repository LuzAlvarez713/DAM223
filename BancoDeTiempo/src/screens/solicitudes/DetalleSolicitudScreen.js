
import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView
} from 'react-native';

import colores from '../../styles/colores';

export default function DetalleSolicitudScreen() {
  return (
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>Detalle de solicitud</Text>
      <Text style={styles.subtitulo}>
        Consulta la información de tu solicitud
      </Text>

      <View style={styles.tarjeta}>
        <View style={styles.encabezado}>
          <Text style={styles.nombre}>Clases de inglés</Text>
          <Text style={styles.estado}>Pendiente</Text>
        </View>

        <Text style={styles.id}>Solicitud #SOL-001</Text>

        <View style={styles.separador} />

        <Text style={styles.etiqueta}>Proveedor del servicio</Text>
        <Text style={styles.valor}>Carlos Martínez</Text>

        <Text style={styles.etiqueta}>Categoría</Text>
        <Text style={styles.valor}>Educación</Text>

        <Text style={styles.etiqueta}>Descripción</Text>
        <Text style={styles.valor}>
          Apoyo para mejorar mi pronunciación y conversación en inglés.
        </Text>

        <Text style={styles.etiqueta}>Fecha solicitada</Text>
        <Text style={styles.valor}>15/11/2026</Text>

        <Text style={styles.etiqueta}>Horario preferido</Text>
        <Text style={styles.valor}>10:00 AM</Text>

        <Text style={styles.etiqueta}>Duración</Text>
        <Text style={styles.valor}>2 horas</Text>

        <View style={styles.creditosBox}>
          <Text style={styles.creditosTexto}>Costo estimado</Text>
          <Text style={styles.creditos}>2 créditos</Text>
        </View>

        <Text style={styles.etiqueta}>Mensaje enviado</Text>
        <Text style={styles.mensaje}>
          Hola, me gustaría recibir apoyo para mejorar mi inglés.
        </Text>

        <Pressable style={styles.boton}>
          <Text style={styles.textoBoton}>Editar solicitud</Text>
        </Pressable>

        <Pressable style={styles.botonCancelar}>
          <Text style={styles.textoCancelar}>Cancelar solicitud</Text>
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
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colores.texto
  },
  estado: {
    backgroundColor: colores.naranjaClaro,
    color: colores.naranja,
    padding: 7,
    borderRadius: 8,
    fontWeight: 'bold'
  },
  id: {
    color: colores.textoSecundario,
    marginTop: 8,
    fontSize: 12
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
    padding: 14,
    borderRadius: 10,
    marginTop: 20
  },
  creditosTexto: {
    color: colores.texto
  },
  creditos: {
    color: colores.verde,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5
  },
  mensaje: {
    color: colores.texto,
    backgroundColor: colores.fondo,
    padding: 12,
    borderRadius: 10,
    marginTop: 5,
    lineHeight: 21
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
  botonCancelar: {
    borderWidth: 1,
    borderColor: colores.rojo,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10
  },
  textoCancelar: {
    color: colores.rojo,
    fontWeight: 'bold'
  }
});
