
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

import colores from '../../styles/colores';

const favoritos = [
  {
    id: '1',
    nombre: 'Clases de inglés',
    categoria: 'Educación',
    usuario: 'María López',
    duracion: '2 horas',
    creditos: '2 créditos',
    inicial: 'M',
  },
  {
    id: '2',
    nombre: 'Diseño de logotipos',
    categoria: 'Diseño',
    usuario: 'Carlos Pérez',
    duracion: '3 horas',
    creditos: '3 créditos',
    inicial: 'C',
  },
  {
    id: '3',
    nombre: 'Asesoría de matemáticas',
    categoria: 'Educación',
    usuario: 'Ana Torres',
    duracion: '1 hora',
    creditos: '1 crédito',
    inicial: 'A',
  },
];

export default function FavoritosScreen() {
  return (
    <ScrollView style={styles.contenedor}>
      <View style={styles.encabezado}>
        <Text style={styles.titulo}>Mis favoritos</Text>
        <Text style={styles.subtitulo}>
          Aquí encontrarás los servicios que guardaste.
        </Text>
      </View>

      <View style={styles.resumen}>
        <Text style={styles.numero}>{favoritos.length}</Text>
        <Text style={styles.textoResumen}>
          Servicios guardados
        </Text>
      </View>

      <Text style={styles.tituloSeccion}>Servicios favoritos</Text>

      {favoritos.map((item) => (
        <View key={item.id} style={styles.tarjeta}>
          <View style={styles.filaSuperior}>
            <View style={styles.avatar}>
              <Text style={styles.inicial}>{item.inicial}</Text>
            </View>

            <View style={styles.informacion}>
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text style={styles.categoria}>{item.categoria}</Text>
            </View>

            <Text style={styles.corazon}>♥</Text>
          </View>

          <View style={styles.divisor} />

          <Text style={styles.usuario}>
            Ofrecido por: {item.usuario}
          </Text>

          <View style={styles.detalles}>
            <Text style={styles.detalle}>{item.duracion}</Text>
            <Text style={styles.creditos}>{item.creditos}</Text>
          </View>

          <View style={styles.boton}>
            <Text style={styles.textoBoton}>Ver servicio</Text>
          </View>
        </View>
      ))}

      <View style={styles.nota}>
        <Text style={styles.textoNota}>
          Guarda tus servicios preferidos para encontrarlos fácilmente.
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
  resumen: {
    backgroundColor: colores.naranja,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 25,
  },
  numero: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colores.blanco,
  },
  textoResumen: {
    fontSize: 14,
    color: colores.blanco,
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
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colores.borde,
  },
  filaSuperior: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: colores.naranjaClaro,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inicial: {
    color: colores.naranja,
    fontSize: 20,
    fontWeight: 'bold',
  },
  informacion: {
    flex: 1,
    marginLeft: 12,
  },
  nombre: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colores.texto,
  },
  categoria: {
    fontSize: 12,
    color: colores.textoSecundario,
    marginTop: 4,
  },
  corazon: {
    color: colores.rojo,
    fontSize: 25,
  },
  divisor: {
    height: 1,
    backgroundColor: colores.borde,
    marginVertical: 13,
  },
  usuario: {
    fontSize: 13,
    color: colores.textoSecundario,
  },
  detalles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  detalle: {
    fontSize: 13,
    color: colores.texto,
  },
  creditos: {
    fontSize: 13,
    fontWeight: 'bold',
    color: colores.naranja,
  },
  boton: {
    backgroundColor: colores.naranjaClaro,
    padding: 11,
    borderRadius: 9,
    alignItems: 'center',
    marginTop: 15,
  },
  textoBoton: {
    color: colores.texto,
    fontWeight: 'bold',
  },
  nota: {
    backgroundColor: colores.naranjaClaro,
    padding: 15,
    borderRadius: 12,
    marginBottom: 25,
  },
  textoNota: {
    color: colores.texto,
    textAlign: 'center',
    fontSize: 13,
  },
});
