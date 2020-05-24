# Práctica 5
https://mdelaosa.github.io/2019-2020-CSAAI-Practicas/P5/

En esta práctica se ha implementado el procesado de imágenes.
Se parte de la idea de la práctica original, para modificar los valores de los
deslizadores, será necesario primero pulsar el botón RGB.
Tiene las siguientes mejoras:
- Deslizadores ocultos.
- GRISES: convierte la imagen a escala de grises. En este caso no se pueden  
          modificar los deslizadores RGB.
- ESPEJO HORIZONTAL: mueve la imagen con respecto al eje vertical, es decir
                    la parte derecha pasa a ser la izquierda y al revés.
                    (Se llama así por la posición en la que se pondría un
                    espejo).
- ESPEJO VERTICAL: mueve la imagen con respecto al eje horizontal, es decir, lo
                  que era la parte superior pasa a ser la inferior y al revés.
                  (Se llama así por la posición en la que se pondría un espejo).
- NEGATIVO: convierte la imagen en negativo gracias a los complementarios de
            los espacios de color RGB. No se puede modificar los deslizadores
            RGB y el negativo a la vez.
- Concatenación de filtros: En las opciones de espejo, se puede poner en grises,
                            pasar a negativo, cambiar los valores RGB o "añadir"
                            el otro tipo de espejo.

Nota: Si se prueba desde el móvil, existe una diferencia de color de fondo, pero
      la práctica funciona sin problema.
