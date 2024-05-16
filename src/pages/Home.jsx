import { Link } from "react-router-dom";

export default function Home(){

  return(
    <div>
      <h1>Bienvenue</h1>
      <p>Veuillez remplir <Link to='/profile'>votre profil</Link> pour continuer</p>
    </div>
  )
}