# Práctica 5
https://mdelaosa.github.io/2019-2020-CSAAI-Practicas/P5/

En esta práctica se ha implementado el procesado de imágenes.
Se parte de la idea de la práctica original, para modificar los valores de los
deslizadores, será necesario primero pulsar el botón RGB.
Tiene las siguientes mejoras:
- GRISES: convierte la imagen a escala de grises. En este caso no se pueden  
          modificar los deslizadores RGB.
- ESPEJO HORIZONTAL: mueve la imagen con respecto al eje vertical, es decir
                    la parte derecha pasa a ser la izquierda y al revés.
                    (Se llama así por la posición en la que se pondría un
                    espejo).
- ESPEJO VERTICAL: mueve la imagen con respecto al eje horizontal, es decir, lo
                  que era la parte superior pasa a ser la inferior y al revés.
                  (Se llama así por la posición en la que se pondría un espejo).
- Concatenación de filtros: En las opciones de espejo, se puede poner en grises,
                            cambiar los valores RGB o "añadir" el otro tipo de
                            espejo.
