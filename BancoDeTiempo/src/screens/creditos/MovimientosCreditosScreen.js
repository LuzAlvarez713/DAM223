
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

import colores from '../../styles/colores';

const movimientos = [
  {
    id: 'MOV-001',
    concepto: 'Servicio de diseño',
    fecha: '06/11/2026',
    tipo: 'Ganados',
    cantidad: '+3'
  },
  {
    id: 'MOV-002',
    concepto: 'Clases de inglés',
    fecha: '05/11/2026',
    tipo: 'Utilizados',
    cantidad: '-2'
  },
  {
    id: 'MOV-003',
    concepto: 'Asesoría de matemáticas',
    fecha: '03/11/2026',
    tipo: 'Ganados',
    cantidad: '+2'
  },
  {
    id: 'MOV-004',
    concepto: 'Servicio de jardinería',
    fecha: '01/11/2026',
    tipo: 'Utilizados',
    cantidad: '-1'
  }
];

export default function MovimientosCreditosScreen() {
  return (
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>Movimientos de créditos</Text>
      <Text style={styles.subtitulo}>
        Consulta los créditos que has ganado y utilizado
      </Text>

      <View style={styles.resumen}>
        <Text style={styles.resumenEtiqueta}>Saldo actual</Text>
        <Text style={styles.saldo}>12 créditos</Text>
        <Text style={styles.resumenNota}>
          Disponible en tu cuenta
        </Text>
      </View>

      <View style={styles.estadisticas}>
        <View style={styles.estadistica}>
          <Text style={styles.verde}>+5</Text>
          <Text style={styles.descripcion}>Ganados</Text>
        </View>

        <View style={styles.estadistica}>
          <Text style={styles.rojo}>-3</Text>
          <Text style={styles.descripcion}>Utilizados</Text>
        </View>
      </View>

      <Text style={styles.seccion}>Historial de movimientos</Text>

      {movimientos.map((movimiento) => (
        <View key={movimiento.id} style={styles.movimiento}>
          <View style={styles.informacion}>
            <Text style={styles.concepto}>{movimiento.concepto}</Text>
            <Text style={styles.fecha}>{movimiento.fecha}</Text>
            <Text style={styles.id}>{movimiento.id}</Text>
          </View>

          <View style={styles.derecha}>
            <Text
              style={[
                styles.cantidad,
                movimiento.tipo === 'Ganados'
                  ? styles.textoVerde
                  : styles.textoRojo
              ]}
            >
              {movimiento.cantidad}
            </Text>
            <Text style={styles.tipo}>{movimiento.tipo}</Text>
          </View>
        </View>
      ))}
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
  resumen: {
    backgroundColor: colores.naranja,
    borderRadius: 16,
    padding: 22,
    alignItems: 'center'
  },
  resumenEtiqueta: {
    color: colores.blanco,
    fontSize: 15
  },
  saldo: {
    color: colores.blanco,
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 8
  },
  resumenNota: {
    color: colores.blanco,
    marginTop: 5
  },
  estadisticas: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 18
  },
  estadistica: {
    flex: 1,
    backgroundColor: colores.blanco,
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colores.borde
  },
  verde: {
    color: colores.verde,
    fontSize: 24,
    fontWeight: 'bold'
  },
  rojo: {
    color: colores.rojo,
    fontSize: 24,
    fontWeight: 'bold'
  },
  descripcion: {
    color: colores.textoSecundario,
    marginTop: 5
  },
  seccion: {
    fontSize: 19,
    fontWeight: 'bold',
    color: colores.texto,
    marginTop: 25,
    marginBottom: 12
  },
  movimiento: {
    backgroundColor: colores.blanco,
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colores.borde,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  informacion: {
    flex: 1,
    paddingRight: 8
  },
  concepto: {
    color: colores.texto,
    fontWeight: 'bold',
    fontSize: 15
  },
  fecha: {
    color: colores.textoSecundario,
    marginTop: 5,
    fontSize: 12
  },
  id: {
    color: colores.textoSecundario,
    fontSize: 10,
    marginTop: 3
  },
  derecha: {
    alignItems: 'flex-end'
  },
  cantidad: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  textoVerde: {
    color: colores.verde
  },
  textoRojo: {
    color: colores.rojo
  },
  tipo: {
    color: colores.textoSecundario,
    fontSize: 11,
    marginTop: 3
  }
});
