import { useState } from "react";
import "./Notifications.css";

const Notifications = () => {
  const [open, setOpen] = useState(false);
  const notifications = [
    "New deal closed!",
    "Client responded to your email",
    "Monthly report is ready"
  ];

  return (
    <div className="notifications">
      <button onClick={() => setOpen(!open)}>🔔</button>
      {open && (
        <ul className="dropdown">
          {notifications.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
