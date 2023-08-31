import { Contacto, contactos } from "./contactos" 
const findByEmail =(letra: string) => {
    return contactos.filter((contactos)=> {
        return contactos.first_name[0]== letra || contactos.last_name[0]== letra;
    })

}
export {findByEmail};