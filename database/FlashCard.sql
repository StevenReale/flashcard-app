
DROP TABLE IF EXISTS card;
DROP TABLE IF EXISTS app_user;

CREATE TABLE app_user (
	user_id serial NOT NULL,
	username varchar(20) NOT NULL,
	password_hash varchar(30) NOT NULL,
	CONSTRAINT user_id PRIMARY KEY (user_id)
);

CREATE TABLE card (
	card_id serial NOT NULL,
	user_id int,
	bin int,
	expiry_time timestamp,
	question varchar(500),
	answer varchar(500),
	times_wrong int,
	CONSTRAINT card_id PRIMARY KEY(card_id),
	CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES app_user(user_id)
);

INSERT INTO app_user (user_id, username, password_hash) VALUES (1, 'user1', 'pass');

