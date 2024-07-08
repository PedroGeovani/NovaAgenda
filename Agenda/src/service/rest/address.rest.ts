import api from "../rxjs"
export class AddressRest{
    getContactBook(database: string){       
        return api.get(database)  
}