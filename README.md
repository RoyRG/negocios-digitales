# negocios-digitales

Sitios web de negocios y organizaciones locales. Cada negocio vive en su propia
subcarpeta y se publica como ruta del sitio (Netlify, `publish = "."`).

## Estructura

```
/                              → directorio (index.html)
/neuroticos-anonimos-culiacan/ → Neuróticos Anónimos A.C. (Culiacán)
```

## Deploy

Conectado a Netlify (Add new site → Import from Git). Cada `git push` a `main`
publica automáticamente. No se suben archivos internos (PROYECTO.md, pago.json, etc. — ver `.gitignore`).

## Agregar un negocio nuevo

1. Crear carpeta `<slug>/` con su `index.html`.
2. Añadir una tarjeta en el `index.html` raíz.
3. `git add . && git commit && git push`.
