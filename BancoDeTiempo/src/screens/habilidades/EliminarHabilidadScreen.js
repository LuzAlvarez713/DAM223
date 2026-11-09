
import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import colores from '../../styles/colores';

export default function EliminarHabilidadScreen() {
  return (
    <View style={styles.contenedor}>
      <View style={styles.tarjeta}>
        <View style={styles.icono}>
          <Text style={styles.signo}>!</Text>
        </View>

        <Text style={styles.titulo}>Eliminar habilidad</Text>

        <Text style={styles.subtitulo}>
          ¿Estás seguro de que deseas eliminar esta habilidad de tu perfil?
        </Text>

        <View style={styles.detalle}>
          <Text style={styles.nombre}>Diseño gráfico</Text>
          <Text style={styles.texto}>Categoría: Diseño</Text>
          <Text style={styles.texto}>Nivel: Intermedio</Text>
          <Text style={styles.texto}>
            Experiencia: Diseño de logotipos y edición de imágenes.
          </Text>
        </View>

        <Text style={styles.aviso}>
          La habilidad dejará de aparecer en tu perfil.
        </Text>

        <View style={styles.botonEliminar}>
          <Text style={styles.textoEliminar}>Sí, eliminar habilidad</Text>
        </View>

        <View style={styles.botonCancelar}>
          <Text style={styles.textoCancelar}>Cancelar</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colores.fondo,
    justifyContent: 'center',
    padding: 20,
  },
  tarjeta: {
    backgroundColor: colores.blanco,
    borderRadius: 18,
    padding: 22,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colores.borde,
  },
  icono: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FCE4E2',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  signo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: colores.rojo,
  },
  titulo: {
    fontSize: 23,
    fontWeight: 'bold',
    color: colores.texto,
  },
  subtitulo: {
    fontSize: 14,
    color: colores.textoSecundario,
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 21,
  },
  detalle: {
    width: '100%',
    backgroundColor: colores.fondo,
    padding: 16,
    borderRadius: 12,
    marginTop: 22,
  },
  nombre: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colores.texto,
    marginBottom: 10,
  },
  texto: {
    fontSize: 13,
    color: colores.textoSecundario,
    marginBottom: 7,
    lineHeight: 19,
  },
  aviso: {
    fontSize: 12,
    color: colores.rojo,
    textAlign: 'center',
    marginTop: 18,
  },
  botonEliminar: {
    width: '100%',
    backgroundColor: colores.rojo,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  textoEliminar: {
    color: colores.blanco,
    fontWeight: 'bold',
  },
  botonCancelar: {
    width: '100%',
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
