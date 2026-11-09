
import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet
} from 'react-native';

import colores from '../../styles/colores';

export default function EliminarPerfilScreen() {
  return (
    <View style={styles.contenedor}>
      <View style={styles.tarjeta}>
        <View style={styles.icono}>
          <Text style={styles.signo}>!</Text>
        </View>

        <Text style={styles.titulo}>Eliminar mi cuenta</Text>

        <Text style={styles.subtitulo}>
          ¿Estás seguro de que deseas eliminar tu cuenta?
        </Text>

        <View style={styles.aviso}>
          <Text style={styles.avisoTitulo}>Antes de continuar</Text>
          <Text style={styles.avisoTexto}>
            Perderás el acceso a tu perfil y a tus servicios.
            Revisa tus intercambios y créditos pendientes antes
            de tomar esta decisión.
          </Text>
        </View>

        <Text style={styles.usuario}>Luz Alvarez</Text>
        <Text style={styles.correo}>luz@email.com</Text>

        <Pressable style={styles.botonEliminar}>
          <Text style={styles.textoEliminar}>Sí, eliminar mi cuenta</Text>
        </Pressable>

        <Pressable style={styles.botonCancelar}>
          <Text style={styles.textoCancelar}>Conservar mi cuenta</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colores.fondo,
    justifyContent: 'center',
    padding: 20
  },
  tarjeta: {
    backgroundColor: colores.blanco,
    borderRadius: 18,
    padding: 22,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colores.borde
  },
  icono: {
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: '#FCE4E4',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  signo: {
    fontSize: 38,
    fontWeight: 'bold',
    color: colores.rojo
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colores.texto,
    textAlign: 'center'
  },
  subtitulo: {
    color: colores.textoSecundario,
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 21
  },
  aviso: {
    backgroundColor: colores.naranjaClaro,
    padding: 15,
    borderRadius: 12,
    marginTop: 22,
    width: '100%'
  },
  avisoTitulo: {
    fontWeight: 'bold',
    color: colores.texto,
    marginBottom: 6
  },
  avisoTexto: {
    color: colores.texto,
    lineHeight: 20
  },
  usuario: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colores.texto,
    marginTop: 20
  },
  correo: {
    color: colores.textoSecundario,
    marginTop: 4
  },
  botonEliminar: {
    backgroundColor: colores.rojo,
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 24
  },
  textoEliminar: {
    color: colores.blanco,
    fontWeight: 'bold'
  },
  botonCancelar: {
    borderWidth: 1,
    borderColor: colores.naranja,
    padding: 14,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10
  },
  textoCancelar: {
    color: colores.naranja,
    fontWeight: 'bold'
  }
});
