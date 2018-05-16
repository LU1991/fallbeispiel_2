insert into location (id, city, description) values
(1, 'Bruchkoebel', 'Filiale am Viadukt'),
(2, 'Hanau', 'Hebebuehnen am Marktplatz'),
(3, 'Berlin', 'Hebebuehnen Schmidt'),
(4, 'Hamburg', 'Hebebuehnen Place'),
(5, 'Muenchen', 'Hebebuehnen einfach leihen'),
(6, 'Bruchkoebel', 'Zentrale'),
(7, 'Dortmund', 'Hebebuehnen Mueller'),
(8, 'Stuttgart', 'Hebebuehnen Wilhelma'),
(9, 'Dresden', 'Hebebuehnen am Zoo'),
(10, 'Kiel', 'Hebebuehnen Lauterbach');

insert into hebebuehne (id,type,name,location_id) values 
(1, 'small','buehne_small1',6),
(2, 'small','buehne_small2',6),
(3, 'small','buehne_small3',6),
(4, 'small','buehne_small4',1),
(5, 'small','buehne_small5',7),
(6, 'medium','buehne_medium1',1),
(7, 'medium','buehne_medium2',4),
(8, 'medium','buehne_medium3',5),
(9, 'medium','buehne_medium4',8),
(10, 'big','buehne_big1',1),
(11, 'big','buehne_big2',2),
(12, 'big','buehne_big3',3),
(13, 'big','buehne_big4',9),
(14, 'big','buehne_big5',10);

