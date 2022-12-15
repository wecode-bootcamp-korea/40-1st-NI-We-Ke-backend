-- migrate:up
CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category_id INT NOT NULL,
    detail_id INT NOT NULL,
    icon_id INT NOT NULL, 
    draw TINYINT NOT NULL, 
    CONSTRAINT products_category_id_fkey FOREIGN KEY (category_id) REFERENCES categories(id),
    CONSTRAINT products_detail_id_fkey FOREIGN KEY (detail_id) REFERENCES details(id),
    CONSTRAINT products_icon_id_fkey FOREIGN KEY (icon_id) REFERENCES icons(id)
)
-- migrate:down
DROP TABLE products;

