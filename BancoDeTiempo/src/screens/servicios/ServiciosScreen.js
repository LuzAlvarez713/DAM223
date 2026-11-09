
import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  StyleSheet
} from 'react-native';

import colores from '../../styles/colores';

export default function ServiciosScreen() {

  const servicios = [
    {
      id: '1',
      nombre: 'Clases de inglés',
      usuario: 'Mariana López',
      categoria: 'Idiomas',
      duracion: '2 horas',
      creditos: '2 créditos',
      icono: '📚',
      calificacion: '4.9'
    },
    {
      id: '2',
      nombre: 'Diseño de logotipos',
      usuario: 'Carlos Ramírez',
      categoria: 'Diseño',
      duracion: '3 horas',
      creditos: '3 créditos',
      icono: '🎨',
      calificacion: '4.8'
    },
    {
      id: '3',
      nombre: 'Asesoría de programación',
      usuario: 'Andrea Torres',
      categoria: 'Tecnología',
      duracion: '1 hora',
      creditos: '1 crédito',
      icono: '💻',
      calificacion: '5.0'
    },
    {
      id: '4',
      nombre: 'Preparación de postres',
      usuario: 'Daniela Cruz',
      categoria: 'Cocina',
      duracion: '2 horas',
      creditos: '2 créditos',
      icono: '🧁',
      calificacion: '4.7'
    },
  ];

  return (
    <ScrollView style={estilos.contenedor}>
      <View style={estilos.encabezado}>
        <Text style={estilos.titulo}>Explorar servicios</Text>
        <Text style={estilos.subtitulo}>
          Encuentra personas que puedan compartir sus talentos contigo.
        </Text>
      </View>

      <TextInput
        style={estilos.busqueda}
        placeholder="🔍 Buscar un servicio..."
        placeholderTextColor={colores.textoSecundario}
      />

      <View style={estilos.filtros}>
        <Text style={estilos.filtroActivo}>Todos</Text>
        <Text style={estilos.filtro}>Más recientes</Text>
        <Text style={estilos.filtro}>Mejor valorados</Text>
      </View>

      <View style={estilos.encabezadoLista}>
        <Text style={estilos.tituloLista}>Servicios disponibles</Text>
        <Text style={estilos.contador}>04 servicios</Text>
      </View>

      {servicios.map((servicio) => (
        <View key={servicio.id} style={estilos.tarjeta}>
          <View style={estilos.imagen}>
            <Text style={estilos.imagenTexto}>{servicio.icono}</Text>
          </View>

          <View style={estilos.contenido}>
            <Text style={estilos.categoria}>{servicio.categoria}</Text>
            <Text style={estilos.nombre}>{servicio.nombre}</Text>
            <Text style={estilos.usuario}>
              Ofrecido por {servicio.usuario}
            </Text>

            <View style={estilos.detalles}>
              <Text style={estilos.duracion}>⏱ {servicio.duracion}</Text>
              <Text style={estilos.creditos}>🪙 {servicio.creditos}</Text>
            </View>

            <View style={estilos.pieTarjeta}>
              <Text style={estilos.calificacion}>
                ⭐ {servicio.calificacion}
              </Text>

              <Pressable style={estilos.boton}>
                <Text style={estilos.textoBoton}>Ver servicio</Text>
              </Pressable>
            </View>
          </View>
        </View>
      ))}

      <Text style={estilos.nota}>
        Recuerda: una hora de servicio equivale a un crédito.
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
  busqueda: {
    backgroundColor: colores.blanco,
    borderWidth: 1,
    borderColor: colores.borde,
    borderRadius: 12,
    padding: 14,
    fontSize: 14,
    marginBottom: 15,
  },
  filtros: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 25,
  },
  filtroActivo: {
    backgroundColor: colores.naranja,
    color: colores.blanco,
    padding: 9,
    borderRadius: 9,
    overflow: 'hidden',
    fontSize: 11,
    fontWeight: 'bold',
  },
  filtro: {
    backgroundColor: colores.blanco,
    color: colores.textoSecundario,
    padding: 9,
    borderRadius: 9,
    overflow: 'hidden',
    fontSize: 11,
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
  contador: {
    fontSize: 11,
    color: colores.textoSecundario,
  },
  tarjeta: {
    backgroundColor: colores.blanco,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colores.borde,
    marginBottom: 15,
    overflow: 'hidden',
  },
  imagen: {
    height: 105,
    backgroundColor: colores.naranjaClaro,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagenTexto: {
    fontSize: 48,
  },
  contenido: {
    padding: 15,
  },
  categoria: {
    color: colores.naranja,
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  nombre: {
    color: colores.texto,
    fontSize: 17,
    fontWeight: 'bold',
  },
  usuario: {
    color: colores.textoSecundario,
    fontSize: 12,
    marginTop: 5,
  },
  detalles: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 13,
  },
  duracion: {
    color: colores.textoSecundario,
    fontSize: 11,
  },
  creditos: {
    color: colores.verde,
    fontSize: 11,
    fontWeight: 'bold',
  },
  pieTarjeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  calificacion: {
    fontSize: 12,
    color: colores.texto,
  },
  boton: {
    backgroundColor: colores.naranja,
    paddingVertical: 9,
    paddingHorizontal: 13,
    borderRadius: 9,
  },
  textoBoton: {
    color: colores.blanco,
    fontSize: 12,
    fontWeight: 'bold',
  },
  nota: {
    textAlign: 'center',
    fontSize: 12,
    color: colores.textoSecundario,
    marginTop: 10,
    marginBottom: 25,
  },
});
