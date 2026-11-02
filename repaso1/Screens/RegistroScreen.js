import React, { useState } from 'react';

import {View,Text,TextInput,Switch,Pressable,Alert,ScrollView,} from 'react-native';

import styles from '../styles/RegistroStyles';

export default function RegistroScreen() {

  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');

  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const enviarRegistro = () => {

    // Validar campos vacios
    if (
      nombre.trim() === '' ||
      carrera.trim() === '' ||
      semestre.trim() === ''
    ) {
      Alert.alert(
        'Campos vacios',
        'Por favor, completa todos los campos.'
      );
      return;
    }

    // Validar semestre numerico
    if (!/^[0-9]+$/.test(semestre.trim())) {
      Alert.alert(
        'Semestre incorrecto',
        'El semestre debe contener solamente numeros.'
      );
      return;
    }

    // Mostrar informacion del estudiante
    const mensaje =
      `Nombre: ${nombre.trim()}\n` +
      `Carrera: ${carrera.trim()}\n` +
      `Semestre: ${semestre.trim()}\n\n` +
      `Taller: ${taller ? 'Sí' : 'No'}\n` +
      `Constancia: ${constancia ? 'Sí' : 'No'}\n` +
      `Deportes: ${deportes ? 'Sí' : 'No'}`;

    Alert.alert(
      'Registro exitoso',
      mensaje
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contenido}
      keyboardShouldPersistTaps="handled"
    >

      <Text style={styles.titulo}>
        Registro de Evento Universitario
      </Text>

      <Text style={styles.subtitulo}>
        Completa tus datos para registrarte al evento.
      </Text>

      <View style={styles.tarjeta}>

        {/* DATOS DEL ESTUDIANTE */}

        <Text style={styles.etiqueta}>
          Nombre completo
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Escribe tu nombre completo"
          value={nombre}
          onChangeText={setNombre}
          autoCapitalize="words"
        />

        <Text style={styles.etiqueta}>
          Carrera
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Escribe tu carrera"
          value={carrera}
          onChangeText={setCarrera}
          autoCapitalize="words"
        />

        <Text style={styles.etiqueta}>
          Semestre
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ejemplo: 9"
          value={semestre}
          onChangeText={setSemestre}
          keyboardType="numeric"
        />

        {/* PREGUNTAS DEL EVENTO */}

        <Text style={styles.seccion}>
          Preguntas del evento
        </Text>

        <View style={styles.fila}>
          <Text style={styles.pregunta}>
            ¿Asistirá al taller?
          </Text>

          <Switch
            value={taller}
            onValueChange={setTaller}
          />

          <Text style={styles.respuesta}>
            {taller ? 'Sí' : 'No'}
          </Text>
        </View>

        <View style={styles.fila}>
          <Text style={styles.pregunta}>
            ¿Requiere constancia?
          </Text>

          <Switch
            value={constancia}
            onValueChange={setConstancia}
          />

          <Text style={styles.respuesta}>
            {constancia ? 'Sí' : 'No'}
          </Text>
        </View>

        <View style={styles.fila}>
          <Text style={styles.pregunta}>
            ¿Participará en actividades deportivas?
          </Text>

          <Switch
            value={deportes}
            onValueChange={setDeportes}
          />

          <Text style={styles.respuesta}>
            {deportes ? 'Sí' : 'No'}
          </Text>
        </View>

        {/* BOTON DE REGISTRO */}

        <Pressable
          style={styles.boton}
          onPress={enviarRegistro}
        >
          <Text style={styles.textoBoton}>
            Enviar Registro
          </Text>
        </Pressable>

      </View>

      <Text style={styles.pie}>
        Evento Universitario
      </Text>

    </ScrollView>
  );
}