# Portafolio · Luis Carlos

Web personal sencilla (HTML + CSS + JavaScript, sin instalar nada) para consultar el CV, las cartas de recomendación y el resto de documentos.

## Estructura

```
portafolio/
├── index.html       ← estructura de la página (casi nunca hay que tocarlo)
├── estilos.css      ← colores, tipografías y diseño
├── main.js          ← lógica (carrusel, menú, copiar email…)
├── contenido.js     ← ✏️ TODOS LOS TEXTOS Y DATOS. Edita aquí.
├── assets/
│   └── foto.jpg     ← pon aquí tu foto con este nombre
└── documentos/      ← pon aquí los PDF (CV, cartas, títulos)
```

## Trabajar con Visual Studio Code

1. Descomprime la carpeta `portafolio` donde quieras (por ejemplo en Documentos).
2. En VS Code: **Archivo → Abrir carpeta…** y elige `portafolio`.
3. Instala la extensión **Live Server** (de Ritwick Dey) desde el panel de extensiones.
4. Clic derecho sobre `index.html` → **Open with Live Server**. Se abre en el navegador y se recarga sola cada vez que guardas.

> También funciona con doble clic en `index.html`, sin Live Server.

## Qué rellenar

Abre `contenido.js` y busca la palabra **PENDIENTE** (Ctrl/Cmd + F). Lo principal:

- Apellidos, email, teléfono y LinkedIn.
- Tu foto en `assets/foto.jpg`.
- Los PDF en `documentos/` con los mismos nombres que aparecen en `contenido.js` (o cambia los nombres allí).
- Un fragmento real de cada carta de recomendación (`extracto`).
- Borra la carta marcada con `ejemplo: true` cuando tengas la segunda carta real.

Consejo: antes de subir los PDF, quita del CV datos que no quieras públicos (DNI, dirección exacta, fecha de nacimiento).

## Web publicada

**https://luiscresola.github.io/portafolio/** (GitHub Pages, repositorio `luiscresola/portafolio`)

Para actualizarla después de editar:
1. Guarda los cambios.
2. En VS Code, abre el panel **Control de código fuente** (icono de ramas, `Ctrl+Mayús+G`).
3. Escribe un mensaje corto (p. ej. "Actualizo experiencia") y pulsa **Confirmar** → **Sincronizar cambios**.
4. En 1-2 minutos la web pública se actualiza sola.

> El repositorio es público: todo lo que pongas en esta carpeta (incluidos los PDF) será visible en internet.

## Otras formas de publicarla

**Opción rápida: Netlify Drop**
Entra en `app.netlify.com/drop`, arrastra la carpeta `portafolio` y en segundos tienes una dirección pública. Puedes cambiarle el nombre (p. ej. `luiscarlos.netlify.app`).

**Opción con GitHub Pages**
1. Crea una cuenta en GitHub y un repositorio nuevo (p. ej. `portafolio`).
2. Sube el contenido de la carpeta (botón *Add file → Upload files*).
3. En *Settings → Pages*, elige la rama `main` y la carpeta `/root`. La web queda en `tuusuario.github.io/portafolio`.

Si más adelante quieres un dominio propio (tipo `luiscarlos.es`), se conecta a cualquiera de las dos opciones.
