import {
  obtenerUsuarios,
  guardarUsuarios,
} from '../storage/localStorage';

export async function listarUsuarios() {
  return await obtenerUsuarios();
}

export async function registrarUsuario(nombre, edad) {
  const usuarios = await obtenerUsuarios();

  const nuevoUsuario = {
    id: String(Date.now()),
    nombre: nombre.trim(),
    edad: Number(edad),
  };

  const usuariosActualizados = [...usuarios, nuevoUsuario];

  await guardarUsuarios(usuariosActualizados);

  return nuevoUsuario;
}

export async function actualizarUsuario(id, nombre, edad) {
  const usuarios = await obtenerUsuarios();

  const indice = usuarios.findIndex(
    (usuario) => String(usuario.id) === String(id)
  );

  if (indice === -1) {
    throw new Error('No se encontró el usuario.');
  }

  const usuariosActualizados = [...usuarios];

  usuariosActualizados[indice] = {
    ...usuariosActualizados[indice],
    nombre: nombre.trim(),
    edad: Number(edad),
  };

  await guardarUsuarios(usuariosActualizados);

  return usuariosActualizados[indice];
}

export async function eliminarUsuario(id) {
  const usuarios = await obtenerUsuarios();

  const usuariosActualizados = usuarios.filter(
    (usuario) => String(usuario.id) !== String(id)
  );

  await guardarUsuarios(usuariosActualizados);

  return usuariosActualizados;
}