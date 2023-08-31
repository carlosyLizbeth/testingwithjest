import { Contacto, contactos } from "./contactos"
const findOneByEmail = (email:string): Contacto => {
    function probarSiTieneElMismoEmail(contacto:Contacto){
        return contacto.email == email;
    }
    const encontrados = contactos.filter(probarSiTieneElMismoEmail);
    return encontrados[0];
};
export {findOneByEmail}