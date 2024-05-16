import { Link } from "react-router-dom";

export default function UnknownUser() {
  return (
    <p>
      Veuillez remplir <Link to="/profile">votre profil</Link> pour continuer
    </p>
  );
}
