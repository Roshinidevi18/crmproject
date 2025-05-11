import React, { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Button,
  TextField,
  Box,
} from "@mui/material";

const Contacts = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Alice Johnson", email: "alice@gmail.com" },
    { id: 2, name: "Bob Smith", email: "bob@gmail.com" },
  ]);

  const [newContact, setNewContact] = useState({ name: "", email: "" });
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (newContact.name && newContact.email) {
      setContacts([
        ...contacts,
        { ...newContact, id: Date.now() },
      ]);
      setNewContact({ name: "", email: "" });
    }
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleEdit = (id) => {
    const contact = contacts.find(c => c.id === id);
    setNewContact({ name: contact.name, email: contact.email });
    setEditingId(id);
  };

  const handleUpdate = () => {
    setContacts(contacts.map(c =>
      c.id === editingId ? { ...c, ...newContact } : c
    ));
    setEditingId(null);
    setNewContact({ name: "", email: "" });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Contacts</Typography>

      <Paper elevation={3} sx={{ padding: 2, marginBottom: 3 }}>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <TextField
            label="Name"
            name="name"
            value={newContact.name}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            value={newContact.email}
            onChange={handleChange}
          />
          {editingId ? (
            <Button variant="contained" color="warning" onClick={handleUpdate}>
              Update
            </Button>
          ) : (
            <Button variant="contained" onClick={handleAdd}>
              Add
            </Button>
          )}
        </Box>
      </Paper>

      <Paper elevation={3} sx={{ padding: 2 }}>
        <List>
          {contacts.map((contact) => (
            <ListItem key={contact.id} divider>
              <ListItemText primary={contact.name} secondary={contact.email} />
              <Button
                variant="outlined"
                color="primary"
                sx={{ mr: 1 }}
                onClick={() => handleEdit(contact.id)}
              >
                Edit
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => handleDelete(contact.id)}
              >
                Delete
              </Button>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default Contacts;
  