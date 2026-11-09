
import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView
} from 'react-native';

import colores from '../../styles/colores';

export default function DetalleServicioScreen() {
  return (
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>Detalle del servicio</Text>
      <Text style={styles.subtitulo}>
        Consulta la información de tu servicio publicado
      </Text>

      <View style={styles.tarjeta}>
        <View style={styles.encabezado}>
          <Text style={styles.nombre}>Clases de inglés</Text>
          <Text style={styles.estado}>Publicado</Text>
        </View>

        <Text style={styles.id}>Servicio #SER-001</Text>

        <View style={styles.separador} />

        <Text style={styles.etiqueta}>Categoría</Text>
        <Text style={styles.valor}>Educación</Text>

        <Text style={styles.etiqueta}>Descripción</Text>
        <Text style={styles.valor}>
          Ofrezco clases de inglés para principiantes, enfocadas en
          conversación, vocabulario y pronunciación.
        </Text>

        <Text style={styles.etiqueta}>Habilidad relacionada</Text>
        <Text style={styles.valor}>Dominio del idioma inglés</Text>

        <Text style={styles.etiqueta}>Duración estimada</Text>
        <Text style={styles.valor}>2 horas</Text>

        <View style={styles.creditosBox}>
          <Text style={styles.creditosTitulo}>Valor del servicio</Text>
          <Text style={styles.creditos}>2 créditos</Text>
        </View>

        <Text style={styles.etiqueta}>Fecha de publicación</Text>
        <Text style={styles.valor}>01/11/2026</Text>

        <Text style={styles.etiqueta}>Solicitudes recibidas</Text>
        <Text style={styles.valor}>3 solicitudes</Text>

        <Pressable style={styles.boton}>
          <Text style={styles.textoBoton}>Editar servicio</Text>
        </Pressable>

        <Pressable style={styles.botonEliminar}>
          <Text style={styles.textoEliminar}>Eliminar servicio</Text>
        </Pressable>

        <Pressable style={styles.botonSecundario}>
          <Text style={styles.textoSecundario}>Volver a mis servicios</Text>
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
    backgroundColor: '#DDF3E7',
    color: colores.verde,
    padding: 7,
    borderRadius: 8,
    fontWeight: 'bold'
  },
  id: {
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
    marginTop: 20
  },
  creditosTitulo: {
    color: colores.texto,
    fontWeight: 'bold'
  },
  creditos: {
    fontSize: 23,
    color: colores.verde,
    fontWeight: 'bold',
    marginTop: 5
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
  botonEliminar: {
    backgroundColor: colores.rojo,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10
  },
  textoEliminar: {
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
