insert into location (id, city, description) values
(1, 'Bruchkoebel', 'Filiale am Viadukt'),
(2, 'Hanau', 'Hebebuehnen am Marktplatz'),
(3, 'Berlin', 'Hebebuehnen Schmidt'),
(4, 'Hamburg', 'Hebebuehnen Place'),
(5, 'Muenchen', 'Hebebuehnen einfach leihen'),
(6, 'Bruchkoebel', 'Zentrale'),
(7, 'Dortmund', 'Hebebuehnen Mueller');

insert into hebebuehne (id,type,name,location_id) values 
(1, 'small','buehne_small1',6),
(2, 'small','buehne_small2',6),
(3, 'small','buehne_small3',6),
(4, 'medium','buehne_medium1',1),
(5, 'medium','buehne_medium2',4),
(6, 'medium','buehne_medium3',5),
(7, 'big','buehne_big1',1),
(8, 'big','buehne_big2',2),
(9, 'big','buehne_big3',3),
(10, 'small','buehne_small4',1),
(11, 'small','buehne_small5',7);
