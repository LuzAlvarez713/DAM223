
const CLAVE_USUARIOS = 'usuarios';

// Guardar un arreglo de usuarios
export function guardarUsuarios(usuarios) {
  if (typeof window === 'undefined') {
    throw new Error('Esta aplicación solo funciona en navegador web.');
  }

  window.localStorage.setItem(
    CLAVE_USUARIOS,
    JSON.stringify(usuarios)
  );
}

// Recuperar los usuarios guardados
export function obtenerUsuarios() {
  if (typeof window === 'undefined') {
    throw new Error('Esta aplicación solo funciona en navegador web.');
  }

  const datos = window.localStorage.getItem(CLAVE_USUARIOS);

  if (datos === null) {
    return [];
  }

  return JSON.parse(datos);
}
