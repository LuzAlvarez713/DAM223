
import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView
} from 'react-native';

import colores from '../../styles/colores';

export default function EditarHabilidadScreen() {
  return (
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>Editar habilidad</Text>
      <Text style={styles.subtitulo}>
        Actualiza la información de una habilidad de tu perfil.
      </Text>

      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>Nombre de la habilidad</Text>
        <TextInput
          style={styles.input}
          value="Diseño gráfico"
          editable={false}
        />

        <Text style={styles.etiqueta}>Categoría</Text>
        <TextInput
          style={styles.input}
          value="Diseño"
          editable={false}
        />

        <Text style={styles.etiqueta}>Nivel de experiencia</Text>
        <TextInput
          style={styles.input}
          value="Intermedio"
          editable={false}
        />

        <Text style={styles.etiqueta}>Descripción</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value="Tengo conocimientos en diseño de logotipos y edición de imágenes."
          multiline
          editable={false}
        />

        <View style={styles.botonGuardar}>
          <Text style={styles.textoGuardar}>Guardar cambios</Text>
        </View>

        <View style={styles.botonCancelar}>
          <Text style={styles.textoCancelar}>Cancelar</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colores.fondo,
    padding: 20,
  },
  titulo: {
    fontSize: 27,
    fontWeight: 'bold',
    color: colores.texto,
    marginTop: 25,
  },
  subtitulo: {
    fontSize: 14,
    color: colores.textoSecundario,
    marginTop: 7,
    marginBottom: 22,
  },
  formulario: {
    backgroundColor: colores.blanco,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: colores.borde,
  },
  etiqueta: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colores.texto,
    marginTop: 12,
    marginBottom: 7,
  },
  input: {
    backgroundColor: colores.fondo,
    borderWidth: 1,
    borderColor: colores.borde,
    borderRadius: 9,
    padding: 12,
    fontSize: 14,
    color: colores.texto,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  botonGuardar: {
    backgroundColor: colores.naranja,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 25,
  },
  textoGuardar: {
    color: colores.blanco,
    fontWeight: 'bold',
  },
  botonCancelar: {
    backgroundColor: colores.naranjaClaro,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },
  textoCancelar: {
    color: colores.texto,
    fontWeight: 'bold',
  },
});
