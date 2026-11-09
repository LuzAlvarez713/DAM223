
import React from 'react';

import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet
} from 'react-native';

import colores from '../../styles/colores';

export default function InicioScreen() {
  return (
    <ScrollView style={estilos.fondo}>

      <View style={estilos.contenedor}>

        <Text style={estilos.logo}>
          ⏳ BANCO DE TIEMPO
        </Text>

        <Text style={estilos.saludo}>
          ¡Hola, Ana! 👋
        </Text>

        <Text style={estilos.descripcion}>
          Comparte tu talento y descubre nuevas habilidades.
        </Text>

        <View style={estilos.tarjetaCreditos}>
          <Text style={estilos.etiquetaBlanca}>
            Mi saldo disponible
          </Text>

          <Text style={estilos.creditos}>
            12 créditos
          </Text>

          <Text style={estilos.etiquetaBlanca}>
            Equivalentes a 12 horas
          </Text>
        </View>

        <Text style={estilos.tituloSeccion}>
          Mi actividad
        </Text>

        <View style={estilos.estadisticas}>

          <View style={estilos.tarjetaEstadistica}>
            <Text style={estilos.numero}>3</Text>
            <Text style={estilos.textoEstadistica}>
              Mis servicios
            </Text>
          </View>

          <View style={estilos.tarjetaEstadistica}>
            <Text style={estilos.numero}>2</Text>
            <Text style={estilos.textoEstadistica}>
              Solicitudes
            </Text>
          </View>

        </View>

        <Text style={estilos.tituloSeccion}>
          Accesos rápidos
        </Text>

        <View style={estilos.opcion}>
          <Text style={estilos.icono}>🔎</Text>
          <View style={estilos.datos}>
            <Text style={estilos.nombre}>Explorar servicios</Text>
            <Text style={estilos.detalle}>
              Encuentra algo que necesitas aprender
            </Text>
          </View>
          <Text style={estilos.flecha}>›</Text>
        </View>

        <View style={estilos.opcion}>
          <Text style={estilos.icono}>✨</Text>
          <View style={estilos.datos}>
            <Text style={estilos.nombre}>Mis habilidades</Text>
            <Text style={estilos.detalle}>
              Comparte lo que sabes hacer
            </Text>
          </View>
          <Text style={estilos.flecha}>›</Text>
        </View>

        <View style={estilos.opcion}>
          <Text style={estilos.icono}>📩</Text>
          <View style={estilos.datos}>
            <Text style={estilos.nombre}>Solicitudes</Text>
            <Text style={estilos.detalle}>
              Revisa tus solicitudes de intercambio
            </Text>
          </View>
          <Text style={estilos.flecha}>›</Text>
        </View>

        <View style={estilos.opcion}>
          <Text style={estilos.icono}>⭐</Text>
          <View style={estilos.datos}>
            <Text style={estilos.nombre}>Mis favoritos</Text>
            <Text style={estilos.detalle}>
              Servicios que guardaste
            </Text>
          </View>
          <Text style={estilos.flecha}>›</Text>
        </View>

        <View style={estilos.pie}>
          <Text style={estilos.textoPie}>
            Cada hora compartida crea nuevas oportunidades.
          </Text>
        </View>

      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({

  fondo: {
    flex: 1,
    backgroundColor: colores.fondo,
  },

  contenedor: {
    padding: 20,
    paddingTop: 45,
  },

  logo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colores.naranja,
  },

  saludo: {
    fontSize: 27,
    fontWeight: 'bold',
    color: colores.texto,
    marginTop: 30,
  },

  descripcion: {
    color: colores.textoSecundario,
    marginTop: 7,
    marginBottom: 22,
    fontSize: 13,
  },

  tarjetaCreditos: {
    backgroundColor: colores.naranja,
    borderRadius: 20,
    padding: 23,
  },

  etiquetaBlanca: {
    color: colores.blanco,
    fontSize: 13,
  },

  creditos: {
    color: colores.blanco,
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10,
  },

  tituloSeccion: {
    fontSize: 19,
    fontWeight: 'bold',
    color: colores.texto,
    marginTop: 28,
    marginBottom: 15,
  },

  estadisticas: {
    flexDirection: 'row',
    gap: 12,
  },

  tarjetaEstadistica: {
    flex: 1,
    backgroundColor: colores.blanco,
    borderRadius: 15,
    padding: 20,
  },

  numero: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colores.naranja,
  },

  textoEstadistica: {
    fontSize: 12,
    color: colores.textoSecundario,
    marginTop: 5,
  },

  opcion: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colores.blanco,
    borderRadius: 14,
    padding: 15,
    marginBottom: 12,
  },

  icono: {
    fontSize: 25,
    marginRight: 13,
  },

  datos: {
    flex: 1,
  },

  nombre: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colores.texto,
  },

  detalle: {
    fontSize: 11,
    color: colores.textoSecundario,
    marginTop: 4,
  },

  flecha: {
    fontSize: 25,
    color: colores.naranja,
  },

  pie: {
    padding: 20,
    alignItems: 'center',
  },

  textoPie: {
    color: colores.textoSecundario,
    fontSize: 12,
    textAlign: 'center',
  },

});
