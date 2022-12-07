-- migrate:up
CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category_id INT NOT NULL ,
    detail_id INT NOT NULL ,
    menu VARCHAR(100) NOT NULL,
    CONSTRAINT products_category_id_fkey FOREIGN KEY (category_id) REFERENCES categories(id),
    CONSTRAINT products_detail_id_fkey FOREIGN KEY (detail_id) REFERENCES details(id)
)
-- migrate:down
DROP TABLE products;

