# Desafío para Software Engineers

Nombre postulante: Rodrigo Molina Garrido\
Link a la app en producción: https://kimchechallenge-six.vercel.app/

# Respuesta

Para un volumen de datos tan largo, una opción sería hacer un particionado horizontal
a la base de datos, que consiste en dividir la tabla en menos filas alterando la forma en que el motor
almacena los datos, el usuario determina las reglas con las que se distribuyen las porciones
de datos y de esa forma, las consultas recaerían en una fracción determinada de la tabla.
Como el volumen de datos se reduce, tambien lo haría el tiempo de lectura y escritura,
por otra parte, las tablas particionadas serían más faciles de mantener, se podría tomar una sola partición
y optimizarla, o incluso eliminarla de manera casi instantanea.

# Screenshot

![Screenshot](https://user-images.githubusercontent.com/57046544/171273820-e435fb45-0bcb-483a-a04c-f5ffa7a09e50.png)


## Instrucciones

Debes crear un buscador de países consultando el [siguiente grafo](https://countries.trevorblades.com/). Este código contiene una base para seguir con la aplicación en React y ApolloClient. Queda a disposición tuya cualquier cambio, ya sea de estructura, estilo, etc.

Se espera que logres hacer una aplicación parecida a la del siguiente diagrama:

![image1](imgs/1.png)
![image2](imgs/2.png)

La funcionalidad y estructura debe ser igual, pero el diseño y variantes (por ejemplo, cambiar colores de las cosas) queda a tu gusto. **Considerar que el ícono al lado del nombre de cada país es el emoji**.

Además de esto, se espera que hagas deploy de tu app en el servicio que desees (Heroku, Netlify, AWS, Github Pages, etc).

## Consideraciones

- Se espera que uses buenas prácticas como gitflow (pull requests y commits), orden del código, estructura, eficiencia, etc.
- Puedes dejar comentarios de decisiones que tuviste que tomar y del por qué en este repositorio.
- Se va a considerar un buen diseño de UX/UI.

## Hints

Acá van algunas cosas que pueden ser útiles (o no 👀):

- [Gitignore](https://www.toptal.com/developers/gitignore)
- [GraphQL](https://www.howtographql.com/)
- [React](https://es.reactjs.org/)
- [Styled components](https://styled-components.com/docs/basics)
- [ApolloClient](https://www.apollographql.com/docs/react/)
- [Lodash](https://lodash.com/)
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Commitlint](https://commitlint.js.org/#/)
- [Eslint](https://eslint.org/)
- [Eslint airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [Husky](https://www.npmjs.com/package/husky)
