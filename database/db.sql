CREATE DATABASE  UTPFood;

USE UTPFood;

CREATE TABLE users(
  id int(11) NOT NULL AUTO_INCREMENT = 1,
  username VARCHAR(16) not null,
  password VARCHAR(60)not null
);
ALTER TABLE users
  ADD PRIMARY KEY (id);

CREATE TABLE restaurants(
  id int(11) not null AUTO_INCREMENT = 1,
  name VARCHAR(20),
  direction VARCHAR(20),
  phone VARCHAR(10),
  open_time TIME(),
  end_time TIME()
  url_image VARCHAR(60)
);
ALTER TABLE restaurants
  ADD PRIMARY KEY (id);

CREATE TABLE pharmacies(
  id int(11) not null AUTO_INCREMENT = 1,
  name VARCHAR(20),
  direction VARCHAR(20),
  phone VARCHAR(10),
  open_time TIME(),
  end_time TIME()
  url_image VARCHAR(60)
);
ALTER TABLE pharmacies
  ADD PRIMARY KEY (id);

CREATE TABLE markets(
  id int(11) not null AUTO_INCREMENT = 1,
  name VARCHAR(20),
  direction VARCHAR(20),
  phone VARCHAR(10),
  open_time TIME(),
  end_time TIME()
  url_image VARCHAR(60)
);

ALTER TABLE markets
  ADD PRIMARY KEY (id);