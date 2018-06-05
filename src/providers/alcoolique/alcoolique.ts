import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import {QueryFn} from 'angularfire2/firestore/interfaces';
import * as firebase from 'firebase';
import DocumentReference = firebase.firestore.DocumentReference;
import { Observable } from 'rxjs/observable';

import { Alcoolique } from '../../models/appcoolique';

@Injectable()
export class AlcooliqueProvider {

  readonly path = 'alcoolique';

  constructor(private afs: AngularFirestore) {
    console.log('Hello AlcooliqueProvider Provider');
  }

  get(ref?: QueryFn): Observable<Alcoolique[]> {
    return this.afs.collection<Alcoolique>(this.path, ref)
      .snapshotChanges().map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Alcoolique;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      });
  }

  add(data: Alcoolique): Promise<DocumentReference> {
    const obectifiedData = JSON.parse(JSON.stringify(data));
    return this.afs.collection<Alcoolique>(this.path).add(obectifiedData);
  }

  remove(id: string): Promise<void> {
    return this.afs.doc<Alcoolique>(`${this.path}/${id}`).delete();
  }

  update(id: string, data: Partial<Alcoolique>): Promise<void> {
    return this.afs.doc<Alcoolique>(`${this.path}/${id}`).update(data);
  }

}
