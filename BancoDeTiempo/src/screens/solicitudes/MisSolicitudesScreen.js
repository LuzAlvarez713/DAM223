
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet
} from 'react-native';

import colores from '../../styles/colores';

export default function MisSolicitudesScreen() {

  const solicitudes = [
    {
      id: '1',
      servicio: 'Clases de inglés',
      proveedor: 'Mariana López',
      fecha: '07 Noviembre 2026',
      duracion: '2 horas',
      creditos: '2 créditos',
      estado: 'Pendiente',
      icono: '📚'
    },
    {
      id: '2',
      servicio: 'Diseño de logotipos',
      proveedor: 'Carlos Ramírez',
      fecha: '06 Noviembre 2026',
      duracion: '3 horas',
      creditos: '3 créditos',
      estado: 'Aceptada',
      icono: '🎨'
    },
    {
      id: '3',
      servicio: 'Asesoría de programación',
      proveedor: 'Andrea Torres',
      fecha: '04 Noviembre 2026',
      duracion: '1 hora',
      creditos: '1 crédito',
      estado: 'Rechazada',
      icono: '💻'
    },
  ];

  return (
    <ScrollView style={estilos.contenedor}>

      <View style={estilos.encabezado}>
        <Text style={estilos.titulo}>Mis solicitudes</Text>
        <Text style={estilos.subtitulo}>
          Consulta el seguimiento de los servicios que has solicitado.
        </Text>
      </View>

      <View style={estilos.resumen}>
        <View style={estilos.dato}>
          <Text style={estilos.numero}>03</Text>
          <Text style={estilos.etiqueta}>Total</Text>
        </View>

        <View style={estilos.separador} />

        <View style={estilos.dato}>
          <Text style={estilos.numero}>01</Text>
          <Text style={estilos.etiqueta}>Pendientes</Text>
        </View>

        <View style={estilos.separador} />

        <View style={estilos.dato}>
          <Text style={estilos.numero}>01</Text>
          <Text style={estilos.etiqueta}>Aceptadas</Text>
        </View>
      </View>

      <Text style={estilos.tituloLista}>Historial de solicitudes</Text>

      {solicitudes.map((solicitud) => (
        <View key={solicitud.id} style={estilos.tarjeta}>

          <View style={estilos.fila}>
            <View style={estilos.icono}>
              <Text style={estilos.iconoTexto}>{solicitud.icono}</Text>
            </View>

            <View style={estilos.informacion}>
              <Text style={estilos.servicio}>{solicitud.servicio}</Text>
              <Text style={estilos.proveedor}>
                Proveedor: {solicitud.proveedor}
              </Text>
            </View>
          </View>

          <View style={estilos.detalles}>
            <Text style={estilos.detalle}>📅 {solicitud.fecha}</Text>
            <Text style={estilos.detalle}>⏱ {solicitud.duracion}</Text>
            <Text style={estilos.creditos}>🪙 {solicitud.creditos}</Text>
          </View>

          <View style={estilos.linea} />

          <View style={estilos.pie}>
            <View style={[
              estilos.estado,
              solicitud.estado === 'Pendiente'
                ? estilos.pendiente
                : solicitud.estado === 'Aceptada'
                  ? estilos.aceptada
                  : estilos.rechazada
            ]}>
              <Text style={[
                estilos.textoEstado,
                solicitud.estado === 'Pendiente'
                  ? estilos.textoPendiente
                  : solicitud.estado === 'Aceptada'
                    ? estilos.textoAceptada
                    : estilos.textoRechazada
              ]}>
                {solicitud.estado}
              </Text>
            </View>

            <Pressable style={estilos.boton}>
              <Text style={estilos.textoBoton}>Ver detalles</Text>
            </Pressable>
          </View>

        </View>
      ))}

      <View style={estilos.nota}>
        <Text style={estilos.notaTitulo}>💡 Recuerda</Text>
        <Text style={estilos.notaTexto}>
          Cuando una solicitud sea aceptada, podrás coordinar el servicio
          con la persona que lo ofrece.
        </Text>
      </View>

    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colores.fondo,
    padding: 20,
  },
  encabezado: {
    marginTop: 35,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colores.texto,
  },
  subtitulo: {
    fontSize: 14,
    color: colores.textoSecundario,
    marginTop: 7,
    lineHeight: 21,
  },
  resumen: {
    backgroundColor: colores.naranja,
    borderRadius: 16,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 25,
  },
  dato: {
    alignItems: 'center',
  },
  numero: {
    color: colores.blanco,
    fontSize: 25,
    fontWeight: 'bold',
  },
  etiqueta: {
    color: colores.blanco,
    fontSize: 11,
    marginTop: 4,
  },
  separador: {
    height: 38,
    width: 1,
    backgroundColor: '#FFFFFF80',
  },
  tituloLista: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colores.texto,
    marginBottom: 15,
  },
  tarjeta: {
    backgroundColor: colores.blanco,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colores.borde,
    padding: 15,
    marginBottom: 15,
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icono: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: colores.naranjaClaro,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconoTexto: {
    fontSize: 24,
  },
  informacion: {
    flex: 1,
    marginLeft: 12,
  },
  servicio: {
    color: colores.texto,
    fontSize: 14,
    fontWeight: 'bold',
  },
  proveedor: {
    color: colores.textoSecundario,
    fontSize: 11,
    marginTop: 5,
  },
  detalles: {
    marginTop: 15,
    gap: 7,
  },
  detalle: {
    color: colores.textoSecundario,
    fontSize: 11,
  },
  creditos: {
    color: colores.verde,
    fontSize: 11,
    fontWeight: 'bold',
  },
  linea: {
    height: 1,
    backgroundColor: colores.borde,
    marginVertical: 13,
  },
  pie: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  estado: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  pendiente: {
    backgroundColor: '#FFF0D8',
  },
  aceptada: {
    backgroundColor: '#E2F4E9',
  },
  rechazada: {
    backgroundColor: '#FCE5E3',
  },
  textoEstado: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  textoPendiente: {
    color: '#B87919',
  },
  textoAceptada: {
    color: colores.verde,
  },
  textoRechazada: {
    color: colores.rojo,
  },
  boton: {
    backgroundColor: colores.naranja,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  textoBoton: {
    color: colores.blanco,
    fontSize: 11,
    fontWeight: 'bold',
  },
  nota: {
    backgroundColor: colores.naranjaClaro,
    padding: 15,
    borderRadius: 13,
    marginTop: 5,
    marginBottom: 25,
  },
  notaTitulo: {
    color: colores.texto,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 7,
  },
  notaTexto: {
    color: colores.texto,
    fontSize: 12,
    lineHeight: 19,
  },
});
