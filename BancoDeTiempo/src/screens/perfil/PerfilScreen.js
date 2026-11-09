
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

export default function PerfilScreen() {
  return (
    <ScrollView style={estilos.fondo}>
      <View style={estilos.contenedor}>

        <Text style={estilos.titulo}>Mi perfil</Text>
        <Text style={estilos.subtitulo}>
          Consulta y administra tu información personal
        </Text>

        <View style={estilos.tarjetaPerfil}>
          <View style={estilos.avatar}>
            <Text style={estilos.avatarTexto}>A</Text>
          </View>

          <Text style={estilos.nombrePerfil}>Ana Martínez</Text>
          <Text style={estilos.usuario}>@ana123</Text>

          <View style={estilos.etiquetaActivo}>
            <Text style={estilos.textoActivo}>● Cuenta activa</Text>
          </View>
        </View>

        <Text style={estilos.tituloSeccion}>
          Información personal
        </Text>

        <View style={estilos.formulario}>

          <Text style={estilos.etiqueta}>Nombre completo</Text>
          <TextInput
            style={estilos.input}
            defaultValue="Ana Martínez"
          />

          <Text style={estilos.etiqueta}>Nombre de usuario</Text>
          <TextInput
            style={estilos.input}
            defaultValue="ana123"
          />

          <Text style={estilos.etiqueta}>Correo electrónico</Text>
          <TextInput
            style={estilos.input}
            defaultValue="ana@gmail.com"
          />

          <Text style={estilos.etiqueta}>Teléfono</Text>
          <TextInput
            style={estilos.input}
            defaultValue="4421234567"
          />

          <Text style={estilos.etiqueta}>Fecha de nacimiento</Text>
          <TextInput
            style={estilos.input}
            defaultValue="15/05/2000"
          />

          <Pressable style={estilos.boton}>
            <Text style={estilos.textoBoton}>
              GUARDAR CAMBIOS
            </Text>
          </Pressable>

        </View>

        <Text style={estilos.tituloSeccion}>
          Mi cuenta
        </Text>

        <View style={estilos.opcion}>
          <Text style={estilos.icono}>🔒</Text>
          <View style={estilos.datos}>
            <Text style={estilos.nombreOpcion}>
              Cambiar contraseña
            </Text>
            <Text style={estilos.detalle}>
              Actualiza tu contraseña
            </Text>
          </View>
          <Text style={estilos.flecha}>›</Text>
        </View>

        <View style={estilos.opcion}>
          <Text style={estilos.icono}>💳</Text>
          <View style={estilos.datos}>
            <Text style={estilos.nombreOpcion}>
              Mi cartera
            </Text>
            <Text style={estilos.detalle}>
              Consulta tus créditos disponibles
            </Text>
          </View>
          <Text style={estilos.flecha}>›</Text>
        </View>

        <View style={estilos.opcion}>
          <Text style={estilos.icono}>🚪</Text>
          <View style={estilos.datos}>
            <Text style={estilos.nombreOpcion}>
              Cerrar sesión
            </Text>
            <Text style={estilos.detalle}>
              Salir de tu cuenta
            </Text>
          </View>
          <Text style={estilos.flecha}>›</Text>
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

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colores.texto,
  },

  subtitulo: {
    color: colores.textoSecundario,
    marginTop: 5,
    marginBottom: 22,
    fontSize: 13,
  },

  tarjetaPerfil: {
    backgroundColor: colores.blanco,
    borderRadius: 18,
    padding: 22,
    alignItems: 'center',
  },

  avatar: {
    width: 85,
    height: 85,
    borderRadius: 50,
    backgroundColor: colores.naranjaClaro,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarTexto: {
    fontSize: 40,
    color: colores.naranja,
    fontWeight: 'bold',
  },

  nombrePerfil: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colores.texto,
    marginTop: 12,
  },

  usuario: {
    color: colores.textoSecundario,
    marginTop: 5,
  },

  etiquetaActivo: {
    backgroundColor: '#E4F5EB',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginTop: 12,
  },

  textoActivo: {
    color: colores.verde,
    fontSize: 12,
    fontWeight: 'bold',
  },

  tituloSeccion: {
    fontSize: 19,
    fontWeight: 'bold',
    color: colores.texto,
    marginTop: 25,
    marginBottom: 13,
  },

  formulario: {
    backgroundColor: colores.blanco,
    padding: 18,
    borderRadius: 18,
  },

  etiqueta: {
    color: colores.texto,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 7,
    fontSize: 13,
  },

  input: {
    height: 47,
    borderWidth: 1.5,
    borderColor: colores.borde,
    borderRadius: 11,
    paddingHorizontal: 13,
    backgroundColor: colores.blanco,
  },

  boton: {
    backgroundColor: colores.naranja,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 25,
  },

  textoBoton: {
    color: colores.blanco,
    fontWeight: 'bold',
  },

  opcion: {
    backgroundColor: colores.blanco,
    borderRadius: 14,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 11,
  },

  icono: {
    fontSize: 24,
    marginRight: 13,
  },

  datos: {
    flex: 1,
  },

  nombreOpcion: {
    fontWeight: 'bold',
    color: colores.texto,
  },

  detalle: {
    fontSize: 11,
    color: colores.textoSecundario,
    marginTop: 4,
  },

  flecha: {
    color: colores.naranja,
    fontSize: 25,
  },

});
