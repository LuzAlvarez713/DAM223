import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F2F5FA',
  },

  contenido: {
    padding: 20,
    paddingBottom: 40,
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#19376D',
    textAlign: 'center',
    marginTop: 35,
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 15,
    color: '#555555',
    textAlign: 'center',
    marginBottom: 25,
  },

  tarjeta: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    elevation: 4,
  },

  etiqueta: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#19376D',
    marginBottom: 7,
    marginTop: 12,
  },

  input: {
    backgroundColor: '#F5F7FB',
    borderWidth: 1,
    borderColor: '#C8D4E5',
    borderRadius: 9,
    padding: 12,
    fontSize: 15,
    color: '#222222',
  },

  seccion: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#19376D',
    marginTop: 25,
    marginBottom: 5,
  },

  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 18,
  },

  pregunta: {
    fontSize: 14,
    color: '#333333',
    fontWeight: '500',
    flex: 1,
    marginRight: 5,
  },

  respuesta: {
    color: '#19376D',
    fontWeight: 'bold',
    width: 35,
    textAlign: 'center',
  },

  boton: {
    backgroundColor: '#19376D',
    padding: 16,
    borderRadius: 10,
    marginTop: 28,
    alignItems: 'center',
  },

  textoBoton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  pie: {
    textAlign: 'center',
    color: '#777777',
    marginTop: 20,
    fontSize: 12,
  },

});

export default styles;