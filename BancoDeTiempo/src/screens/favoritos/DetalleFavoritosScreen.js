
import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView
} from 'react-native';

import colores from '../../styles/colores';

export default function DetalleFavoritoScreen() {
  return (
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>Detalle de favorito</Text>
      <Text style={styles.subtitulo}>
        Consulta la información del servicio que guardaste.
      </Text>

      <View style={styles.tarjeta}>
        <View style={styles.icono}>
          <Text style={styles.iconoTexto}>✎</Text>
        </View>

        <View style={styles.fila}>
          <Text style={styles.nombre}>Diseño de logotipos</Text>
          <Text style={styles.corazon}>♥</Text>
        </View>

        <Text style={styles.categoria}>Diseño y creatividad</Text>

        <View style={styles.separador} />

        <Text style={styles.etiqueta}>Persona que ofrece el servicio</Text>
        <Text style={styles.valor}>Mariana López</Text>

        <Text style={styles.etiqueta}>Descripción</Text>
        <Text style={styles.descripcion}>
          Diseño de logotipos personalizados para pequeños negocios,
          emprendimientos y proyectos personales.
        </Text>

        <Text style={styles.etiqueta}>Duración estimada</Text>
        <Text style={styles.valor}>2 horas</Text>

        <Text style={styles.etiqueta}>Valor del servicio</Text>
        <Text style={styles.creditos}>2 créditos por hora</Text>

        <Text style={styles.etiqueta}>Disponibilidad</Text>
        <Text style={styles.disponible}>Disponible</Text>

        <View style={styles.aviso}>
          <Text style={styles.avisoTexto}>
            Recuerda que cada hora de servicio equivale a un crédito
            dentro del Banco de Tiempo.
          </Text>
        </View>

        <Pressable style={styles.boton}>
          <Text style={styles.textoBoton}>Solicitar servicio</Text>
        </Pressable>

        <Pressable style={styles.botonEliminar}>
          <Text style={styles.textoEliminar}>Quitar de favoritos</Text>
        </Pressable>

        <Pressable style={styles.botonSecundario}>
          <Text style={styles.textoSecundario}>Volver a favoritos</Text>
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
    borderColor: colores.borde,
    marginBottom: 25
  },
  icono: {
    width: 65,
    height: 65,
    borderRadius: 15,
    backgroundColor: colores.naranjaClaro,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  iconoTexto: {
    color: colores.naranja,
    fontSize: 32
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15
  },
  nombre: {
    color: colores.texto,
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1
  },
  corazon: {
    color: colores.rojo,
    fontSize: 25
  },
  categoria: {
    color: colores.textoSecundario,
    marginTop: 6
  },
  separador: {
    height: 1,
    backgroundColor: colores.borde,
    marginVertical: 18
  },
  etiqueta: {
    color: colores.textoSecundario,
    fontSize: 13,
    marginTop: 15
  },
  valor: {
    color: colores.texto,
    fontWeight: 'bold',
    marginTop: 5
  },
  descripcion: {
    color: colores.texto,
    lineHeight: 21,
    marginTop: 5
  },
  creditos: {
    color: colores.verde,
    fontWeight: 'bold',
    marginTop: 5
  },
  disponible: {
    color: colores.verde,
    fontWeight: 'bold',
    marginTop: 5
  },
  aviso: {
    backgroundColor: colores.naranjaClaro,
    padding: 13,
    borderRadius: 10,
    marginTop: 22
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
    marginTop: 20
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
    marginTop: 10
  },
  textoSecundario: {
    color: colores.naranja,
    fontWeight: 'bold'
  }
});
