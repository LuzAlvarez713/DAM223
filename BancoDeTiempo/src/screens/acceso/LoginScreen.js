
import React from 'react';

import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView
} from 'react-native';

import colores from '../../styles/colores';

export default function LoginScreen() {
  return (
    <ScrollView contentContainerStyle={estilos.contenedor}>

      <View style={estilos.logo}>
        <Text style={estilos.icono}>⏳</Text>
      </View>

      <Text style={estilos.titulo}>
        BANCO DE TIEMPO
      </Text>

      <Text style={estilos.subtitulo}>
        Y TALENTO
      </Text>

      <Text style={estilos.bienvenida}>
        ¡Bienvenido!
      </Text>

      <Text style={estilos.descripcion}>
        Intercambia tus habilidades y conocimientos
      </Text>

      <View style={estilos.formulario}>

        <Text style={estilos.etiqueta}>
          Nombre de usuario
        </Text>

        <TextInput
          style={estilos.input}
          placeholder="Ingresa tu usuario"
        />

        <Text style={estilos.etiqueta}>
          Contraseña
        </Text>

        <TextInput
          style={estilos.input}
          placeholder="Ingresa tu contraseña"
          secureTextEntry
        />

        <View style={estilos.opciones}>
          <Text style={estilos.recordar}>
            □ Recuérdame
          </Text>

          <Text style={estilos.olvidar}>
            ¿Olvidaste tu contraseña?
          </Text>
        </View>

        <Pressable style={estilos.boton}>
          <Text style={estilos.textoBoton}>
            INICIAR SESIÓN
          </Text>
        </Pressable>

        <Text style={estilos.registro}>
          ¿No tienes una cuenta?
        </Text>

        <Text style={estilos.registrate}>
          Regístrate
        </Text>

      </View>

      <Text style={estilos.pie}>
        Comparte tu tiempo, multiplica tu talento.
      </Text>

    </ScrollView>
  );
}

const estilos = StyleSheet.create({

  contenedor: {
    flexGrow: 1,
    backgroundColor: colores.fondo,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },

  logo: {
    width: 105,
    height: 105,
    borderRadius: 60,
    backgroundColor: colores.naranjaClaro,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  icono: {
    fontSize: 55,
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colores.naranja,
    textAlign: 'center',
  },

  subtitulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colores.texto,
    letterSpacing: 4,
  },

  bienvenida: {
    fontSize: 27,
    fontWeight: 'bold',
    color: colores.texto,
    marginTop: 35,
  },

  descripcion: {
    fontSize: 13,
    color: colores.textoSecundario,
    marginTop: 8,
    marginBottom: 25,
    textAlign: 'center',
  },

  formulario: {
    width: '100%',
    backgroundColor: colores.blanco,
    padding: 22,
    borderRadius: 20,
  },

  etiqueta: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colores.texto,
    marginBottom: 8,
    marginTop: 10,
  },

  input: {
    height: 50,
    borderWidth: 1.5,
    borderColor: colores.borde,
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 14,
    backgroundColor: colores.blanco,
  },

  opciones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 18,
    marginBottom: 25,
    gap: 8,
  },

  recordar: {
    fontSize: 12,
    color: colores.texto,
  },

  olvidar: {
    fontSize: 12,
    color: colores.naranja,
  },

  boton: {
    height: 52,
    backgroundColor: colores.naranja,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoBoton: {
    color: colores.blanco,
    fontSize: 15,
    fontWeight: 'bold',
  },

  registro: {
    textAlign: 'center',
    marginTop: 22,
    color: colores.textoSecundario,
    fontSize: 13,
  },

  registrate: {
    textAlign: 'center',
    color: colores.naranja,
    fontWeight: 'bold',
    marginTop: 5,
  },

  pie: {
    marginTop: 25,
    color: colores.textoSecundario,
    fontSize: 12,
    textAlign: 'center',
  },

});
