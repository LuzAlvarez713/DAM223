
/* 1. ZONA IMPORTACIONES */
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';

import { Perfil } from '../components/Perfil';


/* 2. ZONA MAIN */
export default function TarjetasScreen() {

  // Estados de los campos
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [materia, setMateria] = useState('');
  const [cuatrimestre, setCuatrimestre] = useState('');

  // Lista de tarjetas
  const [alumnos, setAlumnos] = useState([
    {
      id: '1',
      nombre: 'Luz Citlali Resendiz',
      carrera: 'ITIID',
      materia: 'Desarrollo de Aplicaciones Movil',
      cuatrimestre: 'Cuarto'
    },
    {
      id: '2',
      nombre: 'Juan Carlos Lopez',
      carrera: 'Ingenieria en Sistemas Computacionales',
      materia: 'Programación Web',
      cuatrimestre: 'Segundo'
    },
    {
      id: '3',
      nombre: 'Berenice Martinez',
      carrera: 'Comercio Internacional',
      materia: 'Contaduria',
      cuatrimestre: 'Primero'
    }
  ]);


  // REGISTRAR ALUMNO
  const registrarAlumno = () => {

    if (
      nombre.trim() === '' ||
      carrera.trim() === '' ||
      materia.trim() === '' ||
      cuatrimestre.trim() === ''
    ) {
      Alert.alert(
        'Campos vacíos',
        'Debes completar todos los campos.'
      );
      return;
    }

    const nuevoAlumno = {
      id: Date.now().toString(),
      nombre,
      carrera,
      materia,
      cuatrimestre
    };

    setAlumnos([...alumnos, nuevoAlumno]);

    Alert.alert(
      'Registro exitoso',
      'El alumno se agregó correctamente.'
    );

    // Limpiar campos
    setNombre('');
    setCarrera('');
    setMateria('');
    setCuatrimestre('');
  };


  // CONSULTAR INFORMACIÓN
  const consultarAlumno = (alumno) => {

    Alert.alert(
      'Información del alumno',
      `Nombre: ${alumno.nombre}\nCarrera: ${alumno.carrera}\nMateria: ${alumno.materia}\nCuatrimestre: ${alumno.cuatrimestre}`
    );

  };


  // ELIMINAR ALUMNO
  const eliminarAlumno = (id) => {

    Alert.alert(
      'Eliminar tarjeta',
      '¿Estás segura de eliminar este alumno?',
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => {
            setAlumnos(
              alumnos.filter(alumno => alumno.id !== id)
            );

            Alert.alert(
              'Eliminado',
              'La tarjeta se eliminó correctamente.'
            );
          }
        }
      ]
    );

  };


  return (

    <ScrollView style={styles.scroll}>

      <View style={styles.container}>

        <Text style={styles.titulo}>
          Registro de alumnos
        </Text>


        {/* FORMULARIO */}

        <TextInput
          style={styles.input}
          placeholder="Nombre del alumno"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={styles.input}
          placeholder="Carrera"
          value={carrera}
          onChangeText={setCarrera}
        />

        <TextInput
          style={styles.input}
          placeholder="Materia"
          value={materia}
          onChangeText={setMateria}
        />

        <TextInput
          style={styles.input}
          placeholder="Cuatrimestre"
          value={cuatrimestre}
          onChangeText={setCuatrimestre}
        />


        {/* BOTÓN REGISTRAR */}

        <TouchableOpacity
          style={styles.boton}
          onPress={registrarAlumno}
        >
          <Text style={styles.textoBoton}>
            Registrar alumno
          </Text>
        </TouchableOpacity>


        {/* CONTADOR */}

        <Text style={styles.contador}>
          Alumnos registrados: {alumnos.length}
        </Text>


        {/* TARJETAS */}

        {alumnos.map((alumno, index) => (

          <View key={alumno.id} style={styles.contenedorTarjeta}>

            <Perfil
              nombre={alumno.nombre}
              carrera={alumno.carrera}
              materia={alumno.materia}
              cuatrimestre={alumno.cuatrimestre}
              style={
                index % 3 === 0
                  ? styles.tarjeta1
                  : index % 3 === 1
                  ? styles.tarjeta2
                  : styles.tarjeta3
              }
            />

            <View style={styles.botonesTarjeta}>

              <TouchableOpacity
                style={styles.botonConsultar}
                onPress={() => consultarAlumno(alumno)}
              >
                <Text style={styles.textoBoton}>
                  Ver información
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.botonEliminar}
                onPress={() => eliminarAlumno(alumno.id)}
              >
                <Text style={styles.textoBoton}>
                  Eliminar
                </Text>
              </TouchableOpacity>

            </View>

          </View>

        ))}

        <StatusBar style="auto" />

      </View>

    </ScrollView>

  );
}


/* 3. ZONA DE ESTILOS */

const styles = StyleSheet.create({

  scroll: {
    flex: 1,
    backgroundColor: '#F2F2F2'
  },

  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    paddingTop: 40
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20
  },

  input: {
    width: '100%',
    backgroundColor: 'white',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ddd'
  },

  boton: {
    backgroundColor: '#2864DC',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20
  },

  textoBoton: {
    color: 'white',
    fontWeight: 'bold'
  },

  contador: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15
  },

  contenedorTarjeta: {
    width: '100%',
    marginBottom: 20
  },

  tarjeta1: {
    backgroundColor: 'pink'
  },

  tarjeta2: {
    backgroundColor: 'orange'
  },

  tarjeta3: {
    backgroundColor: 'lightgreen'
  },

  botonesTarjeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },

  botonConsultar: {
    backgroundColor: '#2864DC',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginRight: 5,
    alignItems: 'center'
  },

  botonEliminar: {
    backgroundColor: '#DC3545',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginLeft: 5,
    alignItems: 'center'
  }

});
