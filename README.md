# Web 3D Profesional

Stack listo para crear páginas web 3D profesionales con Claude Code.

## Tecnologías incluidas

- Vite + React 19 + TypeScript
- Three.js + React Three Fiber (R3F)
- @react-three/drei (helpers)
- @react-three/postprocessing
- GSAP (animaciones)
- Tailwind CSS
- Zustand (estado)

## Cómo usarlo con Claude Code

1. Descomprime esta carpeta.
2. Abre una terminal dentro de la carpeta.
3. Ejecuta: `claude`
4. Di a Claude:

```
Instala todas las dependencias con npm install, verifica que no haya errores y arranca el servidor de desarrollo con npm run dev. Después ayúdame a construir páginas web 3D profesionales usando React Three Fiber.
```

## Comandos manuales (si lo prefieres)

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Estructura

```
web-3d-profesional/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.tsx
│   ├── App.tsx          ← escena 3D de ejemplo
│   └── index.css
└── README.md
```
