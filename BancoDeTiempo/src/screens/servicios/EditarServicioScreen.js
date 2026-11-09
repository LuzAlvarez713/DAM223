
import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView
} from 'react-native';

import colores from '../../styles/colores';

export default function EditarServicioScreen() {
  return (
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>Editar servicio</Text>
      <Text style={styles.subtitulo}>
        Modifica la información de uno de tus servicios publicados.
      </Text>

      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>Nombre del servicio</Text>
        <TextInput
          style={styles.input}
          value="Clases de inglés"
          editable={false}
        />

        <Text style={styles.etiqueta}>Categoría</Text>
        <TextInput
          style={styles.input}
          value="Educación"
          editable={false}
        />

        <Text style={styles.etiqueta}>Descripción</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value="Ofrezco clases de inglés para principiantes."
          multiline
          editable={false}
        />

        <Text style={styles.etiqueta}>Duración estimada</Text>
        <TextInput
          style={styles.input}
          value="2 horas"
          editable={false}
        />

        <Text style={styles.etiqueta}>Créditos por servicio</Text>
        <TextInput
          style={styles.input}
          value="2 créditos"
          editable={false}
        />

        <View style={styles.botonGuardar}>
          <Text style={styles.textoBoton}>Guardar cambios</Text>
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
    marginBottom: 7,
    marginTop: 12,
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
    height: 90,
    textAlignVertical: 'top',
  },
  botonGuardar: {
    backgroundColor: colores.naranja,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 25,
  },
  textoBoton: {
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
