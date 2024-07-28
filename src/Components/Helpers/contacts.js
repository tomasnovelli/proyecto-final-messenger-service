import { DATA_CONTACTOS } from "../dataMook"

export const contactMessage = (id) => DATA_CONTACTOS.find(contactos => Number(contactos.id) === Number(id))


