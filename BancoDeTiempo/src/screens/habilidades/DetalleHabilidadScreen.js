
import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView
} from 'react-native';

import colores from '../../styles/colores';

export default function DetalleHabilidadScreen() {
  return (
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>Detalle de habilidad</Text>
      <Text style={styles.subtitulo}>
        Consulta la información de tu habilidad registrada
      </Text>

      <View style={styles.tarjeta}>
        <View style={styles.icono}>
          <Text style={styles.iconoTexto}>✦</Text>
        </View>

        <Text style={styles.nombre}>Diseño gráfico</Text>
        <Text style={styles.estado}>Habilidad activa</Text>

        <View style={styles.separador} />

        <Text style={styles.etiqueta}>Categoría</Text>
        <Text style={styles.valor}>Diseño y creatividad</Text>

        <Text style={styles.etiqueta}>Nivel de experiencia</Text>
        <Text style={styles.valor}>Intermedio</Text>

        <Text style={styles.etiqueta}>Descripción</Text>
        <Text style={styles.valor}>
          Tengo conocimientos de diseño gráfico y puedo crear
          publicaciones, presentaciones y materiales visuales.
        </Text>

        <Text style={styles.etiqueta}>Experiencia</Text>
        <Text style={styles.valor}>2 años</Text>

        <Text style={styles.etiqueta}>Servicios relacionados</Text>
        <Text style={styles.valor}>Diseño de publicaciones digitales</Text>

        <View style={styles.info}>
          <Text style={styles.infoTexto}>
            Esta habilidad aparece en tu perfil y puede relacionarse
            con los servicios que ofreces.
          </Text>
        </View>

        <Pressable style={styles.boton}>
          <Text style={styles.textoBoton}>Editar habilidad</Text>
        </Pressable>

        <Pressable style={styles.botonEliminar}>
          <Text style={styles.textoEliminar}>Eliminar habilidad</Text>
        </Pressable>

        <Pressable style={styles.botonSecundario}>
          <Text style={styles.textoSecundario}>Volver a mis habilidades</Text>
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
    marginBottom: 25,
    alignItems: 'center'
  },
  icono: {
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: colores.naranjaClaro,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconoTexto: {
    fontSize: 32,
    color: colores.naranja
  },
  nombre: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colores.texto,
    marginTop: 12
  },
  estado: {
    color: colores.verde,
    fontWeight: 'bold',
    marginTop: 6
  },
  separador: {
    height: 1,
    backgroundColor: colores.borde,
    width: '100%',
    marginVertical: 18
  },
  etiqueta: {
    color: colores.textoSecundario,
    fontSize: 13,
    alignSelf: 'flex-start',
    marginTop: 15
  },
  valor: {
    color: colores.texto,
    fontWeight: 'bold',
    lineHeight: 21,
    alignSelf: 'flex-start',
    marginTop: 5
  },
  info: {
    backgroundColor: colores.naranjaClaro,
    padding: 14,
    borderRadius: 10,
    marginTop: 22,
    width: '100%'
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
    width: '100%',
    marginTop: 22
  },
  textoBoton: {
    color: colores.blanco,
    fontWeight: 'bold'
  },
  botonEliminar: {
    backgroundColor: colores.rojo,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginTop: 10
  },
  textoEliminar: {
    color: colores.blanco,
    fontWeight: 'bold'
  },
  botonSecundario: {
    borderWidth: 1,
    borderColor: colores.naranja,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginTop: 10
  },
  textoSecundario: {
    color: colores.naranja,
    fontWeight: 'bold'
  }
});
