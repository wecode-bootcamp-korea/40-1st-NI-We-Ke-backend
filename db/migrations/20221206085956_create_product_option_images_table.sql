-- migrate:up
CREATE TABLE product_option_images (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_option_id INT NOT NULL, 
    image_url VARCHAR(2000) NOT NULL,
    CONSTRAINT product_option_images_product_option_id_fkey FOREIGN KEY (product_option_id) REFERENCES product_options(id)
)
-- migrate:down
DROP TABLE product_option_images;

