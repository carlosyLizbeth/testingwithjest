import { Contacto,contactos } from "../src/contactos";

describe("editName", () => {
  test("deberia editar el nombre o el apellido de mis contactos", () => {
    contactos.forEach((contacto) =>{
    const actualizados: Contacto[] = editName(contactos);
    const contactoActualizado = actualizados[0];
    expect(contactoActualizado.ip_address).toBe("");
})});
});