
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet
} from 'react-native';

import colores from '../../styles/colores';

export default function HabilidadesScreen() {

  const habilidades = [
    { id: '1', nombre: 'Programación', categoria: 'Tecnología', nivel: 'Avanzado', icono: '💻' },
    { id: '2', nombre: 'Diseño gráfico', categoria: 'Diseño', nivel: 'Intermedio', icono: '🎨' },
    { id: '3', nombre: 'Inglés', categoria: 'Idiomas', nivel: 'Intermedio', icono: '🌎' },
    { id: '4', nombre: 'Repostería', categoria: 'Cocina', nivel: 'Básico', icono: '🧁' },
  ];

  return (
    <ScrollView style={estilos.contenedor}>
      <View style={estilos.encabezado}>
        <Text style={estilos.titulo}>Mis habilidades</Text>
        <Text style={estilos.subtitulo}>
          Comparte tus conocimientos y talentos con la comunidad.
        </Text>
      </View>

      <View style={estilos.tarjetaPrincipal}>
        <Text style={estilos.numero}>04</Text>
        <Text style={estilos.textoPrincipal}>Habilidades registradas</Text>
        <Text style={estilos.textoSecundario}>
          Cada habilidad puede convertirse en una oportunidad para ayudar.
        </Text>
      </View>

      <View style={estilos.encabezadoLista}>
        <Text style={estilos.tituloLista}>Habilidades registradas</Text>
        <Pressable style={estilos.botonAgregar}>
          <Text style={estilos.textoBoton}>+ Agregar</Text>
        </Pressable>
      </View>

      {habilidades.map((habilidad) => (
        <View key={habilidad.id} style={estilos.tarjeta}>
          <View style={estilos.icono}>
            <Text style={estilos.iconoTexto}>{habilidad.icono}</Text>
          </View>

          <View style={estilos.informacion}>
            <Text style={estilos.nombre}>{habilidad.nombre}</Text>
            <Text style={estilos.categoria}>{habilidad.categoria}</Text>
            <Text style={estilos.nivel}>Nivel: {habilidad.nivel}</Text>
          </View>

          <View style={estilos.acciones}>
            <Pressable style={estilos.botonEditar}>
              <Text style={estilos.textoEditar}>Editar</Text>
            </Pressable>
            <Pressable style={estilos.botonEliminar}>
              <Text style={estilos.textoEliminar}>Eliminar</Text>
            </Pressable>
          </View>
        </View>
      ))}

      <View style={estilos.consejo}>
        <Text style={estilos.consejoTitulo}>💡 Recuerda</Text>
        <Text style={estilos.consejoTexto}>
          Registra habilidades que puedas compartir con otras personas.
          El tiempo que dediques podrá convertirse en créditos.
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
  tarjetaPrincipal: {
    backgroundColor: colores.naranja,
    borderRadius: 18,
    padding: 20,
    marginBottom: 25,
  },
  numero: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colores.blanco,
  },
  textoPrincipal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colores.blanco,
    marginTop: 3,
  },
  textoSecundario: {
    fontSize: 12,
    color: colores.blanco,
    marginTop: 8,
    lineHeight: 18,
  },
  encabezadoLista: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  tituloLista: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colores.texto,
  },
  botonAgregar: {
    backgroundColor: colores.naranja,
    paddingVertical: 9,
    paddingHorizontal: 13,
    borderRadius: 10,
  },
  textoBoton: {
    color: colores.blanco,
    fontWeight: 'bold',
    fontSize: 12,
  },
  tarjeta: {
    backgroundColor: colores.blanco,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colores.borde,
    padding: 14,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icono: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: colores.naranjaClaro,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconoTexto: {
    fontSize: 23,
  },
  informacion: {
    flex: 1,
    marginLeft: 10,
  },
  nombre: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colores.texto,
  },
  categoria: {
    fontSize: 12,
    color: colores.textoSecundario,
    marginTop: 3,
  },
  nivel: {
    fontSize: 11,
    color: colores.verde,
    marginTop: 4,
    fontWeight: 'bold',
  },
  acciones: {
    alignItems: 'flex-end',
    gap: 6,
  },
  botonEditar: {
    backgroundColor: colores.naranjaClaro,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 7,
  },
  textoEditar: {
    color: colores.texto,
    fontSize: 11,
    fontWeight: 'bold',
  },
  botonEliminar: {
    backgroundColor: '#FCE5E3',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 7,
  },
  textoEliminar: {
    color: colores.rojo,
    fontSize: 11,
    fontWeight: 'bold',
  },
  consejo: {
    backgroundColor: colores.naranjaClaro,
    padding: 16,
    borderRadius: 14,
    marginTop: 10,
    marginBottom: 25,
  },
  consejoTitulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colores.texto,
    marginBottom: 7,
  },
  consejoTexto: {
    fontSize: 12,
    color: colores.texto,
    lineHeight: 19,
  },
});
