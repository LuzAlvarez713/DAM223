
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

export default function SolicitarServicioScreen() {
  return (
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>Solicitar servicio</Text>
      <Text style={styles.subtitulo}>
        Envía una solicitud al usuario que ofrece este servicio
      </Text>

      <View style={styles.tarjeta}>
        <Text style={styles.nombreServicio}>Clases de inglés</Text>
        <Text style={styles.proveedor}>Ofrecido por Carlos Martínez</Text>

        <View style={styles.detalles}>
          <Text style={styles.etiqueta}>Categoría</Text>
          <Text style={styles.valor}>Educación</Text>

          <Text style={styles.etiqueta}>Duración estimada</Text>
          <Text style={styles.valor}>2 horas</Text>

          <Text style={styles.etiqueta}>Costo en créditos</Text>
          <Text style={styles.creditos}>2 créditos</Text>
        </View>

        <Text style={styles.etiqueta}>Mensaje para el proveedor</Text>
        <TextInput
          style={[styles.input, styles.area]}
          placeholder="Describe qué necesitas..."
          placeholderTextColor={colores.textoSecundario}
          multiline
        />

        <Text style={styles.etiqueta}>Fecha preferida</Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/AAAA"
          placeholderTextColor={colores.textoSecundario}
        />

        <Text style={styles.etiqueta}>Horario preferido</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. 10:00 AM"
          placeholderTextColor={colores.textoSecundario}
        />

        <View style={styles.aviso}>
          <Text style={styles.avisoTexto}>
            Recuerda: 1 hora de servicio equivale a 1 crédito.
          </Text>
        </View>

        <Pressable style={styles.boton}>
          <Text style={styles.textoBoton}>Enviar solicitud</Text>
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
    marginBottom: 20
  },
  tarjeta: {
    backgroundColor: colores.blanco,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: colores.borde,
    marginBottom: 25
  },
  nombreServicio: {
    fontSize: 21,
    fontWeight: 'bold',
    color: colores.texto
  },
  proveedor: {
    color: colores.textoSecundario,
    marginTop: 5
  },
  detalles: {
    backgroundColor: colores.fondo,
    padding: 15,
    borderRadius: 12,
    marginTop: 18
  },
  etiqueta: {
    color: colores.texto,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 7
  },
  valor: {
    color: colores.textoSecundario
  },
  creditos: {
    color: colores.verde,
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 1,
    borderColor: colores.borde,
    borderRadius: 10,
    padding: 12,
    color: colores.texto,
    backgroundColor: '#FFFDFC'
  },
  area: {
    height: 100,
    textAlignVertical: 'top'
  },
  aviso: {
    backgroundColor: colores.naranjaClaro,
    padding: 12,
    borderRadius: 10,
    marginTop: 20
  },
  avisoTexto: {
    color: colores.texto,
    lineHeight: 20
  },
  boton: {
    backgroundColor: colores.naranja,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 22
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
