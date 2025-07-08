CREATE TABLE `profiles` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(255),
	`email` varchar(255),
	`age` int,
	CONSTRAINT `profiles_id` PRIMARY KEY(`id`)
);
