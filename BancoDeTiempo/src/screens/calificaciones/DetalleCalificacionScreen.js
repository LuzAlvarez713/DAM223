
import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView
} from 'react-native';

import colores from '../../styles/colores';

export default function DetalleCalificacionScreen() {
  return (
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>Detalle de calificación</Text>
      <Text style={styles.subtitulo}>
        Consulta los comentarios de tus intercambios.
      </Text>

      <View style={styles.tarjeta}>
        <View style={styles.avatar}>
          <Text style={styles.avatarTexto}>ML</Text>
        </View>

        <Text style={styles.nombre}>Mariana López</Text>
        <Text style={styles.fecha}>12 de octubre de 2026</Text>

        <View style={styles.estrellas}>
          <Text style={styles.estrellasTexto}>★★★★★</Text>
        </View>

        <Text style={styles.puntuacion}>5.0 de 5 estrellas</Text>

        <View style={styles.separador} />

        <Text style={styles.etiqueta}>Servicio recibido</Text>
        <Text style={styles.valor}>Diseño de logotipos</Text>

        <Text style={styles.etiqueta}>Intercambio</Text>
        <Text style={styles.valor}>Intercambio #025</Text>

        <Text style={styles.etiqueta}>Comentario</Text>
        <Text style={styles.comentario}>
          Excelente experiencia. Fue muy amable, cumplió con lo acordado
          y entregó un trabajo de buena calidad. Recomiendo su servicio.
        </Text>

        <View style={styles.estado}>
          <Text style={styles.estadoTexto}>Intercambio completado</Text>
        </View>

        <Pressable style={styles.boton}>
          <Text style={styles.textoBoton}>Volver a calificaciones</Text>
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
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: colores.naranjaClaro,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarTexto: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colores.naranja
  },
  nombre: {
    fontSize: 19,
    fontWeight: 'bold',
    color: colores.texto,
    marginTop: 12
  },
  fecha: {
    color: colores.textoSecundario,
    marginTop: 5
  },
  estrellas: {
    marginTop: 15
  },
  estrellasTexto: {
    color: colores.naranja,
    fontSize: 30,
    letterSpacing: 3
  },
  puntuacion: {
    color: colores.texto,
    fontWeight: 'bold',
    marginTop: 5
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
  comentario: {
    color: colores.texto,
    lineHeight: 22,
    alignSelf: 'flex-start',
    marginTop: 7
  },
  estado: {
    backgroundColor: colores.naranjaClaro,
    padding: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 22
  },
  estadoTexto: {
    color: colores.verde,
    fontWeight: 'bold'
  },
  boton: {
    backgroundColor: colores.naranja,
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 20
  },
  textoBoton: {
    color: colores.blanco,
    fontWeight: 'bold'
  }
});
