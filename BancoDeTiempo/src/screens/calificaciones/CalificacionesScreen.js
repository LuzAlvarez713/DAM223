
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

import colores from '../../styles/colores';

const calificaciones = [
  {
    id: '1',
    usuario: 'María López',
    servicio: 'Clases de inglés',
    comentario: 'Explicó muy bien y tuvo mucha paciencia.',
    estrellas: '★★★★★',
    fecha: '05 de noviembre de 2026',
  },
  {
    id: '2',
    usuario: 'Carlos Pérez',
    servicio: 'Diseño de logotipo',
    comentario: 'Excelente trabajo y muy buena atención.',
    estrellas: '★★★★☆',
    fecha: '03 de noviembre de 2026',
  },
  {
    id: '3',
    usuario: 'Ana Torres',
    servicio: 'Asesoría de matemáticas',
    comentario: 'Me ayudó a comprender mejor los temas.',
    estrellas: '★★★★★',
    fecha: '01 de noviembre de 2026',
  },
];

export default function CalificacionesScreen() {
  return (
    <ScrollView style={styles.contenedor}>
      <View style={styles.encabezado}>
        <Text style={styles.titulo}>Mis calificaciones</Text>
        <Text style={styles.subtitulo}>
          Consulta las opiniones de otros usuarios sobre tus servicios.
        </Text>
      </View>

      <View style={styles.tarjetaPromedio}>
        <Text style={styles.etiquetaPromedio}>Calificación promedio</Text>
        <Text style={styles.promedio}>4.8</Text>
        <Text style={styles.estrellas}>★★★★★</Text>
        <Text style={styles.total}>
          Basado en 3 opiniones
        </Text>
      </View>

      <Text style={styles.tituloSeccion}>Opiniones recibidas</Text>

      {calificaciones.map((item) => (
        <View key={item.id} style={styles.tarjeta}>
          <View style={styles.fila}>
            <View style={styles.avatar}>
              <Text style={styles.letra}>
                {item.usuario.charAt(0)}
              </Text>
            </View>

            <View style={styles.datosUsuario}>
              <Text style={styles.nombre}>{item.usuario}</Text>
              <Text style={styles.fecha}>{item.fecha}</Text>
            </View>
          </View>

          <Text style={styles.servicio}>
            Servicio: {item.servicio}
          </Text>

          <Text style={styles.estrellasTarjeta}>
            {item.estrellas}
          </Text>

          <Text style={styles.comentario}>
            "{item.comentario}"
          </Text>
        </View>
      ))}

      <View style={styles.nota}>
        <Text style={styles.textoNota}>
          Las calificaciones se pueden realizar únicamente después de
          completar un intercambio.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colores.fondo,
    padding: 20,
  },
  encabezado: {
    marginTop: 25,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 27,
    fontWeight: 'bold',
    color: colores.texto,
  },
  subtitulo: {
    fontSize: 14,
    color: colores.textoSecundario,
    marginTop: 6,
  },
  tarjetaPromedio: {
    backgroundColor: colores.naranja,
    borderRadius: 18,
    padding: 25,
    alignItems: 'center',
    marginBottom: 25,
  },
  etiquetaPromedio: {
    color: colores.blanco,
    fontSize: 15,
  },
  promedio: {
    fontSize: 50,
    fontWeight: 'bold',
    color: colores.blanco,
    marginTop: 8,
  },
  estrellas: {
    fontSize: 25,
    color: '#FFE28A',
    marginTop: 3,
  },
  total: {
    color: colores.blanco,
    fontSize: 12,
    marginTop: 8,
  },
  tituloSeccion: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colores.texto,
    marginBottom: 12,
  },
  tarjeta: {
    backgroundColor: colores.blanco,
    borderRadius: 14,
    padding: 16,
    marginBottom: 13,
    borderWidth: 1,
    borderColor: colores.borde,
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colores.naranjaClaro,
    alignItems: 'center',
    justifyContent: 'center',
  },
  letra: {
    color: colores.naranja,
    fontSize: 19,
    fontWeight: 'bold',
  },
  datosUsuario: {
    marginLeft: 12,
  },
  nombre: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colores.texto,
  },
  fecha: {
    fontSize: 11,
    color: colores.textoSecundario,
    marginTop: 3,
  },
  servicio: {
    fontSize: 13,
    color: colores.textoSecundario,
    marginTop: 15,
  },
  estrellasTarjeta: {
    color: '#E6A323',
    fontSize: 20,
    marginTop: 8,
  },
  comentario: {
    fontSize: 14,
    color: colores.texto,
    marginTop: 8,
    lineHeight: 20,
  },
  nota: {
    backgroundColor: colores.naranjaClaro,
    borderRadius: 12,
    padding: 15,
    marginTop: 5,
    marginBottom: 25,
  },
  textoNota: {
    color: colores.texto,
    fontSize: 13,
    textAlign: 'center',
  },
});
