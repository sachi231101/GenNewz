import { doc, setDoc } from 'firebase/firestore';
import { db } from './config';

export const saveUserPreferences = async (uid: string, payload: Record<string, unknown>) => {
  await setDoc(doc(db, 'users', uid), payload, { merge: true });
};
