
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

export default function CrearHabilidadScreen() {
  return (
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>Nueva habilidad</Text>
      <Text style={styles.subtitulo}>
        Registra algo que sabes hacer y compartir con la comunidad.
      </Text>

      <View style={styles.tarjeta}>
        <Text style={styles.etiqueta}>Nombre de la habilidad</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. Diseño gráfico"
          placeholderTextColor={colores.textoSecundario}
        />

        <Text style={styles.etiqueta}>Categoría</Text>
        <View style={styles.opcion}>
          <Text style={styles.textoOpcion}>Diseño y creatividad</Text>
          <Text style={styles.flecha}>⌄</Text>
        </View>

        <Text style={styles.etiqueta}>Nivel de experiencia</Text>
        <View style={styles.opcion}>
          <Text style={styles.textoOpcion}>Selecciona tu nivel</Text>
          <Text style={styles.flecha}>⌄</Text>
        </View>

        <Text style={styles.etiqueta}>Tiempo de experiencia</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. 2 años"
          placeholderTextColor={colores.textoSecundario}
        />

        <Text style={styles.etiqueta}>Descripción</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Describe lo que sabes hacer..."
          placeholderTextColor={colores.textoSecundario}
          multiline
          numberOfLines={4}
        />

        <View style={styles.info}>
          <Text style={styles.infoTexto}>
            Consejo: describe tus conocimientos para que otras personas
            conozcan lo que puedes ofrecer.
          </Text>
        </View>

        <Pressable style={styles.boton}>
          <Text style={styles.textoBoton}>Guardar habilidad</Text>
        </Pressable>

        <Pressable style={styles.botonSecundario}>
          <Text style={styles.textoSecundario}>Cancelar</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colores.fondo,
    padding: 20
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colores.texto,
    marginTop: 25
  },
  subtitulo: {
    color: colores.textoSecundario,
    marginTop: 6,
    marginBottom: 20,
    lineHeight: 21
  },
  tarjeta: {
    backgroundColor: colores.blanco,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colores.borde,
    marginBottom: 25
  },
  etiqueta: {
    color: colores.texto,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 8
  },
  input: {
    backgroundColor: colores.fondo,
    borderWidth: 1,
    borderColor: colores.borde,
    borderRadius: 10,
    padding: 13,
    color: colores.texto
  },
  textArea: {
    height: 110,
    textAlignVertical: 'top'
  },
  opcion: {
    backgroundColor: colores.fondo,
    borderWidth: 1,
    borderColor: colores.borde,
    borderRadius: 10,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textoOpcion: {
    color: colores.textoSecundario
  },
  flecha: {
    color: colores.naranja,
    fontSize: 18
  },
  info: {
    backgroundColor: colores.naranjaClaro,
    padding: 13,
    borderRadius: 10,
    marginTop: 20
  },
  infoTexto: {
    color: colores.texto,
    lineHeight: 20
  },
  boton: {
    backgroundColor: colores.naranja,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20
  },
  textoBoton: {
    color: colores.blanco,
    fontWeight: 'bold'
  },
  botonSecundario: {
    borderWidth: 1,
    borderColor: colores.naranja,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10
  },
  textoSecundario: {
    color: colores.naranja,
    fontWeight: 'bold'
  }
});
