
import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  StyleSheet
} from 'react-native';

import InicioScreen from './src/screens/inicio/InicioScreen';
import PerfilScreen from './src/screens/perfil/PerfilScreen';
import CategoriasScreen from './src/screens/categorias/CategoriasScreen';
import HabilidadesScreen from './src/screens/habilidades/HabilidadesScreen';
import ServiciosScreen from './src/screens/servicios/ServiciosScreen';
import MisServiciosScreen from './src/screens/servicios/MisServiciosScreen';
import MisSolicitudesScreen from './src/screens/solicitudes/MisSolicitudesScreen';
import SolicitudesRecibidasScreen from './src/screens/solicitudes/SolicitudesRecibidasScreen';
import IntercambiosScreen from './src/screens/intercambios/IntercambiosScreen';
import CreditosScreen from './src/screens/creditos/CreditosScreen';
import FavoritosScreen from './src/screens/favoritos/FavoritosScreen';
import HistorialScreen from './src/screens/historial/HistorialScreen';
import CalificacionesScreen from './src/screens/calificaciones/CalificacionesScreen';

export default function App() {

  const [opcion, setOpcion] = useState('Inicio');

  const pantallas = {
    'Inicio': InicioScreen,
    'Mi perfil': PerfilScreen,
    'Categorías': CategoriasScreen,
    'Habilidades': HabilidadesScreen,
    'Servicios': ServiciosScreen,
    'Mis servicios': MisServiciosScreen,
    'Mis solicitudes': MisSolicitudesScreen,
    'Solicitudes recibidas': SolicitudesRecibidasScreen,
    'Intercambios': IntercambiosScreen,
    'Créditos': CreditosScreen,
    'Favoritos': FavoritosScreen,
    'Historial': HistorialScreen,
    'Calificaciones': CalificacionesScreen,
  };

  const PantallaActual = pantallas[opcion];

  const menu = [
    'Inicio',
    'Mi perfil',
    'Categorías',
    'Habilidades',
    'Servicios',
    'Mis servicios',
    'Mis solicitudes',
    'Solicitudes recibidas',
    'Intercambios',
    'Créditos',
    'Favoritos',
    'Historial',
    'Calificaciones',
  ];

  return (
    <View style={styles.contenedor}>

      {/* MENÚ LATERAL */}
      <View style={styles.menu}>

        <Text style={styles.tituloMenu}>
          Banco de Tiempo
        </Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          {menu.map((item) => (
            <Pressable
              key={item}
              onPress={() => setOpcion(item)}
              style={[
                styles.botonMenu,
                opcion === item && styles.botonSeleccionado
              ]}
            >
              <Text style={styles.textoMenu}>
                {item}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        <Pressable
          style={styles.cerrarSesion}
          onPress={() => setOpcion('Inicio')}
        >
          <Text style={styles.textoMenu}>
            Cerrar sesión
          </Text>
        </Pressable>

      </View>

      {/* CONTENIDO DE CADA PANTALLA */}
      <View style={styles.contenido}>
        <PantallaActual />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  contenedor: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFF8F0',
  },

  menu: {
    width: 145,
    backgroundColor: '#FF8200',
    padding: 8,
  },

  tituloMenu: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 18,
  },

  botonMenu: {
    backgroundColor: '#FF6A00',
    borderWidth: 2,
    borderColor: '#FF5200',
    borderRadius: 10,
    padding: 12,
    marginBottom: 4,
  },

  botonSeleccionado: {
    backgroundColor: '#F28C28',
  },

  textoMenu: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
  },

  cerrarSesion: {
    backgroundColor: '#FF6A00',
    padding: 12,
    borderRadius: 10,
    marginTop: 8,
  },

  contenido: {
    flex: 1,
    backgroundColor: '#FFF3DE',
  },

});
