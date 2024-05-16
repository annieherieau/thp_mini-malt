import { Link } from "react-router-dom";
import store from "../app/store";

export default function Home() {
  const state = store.getState();
  

  return (
    <div>
      <h1>Bienvenue</h1>
      <p>
        Veuillez remplir <Link to="/profile">votre profil</Link> pour continuer
      </p>
    </div>
  );
}
