Développe une API REST documentée pour gérer un système académique minimal incluant les entités : Program, Level, Student, et leurs relations.

2. Mise en place de l'authentification
❓ Implémente une authentification via JWT :
	•	Crée un modèle User (avec rôle admin par défaut)
	•	Crée les endpoints register et login
	•	Protège tous les autres endpoints à l’aide d’un JWTGuard
Attendu :
	•	Seul un utilisateur authentifié peut accéder aux endpoints /programs, /levels, /students, etc.
	•	Token JWT envoyé via Authorization: Bearer xxx

3. Création des entités et relations
❓ Implémente les entités suivantes avec Prisma :
	•	Program (id, name, sigle, description)
	•	Level (id, name, sigle, index)
	•	Student (nom, prénom, email, sexe, date de naissance, phone, programId, levelId)
Relations :
	•	Un Program peut avoir plusieurs Levels
	•	Un Student appartient à un Program et à un Level
Attendu :
	•	Fichier schema.prisma bien structuré
	•	Migré avec la base de données