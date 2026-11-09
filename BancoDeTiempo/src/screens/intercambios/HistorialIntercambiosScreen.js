
import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView
} from 'react-native';

import colores from '../../styles/colores';

export default function HistorialIntercambiosScreen() {
  return (
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>Historial de intercambios</Text>
      <Text style={styles.subtitulo}>
        Consulta los servicios que has ofrecido y recibido.
      </Text>

      <View style={styles.resumen}>
        <View style={styles.resumenItem}>
          <Text style={styles.numero}>12</Text>
          <Text style={styles.resumenTexto}>Total</Text>
        </View>

        <View style={styles.resumenItem}>
          <Text style={styles.numeroVerde}>10</Text>
          <Text style={styles.resumenTexto}>Completados</Text>
        </View>

        <View style={styles.resumenItem}>
          <Text style={styles.numeroNaranja}>2</Text>
          <Text style={styles.resumenTexto}>En proceso</Text>
        </View>
      </View>

      <Text style={styles.seccion}>Intercambios anteriores</Text>

      <View style={styles.tarjeta}>
        <View style={styles.encabezado}>
          <Text style={styles.nombre}>Diseño de logotipo</Text>
          <Text style={styles.id}>#025</Text>
        </View>

        <Text style={styles.persona}>Con: Mariana López</Text>
        <Text style={styles.fecha}>6 de noviembre de 2026</Text>
        <Text style={styles.tipo}>Servicio recibido</Text>

        <View style={styles.estado}>
          <Text style={styles.estadoTexto}>Completado</Text>
        </View>

        <View style={styles.pie}>
          <Text style={styles.creditos}>-2 créditos</Text>
          <Pressable style={styles.boton}>
            <Text style={styles.textoBoton}>Ver detalles</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.tarjeta}>
        <View style={styles.encabezado}>
          <Text style={styles.nombre}>Asesoría de programación</Text>
          <Text style={styles.id}>#024</Text>
        </View>

        <Text style={styles.persona}>Con: Juan Pérez</Text>
        <Text style={styles.fecha}>4 de noviembre de 2026</Text>
        <Text style={styles.tipo}>Servicio ofrecido</Text>

        <View style={styles.estado}>
          <Text style={styles.estadoTexto}>Completado</Text>
        </View>

        <View style={styles.pie}>
          <Text style={styles.creditosPositivos}>+2 créditos</Text>
          <Pressable style={styles.boton}>
            <Text style={styles.textoBoton}>Ver detalles</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.tarjeta}>
        <View style={styles.encabezado}>
          <Text style={styles.nombre}>Clases de inglés</Text>
          <Text style={styles.id}>#023</Text>
        </View>

        <Text style={styles.persona}>Con: Andrea Pérez</Text>
        <Text style={styles.fecha}>3 de noviembre de 2026</Text>
        <Text style={styles.tipo}>Servicio recibido</Text>

        <View style={styles.estadoProceso}>
          <Text style={styles.estadoProcesoTexto}>En proceso</Text>
        </View>

        <View style={styles.pie}>
          <Text style={styles.creditos}>1 crédito por hora</Text>
          <Pressable style={styles.boton}>
            <Text style={styles.textoBoton}>Ver detalles</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.aviso}>
        <Text style={styles.avisoTexto}>
          Los intercambios completados permanecen en tu historial
          para que puedas consultar tu actividad.
        </Text>
      </View>

      <Pressable style={styles.botonSecundario}>
        <Text style={styles.textoSecundario}>Volver a intercambios</Text>
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
    gap: 9,
    marginTop: 22
  },
  resumenItem: {
    flex: 1,
    backgroundColor: colores.blanco,
    borderRadius: 12,
    padding: 13,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colores.borde
  },
  numero: {
    color: colores.naranja,
    fontSize: 23,
    fontWeight: 'bold'
  },
  numeroVerde: {
    color: colores.verde,
    fontSize: 23,
    fontWeight: 'bold'
  },
  numeroNaranja: {
    color: colores.naranja,
    fontSize: 23,
    fontWeight: 'bold'
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
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colores.borde,
    marginBottom: 14
  },
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8
  },
  nombre: {
    color: colores.texto,
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1
  },
  id: {
    color: colores.textoSecundario,
    fontSize: 12
  },
  persona: {
    color: colores.textoSecundario,
    marginTop: 8
  },
  fecha: {
    color: colores.textoSecundario,
    fontSize: 12,
    marginTop: 5
  },
  tipo: {
    color: colores.naranja,
    fontWeight: 'bold',
    marginTop: 10
  },
  estado: {
    backgroundColor: '#E2F5E9',
    padding: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 10
  },
  estadoTexto: {
    color: colores.verde,
    fontWeight: 'bold'
  },
  estadoProceso: {
    backgroundColor: colores.naranjaClaro,
    padding: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 10
  },
  estadoProcesoTexto: {
    color: colores.naranja,
    fontWeight: 'bold'
  },
  pie: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 14
  },
  creditos: {
    color: colores.rojo,
    fontWeight: 'bold'
  },
  creditosPositivos: {
    color: colores.verde,
    fontWeight: 'bold'
  },
  boton: {
    backgroundColor: colores.naranja,
    padding: 10,
    borderRadius: 8
  },
  textoBoton: {
    color: colores.blanco,
    fontWeight: 'bold',
    fontSize: 12
  },
  aviso: {
    backgroundColor: colores.naranjaClaro,
    padding: 13,
    borderRadius: 10,
    marginTop: 8
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
