-- migrate:up
CREATE TABLE wishlists (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_option_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT wishlits_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id)
)
-- migrate:down
DROP TABLE wishlist;

