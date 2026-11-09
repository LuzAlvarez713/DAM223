
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

import colores from '../../styles/colores';

export default function ReportesScreen() {
  return (
    <ScrollView style={styles.contenedor}>
      <View style={styles.encabezado}>
        <Text style={styles.titulo}>Mis reportes</Text>
        <Text style={styles.subtitulo}>
          Consulta el resumen de tu participación en Banco de Tiempo.
        </Text>
      </View>

      <View style={styles.tarjetaPrincipal}>
        <Text style={styles.textoBlanco}>Resumen de actividad</Text>
        <Text style={styles.periodo}>Noviembre 2026</Text>
        <Text style={styles.numeroPrincipal}>8</Text>
        <Text style={styles.textoBlanco}>Créditos disponibles</Text>
      </View>

      <Text style={styles.tituloSeccion}>Estadísticas generales</Text>

      <View style={styles.estadisticas}>
        <View style={styles.tarjetaEstadistica}>
          <Text style={styles.numero}>5</Text>
          <Text style={styles.etiqueta}>Servicios ofrecidos</Text>
        </View>

        <View style={styles.tarjetaEstadistica}>
          <Text style={styles.numero}>3</Text>
          <Text style={styles.etiqueta}>Servicios recibidos</Text>
        </View>

        <View style={styles.tarjetaEstadistica}>
          <Text style={styles.numero}>6</Text>
          <Text style={styles.etiqueta}>Intercambios completados</Text>
        </View>

        <View style={styles.tarjetaEstadistica}>
          <Text style={styles.numero}>4.8</Text>
          <Text style={styles.etiqueta}>Calificación promedio</Text>
        </View>
      </View>

      <Text style={styles.tituloSeccion}>Actividad de créditos</Text>

      <View style={styles.tarjetaGrafica}>
        <Text style={styles.tituloGrafica}>Créditos por actividad</Text>

        <View style={styles.barraFila}>
          <Text style={styles.nombreBarra}>Ganados</Text>
          <View style={styles.fondoBarra}>
            <View style={styles.barraGanados} />
          </View>
          <Text style={styles.valorBarra}>12</Text>
        </View>

        <View style={styles.barraFila}>
          <Text style={styles.nombreBarra}>Utilizados</Text>
          <View style={styles.fondoBarra}>
            <View style={styles.barraUtilizados} />
          </View>
          <Text style={styles.valorBarra}>4</Text>
        </View>

        <View style={styles.barraFila}>
          <Text style={styles.nombreBarra}>Disponibles</Text>
          <View style={styles.fondoBarra}>
            <View style={styles.barraDisponibles} />
          </View>
          <Text style={styles.valorBarra}>8</Text>
        </View>
      </View>

      <View style={styles.nota}>
        <Text style={styles.textoNota}>
          Este reporte te ayuda a conocer tu actividad y participación
          dentro de la comunidad.
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
  tarjetaPrincipal: {
    backgroundColor: colores.naranja,
    borderRadius: 18,
    padding: 25,
    alignItems: 'center',
    marginBottom: 25,
  },
  textoBlanco: {
    color: colores.blanco,
    fontSize: 15,
  },
  periodo: {
    color: colores.naranjaClaro,
    fontSize: 13,
    marginTop: 8,
  },
  numeroPrincipal: {
    fontSize: 52,
    fontWeight: 'bold',
    color: colores.blanco,
    marginVertical: 5,
  },
  tituloSeccion: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colores.texto,
    marginBottom: 12,
  },
  estadisticas: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 25,
  },
  tarjetaEstadistica: {
    width: '47%',
    backgroundColor: colores.blanco,
    borderRadius: 13,
    padding: 17,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colores.borde,
  },
  numero: {
    fontSize: 27,
    fontWeight: 'bold',
    color: colores.naranja,
  },
  etiqueta: {
    fontSize: 12,
    color: colores.textoSecundario,
    textAlign: 'center',
    marginTop: 6,
  },
  tarjetaGrafica: {
    backgroundColor: colores.blanco,
    borderRadius: 14,
    padding: 18,
    borderWidth: 1,
    borderColor: colores.borde,
    marginBottom: 20,
  },
  tituloGrafica: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colores.texto,
    marginBottom: 20,
  },
  barraFila: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  nombreBarra: {
    width: 85,
    fontSize: 12,
    color: colores.texto,
  },
  fondoBarra: {
    flex: 1,
    height: 13,
    backgroundColor: colores.naranjaClaro,
    borderRadius: 10,
    overflow: 'hidden',
  },
  barraGanados: {
    width: '100%',
    height: '100%',
    backgroundColor: colores.verde,
    borderRadius: 10,
  },
  barraUtilizados: {
    width: '33%',
    height: '100%',
    backgroundColor: colores.rojo,
    borderRadius: 10,
  },
  barraDisponibles: {
    width: '67%',
    height: '100%',
    backgroundColor: colores.naranja,
    borderRadius: 10,
  },
  valorBarra: {
    width: 28,
    textAlign: 'right',
    fontSize: 12,
    fontWeight: 'bold',
    color: colores.texto,
    marginLeft: 8,
  },
  nota: {
    backgroundColor: colores.naranjaClaro,
    padding: 15,
    borderRadius: 12,
    marginBottom: 25,
  },
  textoNota: {
    color: colores.texto,
    fontSize: 13,
    textAlign: 'center',
  },
});
