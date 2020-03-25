create table Categories
(
    idCategorie   int(3) auto_increment
        primary key,
    nameCategorie varchar(45) not null
);

create table Parcours
(
    idParcours   int(5) auto_increment
        primary key,
    nameParcours varchar(45) not null
);

create table Points
(
    idPoint           int(5) auto_increment
        primary key,
    namePoint         varchar(45)  not null,
    descriptionPoint  varchar(200) null,
    latitudePoint     double       not null,
    longitudePoint    double       not null,
    vernaculairePoint varchar(45)  null
);

create table CategoriesPoints
(
    idPoint     int(5) not null,
    idCategorie int(5) not null,
    primary key (idPoint, idCategorie),
    constraint CPC
        foreign key (idCategorie) references Categories (idCategorie)
            on update cascade on delete cascade,
    constraint CPP
        foreign key (idPoint) references Points (idPoint)
            on update cascade on delete cascade
);

create index CPC_idx
    on CategoriesPoints (idCategorie);

create table Medias
(
    idMedia           int(5)      not null
        primary key,
    localisationMedia varchar(45) not null,
    idPoint           int(5)      null,
    constraint photosPoints
        foreign key (idPoint) references Points (idPoint)
);

create table ParcoursPoints
(
    idPoint        int(5) not null,
    idParcours     int(5) not null,
    numeroParcours int(3) not null,
    primary key (idPoint, idParcours),
    constraint ParcoursPoints_Parcours_idParcours_fk
        foreign key (idParcours) references Parcours (idParcours)
            on update cascade on delete cascade,
    constraint ParcoursPoints_Points_idPoint_fk
        foreign key (idPoint) references Points (idPoint)
            on update cascade on delete cascade
);

INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (1, 'Salix alba cv. tristis', null, 167823.3803000003, 150998.59340000153, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (2, 'Acer pensylvanicum', null, 167822.26730000228, 150982.63280000165, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (3, 'Cupressus Sempervirens', null, 167822.79569999874, 150977.54930000007, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (4, 'Carya illinonensis', null, 167872.52419999987, 151044.38980000094, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (5, 'Taxus baccata', null, 167887.27480000257, 151022.29710000008, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (6, 'Picea omorika', null, 167885.5549999997, 151018.32829999924, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (7, 'Ulmus minor', null, 167909.625500001, 150991.53700000048, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (8, 'Acer capillipes', null, 167921.05550000072, 150956.85009999946, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (9, 'Quercus robur cv. fastigiata', null, 167923.992399998, 150943.91189999878, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (10, 'Ulmus minor cv. variegata', null, 167918.44269999862, 150907.05539999902, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (11, 'Parrotia persica', null, 167884.89350000024, 150888.0053000003, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (12, 'Carpinus betulus', null, 167985.6152999997, 150902.27439999953, 'Charme commun');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (13, 'Corylus avellana', null, 168114.46930000186, 150919.04050000012, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (14, 'Juglans nigra', null, 168111.23529999703, 150905.53449999914, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (15, 'Zone de Fagus sylvatica', null, 168072.5945999995, 150874.4294999987, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (16, 'Quercus robur - arbre de la continuité', null, 168088.81360000372, 150848.02409999818, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (17, 'Salix alba', null, 167989.51529999822, 150784.02789999917, 'Saule blanc');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (18, 'Populus nigra subsp. pyramidalis', null, 167936.28100000322, 150774.1853, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (19, 'Robinia pseudoacacia cv. Frisia', null, 167927.49679999799, 150709.18239999935, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (20, 'Robinia pseudoacacia', null, 167937.80650000274, 150684.1673000008, 'Robinier faux-acacia');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (21, 'Sorbus aucuparia', null, 167878.79320000112, 150589.2478, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (22, 'Ginkgo biloba', null, 167866.44420000166, 150585.19319999963, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (23, 'Crataegus crus-galli', null, 167867.1176000014, 150578.87909999862, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (24, 'Sequoiadendron giganteum', null, 167852.80479999632, 150569.9582999982, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (25, 'Alnus incana', null, 167845.0041999966, 150546.6248999983, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (26, 'Tilia tomentosa', null, 167832.6625000015, 150570.0549999997, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (27, 'Tilia mongolica', null, 167819.86879999936, 150602.67280000076, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (28, 'Tilia cordata', null, 167789.81360000372, 150577.26289999858, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (29, 'Zelkova serrata', null, 167792.23870000243, 150566.24109999835, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (30, 'Populus x interamericana cv. UNAL', null, 167767.7696999982, 150529.1523000002, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (31, 'Fagus sylvatica cv. laciniata', null, 167778.00840000063, 150577.69959999993, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (32, 'Betula pendula', null, 167789.12070000172, 150604.938000001, 'Bouleau verruqueux');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (33, 'Juniperus chinensis cv. Hetzii', null, 167779.065200001, 150628.6424999982, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (34, 'Metasequoia glyptostroboides', null, 167799.50630000234, 150672.39759999886, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (35, 'Crataegus x lavallei', null, 167788.1283000037, 150675.86730000004, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (36, 'Liquidambar styraciflua', null, 167751.83659999818, 150682.86470000073, 'Copalme d''Amérique');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (37, 'Acer platanoides', null, 167737.4900000021, 150678.36450000107, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (38, 'Acer campestre', null, 167739.45390000194, 150737.16169999912, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (39, 'Betula nigra cv. Héritage', null, 167727.58100000024, 150728.60700000077, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (40, 'Betula pendula', null, 167689.44669999927, 150722.31419999897, 'Bouleau verruqueux');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (41, 'Pinus nigra ssp. Nigricans', null, 167687.86559999734, 150713.6350999996, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (42, 'Pinus nigra ssp. Nigricans', null, 167687.41330000013, 150715.80710000172, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (43, 'Pinus nigra ssp. Nigricans', null, 167685.90519999713, 150715.01330000162, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (44, 'Liriodendron tulipifera cv. aureomarginatum', null, 167683.11029999703, 150735.19779999927, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (45, 'Quercus macrocarpa', null, 167677.2928000018, 150728.74020000175, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (46, 'Platanus x acerifolia', null, 167664.50609999895, 150890.07279999927, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (47, 'Sorbus aria', null, 167668.4048999995, 150899.12220000103, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (48, 'Carpinus betulus cv. fastigiata', null, 168001.8625999987, 150666.70010000095, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (49, 'Acer negundo', null, 168002.23269999772, 150688.13639999926, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (50, 'Aesculus hippocastanum', null, 168025.25150000304, 150691.97289999947, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (51, 'Acer palmatum cv. dissectum "Filigree"', null, 168070.42329999804, 150673.8986000009, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (52, 'Ailanthus glandulosa', null, 168068.65579999983, 150670.67590000108, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (53, 'Tilia tomentosa', null, 168049.58929999918, 150670.0527999997, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (54, 'Catalpa bignonioides', null, 168053.21850000322, 150657.22480000183, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (55, 'Acer palmatum cv. dissectum', null, 168039.4566999972, 150648.249499999, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (56, 'Acer campestre', null, 168052.29299999774, 150639.21139999852, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (57, 'Elaeagnus angustifolia', null, 168083.4081000015, 150635.13679999858, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (58, 'Cercidiphyllum japonicum', null, 168134.20009999722, 150659.79300000146, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (59, 'Cornus mas', null, 168154.21289999783, 150615.69040000066, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (60, 'Liriodendron tulipifera', null, 168103.21440000087, 150523.61190000176, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (61, 'Liriodendron tulipifera', null, 168101.93789999932, 150515.1576000005, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (62, 'Liriodendron tulipifera', null, 168099.52700000256, 150507.13910000026, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (63, 'Liriodendron tulipifera', null, 168096.94389999658, 150498.54769999906, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (64, 'Liriodendron tulipifera', null, 168093.4777000025, 150488.15769999847, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (65, 'Liriodendron tulipifera', null, 168082.36519999802, 150487.41690000147, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (66, 'Liriodendron tulipifera', null, 168074.85100000352, 150489.11019999906, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (67, 'Liriodendron tulipifera', null, 168067.01929999888, 150491.65019999817, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (68, 'Liriodendron tulipifera', null, 168059.8225999996, 150494.50769999996, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (69, 'Sequoidadendron giganteum', null, 168067.2128000036, 150332.07829999924, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (70, 'Populus x canescens - groupe', null, 168059.05629999936, 150329.79069999978, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (71, 'Salix fragilis', null, 168088.6705000028, 150324.8531000018, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (72, 'Quercus rubra', null, 167904.46450000256, 150481.9675000012, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (73, 'Acer pseudoplatanus', null, 167922.7300999984, 150570.5566000007, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (74, 'Fagus sylvatica cv. tortuosa', null, 167943.65879999846, 150583.54100000113, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (75, 'Acer saccharinum', null, 167964.96019999683, 150639.50609999895, 'Érable argenté');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (76, 'Platanus x acerifolia ', null, 167981.95000000298, 150647.71970000118, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (77, 'Ginkgo biloba', null, 168000.74430000037, 150648.85029999912, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (78, 'Quercus robur', null, 166977.51659999788, 150828.24980000034, 'Chêne pédonculé');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (79, 'Alnus glutinosa', null, 166953.83470000327, 150744.23790000007, 'Aulne glutineux');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (80, 'Salix caprea', null, 166855.6921999976, 150722.33929999918, 'Saule marsault');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (81, 'Betula pendula', null, 166850.48089999706, 150719.1438000016, 'Bouleau verruqueux');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (82, 'Salix alba cv. tristis', null, 166835.72609999776, 150714.50519999862, 'Saule blanc');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (83, 'Juglans nigra', null, 166820.41009999812, 150701.86789999902, 'Noyer d''Amérique');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (84, 'Juglans regia', null, 166811.8374999985, 150693.82459999993, 'Noyer commun');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (85, 'Salix cinerea', null, 166801.18129999936, 150693.9684999995, 'Saule cendré');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (86, 'Pterocarya fraxinifolia', null, 166797.52220000327, 150684.5496999994, 'Noyer du Caucase');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (87, 'Liquidambar styraciflua', null, 166768.9782000035, 150657.51960000023, 'Copalme d''Amérique');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (88, 'Phellodendron amurense', null, 166765.2678000033, 150615.95650000125, 'Arbre au liège de l''Amour');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (89, 'Euonymus europaeus', null, 166770.2101000026, 150623.11080000177, 'Fusain d''Europe');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (90, 'Acer platanoides cv. Crimson King', null, 166782.26250000298, 150641.4624999985, 'Erable platane Crimson King');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (91, 'Acer platanoides cv. Crimson King', null, 166786.64039999992, 150634.1873999983, 'Erable platane Crimson King');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (92, 'Acer platanoides cv. Crimson King', null, 166792.06430000067, 150635.24570000172, 'Erable platane Crimson King');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (93, 'Catalpa bignonioides', null, 166705.14859999716, 150633.12909999862, 'Catalpa commun');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (94, 'Carpinus betulus', null, 166652.86389999837, 150587.87359999865, 'Charme commun');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (95, 'Carpinus betulus', null, 166649.58049999923, 150584.92660000175, 'Charme commun');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (96, 'Carpinus betulus', null, 166637.53350000083, 150576.98189999908, 'Charme commun');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (97, 'Viburnum opulus', null, 166657.69910000265, 150470.7749999985, 'Viorne obier');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (98, 'Pterocarya fraxinifolia', null, 166660.3791999966, 150381.84039999917, 'Noyer du Caucase');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (99, 'Tilia americana', null, 166643.34269999713, 150386.09530000016, 'Tilleul d''Amérique');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (100, 'Acer rufinerve cv. limbatum', null, 166639.72779999673, 150390.3550999984, 'Érable à feuilles de vigne');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (101, 'Alnus x spaethii (japonica x subcordata)', null, 166631.4781000018, 150393.03510000184, 'L’aulne de Spaeth');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (102, 'Prunus avium', null, 166627.0099999979, 150391.13199999928, 'Merisier');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (103, 'Quercus velutina', null, 166638.6916999966, 150398.35330000147, 'Chêne noir');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (104, 'Quercus palustris', null, 166626.85029999912, 150405.95679999888, 'Chêne des marais');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (105, 'Acer davidii', null, 166621.27639999986, 150403.69810000062, 'Erable du Père David');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (106, 'Sorbus torminalis', null, 166617.22039999813, 150419.12060000002, 'Alisier torminal');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (107, 'Quercus x rosacea (Q.petraea x Q.robur)', null, 166603.08449999988, 150415.49210000038, 'Chêne hybride');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (108, 'Ulmus x hollandica cv. Klemmer', null, 166600.73330000043, 150422.00539999828, 'Orme doré');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (109, 'Salix alba', null, 166580.9496999979, 150457.6248999983, 'Saule blanc');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (110, 'Alnus x spaethii (japonica x subcordata)', null, 166544.17279999703, 150530.78009999916, 'Aulne de Spaeth');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (111, 'Cormus alba cv. Sibirica', null, 166533.34669999778, 150560.35449999943, 'Cornouiller blanc');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (112, 'Quercus alba', null, 166557.3708000034, 150652.7030000016, 'Chêne blanc');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (113, 'Quercus palustris', null, 166560.73910000175, 150658.11149999872, 'Chêne des marais');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (114, 'Acer opalus', null, 166585.97249999642, 150686.88809999824, 'Érable à feuilles d''obier');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (115, 'Thuja plicata', null, 166641.7595999986, 150750.85909999907, 'Thuya géant');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (116, 'Larix Kaempferi', null, 166635.80650000274, 150783.40289999917, 'Mélèze du Japon');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (117, 'Quercus robur', null, 166642.19150000066, 150838.69519999996, 'Chêne pédonculé');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (118, 'Castanea sativa', null, 166622.28339999914, 150846.06069999933, 'Châtaignier commun');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (119, 'Robinia pseudoacacia', null, 166620.3756000027, 150851.71550000086, 'Robinier faux-acacia');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (120, 'Salix vinimalis', null, 166701.20549999923, 150738.4978, 'Saule des vanniers');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (121, 'Alnus cordata', null, 166735.15779999644, 150763.45320000127, 'Aulne de Corse');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (122, 'Salix alba', null, 166742.96289999783, 150768.93019999936, 'Saule blanc');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (123, 'Acer saccharinum', null, 166749.78299999982, 150787.23800000176, 'Érable argenté');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (124, 'Ulmus carpinifolia', null, 166766.77549999952, 150798.88109999895, 'Orme champêtre');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (125, 'Acer pseudoplatanus', null, 167625.53429999948, 150571.91699999943, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (126, 'Gleditsia triacanthos cv. Elegantissima', null, 167632.2402999997, 150562.6788999997, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (127, 'Aesculus parviflora', null, 167661.3627000004, 150572.0271999985, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (128, 'Sequoiadendron giganteum cv. pygmaeum', null, 167670.01039999723, 150573.54940000176, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (129, 'Carpinus betulus', null, 167678.1601999998, 150557.74579999968, 'Charme commun');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (130, 'Pseudotsuga menziesii  Var. menziesii Franco', null, 167667.9720999971, 150554.3797999993, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (131, 'Lindera benzoin', null, 167657.91049999744, 150547.92599999905, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (132, 'Salix alba', null, 167648.73420000076, 150545.48840000108, 'Saule blanc');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (133, 'Metasequoia glyptostroboides', null, 167648.79659999907, 150556.87939999998, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (134, 'Pinus nigra ssp. Laricio Poiret', null, 167641.05460000038, 150550.6849000007, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (135, 'Taxus baccata', null, 167636.377700001, 150543.0549999997, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (136, 'Abies grandis', null, 167627.30399999768, 150533.6666000001, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (137, 'Nyssa sylvatica', null, 167623.37110000104, 150525.9389999993, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (138, 'Acer negundo', null, 167617.6603000015, 150548.03990000114, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (139, 'Quercus robur', null, 167614.09830000252, 150562.42500000075, 'Chêne pédonculé');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (140, 'Cedrus libani', null, 167613.9958000034, 150571.09059999883, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (141, 'Acer pseudoplatanus cv. Leopoldii', null, 167561.96350000054, 150584.59690000117, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (142, 'Fraxinus longicuspis', null, 167551.93860000372, 150595.27039999887, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (143, 'Sorbus aria', null, 167503.6115999967, 150561.47419999912, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (144, 'Sorbus aria', null, 167501.6272, 150565.44299999997, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (145, 'Populus x interamericana UNAL', null, 167461.5218999982, 150443.35720000044, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (146, 'Liquidambar styraciflua', null, 167429.5517999977, 150425.56560000032, 'Copalme d''Amérique');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (147, 'Aesculus turbinata', null, 167443.81710000336, 150377.60559999943, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (148, 'Betula pendula', null, 167463.02970000356, 150374.54399999976, 'Bouleau verruqueux');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (149, 'Betula pendula', null, 167470.14079999924, 150378.50019999966, 'Bouleau verruqueux');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (150, 'Betula pendula', null, 167510.62210000306, 150386.04080000147, 'Bouleau verruqueux');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (151, 'Betula pendula', null, 167521.3378000036, 150377.0450000018, 'Bouleau verruqueux');
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (152, 'Salix alba cv. tristis', null, 167557.4958000034, 150376.58960000053, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (153, 'Corylus maxima cv. purpurea', null, 167543.7541999966, 150393.75279999897, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (154, 'Quercus cerris', null, 167632.9878000021, 150516.97899999842, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (155, 'Ginkgo biloba', null, 166971.4773999974, 150029.63789999858, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (156, 'Aesculus x carnea', null, 166978.18460000306, 150020.0203000009, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (157, 'Ulmus minor', null, 166944.33179999888, 150040.22929999977, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (158, 'Sequoiadendron giganteum', null, 166911.6152999997, 150024.2536999993, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (159, 'Quercus dentata cv. yunnanensis', null, 166883.9557000026, 150068.75979999825, null);
INSERT INTO devWeb_Project_Bdd.Points (idPoint, namePoint, descriptionPoint, latitudePoint, longitudePoint, vernaculairePoint) VALUES (160, 'Robinia pseudoacacia', null, 166823.60029999912, 150068.2820999995, 'Robinier faux-acacia');

INSERT INTO devWeb_Project_Bdd.Parcours (idParcours, nameParcours) VALUES (1, 'Parcours des Sciences');
INSERT INTO devWeb_Project_Bdd.Parcours (idParcours, nameParcours) VALUES (2, 'Parcours du cyclotron');
INSERT INTO devWeb_Project_Bdd.Parcours (idParcours, nameParcours) VALUES (3, 'Parcours du jardin botanique');
INSERT INTO devWeb_Project_Bdd.Parcours (idParcours, nameParcours) VALUES (4, 'Parcours du lac');
INSERT INTO devWeb_Project_Bdd.Parcours (idParcours, nameParcours) VALUES (5, 'Parcours du parc de Moulinsart');

INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (1, 1, 1);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (2, 1, 2);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (3, 1, 3);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (4, 1, 4);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (5, 1, 5);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (6, 1, 6);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (7, 1, 7);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (8, 1, 8);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (9, 1, 9);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (10, 1, 10);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (11, 1, 11);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (12, 1, 12);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (13, 1, 13);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (14, 1, 14);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (15, 1, 15);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (16, 1, 16);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (17, 1, 17);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (18, 1, 18);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (19, 1, 19);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (20, 1, 20);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (21, 1, 21);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (22, 1, 22);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (23, 1, 23);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (24, 1, 24);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (25, 1, 25);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (26, 1, 26);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (27, 1, 27);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (28, 1, 28);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (29, 1, 29);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (30, 1, 30);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (31, 1, 31);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (32, 1, 32);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (33, 1, 33);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (34, 1, 34);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (35, 1, 35);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (36, 1, 36);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (37, 1, 37);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (38, 1, 38);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (39, 1, 39);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (40, 1, 40);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (41, 1, 41);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (42, 1, 42);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (43, 1, 43);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (44, 1, 44);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (45, 1, 45);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (46, 1, 46);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (47, 1, 47);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (48, 2, 1);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (49, 2, 2);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (50, 2, 3);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (51, 2, 4);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (52, 2, 5);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (53, 2, 6);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (54, 2, 7);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (55, 2, 8);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (56, 2, 9);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (57, 2, 10);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (58, 2, 11);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (59, 2, 12);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (60, 2, 13);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (61, 2, 14);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (62, 2, 15);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (63, 2, 16);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (64, 2, 17);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (65, 2, 18);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (66, 2, 19);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (67, 2, 20);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (68, 2, 21);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (69, 2, 22);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (70, 2, 23);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (71, 2, 24);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (72, 2, 25);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (73, 2, 26);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (74, 2, 27);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (75, 2, 28);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (76, 2, 29);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (77, 2, 30);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (78, 3, 1);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (79, 3, 2);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (80, 3, 3);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (81, 3, 4);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (82, 3, 5);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (83, 3, 6);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (84, 3, 7);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (85, 3, 8);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (86, 3, 9);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (87, 3, 10);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (88, 3, 11);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (89, 3, 12);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (90, 3, 13);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (91, 3, 14);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (92, 3, 15);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (93, 3, 16);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (94, 3, 17);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (95, 3, 18);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (96, 3, 19);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (97, 3, 20);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (98, 3, 21);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (99, 3, 22);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (100, 3, 23);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (101, 3, 24);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (102, 3, 25);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (103, 3, 26);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (104, 3, 27);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (105, 3, 28);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (106, 3, 29);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (107, 3, 30);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (108, 3, 31);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (109, 3, 32);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (110, 3, 33);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (111, 3, 34);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (112, 3, 35);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (113, 3, 36);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (114, 3, 37);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (115, 3, 38);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (116, 3, 39);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (117, 3, 40);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (118, 3, 41);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (119, 3, 42);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (120, 3, 43);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (121, 3, 44);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (122, 3, 45);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (123, 3, 46);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (124, 3, 47);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (125, 4, 1);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (126, 4, 2);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (127, 4, 3);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (128, 4, 4);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (129, 4, 5);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (130, 4, 6);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (131, 4, 7);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (132, 4, 8);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (133, 4, 9);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (134, 4, 10);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (135, 4, 11);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (136, 4, 12);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (137, 4, 13);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (138, 4, 14);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (139, 4, 15);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (140, 4, 16);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (141, 4, 17);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (142, 4, 18);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (143, 4, 19);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (144, 4, 20);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (145, 4, 21);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (146, 4, 22);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (147, 4, 23);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (148, 4, 24);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (149, 4, 25);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (150, 4, 26);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (151, 4, 27);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (152, 4, 28);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (153, 4, 29);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (154, 4, 30);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (155, 5, 1);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (156, 5, 2);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (157, 5, 3);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (158, 5, 4);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (159, 5, 5);
INSERT INTO devWeb_Project_Bdd.ParcoursPoints (idPoint, idParcours, numeroParcours) VALUES (160, 5, 6);

INSERT INTO devWeb_Project_Bdd.Categories (idCategorie, nameCategorie) VALUES (1, 'Acer');
INSERT INTO devWeb_Project_Bdd.Categories (idCategorie, nameCategorie) VALUES (2, 'Quercus');
INSERT INTO devWeb_Project_Bdd.Categories (idCategorie, nameCategorie) VALUES (3, 'Salix');

INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (2, 1);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (8, 1);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (37, 1);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (38, 1);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (49, 1);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (51, 1);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (55, 1);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (56, 1);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (73, 1);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (75, 1);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (90, 1);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (91, 1);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (92, 1);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (100, 1);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (105, 1);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (114, 1);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (123, 1);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (125, 1);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (138, 1);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (141, 1);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (9, 2);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (16, 2);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (45, 2);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (72, 2);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (78, 2);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (103, 2);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (104, 2);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (107, 2);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (112, 2);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (113, 2);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (117, 2);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (139, 2);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (154, 2);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (159, 2);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (1, 3);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (17, 3);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (71, 3);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (80, 3);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (82, 3);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (85, 3);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (109, 3);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (120, 3);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (122, 3);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (132, 3);
INSERT INTO devWeb_Project_Bdd.CategoriesPoints (idPoint, idCategorie) VALUES (152, 3);
