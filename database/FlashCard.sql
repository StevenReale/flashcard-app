BEGIN TRANSACTION;

DROP TABLE IF EXISTS card;
DROP TABLE IF EXISTS app_user;

CREATE TABLE app_user (
	user_id serial NOT NULL,
	username varchar(20) NOT NULL,
	password_hash varchar(200) NOT NULL,
	role varchar(50) NOT NULL,
	CONSTRAINT user_id PRIMARY KEY (user_id)
);

CREATE TABLE card (
	card_id serial NOT NULL,
	user_id int,
	bin int,
	expiry_timestamp_ms_epoch bigint,
	question varchar(500),
	answer varchar(500),
	times_wrong int,
	CONSTRAINT card_id PRIMARY KEY(card_id),
	CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES app_user(user_id)
);

INSERT INTO app_user (user_id, username, password_hash, role) VALUES (1, 'user1', '$2a$10$rHAKNCxyF4.A15Rr/0zvGu2mM4v.pLTE5qfq6YeoBZDt6aJJZuWJW', 'user'); --password is "password1"

INSERT INTO card (user_id, bin, expiry_time, question, answer, times_wrong)
VALUES
(1,	10,	1700226375603,	'In SQL, the default parameter for an ORDER BY clause is:',	'ASC',	0),
(1,	9,	1693423120558,	'What are the three pillars of object-oriented programming?',	'Encapsulation, Polymorphism, and Inheritance',	1),
(1,	2,	1689903779905,	'What is the average windspeed velocity of an unladen swallow?',	'African or European?',	10),
(1,	9,	1693423122269,	'The acronym JSON stands for:',	'JavaScript Object Notation',	0),
(1,	9,	1693423124710,	'This JavaScript keyword prevents a variable from being reassigned.',	'const',	0),
(1,	10,	1702150258252,	'In the declaration List<Integer> myList = new ArrayList<>(), _____ is a class that implements the interface _____.',	'ArrayList ... List',	0),
(1,	1,	1691782292530,	'This Java keyword prevents a variable from being reassigned.',	'final',	10),
(1,	10,	1702653270258,	'This keyword (not ''public'' allows properties and methods to be accessed by other packages.',	'protected',	0),
(1,	8,	1692717277654,	'What Spring Boot annotation allows a controller to accept CORS requests?',	'@CrossOrigin',	1),
(1,	5,	1692288885132,	'In C#, which attribute indicates that a particular class is used for unit testing?',	'[TestClass]',	0),
(1,	11,	1689858340862,	'This block of code will always run after a try{} or catch{} block.',	'finally{}',	0);

COMMIT;
