import { useEffect, useState } from "react";
import { getUser } from "../api";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadUser() {
      const data = await getUser();
      setUser(data);
    }

    loadUser();
  }, []);

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