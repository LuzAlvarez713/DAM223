
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

export default function EditarPerfilScreen() {
  return (
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>Editar mi perfil</Text>
      <Text style={styles.subtitulo}>
        Actualiza tu información personal
      </Text>

      <View style={styles.tarjeta}>
        <View style={styles.avatar}>
          <Text style={styles.iniciales}>LU</Text>
        </View>

        <Text style={styles.cambiarFoto}>Cambiar fotografía</Text>

        <Text style={styles.etiqueta}>Nombre completo</Text>
        <TextInput
          style={styles.input}
          defaultValue="Luz Alvarez"
        />

        <Text style={styles.etiqueta}>Correo electrónico</Text>
        <TextInput
          style={styles.input}
          defaultValue="luz@email.com"
          keyboardType="email-address"
        />

        <Text style={styles.etiqueta}>Teléfono</Text>
        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          value={telefono}
          onChangeText={setTelefono}
          keyboardType="phone-pad"
       />
        <Text style={styles.etiqueta}>Ubicación</Text>
        <TextInput
          style={styles.input}
          defaultValue="Querétaro, México"
        />

        <Text style={styles.etiqueta}>Acerca de mí</Text>
        <TextInput
          style={[styles.input, styles.area]}
          defaultValue="Me gusta compartir mis conocimientos y aprender nuevas habilidades."
          multiline
        />

        <Pressable style={styles.boton}>
          <Text style={styles.textoBoton}>Guardar cambios</Text>
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
  avatar: {
    width: 85,
    height: 85,
    borderRadius: 45,
    backgroundColor: colores.naranjaClaro,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  iniciales: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colores.naranja
  },
  cambiarFoto: {
    color: colores.naranja,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold'
  },
  etiqueta: {
    color: colores.texto,
    fontWeight: 'bold',
    marginTop: 18,
    marginBottom: 8
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
  boton: {
    backgroundColor: colores.naranja,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 25
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

