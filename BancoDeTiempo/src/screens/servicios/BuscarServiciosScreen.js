
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

export default function BuscarServiciosScreen() {
  return (
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>Buscar servicios</Text>
      <Text style={styles.subtitulo}>
        Encuentra algo que necesites y aprende de otras personas.
      </Text>

      <View style={styles.busqueda}>
        <Text style={styles.lupa}>⌕</Text>
        <TextInput
          style={styles.input}
          placeholder="¿Qué servicio necesitas?"
          placeholderTextColor={colores.textoSecundario}
        />
      </View>

      <Text style={styles.seccion}>Categorías</Text>

      <View style={styles.categorias}>
        <Pressable style={styles.categoriaSeleccionada}>
          <Text style={styles.textoSeleccionado}>Todos</Text>
        </Pressable>

        <Pressable style={styles.categoria}>
          <Text style={styles.textoCategoria}>Tecnología</Text>
        </Pressable>

        <Pressable style={styles.categoria}>
          <Text style={styles.textoCategoria}>Diseño</Text>
        </Pressable>

        <Pressable style={styles.categoria}>
          <Text style={styles.textoCategoria}>Educación</Text>
        </Pressable>
      </View>

      <View style={styles.encabezado}>
        <Text style={styles.seccion}>Servicios disponibles</Text>
        <Text style={styles.resultados}>3 resultados</Text>
      </View>

      <View style={styles.tarjeta}>
        <View style={styles.icono}>
          <Text style={styles.iconoTexto}>✎</Text>
        </View>
        <View style={styles.informacion}>
          <Text style={styles.nombre}>Diseño de logotipos</Text>
          <Text style={styles.descripcion}>Por: Mariana López</Text>
          <Text style={styles.descripcion}>Diseño y creatividad</Text>
          <Text style={styles.creditos}>2 créditos por hora</Text>
        </View>
        <Text style={styles.favorito}>♡</Text>
        <Pressable style={styles.boton}>
          <Text style={styles.textoBoton}>Ver servicio</Text>
        </Pressable>
      </View>

      <View style={styles.tarjeta}>
        <View style={styles.icono}>
          <Text style={styles.iconoTexto}>💻</Text>
        </View>
        <View style={styles.informacion}>
          <Text style={styles.nombre}>Asesoría de programación</Text>
          <Text style={styles.descripcion}>Por: Carlos Hernández</Text>
          <Text style={styles.descripcion}>Tecnología</Text>
          <Text style={styles.creditos}>1 crédito por hora</Text>
        </View>
        <Text style={styles.favorito}>♡</Text>
        <Pressable style={styles.boton}>
          <Text style={styles.textoBoton}>Ver servicio</Text>
        </Pressable>
      </View>

      <View style={styles.tarjeta}>
        <View style={styles.icono}>
          <Text style={styles.iconoTexto}>📚</Text>
        </View>
        <View style={styles.informacion}>
          <Text style={styles.nombre}>Clases de inglés</Text>
          <Text style={styles.descripcion}>Por: Andrea Pérez</Text>
          <Text style={styles.descripcion}>Educación</Text>
          <Text style={styles.creditos}>1 crédito por hora</Text>
        </View>
        <Text style={styles.favorito}>♡</Text>
        <Pressable style={styles.boton}>
          <Text style={styles.textoBoton}>Ver servicio</Text>
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
  busqueda: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colores.blanco,
    borderWidth: 1,
    borderColor: colores.borde,
    borderRadius: 12,
    paddingHorizontal: 14
  },
  lupa: {
    fontSize: 25,
    color: colores.naranja
  },
  input: {
    flex: 1,
    padding: 14,
    color: colores.texto
  },
  seccion: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colores.texto,
    marginTop: 22,
    marginBottom: 12
  },
  categorias: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8
  },
  categoriaSeleccionada: {
    backgroundColor: colores.naranja,
    padding: 10,
    borderRadius: 20
  },
  textoSeleccionado: {
    color: colores.blanco,
    fontWeight: 'bold'
  },
  categoria: {
    backgroundColor: colores.blanco,
    borderWidth: 1,
    borderColor: colores.borde,
    padding: 10,
    borderRadius: 20
  },
  textoCategoria: {
    color: colores.texto
  },
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  resultados: {
    color: colores.textoSecundario,
    marginTop: 10,
    fontSize: 12
  },
  tarjeta: {
    backgroundColor: colores.blanco,
    borderRadius: 14,
    padding: 15,
    borderWidth: 1,
    borderColor: colores.borde,
    marginBottom: 14,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  icono: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: colores.naranjaClaro,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconoTexto: {
    fontSize: 23
  },
  informacion: {
    flex: 1,
    marginLeft: 12
  },
  nombre: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colores.texto
  },
  descripcion: {
    fontSize: 12,
    color: colores.textoSecundario,
    marginTop: 4
  },
  creditos: {
    color: colores.verde,
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 6
  },
  favorito: {
    color: colores.naranja,
    fontSize: 25,
    marginLeft: 5
  },
  boton: {
    backgroundColor: colores.naranja,
    padding: 11,
    borderRadius: 9,
    alignItems: 'center',
    width: '100%',
    marginTop: 13
  },
  textoBoton: {
    color: colores.blanco,
    fontWeight: 'bold'
  }
});
