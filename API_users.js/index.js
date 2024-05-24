const express = require('express');
const mysql = require('mysql');
const nodemailer = require('nodemailer');
const cors = require('cors');
const fs = require('fs');

const app = express();
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

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'beatfest2025@gmail.com',
    pass: 'divo eqso tltt hedl'
  }
});

app.post('/users', (req, res) => {
  const { nom, prenom, email, billet, nombreJours } = req.body;
  console.log('Requête POST /users reçue avec les données:', req.body);

  // Vérifiez l'existence des fichiers
  const files = ['./billets/billet_recto.pdf', './billets/billet_verso.pdf'];
  for (const file of files) {
    if (!fs.existsSync(file)) {
      console.error('Fichier manquant:', file);
      return res.status(500).send(`Fichier manquant: ${file}`);
    }
  }

  // Envoi d'e-mail avec pièces jointes
  const mailOptions = {
    from: 'BeatFest Festival <beatfest2025@gmail.com>',
    to: email,
    subject: 'Confirmation de votre inscription',
    text: `Cher ${prenom} ${nom},\n\nMerci pour votre inscription à notre festival.\n\nVous avez acheté un billet de type: ${billet}, pour ${nombreJours || 1} jour(s).\nVoici votre identifient : 82169\n\nCordialement,\nVotre équipe BeatFest`,
    attachments: [
      {
        filename: 'billet_recto.pdf',
        path: './billets/billet_recto.pdf'
      },
      {
        filename: 'billet_verso.pdf',
        path: './billets/billet_verso.pdf'
      }
    ]
  };

  console.log('Options de mail:', mailOptions);

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
      return res.status(500).send('Erreur lors de l\'envoi de l\'e-mail.');
    } else {
      console.log('E-mail envoyé avec succès:', info.response);
    }

    // Insertion des données de l'utilisateur dans la base de données
    db.query('INSERT INTO users (nom, prenom, email, billet, nombreJours) VALUES (?, ?, ?, ?, ?)',
      [nom, prenom, email, billet, nombreJours], (err, result) => {
      if (err) {
        console.error("Erreur lors de l'envoi des données de l'utilisateur: " + err.message);
        return res.status(500).send("Erreur lors de l'envoi des données de l'utilisateur.");
      } else {
        console.log('Utilisateur créé avec succès.');
        res.status(201).send('Utilisateur créé avec succès.');
      }
    });
  });
});

// Route pour l'envoi d'e-mail lors de la création d'un billet
app.post('/billets', (req, res) => {
  const { nom, prenom, email, billet } = req.body;
  console.log('Requête POST /billets reçue avec les données:', req.body);

  // Envoi d'e-mail
  const mailOptions = {
    from: 'BeatFest Festival <beatfest2025@gmail.com>',
    to: email,
    subject: 'Confirmation de votre achat de billet',
    text: `Cher ${prenom} ${nom},\n\nMerci pour votre achat de billet pour notre festival.\n\nCordialement,\nVotre équipe de festival`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
    } else {
      console.log('E-mail envoyé avec succès:', info.response);
    }
  });

  // Insertion des données du billet dans la base de données
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

// Routes pour les utilisateurs

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

// Routes pour les administrateurs

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

// Routes pour les billets

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

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`L'API est en fonctionnement sur http://localhost:${PORT}.`);
});
