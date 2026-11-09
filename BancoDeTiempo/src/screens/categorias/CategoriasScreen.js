
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet
} from 'react-native';

import colores from '../../styles/colores';

export default function CategoriasScreen() {

  const categorias = [
    { id: '1', nombre: 'Tecnología', icono: '💻', descripcion: 'Computación y programación' },
    { id: '2', nombre: 'Educación', icono: '📚', descripcion: 'Clases y asesorías' },
    { id: '3', nombre: 'Diseño', icono: '🎨', descripcion: 'Diseño gráfico y creativo' },
    { id: '4', nombre: 'Cocina', icono: '🍳', descripcion: 'Preparación de alimentos' },
    { id: '5', nombre: 'Idiomas', icono: '🌎', descripcion: 'Práctica de idiomas' },
    { id: '6', nombre: 'Deportes', icono: '⚽', descripcion: 'Actividad física y bienestar' },
    { id: '7', nombre: 'Música', icono: '🎵', descripcion: 'Instrumentos y canto' },
    { id: '8', nombre: 'Hogar', icono: '🏠', descripcion: 'Apoyo y tareas del hogar' },
  ];

  return (
    <ScrollView style={estilos.contenedor}>
      <View style={estilos.encabezado}>
        <Text style={estilos.titulo}>Categorías</Text>
        <Text style={estilos.subtitulo}>
          Explora los talentos y servicios disponibles
        </Text>
      </View>

      <View style={estilos.resumen}>
        <Text style={estilos.resumenNumero}>08</Text>
        <Text style={estilos.resumenTexto}>Categorías disponibles</Text>
      </View>

      <Text style={estilos.seccionTitulo}>Explorar categorías</Text>

      <View style={estilos.lista}>
        {categorias.map((categoria) => (
          <Pressable key={categoria.id} style={estilos.tarjeta}>
            <View style={estilos.icono}>
              <Text style={estilos.iconoTexto}>{categoria.icono}</Text>
            </View>

            <View style={estilos.informacion}>
              <Text style={estilos.nombre}>{categoria.nombre}</Text>
              <Text style={estilos.descripcion}>
                {categoria.descripcion}
              </Text>
            </View>

            <Text style={estilos.flecha}>›</Text>
          </Pressable>
        ))}
      </View>

      <Text style={estilos.nota}>
        Banco de Tiempo y Talento · Comparte lo que sabes hacer
      </Text>
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
    fontSize: 29,
    fontWeight: 'bold',
    color: colores.texto,
  },
  subtitulo: {
    fontSize: 14,
    color: colores.textoSecundario,
    marginTop: 7,
  },
  resumen: {
    backgroundColor: colores.naranja,
    borderRadius: 18,
    padding: 20,
    marginBottom: 25,
  },
  resumenNumero: {
    color: colores.blanco,
    fontSize: 32,
    fontWeight: 'bold',
  },
  resumenTexto: {
    color: colores.blanco,
    fontSize: 14,
    marginTop: 3,
  },
  seccionTitulo: {
    fontSize: 19,
    fontWeight: 'bold',
    color: colores.texto,
    marginBottom: 15,
  },
  lista: {
    gap: 12,
  },
  tarjeta: {
    backgroundColor: colores.blanco,
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colores.borde,
  },
  icono: {
    width: 48,
    height: 48,
    backgroundColor: colores.naranjaClaro,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconoTexto: {
    fontSize: 25,
  },
  informacion: {
    flex: 1,
    marginLeft: 13,
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colores.texto,
  },
  descripcion: {
    fontSize: 12,
    color: colores.textoSecundario,
    marginTop: 4,
  },
  flecha: {
    fontSize: 27,
    color: colores.naranja,
  },
  nota: {
    textAlign: 'center',
    color: colores.textoSecundario,
    fontSize: 11,
    marginTop: 25,
    marginBottom: 25,
  },
});
