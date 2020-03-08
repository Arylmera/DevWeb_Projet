CREATE SCHEMA IF NOT EXISTS devWeb_Project_Bdd COLLATE utf8_general_ci;

CREATE TABLE Caracteristiques (
	idCaracteristique int(3) AUTO_INCREMENT PRIMARY KEY,
	nameCaracteristique varchar(45) NOT NULL
);

CREATE TABLE Points (
	idPoint int(5) AUTO_INCREMENT,
	namePoint varchar(45) NOT NULL,
	descriptionPoint varchar(200) NULL,
	latitudePoint decimal (8,
		6) NOT NULL,
	longitudePoint decimal (8,
		6) NOT NULL,
	PRIMARY KEY (idPoint)
);

CREATE TABLE CaracteristiquesPoints (
	idPointCP int(5) NOT NULL,
	idCaracteristiqueCP int(5) NOT NULL,
	PRIMARY KEY (idPointCP, idCaracteristiqueCP),
	CONSTRAINT CPC FOREIGN KEY (idCaracteristiqueCP) REFERENCES Caracteristiques (idCaracteristique) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT CPP FOREIGN KEY (idPointCP) REFERENCES Points (idPoint) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Photos (
	idPhoto int(5) NOT NULL,
	fichierPhoto varchar(45) NOT NULL,
	idPointPhoto int(5) NULL,
	CONSTRAINT PRIMARY KEY (idPhoto),
	CONSTRAINT photosPoints FOREIGN KEY (idPointPhoto) REFERENCES Points (idPoint)
);

INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint)
		VALUES(1, 'Colibris', 'Vous pourrez trouver ici de beaux colibris colorés', 10.000000, 30.000000);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint)
		VALUES(2, 'LierreBiéreau', 'Ce magnifique bosquet est composé d''espèces de lierres rares.', 14.000000, 25.000000);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint)
		VALUES(3, 'fontaineRivère', 'Cette époustouflante fontaine naturelle est le résultat de l''érodation de la pierre.', 16.000000, 20.000000);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint)
		VALUES(4, 'BouleauLAuzelle', 'Un regroupement de bouleaux centenaires provenant d''une espèce Russe qui pousse uniquement dans les forêt froides de la Sibérie.', 15.000000, 22.000000);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint)
		VALUES(5, 'SerresUCL', 'C''est ici que nos étudiants en plantes apprennent à cultiver tous types de plantes.', 17.000000, 28.000000);
INSERT INTO devWeb_Project_Bdd.Caracteristiques (idCaracteristique, nameCaracteristique)
		VALUES(1, 'faune');
INSERT INTO devWeb_Project_Bdd.Caracteristiques (idCaracteristique, nameCaracteristique)
		VALUES(2, 'flore');
INSERT INTO devWeb_Project_Bdd.Caracteristiques (idCaracteristique, nameCaracteristique)
		VALUES(3, 'autres');
INSERT INTO devWeb_Project_Bdd.Caracteristiques (idCaracteristique, nameCaracteristique)
		VALUES(4, 'Oiseaux');
INSERT INTO devWeb_Project_Bdd.Caracteristiques (idCaracteristique, nameCaracteristique)
		VALUES(5, 'UCL');
INSERT INTO devWeb_Project_Bdd.Photos (idPhoto, fichierPhoto, idPointPhoto)
		VALUES(1, 'foret.jpg', 2);
INSERT INTO devWeb_Project_Bdd.CaracteristiquesPoints (idPointCP, idCaracteristiqueCP)
		VALUES(1, 1);
INSERT INTO devWeb_Project_Bdd.CaracteristiquesPoints (idPointCP, idCaracteristiqueCP)
		VALUES(2, 2);
INSERT INTO devWeb_Project_Bdd.CaracteristiquesPoints (idPointCP, idCaracteristiqueCP)
		VALUES(4, 2);
INSERT INTO devWeb_Project_Bdd.CaracteristiquesPoints (idPointCP, idCaracteristiqueCP)
		VALUES(5, 2);
INSERT INTO devWeb_Project_Bdd.CaracteristiquesPoints (idPointCP, idCaracteristiqueCP)
		VALUES(3, 3);
INSERT INTO devWeb_Project_Bdd.CaracteristiquesPoints (idPointCP, idCaracteristiqueCP)
		VALUES(1, 4);
INSERT INTO devWeb_Project_Bdd.CaracteristiquesPoints (idPointCP, idCaracteristiqueCP)
		VALUES(5, 5);