CREATE SCHEMA IF NOT EXISTS devWeb_Project_Bdd COLLATE utf8_general_ci;

create table Categories
(
    idCategorie   int(3) auto_increment
        primary key,
    nameCategorie varchar(45) not null
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

create table CategoriesPoints
(
    idPointCP           int(5) not null,
    idCategorieCP int(5) not null,
    primary key (idPointCP, idCategorieCP),
    constraint CPC
        foreign key (idCategorieCP) references Categories (idCategorie)
            on update cascade on delete cascade,
    constraint CPP
        foreign key (idPointCP) references Points (idPoint)
            on update cascade on delete cascade
);

CREATE TABLE Photos (
	idPhoto int(5) NOT NULL,
	fichierPhoto varchar(45) NOT NULL,
	idPointPhoto int(5) NULL,
	CONSTRAINT PRIMARY KEY (idPhoto),
	CONSTRAINT photosPoints FOREIGN KEY (idPointPhoto) REFERENCES Points (idPoint)
);

INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint) VALUES (1, 'Colibris', 'Vous pourrez trouver ici de beaux colibris colorés', 10.000000, 30.000000);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint) VALUES (2, 'LierreBiéreau', 'Ce magnifique bosquet est composé d''espèces de lierres rares.', 14.000000, 25.000000);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint) VALUES (3, 'fontaineRivère', 'Cette époustouflante fontaine naturelle est le résultat de l''érodation de la pierre.', 16.000000, 20.000000);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint) VALUES (4, 'BouleauLAuzelle', 'Un regroupement de bouleaux centenaires provenant d''une espèce Russe qui pousse uniquement dans les forêt froides de la Sibérie.', 15.000000, 22.000000);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint) VALUES (5, 'SerresUCL', 'C''est ici que nos étudiants en plantes apprennent à cultiver tous types de plantes.', 17.000000, 28.000000);

INSERT INTO devWeb_Project_Bdd.Categories (idCategorie, nameCategorie) VALUES (1, 'faune');
INSERT INTO devWeb_Project_Bdd.Categories (idCategorie, nameCategorie) VALUES (2, 'flore');
INSERT INTO devWeb_Project_Bdd.Categories (idCategorie, nameCategorie) VALUES (3, 'autres');
INSERT INTO devWeb_Project_Bdd.Categories (idCategorie, nameCategorie) VALUES (4, 'Oiseaux');
INSERT INTO devWeb_Project_Bdd.Categories (idCategorie, nameCategorie) VALUES (5, 'UCL');

INSERT INTO devWeb_Project_Bdd.Photos (idPhoto, fichierPhoto, idPointPhoto) VALUES (1, 'foret.jpg', 2);

INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPointCP, idCategorieCP) VALUES (1, 1);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPointCP, idCategorieCP) VALUES (2, 2);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPointCP, idCategorieCP) VALUES (4, 2);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPointCP, idCategorieCP) VALUES (5, 2);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPointCP, idCategorieCP) VALUES (3, 3);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPointCP, idCategorieCP) VALUES (1, 4);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPointCP, idCategorieCP) VALUES (5, 5);

