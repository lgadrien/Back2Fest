const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');
const PORT = 3000;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'b2f_clients',
  port: 3306
});

db.connect(err => {
  if (err) {
    console.error('Erreur de connexion à la base de données: ' + err.message);
  } else {
    console.log('Connecté à la base de données MySQL.');
  }
});

app.listen(PORT, () => {
  console.log(`L'API est en fonctionnement sur http://localhost:${PORT}.`);
});

// Routes pour les utilisateurs --------------------------------------------------------------------------------------------------------------------------------

// GET
app.get('/users', (req, res) => {
  console.log('Requête GET /users reçue');
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des utilisateurs: ' + err.message);
      res.status(500).send('Erreur lors de la récupération des utilisateurs.');
    } else {
      console.log('Utilisateurs récupérés avec succès.');
      res.status(200).json(results);
    }
  });
});

// POST
app.post('/users', (req, res) => {
  const { nom, prenom, email, billet } = req.body;
  console.log('Requête POST /users reçue avec les données:', req.body);

  // Check if billet is provided, otherwise send an error response
  if (!billet) {
    return res.status(400).send("Le champ 'billet' est requis.");
  }

  db.query('INSERT INTO users (nom, prenom, email, billet) VALUES (?, ?, ?, ?)',
    [nom, prenom, email, billet], (err, result) => {
    if (err) {
      console.error("Erreur lors de l'envoi des données de l'utilisateur: " + err.message);
      res.status(500).send("Erreur lors de l'envoi des données de l'utilisateur.");
    } else {
      console.log('Utilisateur créé avec succès.');
      res.status(201).send('Utilisateur créé avec succès.');
    }
  });
});


// DELETE
app.delete('/users/:id', (req, res) => {
  console.log('Requête DELETE /users/:id reçue avec ID:', req.params.id);
  db.query('DELETE FROM users WHERE id = ?', [req.params.id], (err, result) => {
    if (err) {
      console.error('Erreur lors de la suppression de l\'utilisateur: ' + err.message);
      res.status(500).send('Erreur lors de la suppression de l\'utilisateur.');
    } else {
      console.log('Utilisateur supprimé avec succès.');
      res.status(200).send('Utilisateur supprimé avec succès.');
    }
  });
});

// ROUTES ADMIN ------------------------------------------------------------------------------------------------------------------------------------------------

// GET
app.get('/admin', (req, res) => {
  console.log('Requête GET /admin reçue');
  db.query('SELECT * FROM admins', (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des administrateurs: ' + err.message);
      res.status(500).send('Erreur lors de la récupération des administrateurs.');
    } else {
      console.log('Administrateurs récupérés avec succès.');
      res.status(200).json(results);
    }
  });
});

// POST 
app.post('/admin', (req, res) => {
  const { email, password } = req.body;
  console.log('Requête POST /admin reçue avec les données:', req.body);

  db.query('INSERT INTO admins (email, password) VALUES (?, ?)',
    [email, password], (err, result) => {
    if (err) {
      console.error("Erreur lors de l'envoi des données de l'administrateur: " + err.message);
      res.status(500).send("Erreur lors de l'envoi des données de l'administrateur.");
    } else {
      console.log('Administrateur créé avec succès.');
      res.status(201).send('Administrateur créé avec succès.');
    }
  });
});

// PUT

app.put('/admin/:id', (req, res) => {
  const { email, password } = req.body;
  console.log('Requête PUT /admin/:id reçue avec ID:', req.params.id, 'et les données:', req.body);

  db.query('UPDATE admins SET email = ?, password = ? WHERE id = ?',
    [email, password, req.params.id], (err, result) => {
    if (err) {
      console.error("Erreur lors de la modification des données de l'administrateur: " + err.message);
      res.status(500).send("Erreur lors de la modification des données de l'administrateur.");
    } else {
      console.log('Administrateur modifié avec succès.');
      res.status(200).send('Administrateur modifié avec succès.');
    }
  });
});

// DELETE

app.delete('/admin/:id', (req, res) => {
  console.log('Requête DELETE /admin/:id reçue avec ID:', req.params.id);
  db.query('DELETE FROM admins WHERE id = ?', [req.params.id], (err, result) => {
    if (err) {
      console.error('Erreur lors de la suppression de l\'administrateur: ' + err.message);
      res.status(500).send('Erreur lors de la suppression de l\'administrateur.');
    } else {
      console.log('Administrateur supprimé avec succès.');
      res.status(200).send('Administrateur supprimé avec succès.');
    }
  });
});

// BILLETS ------------------------------------------------------------------------------------------------------------------------------------------------

// GET
app.get('/billets', (req, res) => {
  console.log('Requête GET /billets reçue');
  db.query('SELECT * FROM billets', (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des billets: ' + err.message);
      res.status(500).send('Erreur lors de la récupération des billets.');
    } else {
      console.log('Billets récupérés avec succès.');
      res.status(200).json(results);
    }
  });
});

// POST

app.post('/billets', (req, res) => {
  const { nom, prenom, email, billet } = req.body;
  console.log('Requête POST /billets reçue avec les données:', req.body);

  db.query('INSERT INTO billets (nom, prenom, email, ticketType) VALUES (?, ?, ?, ?)',
    [nom, prenom, email, billet], (err, result) => {
    if (err) {
      console.error("Erreur lors de l'envoi des données du billet: " + err.message);
      res.status(500).send("Erreur lors de l'envoi des données du billet.");
    } else {
      console.log('Billet créé avec succès.');
      res.status(201).send('Billet créé avec succès.');
    }
  });
});
