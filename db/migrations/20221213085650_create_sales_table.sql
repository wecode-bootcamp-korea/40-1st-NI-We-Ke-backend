-- migrate:up
CREATE TABLE sales (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_option_id INT NOT NULL, 
    discount_rate INT NOT NULL,
    CONSTRAINT sales_product_option_id_fkey FOREIGN KEY (product_option_id) REFERENCES product_options(id)
)
-- migrate:down
DROP TABLE sales;

