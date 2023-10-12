import { Contacto,contactos } from "../src/contactos";
import { editName} from "../src/editName"
describe("editName", () => {
  test("deberia editar el nombre o el apellido de mis contactos", () => {
    const nuevoNombre = editName(contactos, 1, "chicharron");
    expect(nuevoNombre).toBe("chicharron");
  });
});
