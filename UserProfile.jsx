import { useState } from "react";

const UserProfile = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");

  return (
    <div>
      <h3>User Profile</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <button onClick={() => alert("Edit Profile Clicked")}>Edit Profile</button>
    </div>
  );
};

export default UserProfile;
