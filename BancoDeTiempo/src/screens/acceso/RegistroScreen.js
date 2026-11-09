
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

export default function RegistroScreen() {
  return (
    <ScrollView contentContainerStyle={estilos.contenedor}>

      <View style={estilos.logo}>
        <Text style={estilos.icono}>⏳</Text>
      </View>

      <Text style={estilos.titulo}>
        Crear cuenta
      </Text>

      <Text style={estilos.descripcion}>
        Únete a nuestra comunidad y comparte tu talento
      </Text>

      <View style={estilos.formulario}>

        <Text style={estilos.etiqueta}>Usuario</Text>
        <TextInput
          style={estilos.input}
          placeholder="Nombre de usuario"
        />

        <Text style={estilos.etiqueta}>Nombre</Text>
        <TextInput
          style={estilos.input}
          placeholder="Ingresa tu nombre"
        />

        <Text style={estilos.etiqueta}>Apellido</Text>
        <TextInput
          style={estilos.input}
          placeholder="Ingresa tus apellidos"
        />

        <Text style={estilos.etiqueta}>Fecha de nacimiento</Text>
        <TextInput
          style={estilos.input}
          placeholder="DD/MM/AAAA"
        />

        <Text style={estilos.etiqueta}>Correo electrónico</Text>
        <TextInput
          style={estilos.input}
          placeholder="ejemplo@correo.com"
          keyboardType="email-address"
        />

        <Text style={estilos.etiqueta}>Contraseña</Text>
        <TextInput
          style={estilos.input}
          placeholder="Crea una contraseña"
          secureTextEntry
        />

        <Text style={estilos.etiqueta}>Número telefónico</Text>
        <TextInput
          style={estilos.input}
          placeholder="Ingresa tu número"
          keyboardType="phone-pad"
        />

        <Pressable style={estilos.boton}>
          <Text style={estilos.textoBoton}>
            CREAR CUENTA
          </Text>
        </Pressable>

        <Text style={estilos.pie}>
          ¿Ya tienes una cuenta?
        </Text>

        <Text style={estilos.iniciar}>
          Iniciar sesión
        </Text>

      </View>

    </ScrollView>
  );
}

const estilos = StyleSheet.create({

  contenedor: {
    flexGrow: 1,
    backgroundColor: colores.fondo,
    alignItems: 'center',
    padding: 25,
  },

  logo: {
    width: 75,
    height: 75,
    borderRadius: 50,
    backgroundColor: colores.naranjaClaro,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  icono: {
    fontSize: 40,
  },

  titulo: {
    fontSize: 27,
    fontWeight: 'bold',
    color: colores.naranja,
    marginTop: 15,
  },

  descripcion: {
    fontSize: 13,
    color: colores.textoSecundario,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 20,
  },

  formulario: {
    width: '100%',
    backgroundColor: colores.blanco,
    borderRadius: 20,
    padding: 20,
  },

  etiqueta: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colores.texto,
    marginTop: 12,
    marginBottom: 7,
  },

  input: {
    height: 48,
    borderWidth: 1.5,
    borderColor: colores.borde,
    borderRadius: 11,
    paddingHorizontal: 13,
    fontSize: 14,
    backgroundColor: colores.blanco,
  },

  boton: {
    height: 52,
    backgroundColor: colores.naranja,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },

  textoBoton: {
    color: colores.blanco,
    fontSize: 15,
    fontWeight: 'bold',
  },

  pie: {
    textAlign: 'center',
    color: colores.textoSecundario,
    marginTop: 20,
    fontSize: 13,
  },

  iniciar: {
    textAlign: 'center',
    color: colores.naranja,
    fontWeight: 'bold',
    marginTop: 7,
  },

});
