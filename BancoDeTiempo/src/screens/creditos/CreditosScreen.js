
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
    id: '1',
    titulo: 'Servicio de diseño de logotipo',
    fecha: '05 de noviembre de 2026',
    tipo: 'Ganados',
    cantidad: '+3',
  },
  {
    id: '2',
    titulo: 'Asesoría de matemáticas',
    fecha: '03 de noviembre de 2026',
    tipo: 'Utilizados',
    cantidad: '-2',
  },
  {
    id: '3',
    titulo: 'Clases de inglés',
    fecha: '01 de noviembre de 2026',
    tipo: 'Ganados',
    cantidad: '+2',
  },
];

export default function CreditosScreen() {
  return (
    <ScrollView style={styles.contenedor}>
      <View style={styles.encabezado}>
        <Text style={styles.titulo}>Mis créditos</Text>
        <Text style={styles.subtitulo}>
          Consulta el saldo y los movimientos de tu cuenta.
        </Text>
      </View>

      <View style={styles.tarjetaPrincipal}>
        <Text style={styles.textoBlanco}>Saldo disponible</Text>
        <Text style={styles.saldo}>8</Text>
        <Text style={styles.textoBlanco}>créditos de tiempo</Text>
        <Text style={styles.nota}>
          Recuerda: 1 hora de servicio equivale a 1 crédito.
        </Text>
      </View>

      <View style={styles.resumen}>
        <View style={styles.tarjetaResumen}>
          <Text style={styles.icono}>＋</Text>
          <Text style={styles.numero}>12</Text>
          <Text style={styles.etiqueta}>Ganados</Text>
        </View>

        <View style={styles.tarjetaResumen}>
          <Text style={styles.icono}>－</Text>
          <Text style={styles.numero}>4</Text>
          <Text style={styles.etiqueta}>Utilizados</Text>
        </View>
      </View>

      <Text style={styles.tituloSeccion}>Movimientos recientes</Text>

      {movimientos.map((movimiento) => (
        <View key={movimiento.id} style={styles.movimiento}>
          <View style={styles.infoMovimiento}>
            <Text style={styles.nombreMovimiento}>
              {movimiento.titulo}
            </Text>
            <Text style={styles.fecha}>
              {movimiento.fecha}
            </Text>
            <Text style={styles.tipo}>
              {movimiento.tipo}
            </Text>
          </View>

          <Text
            style={[
              styles.cantidad,
              movimiento.tipo === 'Ganados'
                ? styles.positivo
                : styles.negativo
            ]}
          >
            {movimiento.cantidad}
          </Text>
        </View>
      ))}

      <View style={styles.aviso}>
        <Text style={styles.textoAviso}>
          Tus créditos se actualizan cuando los intercambios de servicios
          se completan.
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
    marginBottom: 20,
  },
  textoBlanco: {
    color: colores.blanco,
    fontSize: 15,
  },
  saldo: {
    color: colores.blanco,
    fontSize: 58,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  nota: {
    color: colores.blanco,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 15,
  },
  resumen: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 25,
  },
  tarjetaResumen: {
    flex: 1,
    backgroundColor: colores.blanco,
    borderRadius: 14,
    padding: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colores.borde,
  },
  icono: {
    fontSize: 25,
    color: colores.naranja,
    fontWeight: 'bold',
  },
  numero: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colores.texto,
    marginTop: 5,
  },
  etiqueta: {
    color: colores.textoSecundario,
    marginTop: 4,
  },
  tituloSeccion: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colores.texto,
    marginBottom: 12,
  },
  movimiento: {
    backgroundColor: colores.blanco,
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colores.borde,
  },
  infoMovimiento: {
    flex: 1,
  },
  nombreMovimiento: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colores.texto,
  },
  fecha: {
    fontSize: 12,
    color: colores.textoSecundario,
    marginTop: 5,
  },
  tipo: {
    fontSize: 12,
    color: colores.textoSecundario,
    marginTop: 4,
  },
  cantidad: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  positivo: {
    color: colores.verde,
  },
  negativo: {
    color: colores.rojo,
  },
  aviso: {
    backgroundColor: colores.naranjaClaro,
    borderRadius: 12,
    padding: 15,
    marginTop: 8,
    marginBottom: 25,
  },
  textoAviso: {
    color: colores.texto,
    fontSize: 13,
    textAlign: 'center',
  },
});
