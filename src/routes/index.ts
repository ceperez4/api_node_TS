import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

/*
    Elimina la extension de los archivos dentro del directorio de rutas
    ejm: item.ts => item

*/
const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift();
  return file;
};

/*
    Lee todos los archivos de rutas y establece el sufijo de la api
*/
readdirSync(PATH_ROUTER).filter((filename) => {
  const cleanName = cleanFileName(filename);
  if (cleanName !== "index") {
    import(`./${cleanName}`).then((moduleRoute) => {
      router.use(`/${cleanName}`, moduleRoute.router);
    });
  }
});

export { router };
