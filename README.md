# Terra Ignis Energía

Sitio institucional de Terra Ignis Energía S.A., desarrollado con React, TypeScript y Vite.

## Desarrollo

```sh
npm install
npm run dev
```

## Compilación

```sh
npm run build
```

La salida estática se genera en `dist/`.

## Formulario de contacto

El endpoint PHP de contacto requiere configurar estas variables de entorno en el servidor:

- `TERRA_SMTP_PASSWORD` (obligatoria)
- `TERRA_SMTP_HOST` (opcional; por defecto `mail.terraignisenergia.com`)
- `TERRA_SMTP_PORT` (opcional; por defecto `465`)
- `TERRA_SMTP_USER` (opcional; por defecto `noreply@terraignisenergia.com`)
