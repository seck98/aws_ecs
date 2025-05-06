import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Route GET pour tester si l'API est accessible
app.get('/api/v1/auth', (_, res) => {
  res.json({ message: 'API backend fonctionnelle avec Docker + TypeScript' });
});

// Route POST pour la soumission du formulaire
app.post('/api/v1/auth', (req, res) => {
  const { email, password } = req.body;

  console.log("Email reçu:", email);
  console.log("Mot de passe reçu:", password);

  // Réponse vers le frontend
  res.status(200).json({ message: 'Données reçues avec succès !' });
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
