create schema if not exists devWeb_Project_Bdd collate utf8_general_ci;

create table Caracteristiques
(
    idCaracteristique   int(3) auto_increment
        primary key,
    nameCaracteristique varchar(45) not null
);

create table Points
(
    idPoint          int(5) auto_increment,
    namePoint        varchar(45)   not null,
    descriptionPoint varchar(200)  null,
    latitudePoint    decimal(8, 6) not null,
    longitudePoint   decimal(8, 6) not null,
    primary key (idPoint)
);

create table CaracteristiquesPoints
(
    idPointCP           int(5) not null,
    idCaracteristiqueCP int(5) not null,
    primary key (idPointCP, idCaracteristiqueCP),
    constraint CPC
        foreign key (idCaracteristiqueCP) references Caracteristiques (idCaracteristique)
            on update cascade on delete cascade,
    constraint CPP
        foreign key (idPointCP) references Points (idPoint)
            on update cascade on delete cascade
);

create table Photos
(
    idPhoto      int(5)      not null,
    fichierPhoto varchar(45) not null,
    idPointPhoto int(5)      null,
    constraint PRIMARY KEY (idPhoto),
    constraint photosPoints FOREIGN KEY (idPointPhoto) REFERENCES Points (idPoint)
);

INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint) VALUES (1, 'Colibris', 'Vous pourrez trouver ici de beaux colibris colorés', 10.000000, 30.000000);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint) VALUES (2, 'LierreBiéreau', 'Ce magnifique bosquet est composé d''espèces de lierres rares.', 14.000000, 25.000000);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint) VALUES (3, 'fontaineRivère', 'Cette époustouflante fontaine naturelle est le résultat de l''érodation de la pierre.', 16.000000, 20.000000);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint) VALUES (4, 'BouleauLAuzelle', 'Un regroupement de bouleaux centenaires provenant d''une espèce Russe qui pousse uniquement dans les forêt froides de la Sibérie.', 15.000000, 22.000000);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint) VALUES (5, 'SerresUCL', 'C''est ici que nos étudiants en plantes apprennent à cultiver tous types de plantes.', 17.000000, 28.000000);

INSERT INTO devWeb_Project_Bdd.Caracteristiques (idCaracteristique, nameCaracteristique) VALUES (1, 'faune');
INSERT INTO devWeb_Project_Bdd.Caracteristiques (idCaracteristique, nameCaracteristique) VALUES (2, 'flore');
INSERT INTO devWeb_Project_Bdd.Caracteristiques (idCaracteristique, nameCaracteristique) VALUES (3, 'autres');
INSERT INTO devWeb_Project_Bdd.Caracteristiques (idCaracteristique, nameCaracteristique) VALUES (4, 'Oiseaux');
INSERT INTO devWeb_Project_Bdd.Caracteristiques (idCaracteristique, nameCaracteristique) VALUES (5, 'UCL');

INSERT INTO devWeb_Project_Bdd.Photos (idPhoto, fichierPhoto, idPointPhoto) VALUES (1, 'foret.jpg', 2);

INSERT INTO devWeb_Project_Bdd.CaracteristiquesPoints (idPointCP, idCaracteristiqueCP) VALUES (1, 1);
INSERT INTO devWeb_Project_Bdd.CaracteristiquesPoints (idPointCP, idCaracteristiqueCP) VALUES (2, 2);
INSERT INTO devWeb_Project_Bdd.CaracteristiquesPoints (idPointCP, idCaracteristiqueCP) VALUES (4, 2);
INSERT INTO devWeb_Project_Bdd.CaracteristiquesPoints (idPointCP, idCaracteristiqueCP) VALUES (5, 2);
INSERT INTO devWeb_Project_Bdd.CaracteristiquesPoints (idPointCP, idCaracteristiqueCP) VALUES (3, 3);
INSERT INTO devWeb_Project_Bdd.CaracteristiquesPoints (idPointCP, idCaracteristiqueCP) VALUES (1, 4);
INSERT INTO devWeb_Project_Bdd.CaracteristiquesPoints (idPointCP, idCaracteristiqueCP) VALUES (5, 5);

