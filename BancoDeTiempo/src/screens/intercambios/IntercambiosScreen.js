
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet
} from 'react-native';

import colores from '../../styles/colores';

export default function IntercambiosScreen() {

  const intercambios = [
    {
      id: '1',
      servicio: 'Clases de inglés',
      persona: 'Mariana López',
      fecha: '07 Noviembre 2026',
      duracion: '2 horas',
      creditos: '2 créditos',
      tipo: 'Recibido',
      estado: 'Completado',
      icono: '📚'
    },
    {
      id: '2',
      servicio: 'Diseño de logotipos',
      persona: 'Carlos Ramírez',
      fecha: '05 Noviembre 2026',
      duracion: '3 horas',
      creditos: '3 créditos',
      tipo: 'Ofrecido',
      estado: 'Completado',
      icono: '🎨'
    },
    {
      id: '3',
      servicio: 'Asesoría de programación',
      persona: 'Andrea Torres',
      fecha: '03 Noviembre 2026',
      duracion: '1 hora',
      creditos: '1 crédito',
      tipo: 'Recibido',
      estado: 'En proceso',
      icono: '💻'
    },
  ];

  return (
    <ScrollView style={estilos.contenedor}>

      <View style={estilos.encabezado}>
        <Text style={estilos.titulo}>Mis intercambios</Text>
        <Text style={estilos.subtitulo}>
          Consulta los servicios que has compartido y recibido.
        </Text>
      </View>

      <View style={estilos.resumen}>
        <View style={estilos.dato}>
          <Text style={estilos.numero}>03</Text>
          <Text style={estilos.etiqueta}>Intercambios</Text>
        </View>

        <View style={estilos.separador} />

        <View style={estilos.dato}>
          <Text style={estilos.numero}>05</Text>
          <Text style={estilos.etiqueta}>Horas totales</Text>
        </View>

        <View style={estilos.separador} />

        <View style={estilos.dato}>
          <Text style={estilos.numero}>02</Text>
          <Text style={estilos.etiqueta}>Completados</Text>
        </View>
      </View>

      <Text style={estilos.tituloLista}>Historial de intercambios</Text>

      {intercambios.map((intercambio) => (
        <View key={intercambio.id} style={estilos.tarjeta}>

          <View style={estilos.fila}>
            <View style={estilos.icono}>
              <Text style={estilos.iconoTexto}>
                {intercambio.icono}
              </Text>
            </View>

            <View style={estilos.informacion}>
              <Text style={estilos.servicio}>
                {intercambio.servicio}
              </Text>
              <Text style={estilos.persona}>
                Con {intercambio.persona}
              </Text>
            </View>
          </View>

          <View style={estilos.detalles}>
            <Text style={estilos.detalle}>
              📅 {intercambio.fecha}
            </Text>

            <Text style={estilos.detalle}>
              ⏱ {intercambio.duracion}
            </Text>

            <Text style={estilos.creditos}>
              🪙 {intercambio.creditos}
            </Text>
          </View>

          <View style={estilos.linea} />

          <View style={estilos.pie}>
            <View>
              <Text style={estilos.tipo}>{intercambio.tipo}</Text>

              <View style={[
                estilos.estado,
                intercambio.estado === 'Completado'
                  ? estilos.completado
                  : estilos.proceso
              ]}>
                <Text style={[
                  estilos.textoEstado,
                  intercambio.estado === 'Completado'
                    ? estilos.textoCompletado
                    : estilos.textoProceso
                ]}>
                  {intercambio.estado}
                </Text>
              </View>
            </View>

            <Pressable style={estilos.boton}>
              <Text style={estilos.textoBoton}>Ver detalles</Text>
            </Pressable>
          </View>

        </View>
      ))}

      <View style={estilos.nota}>
        <Text style={estilos.notaTitulo}>⏳ ¿Cómo funcionan?</Text>
        <Text style={estilos.notaTexto}>
          Cada hora de servicio equivale a un crédito. Al completar
          un intercambio, los créditos se actualizan según el tiempo
          compartido.
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
    fontSize: 10,
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
  persona: {
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
  tipo: {
    fontSize: 11,
    color: colores.textoSecundario,
    marginBottom: 6,
  },
  estado: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  completado: {
    backgroundColor: '#E2F4E9',
  },
  proceso: {
    backgroundColor: '#FFF0D8',
  },
  textoEstado: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  textoCompletado: {
    color: colores.verde,
  },
  textoProceso: {
    color: '#B87919',
  },
  boton: {
    backgroundColor: colores.naranja,
    paddingVertical: 9,
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
