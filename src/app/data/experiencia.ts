// Cédula de Especialidad en Otorrinolaringología y Cirugía de Cabeza y Cuello
// (Universidad de Guanajuato, generación 2006-2010). Se usa como año base para
// calcular los "años de experiencia" de forma dinámica en vez de un número fijo
// que se queda desactualizado con el tiempo.
const ANIO_INICIO_EXPERIENCIA = 2010;

export function getAniosExperiencia(): number {
  return new Date().getFullYear() - ANIO_INICIO_EXPERIENCIA;
}
