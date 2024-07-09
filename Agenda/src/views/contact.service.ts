import type { UserTypes } from '@/api/typesUser'
import { AddressRest } from '@/service/rest/address.rest'
import { BehaviorSubject, Observable, take } from 'rxjs'
export class ContactService {
  constructor(private _address = new AddressRest()) {}

  private address$: BehaviorSubject<any> = new BehaviorSubject<any>([])
  address: Observable<any> = this.address$.asObservable()

  getContactBook(database: string): void {
    this._address
      .getContactBook(database)
      .pipe(take(1))
      .subscribe({
        next: (response: any) => {
          this.address$.next(response)
        }
      })
  }

  putContactItem(databaseId: string, item: UserTypes) {
    this._address.putContactBook(databaseId, item)
  }

  postContactItem(databaseId: string, item: UserTypes) {
    this._address.postContactBook(databaseId, item)
  }

  deleteContactItem(databaseId: string) {
    this._address.deleteContactBook(databaseId)
  }
}
