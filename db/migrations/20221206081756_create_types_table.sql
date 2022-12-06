-- migrate:up
CREATE TABLE types (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    gender VARCHAR(100) NOT NULL, 
    kid_types VARCHAR(100) NULL
)
-- migrate:down
DROP TABLE types;

