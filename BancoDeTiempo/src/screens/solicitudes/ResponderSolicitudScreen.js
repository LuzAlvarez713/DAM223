
import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView
} from 'react-native';

import colores from '../../styles/colores';

export default function ResponderSolicitudScreen() {
  return (
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>Responder solicitud</Text>
      <Text style={styles.subtitulo}>
        Revisa los detalles antes de tomar una decisión.
      </Text>

      <View style={styles.tarjeta}>
        <View style={styles.avatar}>
          <Text style={styles.avatarTexto}>JP</Text>
        </View>

        <Text style={styles.nombre}>Juan Pérez</Text>
        <Text style={styles.fecha}>Solicitud recibida el 6 de noviembre</Text>

        <View style={styles.estado}>
          <Text style={styles.estadoTexto}>Pendiente de respuesta</Text>
        </View>

        <View style={styles.separador} />

        <Text style={styles.etiqueta}>Servicio solicitado</Text>
        <Text style={styles.valor}>Asesoría de programación</Text>

        <Text style={styles.etiqueta}>Duración solicitada</Text>
        <Text style={styles.valor}>2 horas</Text>

        <Text style={styles.etiqueta}>Créditos correspondientes</Text>
        <Text style={styles.creditos}>2 créditos</Text>

        <Text style={styles.etiqueta}>Fecha propuesta</Text>
        <Text style={styles.valor}>10 de noviembre de 2026</Text>

        <Text style={styles.etiqueta}>Mensaje del solicitante</Text>
        <Text style={styles.mensaje}>
          Hola, necesito ayuda para comprender algunos temas de
          programación. ¿Podríamos realizar una asesoría?
        </Text>

        <View style={styles.aviso}>
          <Text style={styles.avisoTexto}>
            Si aceptas, la solicitud pasará a la etapa de intercambio.
            Los créditos se actualizarán cuando el intercambio se complete
            y se confirme.
          </Text>
        </View>

        <Pressable style={styles.botonAceptar}>
          <Text style={styles.textoBoton}>Aceptar solicitud</Text>
        </Pressable>

        <Pressable style={styles.botonRechazar}>
          <Text style={styles.textoBoton}>Rechazar solicitud</Text>
        </Pressable>

        <Pressable style={styles.botonSecundario}>
          <Text style={styles.textoSecundario}>Volver a solicitudes</Text>
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
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: colores.naranjaClaro,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarTexto: {
    color: colores.naranja,
    fontSize: 22,
    fontWeight: 'bold'
  },
  nombre: {
    color: colores.texto,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 12
  },
  fecha: {
    color: colores.textoSecundario,
    fontSize: 12,
    marginTop: 5
  },
  estado: {
    backgroundColor: colores.naranjaClaro,
    padding: 10,
    borderRadius: 20,
    marginTop: 14
  },
  estadoTexto: {
    color: colores.naranja,
    fontWeight: 'bold'
  },
  separador: {
    height: 1,
    backgroundColor: colores.borde,
    width: '100%',
    marginVertical: 20
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
    alignSelf: 'flex-start',
    marginTop: 5
  },
  creditos: {
    color: colores.verde,
    fontWeight: 'bold',
    fontSize: 17,
    alignSelf: 'flex-start',
    marginTop: 5
  },
  mensaje: {
    color: colores.texto,
    lineHeight: 22,
    alignSelf: 'flex-start',
    marginTop: 6
  },
  aviso: {
    backgroundColor: colores.naranjaClaro,
    padding: 13,
    borderRadius: 10,
    marginTop: 22,
    width: '100%'
  },
  avisoTexto: {
    color: colores.texto,
    lineHeight: 20,
    fontSize: 13
  },
  botonAceptar: {
    backgroundColor: colores.verde,
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 22
  },
  botonRechazar: {
    backgroundColor: colores.rojo,
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10
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
    width: '100%',
    alignItems: 'center',
    marginTop: 10
  },
  textoSecundario: {
    color: colores.naranja,
    fontWeight: 'bold'
  }
});
