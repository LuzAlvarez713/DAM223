
import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView
} from 'react-native';

import colores from '../../styles/colores';

export default function DetalleReporteScreen() {
  return (
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>Detalle de reporte</Text>
      <Text style={styles.subtitulo}>
        Resumen de tu participación en el Banco de Tiempo.
      </Text>

      <View style={styles.tarjetaPrincipal}>
        <Text style={styles.periodo}>Reporte de noviembre 2026</Text>
        <Text style={styles.total}>12 horas</Text>
        <Text style={styles.descripcionTotal}>
          Tiempo total de intercambio
        </Text>
      </View>

      <Text style={styles.seccion}>Resumen de actividad</Text>

      <View style={styles.fila}>
        <View style={styles.tarjeta}>
          <Text style={styles.icono}>↗</Text>
          <Text style={styles.numero}>8</Text>
          <Text style={styles.etiqueta}>Servicios ofrecidos</Text>
        </View>

        <View style={styles.tarjeta}>
          <Text style={styles.icono}>↙</Text>
          <Text style={styles.numero}>4</Text>
          <Text style={styles.etiqueta}>Servicios recibidos</Text>
        </View>
      </View>

      <View style={styles.fila}>
        <View style={styles.tarjeta}>
          <Text style={styles.icono}>★</Text>
          <Text style={styles.numero}>4.8</Text>
          <Text style={styles.etiqueta}>Calificación promedio</Text>
        </View>

        <View style={styles.tarjeta}>
          <Text style={styles.icono}>◷</Text>
          <Text style={styles.numero}>10</Text>
          <Text style={styles.etiqueta}>Créditos disponibles</Text>
        </View>
      </View>

      <Text style={styles.seccion}>Distribución del tiempo</Text>

      <View style={styles.tarjetaGrande}>
        <Text style={styles.etiquetaGrafica}>Horas ofrecidas</Text>
        <View style={styles.fondoBarra}>
          <View style={styles.barraOfrecidas} />
        </View>
        <Text style={styles.valorBarra}>8 horas</Text>

        <Text style={styles.etiquetaGrafica}>Horas recibidas</Text>
        <View style={styles.fondoBarra}>
          <View style={styles.barraRecibidas} />
        </View>
        <Text style={styles.valorBarra}>4 horas</Text>
      </View>

      <View style={styles.aviso}>
        <Text style={styles.avisoTexto}>
          Este reporte muestra datos de ejemplo para representar
          la actividad de tu cuenta.
        </Text>
      </View>

      <Pressable style={styles.boton}>
        <Text style={styles.textoBoton}>Volver a reportes</Text>
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
    marginBottom: 20
  },
  tarjetaPrincipal: {
    backgroundColor: colores.naranja,
    padding: 22,
    borderRadius: 16,
    alignItems: 'center'
  },
  periodo: {
    color: colores.blanco,
    fontWeight: 'bold'
  },
  total: {
    color: colores.blanco,
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 12
  },
  descripcionTotal: {
    color: colores.blanco,
    marginTop: 4
  },
  seccion: {
    fontSize: 19,
    fontWeight: 'bold',
    color: colores.texto,
    marginTop: 24,
    marginBottom: 12
  },
  fila: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12
  },
  tarjeta: {
    flex: 1,
    backgroundColor: colores.blanco,
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colores.borde
  },
  icono: {
    fontSize: 25,
    color: colores.naranja
  },
  numero: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colores.texto,
    marginTop: 8
  },
  etiqueta: {
    color: colores.textoSecundario,
    fontSize: 12,
    marginTop: 5
  },
  tarjetaGrande: {
    backgroundColor: colores.blanco,
    padding: 18,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colores.borde
  },
  etiquetaGrafica: {
    color: colores.texto,
    fontWeight: 'bold',
    marginTop: 8
  },
  fondoBarra: {
    height: 13,
    backgroundColor: colores.naranjaClaro,
    borderRadius: 10,
    marginTop: 9
  },
  barraOfrecidas: {
    width: '80%',
    height: 13,
    backgroundColor: colores.naranja,
    borderRadius: 10
  },
  barraRecibidas: {
    width: '40%',
    height: 13,
    backgroundColor: colores.verde,
    borderRadius: 10
  },
  valorBarra: {
    color: colores.textoSecundario,
    fontSize: 12,
    marginTop: 5
  },
  aviso: {
    backgroundColor: colores.naranjaClaro,
    padding: 13,
    borderRadius: 10,
    marginTop: 20
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
    marginTop: 20,
    marginBottom: 25
  },
  textoBoton: {
    color: colores.blanco,
    fontWeight: 'bold'
  }
});
