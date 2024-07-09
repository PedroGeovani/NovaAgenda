import { UserTypes } from '@/api/typesUser'
import api from '../rxjs'
export class AddressRest {
  getContactBook(database: string) {
    return api.get(database)
  }

  putContactBook(databaseId: string, item: UserTypes) {
    api.put(databaseId, item).subscribe((response: any) => {
      response
    })
  }

  postContactBook(databaseId: string, item: UserTypes) {
    api.post(databaseId, item).subscribe((response: any) => {
      response
    })
  }

  deleteContactBook(databaseId: string) {
    api.delete(databaseId).subscribe((response: any) => {
      response
    })
  }
}
