
import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView
} from 'react-native';

import colores from '../../styles/colores';

export default function GraficasScreen() {
  return (
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>Mis gráficas</Text>
      <Text style={styles.subtitulo}>
        Visualiza tu actividad dentro del Banco de Tiempo.
      </Text>

      <View style={styles.filtro}>
        <Text style={styles.filtroTexto}>Periodo: Noviembre 2026</Text>
        <Text style={styles.flecha}>⌄</Text>
      </View>

      <Text style={styles.seccion}>Horas de intercambio</Text>

      <View style={styles.tarjeta}>
        <Text style={styles.descripcion}>
          Comparación de horas ofrecidas y recibidas.
        </Text>

        <View style={styles.leyenda}>
          <View style={styles.puntoNaranja} />
          <Text style={styles.textoLeyenda}>Ofrecidas</Text>
          <View style={styles.puntoVerde} />
          <Text style={styles.textoLeyenda}>Recibidas</Text>
        </View>

        {[
          { mes: 'Agosto', ofrecidas: '60%', recibidas: '30%' },
          { mes: 'Septiembre', ofrecidas: '80%', recibidas: '45%' },
          { mes: 'Octubre', ofrecidas: '70%', recibidas: '50%' },
          { mes: 'Noviembre', ofrecidas: '90%', recibidas: '40%' }
        ].map((item, index) => (
          <View key={index} style={styles.grupoBarras}>
            <Text style={styles.mes}>{item.mes}</Text>

            <View style={styles.fondoBarra}>
              <View style={[
                styles.barraOfrecida,
                { width: item.ofrecidas }
              ]} />
            </View>

            <View style={styles.fondoBarra}>
              <View style={[
                styles.barraRecibida,
                { width: item.recibidas }
              ]} />
            </View>
          </View>
        ))}
      </View>

      <Text style={styles.seccion}>Distribución de créditos</Text>

      <View style={styles.tarjeta}>
        <Text style={styles.descripcion}>
          Resumen de tus créditos durante el periodo.
        </Text>

        <View style={styles.dato}>
          <Text style={styles.datoEtiqueta}>Créditos obtenidos</Text>
          <Text style={styles.datoVerde}>+12</Text>
        </View>

        <View style={styles.dato}>
          <Text style={styles.datoEtiqueta}>Créditos utilizados</Text>
          <Text style={styles.datoNaranja}>-6</Text>
        </View>

        <View style={styles.separador} />

        <View style={styles.dato}>
          <Text style={styles.totalEtiqueta}>Saldo disponible</Text>
          <Text style={styles.total}>10 créditos</Text>
        </View>
      </View>

      <Text style={styles.seccion}>Resumen de participación</Text>

      <View style={styles.resumen}>
        <View style={styles.resumenItem}>
          <Text style={styles.numero}>8</Text>
          <Text style={styles.resumenTexto}>Servicios ofrecidos</Text>
        </View>

        <View style={styles.resumenItem}>
          <Text style={styles.numero}>4</Text>
          <Text style={styles.resumenTexto}>Servicios recibidos</Text>
        </View>

        <View style={styles.resumenItem}>
          <Text style={styles.numero}>4.8</Text>
          <Text style={styles.resumenTexto}>Calificación promedio</Text>
        </View>
      </View>

      <View style={styles.aviso}>
        <Text style={styles.avisoTexto}>
          Los valores mostrados son datos de ejemplo para representar
          las gráficas de actividad del usuario.
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
  filtro: {
    backgroundColor: colores.blanco,
    borderWidth: 1,
    borderColor: colores.borde,
    padding: 14,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  filtroTexto: {
    color: colores.texto,
    fontWeight: 'bold'
  },
  flecha: {
    color: colores.naranja,
    fontSize: 18
  },
  seccion: {
    fontSize: 19,
    fontWeight: 'bold',
    color: colores.texto,
    marginTop: 24,
    marginBottom: 12
  },
  tarjeta: {
    backgroundColor: colores.blanco,
    borderRadius: 14,
    padding: 17,
    borderWidth: 1,
    borderColor: colores.borde
  },
  descripcion: {
    color: colores.textoSecundario,
    fontSize: 13,
    marginBottom: 15
  },
  leyenda: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    marginBottom: 18,
    flexWrap: 'wrap'
  },
  puntoNaranja: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colores.naranja
  },
  puntoVerde: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colores.verde,
    marginLeft: 10
  },
  textoLeyenda: {
    color: colores.textoSecundario,
    fontSize: 12
  },
  grupoBarras: {
    marginBottom: 17
  },
  mes: {
    color: colores.texto,
    fontWeight: 'bold',
    marginBottom: 7
  },
  fondoBarra: {
    height: 12,
    backgroundColor: colores.naranjaClaro,
    borderRadius: 10,
    marginBottom: 5
  },
  barraOfrecida: {
    height: 12,
    backgroundColor: colores.naranja,
    borderRadius: 10
  },
  barraRecibida: {
    height: 12,
    backgroundColor: colores.verde,
    borderRadius: 10
  },
  dato: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10
  },
  datoEtiqueta: {
    color: colores.texto
  },
  datoVerde: {
    color: colores.verde,
    fontWeight: 'bold',
    fontSize: 18
  },
  datoNaranja: {
    color: colores.naranja,
    fontWeight: 'bold',
    fontSize: 18
  },
  separador: {
    height: 1,
    backgroundColor: colores.borde,
    marginVertical: 10
  },
  totalEtiqueta: {
    color: colores.texto,
    fontWeight: 'bold'
  },
  total: {
    color: colores.verde,
    fontWeight: 'bold',
    fontSize: 18
  },
  resumen: {
    flexDirection: 'row',
    gap: 8
  },
  resumenItem: {
    flex: 1,
    backgroundColor: colores.blanco,
    borderWidth: 1,
    borderColor: colores.borde,
    borderRadius: 12,
    padding: 12,
    alignItems: 'center'
  },
  numero: {
    color: colores.naranja,
    fontWeight: 'bold',
    fontSize: 21
  },
  resumenTexto: {
    color: colores.textoSecundario,
    fontSize: 11,
    textAlign: 'center',
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
    lineHeight: 20,
    fontSize: 13
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
