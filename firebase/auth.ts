import { GoogleAuthProvider, signInWithCredential, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from './config';

export const startPhoneAuth = (phoneNumber: string, verifier: any) => signInWithPhoneNumber(auth, phoneNumber, verifier);

export const signInWithGoogleToken = async (idToken: string) => {
  const credential = GoogleAuthProvider.credential(idToken);
  return signInWithCredential(auth, credential);
};
