
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

import colores from '../../styles/colores';

const historial = [
  {
    id: '1',
    servicio: 'Clases de inglés',
    usuario: 'María López',
    tipo: 'Servicio recibido',
    fecha: '05 de noviembre de 2026',
    duracion: '2 horas',
    creditos: '-2 créditos',
  },
  {
    id: '2',
    servicio: 'Diseño de logotipo',
    usuario: 'Carlos Pérez',
    tipo: 'Servicio ofrecido',
    fecha: '03 de noviembre de 2026',
    duracion: '3 horas',
    creditos: '+3 créditos',
  },
  {
    id: '3',
    servicio: 'Asesoría de matemáticas',
    usuario: 'Ana Torres',
    tipo: 'Servicio recibido',
    fecha: '01 de noviembre de 2026',
    duracion: '1 hora',
    creditos: '-1 crédito',
  },
];

export default function HistorialScreen() {
  return (
    <ScrollView style={styles.contenedor}>
      <View style={styles.encabezado}>
        <Text style={styles.titulo}>Mi historial</Text>
        <Text style={styles.subtitulo}>
          Consulta tus intercambios de servicios anteriores.
        </Text>
      </View>

      <View style={styles.resumen}>
        <View style={styles.tarjetaResumen}>
          <Text style={styles.numero}>3</Text>
          <Text style={styles.etiqueta}>Intercambios</Text>
        </View>

        <View style={styles.tarjetaResumen}>
          <Text style={styles.numero}>2</Text>
          <Text style={styles.etiqueta}>Recibidos</Text>
        </View>

        <View style={styles.tarjetaResumen}>
          <Text style={styles.numero}>1</Text>
          <Text style={styles.etiqueta}>Ofrecidos</Text>
        </View>
      </View>

      <Text style={styles.tituloSeccion}>Actividad reciente</Text>

      {historial.map((item) => (
        <View key={item.id} style={styles.tarjeta}>
          <View style={styles.fila}>
            <View style={styles.icono}>
              <Text style={styles.iconoTexto}>↔</Text>
            </View>

            <View style={styles.informacion}>
              <Text style={styles.servicio}>{item.servicio}</Text>
              <Text style={styles.usuario}>
                Con: {item.usuario}
              </Text>
            </View>
          </View>

          <View style={styles.divisor} />

          <Text style={styles.tipo}>{item.tipo}</Text>
          <Text style={styles.fecha}>{item.fecha}</Text>

          <View style={styles.detalles}>
            <Text style={styles.duracion}>{item.duracion}</Text>
            <Text
              style={[
                styles.creditos,
                item.creditos.startsWith('+')
                  ? styles.ganados
                  : styles.utilizados
              ]}
            >
              {item.creditos}
            </Text>
          </View>

          <View style={styles.estado}>
            <Text style={styles.textoEstado}>Completado</Text>
          </View>
        </View>
      ))}

      <View style={styles.nota}>
        <Text style={styles.textoNota}>
          Tu historial conserva los intercambios completados para que
          puedas consultar tu actividad.
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
    flexDirection: 'row',
    gap: 10,
    marginBottom: 25,
  },
  tarjetaResumen: {
    flex: 1,
    backgroundColor: colores.blanco,
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colores.borde,
  },
  numero: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colores.naranja,
  },
  etiqueta: {
    fontSize: 11,
    color: colores.textoSecundario,
    marginTop: 5,
    textAlign: 'center',
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
    marginBottom: 14,
    borderWidth: 1,
    borderColor: colores.borde,
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icono: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colores.naranjaClaro,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconoTexto: {
    fontSize: 24,
    color: colores.naranja,
    fontWeight: 'bold',
  },
  informacion: {
    flex: 1,
    marginLeft: 12,
  },
  servicio: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colores.texto,
  },
  usuario: {
    fontSize: 12,
    color: colores.textoSecundario,
    marginTop: 4,
  },
  divisor: {
    height: 1,
    backgroundColor: colores.borde,
    marginVertical: 13,
  },
  tipo: {
    fontSize: 13,
    fontWeight: 'bold',
    color: colores.naranja,
  },
  fecha: {
    fontSize: 12,
    color: colores.textoSecundario,
    marginTop: 5,
  },
  detalles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 13,
  },
  duracion: {
    fontSize: 13,
    color: colores.texto,
  },
  creditos: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  ganados: {
    color: colores.verde,
  },
  utilizados: {
    color: colores.rojo,
  },
  estado: {
    alignSelf: 'flex-start',
    backgroundColor: '#DDF3E7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginTop: 13,
  },
  textoEstado: {
    color: colores.verde,
    fontSize: 12,
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
