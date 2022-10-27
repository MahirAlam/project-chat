import {
  collection,
  DocumentData,
  getDocs,
  query,
  QuerySnapshot,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

export async function getUserByQuery(
  QueryBy: string,
  QueryWith: string
): Promise<QuerySnapshot<DocumentData>> {
  const Q = query(collection(db, "users"), where(QueryBy, "==", QueryWith));
  return await getDocs(Q);
}
