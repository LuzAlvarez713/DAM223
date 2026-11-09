
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

export default function EditarSolicitudScreen() {
  return (
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>Editar solicitud</Text>
      <Text style={styles.subtitulo}>
        Modifica los detalles de tu solicitud
      </Text>

      <View style={styles.tarjeta}>
        <Text style={styles.etiqueta}>Servicio solicitado</Text>
        <TextInput
          style={styles.input}
          value="Clases de inglés"
          editable={false}
        />

        <Text style={styles.etiqueta}>Mensaje para el usuario</Text>
        <TextInput
          style={[styles.input, styles.area]}
          defaultValue="Hola, me gustaría recibir apoyo para mejorar mi inglés."
          multiline
        />

        <Text style={styles.etiqueta}>Fecha preferida</Text>
        <TextInput
          style={styles.input}
          defaultValue="15/11/2026"
        />

        <Text style={styles.etiqueta}>Horario preferido</Text>
        <TextInput
          style={styles.input}
          defaultValue="10:00 AM"
        />

        <View style={styles.info}>
          <Text style={styles.infoTexto}>
            Estado: Pendiente
          </Text>
        </View>

        <Pressable style={styles.boton}>
          <Text style={styles.textoBoton}>Guardar cambios</Text>
        </Pressable>

        <Pressable style={styles.botonSecundario}>
          <Text style={styles.textoSecundario}>Volver</Text>
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
    marginBottom: 20
  },
  tarjeta: {
    backgroundColor: colores.blanco,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colores.borde
  },
  etiqueta: {
    fontWeight: 'bold',
    color: colores.texto,
    marginBottom: 8,
    marginTop: 12
  },
  input: {
    backgroundColor: '#FFFDFC',
    borderWidth: 1,
    borderColor: colores.borde,
    borderRadius: 10,
    padding: 12,
    color: colores.texto
  },
  area: {
    height: 100,
    textAlignVertical: 'top'
  },
  info: {
    backgroundColor: colores.naranjaClaro,
    padding: 12,
    borderRadius: 10,
    marginTop: 18
  },
  infoTexto: {
    color: colores.texto,
    fontWeight: 'bold'
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
