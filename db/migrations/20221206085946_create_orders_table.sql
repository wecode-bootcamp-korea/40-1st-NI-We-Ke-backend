-- migrate:up
CREATE TABLE orders (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    order_number INT NOT NULL,
    status_id INT NOT NULL,
    price DECIMAL NOT NULL,
    quantity INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT orders_order_number_ukey UNIQUE (order_number)
)
-- migrate:down
DROP TABLE orders;

