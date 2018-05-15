create table public.location (
	id integer not null, 
	city varchar(255) not null,
	description varchar(255) not null,
	primary key(id)
);


create table public.hebebuehne (
	id integer not null, 
	type varchar(255) not null,
	name varchar(255) not null,
	location_id integer null,
	primary key(id)
);


