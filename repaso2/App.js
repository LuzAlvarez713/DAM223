import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  TextInput,
  Pressable,
  ImageBackground,
  FlatList,
  ActivityIndicator,
  Alert,
  StyleSheet,
  Keyboard
} from 'react-native';

export default function App() {

  // TODOS LOS ESTADOS VAN AL PRINCIPIO
  const [mostrarBienvenida, setMostrarBienvenida] = useState(true);

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');

  const [libros, setLibros] = useState([]);
  const [cargando, setCargando] = useState(false);

  // TIEMPO DE LA PANTALLA DE BIENVENIDA
  useEffect(() => {
    const tiempo = setTimeout(() => {
      setMostrarBienvenida(false);
    }, 2000);

    return () => clearTimeout(tiempo);
  }, []);

  // PANTALLA DE BIENVENIDA
  if (mostrarBienvenida) {
    return (
      <ImageBackground
        source={require('./assets/fondo.jpg')}
        style={styles.fondo}
        resizeMode="cover"
      >
        <View style={styles.bienvenida}>
          <Text style={styles.tituloBienvenida}>
            ¡Bienvenido!
          </Text>

          <Text style={styles.subtitulo}>
            Registro de Libros Leídos
          </Text>

          <ActivityIndicator
            size="large"
            color="#FFFFFF"
          />
        </View>
      </ImageBackground>
    );
  }

  // FUNCIÓN PARA AGREGAR LIBROS
  const agregarLibro = () => {

    if (
      titulo.trim() === '' ||
      autor.trim() === '' ||
      genero.trim() === ''
    ) {
      Alert.alert(
        'Campos incompletos',
        'Por favor, llena todos los campos.'
      );
      return;
    }

    Keyboard.dismiss();
    setCargando(true);

    setTimeout(() => {

      const nuevoLibro = {
        id: Date.now().toString(),
        titulo: titulo.trim(),
        autor: autor.trim(),
        genero: genero.trim()
      };

      setLibros((librosAnteriores) => [
        ...librosAnteriores,
        nuevoLibro
      ]);

      setTitulo('');
      setAutor('');
      setGenero('');

      setCargando(false);

      Alert.alert(
        'Registro exitoso',
        'El libro se agregó correctamente.'
      );

    }, 4000);
  };

  // PANTALLA PRINCIPAL
  return (
    <ImageBackground
      source={require('./assets/fondo.jpg')}
      style={styles.fondo}
      resizeMode="cover"
    >

      <View style={styles.contenedor}>

        <Text style={styles.titulo}>
          Registro de Libros Leídos
        </Text>

        <Text style={styles.descripcion}>
          Agrega tus libros favoritos
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Título del libro"
          placeholderTextColor="#777"
          value={titulo}
          onChangeText={setTitulo}
        />

        <TextInput
          style={styles.input}
          placeholder="Nombre del autor"
          placeholderTextColor="#777"
          value={autor}
          onChangeText={setAutor}
        />

        <TextInput
          style={styles.input}
          placeholder="Género del libro"
          placeholderTextColor="#777"
          value={genero}
          onChangeText={setGenero}
        />

        <Pressable
          style={styles.boton}
          onPress={agregarLibro}
          disabled={cargando}
        >
          <Text style={styles.textoBoton}>
            Agregar libro
          </Text>
        </Pressable>

        {cargando && (
          <View style={styles.carga}>
            <ActivityIndicator
              size="large"
              color="#6D3B24"
            />

            <Text style={styles.textoCarga}>
              Guardando libro...
            </Text>
          </View>
        )}

        <Text style={styles.subtituloLista}>
          Mis libros registrados
        </Text>

        <FlatList
          data={libros}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.tarjeta}>
              <Text style={styles.nombreLibro}>
                {item.titulo}
              </Text>

              <Text style={styles.datosLibro}>
                Autor: {item.autor}
              </Text>

              <Text style={styles.datosLibro}>
                Género: {item.genero}
              </Text>
            </View>
          )}

          ListEmptyComponent={
            <Text style={styles.vacio}>
              Todavía no tienes libros registrados.
            </Text>
          }
        />

      </View>

    </ImageBackground>
  );
}

// ESTILOS
const styles = StyleSheet.create({

  fondo: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },

  bienvenida: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.65)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  tituloBienvenida: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 25,
  },

  contenedor: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.91)',
    margin: 15,
    marginTop: 45,
    marginBottom: 25,
    padding: 20,
    borderRadius: 20,
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#59351F',
    marginBottom: 10,
  },

  descripcion: {
    fontSize: 15,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#B99A83',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },

  boton: {
    backgroundColor: '#75452D',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
  },

  textoBoton: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

  carga: {
    alignItems: 'center',
    marginTop: 15,
  },

  textoCarga: {
    color: '#75452D',
    marginTop: 8,
    fontSize: 15,
  },

  subtituloLista: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#59351F',
    marginTop: 20,
    marginBottom: 10,
  },

  tarjeta: {
    backgroundColor: '#F1E4D8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#75452D',
  },

  nombreLibro: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#59351F',
  },

  datosLibro: {
    fontSize: 14,
    color: '#444',
    marginTop: 4,
  },

  vacio: {
    textAlign: 'center',
    color: '#777',
    marginTop: 10,
  },

});