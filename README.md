# Guía Completa para Integrar Bootstrap 5 en Next.js 14

##### Resultado final

![](https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/master/instalar-bootstrap5-en-nextjs.png)

##### Crear una aplicación Next.js

    Utiliza el siguiente comando para crear una nueva aplicación Next.js:
    npx create-next-app@latest my-app

##### Integrar el CSS de Bootstrap

    En el archivo layout.js o layout.tsx, comenta la importación de globals.css y luego importa el CSS de Bootstrap de la siguiente manera:

    // import 'globals.css';
    import "bootstrap/dist/css/bootstrap.min.css";

##### Integrar el JavaScript de Bootstrap

    Crea un componente con la directiva use client, que indica que el archivo o componente debe ejecutarse en el cliente. Esto es necesario para incluir y ejecutar el JavaScript de Bootstrap.

    'use client';
    import { useEffect } from "react";

    // Este componente se encarga de importar y ejecutar el JavaScript de Bootstrap en el lado del cliente.
    export default function InstallBootstrap() {
        useEffect(() => {
            // Importamos el archivo JavaScript de Bootstrap cuando el componente se monta.
            require("bootstrap/dist/js/bootstrap.min.js");
        }, []);

        // El componente no necesita renderizar nada, por eso retornamos un fragmento vacío.
        return <></>;
    }

##### Utilizar el componente para cargar JavaScript de Bootstrap

    Incluye este componente en tu aplicación, preferiblemente en un archivo de layout.js o layout.tsx para que se cargue en la página principal, para asegurar que el JavaScript de Bootstrap se cargue cuando la aplicación se inicie.

    import InstallBootstrap from "./components/InstallBootstrap";

    export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        <InstallBootstrap />
        </html>
    );
    }
    Con estos pasos, deberías tener Bootstrap 5 completamente integrado en tu proyecto de Next.js 14, tanto el CSS como el JavaScript.

##### NOTA:

    Si por alguna razón no funciona, verifica los pasos anteriores y reincia la aplicación.

### Expresiones de Gratitud 🎁

    Comenta a otros sobre este proyecto 📢
    Invita una cerveza 🍺 o un café ☕
    Paypal iamdeveloper86@gmail.com
    Da las gracias públicamente 🤓.

## No olvides SUSCRIBIRTE 👍
