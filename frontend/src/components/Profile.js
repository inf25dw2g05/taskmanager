import { useEffect, useState } from "react";
import { getUser } from "../api";

function Profile() {
  const [user, setUser] = useState(null); //info actual del usuario / actualiza el estado

  useEffect(() => { //permite ejecutar codigo automaticamente cuando el componente se carga (en este caso llama a la api)
    async function loadUser() {
      const data = await getUser(); //llama api y ejecuta funcion get
      setUser(data); // actualiza estado
    }

    loadUser();
  }, []); //funcion debe ejecutarse una unica vez (cuando el componente se monta)

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>User Profile</h2>

      <p>
        <strong>Username:</strong> {user.username}
      </p>

      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
}

export default Profile;