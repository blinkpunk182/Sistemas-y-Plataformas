# Explicación funcionalidad taller 1

``` 
1. Previamente creado el backend, se creo el modelo Encuesta del tema Insumo de Encuesta mediante librería de MONGO
2. Se creo un archivo de configuración para conectarse a mongo
3. Se estableció un archivo Dockerfile con el puerto 80 para que sea accedido consumido en el frontend
4. Se creo otra carpeta env donde se almacena variables de configuración que será accedido a través del docker-compose , este enfocado para mi backend
5. El frontend fue elaborado mediante VUE con un método get para acceder a los recursos, a este también se le puso un archivo DockerFile 
6. En el docker-compose se creo 3 services, uno para el backend, otro para el base de datos , y otro para frontend, en el backend se estableció las variables de entorno a través de un directorio  y el puerto para ser accesido a tráves del backend, luego se estableció en el siguiente orden mongo donde se descargaría la imagen y al final un frontend con dependencia del backend y los puertos de salida e incluso un volumen sobre la carpeta src
```
