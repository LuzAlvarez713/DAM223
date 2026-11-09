
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet
} from 'react-native';

import colores from '../../styles/colores';

export default function MisServiciosScreen() {

  const servicios = [
    {
      id: '1',
      nombre: 'Clases de inglés',
      categoria: 'Idiomas',
      duracion: '2 horas',
      creditos: '2 créditos',
      estado: 'Publicado',
      icono: '📚',
      calificacion: '4.9'
    },
    {
      id: '2',
      nombre: 'Diseño de logotipos',
      categoria: 'Diseño',
      duracion: '3 horas',
      creditos: '3 créditos',
      estado: 'Publicado',
      icono: '🎨',
      calificacion: '4.8'
    },
    {
      id: '3',
      nombre: 'Asesoría de programación',
      categoria: 'Tecnología',
      duracion: '1 hora',
      creditos: '1 crédito',
      estado: 'Oculto',
      icono: '💻',
      calificacion: '5.0'
    },
  ];

  return (
    <ScrollView style={estilos.contenedor}>

      <View style={estilos.encabezado}>
        <Text style={estilos.titulo}>Mis servicios</Text>
        <Text style={estilos.subtitulo}>
          Administra los servicios que compartes con la comunidad.
        </Text>
      </View>

      <View style={estilos.resumen}>
        <View style={estilos.dato}>
          <Text style={estilos.numero}>03</Text>
          <Text style={estilos.etiquetaResumen}>Total</Text>
        </View>

        <View style={estilos.separador} />

        <View style={estilos.dato}>
          <Text style={estilos.numero}>02</Text>
          <Text style={estilos.etiquetaResumen}>Publicados</Text>
        </View>

        <View style={estilos.separador} />

        <View style={estilos.dato}>
          <Text style={estilos.numero}>01</Text>
          <Text style={estilos.etiquetaResumen}>Ocultos</Text>
        </View>
      </View>

      <View style={estilos.encabezadoLista}>
        <Text style={estilos.tituloLista}>Servicios registrados</Text>
        <Text style={estilos.contador}>03 servicios</Text>
      </View>

      {servicios.map((servicio) => (
        <View key={servicio.id} style={estilos.tarjeta}>

          <View style={estilos.filaSuperior}>
            <View style={estilos.icono}>
              <Text style={estilos.iconoTexto}>{servicio.icono}</Text>
            </View>

            <View style={estilos.informacion}>
              <Text style={estilos.categoria}>{servicio.categoria}</Text>
              <Text style={estilos.nombre}>{servicio.nombre}</Text>
              <Text style={estilos.detalle}>
                ⏱ {servicio.duracion} · 🪙 {servicio.creditos}
              </Text>
            </View>

            <View style={[
              estilos.estado,
              servicio.estado === 'Publicado'
                ? estilos.estadoPublicado
                : estilos.estadoOculto
            ]}>
              <Text style={[
                estilos.textoEstado,
                servicio.estado === 'Publicado'
                  ? estilos.textoPublicado
                  : estilos.textoOculto
              ]}>
                {servicio.estado}
              </Text>
            </View>
          </View>

          <View style={estilos.calificacion}>
            <Text style={estilos.estrellas}>⭐ {servicio.calificacion}</Text>
            <Text style={estilos.textoCalificacion}>Calificación</Text>
          </View>

          <View style={estilos.linea} />

          <View style={estilos.botones}>
            <Pressable style={estilos.botonEditar}>
              <Text style={estilos.textoEditar}>✏️ Editar</Text>
            </Pressable>

            <Pressable style={estilos.botonOcultar}>
              <Text style={estilos.textoOcultar}>
                {servicio.estado === 'Publicado' ? 'Ocultar' : 'Mostrar'}
              </Text>
            </Pressable>

            <Pressable style={estilos.botonEliminar}>
              <Text style={estilos.textoEliminar}>Eliminar</Text>
            </Pressable>
          </View>

        </View>
      ))}

      <View style={estilos.nota}>
        <Text style={estilos.notaTitulo}>💡 Comparte tu talento</Text>
        <Text style={estilos.notaTexto}>
          Mantén tus servicios actualizados para que otras personas
          puedan encontrarlos y solicitar tu ayuda.
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
  etiquetaResumen: {
    color: colores.blanco,
    fontSize: 11,
    marginTop: 4,
  },
  separador: {
    height: 38,
    width: 1,
    backgroundColor: '#FFFFFF80',
  },
  encabezadoLista: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  tituloLista: {
    color: colores.texto,
    fontSize: 17,
    fontWeight: 'bold',
  },
  contador: {
    color: colores.textoSecundario,
    fontSize: 11,
  },
  tarjeta: {
    backgroundColor: colores.blanco,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colores.borde,
    padding: 15,
    marginBottom: 15,
  },
  filaSuperior: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icono: {
    width: 48,
    height: 48,
    backgroundColor: colores.naranjaClaro,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconoTexto: {
    fontSize: 25,
  },
  informacion: {
    flex: 1,
    marginLeft: 10,
  },
  categoria: {
    color: colores.naranja,
    fontSize: 11,
    fontWeight: 'bold',
  },
  nombre: {
    color: colores.texto,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 3,
  },
  detalle: {
    color: colores.textoSecundario,
    fontSize: 10,
    marginTop: 5,
  },
  estado: {
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderRadius: 8,
  },
  estadoPublicado: {
    backgroundColor: '#E2F4E9',
  },
  estadoOculto: {
    backgroundColor: '#EEEEEE',
  },
  textoEstado: {
    fontSize: 9,
    fontWeight: 'bold',
  },
  textoPublicado: {
    color: colores.verde,
  },
  textoOculto: {
    color: colores.textoSecundario,
  },
  calificacion: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 13,
    gap: 7,
  },
  estrellas: {
    color: colores.texto,
    fontSize: 12,
    fontWeight: 'bold',
  },
  textoCalificacion: {
    color: colores.textoSecundario,
    fontSize: 11,
  },
  linea: {
    height: 1,
    backgroundColor: colores.borde,
    marginVertical: 13,
  },
  botones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 6,
  },
  botonEditar: {
    backgroundColor: colores.naranjaClaro,
    padding: 9,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  textoEditar: {
    color: colores.texto,
    fontSize: 10,
    fontWeight: 'bold',
  },
  botonOcultar: {
    backgroundColor: '#EEEEEE',
    padding: 9,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  textoOcultar: {
    color: colores.texto,
    fontSize: 10,
    fontWeight: 'bold',
  },
  botonEliminar: {
    backgroundColor: '#FCE5E3',
    padding: 9,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  textoEliminar: {
    color: colores.rojo,
    fontSize: 10,
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
