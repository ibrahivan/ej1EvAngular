//datos preguntas
import { IPreguntas } from "./i-preguntas";

export const LISTADOPREG: IPreguntas[]= [
    {
        pregunta:'1. ¿Cómo se define TypeScript?',
        respuesta:'TypeScript es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases.'
    },
    {
        pregunta:'2. ¿Cuál es la principal diferencia de TypeScript respecto de JavaScript?',
        respuesta:'TypeScript dispone de una escritura estática, mientras que JavaScript es un lenguaje dinámico. JavaScript no admite módulos, mientras que TypeScript sí que les da soporte.'
    
    },
    {
        pregunta:'3. Muestra la lista de tipos básicos de TypeScript.',
        respuesta:'Booleans, Number, String, Any, Void, Arrays, Tuplas'
    
    },
    {
        pregunta:'4. ¿Con qué tres elementos podemos crear un tipo personalizado en TypeScript?',
        respuesta:'Class, type, interface.'
    },
    {
        pregunta:'5. ¿Puedo ejecutar TypeScript en un navegador? Explica tu respuesta.',
        respuesta:'TypeScript no puede ejecutarse directamente en un navegador, ya que los navegadores web no comprenden TypeScript.'
    },
    {
        pregunta:'6. Entonces, ¿cómo es que puedo ver con las herramientas del desarrollador del navegador los archivo ts?',
        respuesta:'Compilandolo en Javascript.'
    },
    {
        pregunta:'7. ¿Para qué sirve el archivo tsconfig.json?',
        respuesta:'Es el que indica en un proyecto que se está trabajando con TypeScript. Lo colocas en la raíz de carpetas del proyecto y en él situamos un JSON con todas las configuraciones de trabajo para el transpilador de TypeScript.'
    }

];