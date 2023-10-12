import { Contacto, contactos } from "./contactos" 
const findByEmail =(letra: string) => {
    return contactos.filter((contacto)=> {
        return contacto.first_name == letra || contacto.last_name == letra;
    })

}
export {findByEmail};