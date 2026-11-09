
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

export default function CrearServicioScreen() {
  return (
    <ScrollView style={estilos.contenedor}>
      <View style={estilos.encabezado}>
        <Text style={estilos.titulo}>Publicar servicio</Text>
        <Text style={estilos.subtitulo}>
          Comparte tus habilidades y ayuda a otras personas de la comunidad.
        </Text>
      </View>

      <View style={estilos.tarjeta}>
        <Text style={estilos.etiqueta}>Nombre del servicio</Text>
        <TextInput
          style={estilos.input}
          placeholder="Ej. Clases de inglés"
          placeholderTextColor={colores.textoSecundario}
        />

        <Text style={estilos.etiqueta}>Descripción</Text>
        <TextInput
          style={[estilos.input, estilos.areaTexto]}
          placeholder="Describe qué servicio puedes ofrecer..."
          placeholderTextColor={colores.textoSecundario}
          multiline
          numberOfLines={4}
        />

        <Text style={estilos.etiqueta}>Categoría</Text>
        <View style={estilos.selector}>
          <Text style={estilos.textoSelector}>Selecciona una categoría</Text>
          <Text style={estilos.flecha}>⌄</Text>
        </View>

        <Text style={estilos.etiqueta}>Duración estimada</Text>
        <View style={estilos.selector}>
          <Text style={estilos.textoSelector}>Selecciona las horas</Text>
          <Text style={estilos.flecha}>⌄</Text>
        </View>

        <Text style={estilos.etiqueta}>Créditos por el servicio</Text>
        <View style={estilos.creditos}>
          <Text style={estilos.creditosNumero}>1 hora = 1 crédito</Text>
          <Text style={estilos.creditosIcono}>🪙</Text>
        </View>

        <Text style={estilos.etiqueta}>Modalidad</Text>
        <View style={estilos.opciones}>
          <View style={estilos.opcion}>
            <Text style={estilos.opcionIcono}>🏠</Text>
            <Text style={estilos.opcionTexto}>Presencial</Text>
          </View>
          <View style={estilos.opcion}>
            <Text style={estilos.opcionIcono}>💻</Text>
            <Text style={estilos.opcionTexto}>En línea</Text>
          </View>
        </View>

        <Text style={estilos.etiqueta}>Ubicación (opcional)</Text>
        <TextInput
          style={estilos.input}
          placeholder="Ciudad o zona"
          placeholderTextColor={colores.textoSecundario}
        />

        <Pressable style={estilos.boton}>
          <Text style={estilos.textoBoton}>Publicar servicio</Text>
        </Pressable>

        <Pressable style={estilos.botonCancelar}>
          <Text style={estilos.textoCancelar}>Cancelar</Text>
        </Pressable>
      </View>

      <Text style={estilos.nota}>
        Comparte tu tiempo, conocimientos y talentos con los demás.
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
  tarjeta: {
    backgroundColor: colores.blanco,
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: colores.borde,
  },
  etiqueta: {
    color: colores.texto,
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 8,
  },
  input: {
    backgroundColor: colores.fondo,
    borderWidth: 1,
    borderColor: colores.borde,
    borderRadius: 10,
    padding: 13,
    fontSize: 13,
    color: colores.texto,
  },
  areaTexto: {
    height: 100,
    textAlignVertical: 'top',
  },
  selector: {
    backgroundColor: colores.fondo,
    borderWidth: 1,
    borderColor: colores.borde,
    borderRadius: 10,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textoSelector: {
    fontSize: 13,
    color: colores.textoSecundario,
  },
  flecha: {
    color: colores.naranja,
    fontSize: 18,
  },
  creditos: {
    backgroundColor: colores.naranjaClaro,
    padding: 14,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  creditosNumero: {
    color: colores.texto,
    fontWeight: 'bold',
    fontSize: 13,
  },
  creditosIcono: {
    fontSize: 20,
  },
  opciones: {
    flexDirection: 'row',
    gap: 12,
  },
  opcion: {
    flex: 1,
    backgroundColor: colores.fondo,
    borderWidth: 1,
    borderColor: colores.borde,
    borderRadius: 10,
    padding: 13,
    alignItems: 'center',
  },
  opcionIcono: {
    fontSize: 23,
  },
  opcionTexto: {
    fontSize: 12,
    color: colores.texto,
    marginTop: 5,
  },
  boton: {
    backgroundColor: colores.naranja,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 25,
  },
  textoBoton: {
    color: colores.blanco,
    fontSize: 14,
    fontWeight: 'bold',
  },
  botonCancelar: {
    padding: 13,
    alignItems: 'center',
  },
  textoCancelar: {
    color: colores.textoSecundario,
    fontSize: 13,
  },
  nota: {
    textAlign: 'center',
    color: colores.textoSecundario,
    fontSize: 11,
    marginTop: 20,
    marginBottom: 25,
  },
});
