import { UserTypes } from '@/api/typesUser'
import api from '../rxjs'
export class AddressRest {
  getContactBook(database: string) {
    return api.get(database)
  }

  putContactBook(databaseId: string, item: UserTypes) {
    api.put(databaseId, item)
  }

  postContactBook(databaseId: string, item: UserTypes) {
    api.post(databaseId, item)
  }

  deleteContact(databaseId: string) {
    api.delete(databaseId)
  }
}
