import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginForm from "../components/LoginForm";
import { auth, db } from "../firebase";
import "../styles/index.css";

function App({ Component, pageProps }: AppProps) {
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    import("preline");
    if (user && (!loading || !error)) {
      const usersRef = doc(db, "users", user.uid);
      setDoc(
        usersRef,
        {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          lastActive: serverTimestamp(),
        },
        { merge: true }
      );
    }
  }, [user, loading, error]);
  if (loading || error) {
    return <h1>loading</h1>;
  } else if (user) {
    return <Component {...pageProps} />;
  } else {
    return <LoginForm />;
  }
}

export default App;
