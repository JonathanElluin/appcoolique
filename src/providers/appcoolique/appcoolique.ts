import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import {QueryFn} from 'angularfire2/firestore/interfaces';
import * as firebase from 'firebase/app';
import DocumentReference = firebase.firestore.DocumentReference;
import { Observable } from 'rxjs/observable';

import { Appcoolique } from '../../models/appcoolique';

/*
  Generated class for the AppcooliqueProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppcooliqueProvider {

  readonly path = 'appcoolique';

  constructor(private afs: AngularFirestore) {
    console.log('Hello AppcooliqueProvider Provider');
  }

  get(ref?: QueryFn): Observable<Appcoolique[]> {
    return this.afs.collection<Appcoolique>(this.path, ref)
      .snapshotChanges().map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Appcoolique;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      });
  }

  add(data: Appcoolique): Promise<DocumentReference> {
    return this.afs.collection<Appcoolique>(this.path).add(data);
  }

  remove(id: string): Promise<void> {
    return this.afs.doc<Appcoolique>(`${this.path}/${id}`).delete();
  }

  update(id: string, data: Partial<Appcoolique>): Promise<void> {
    return this.afs.doc<Appcoolique>(`${this.path}/${id}`).update(data);
  }

}
