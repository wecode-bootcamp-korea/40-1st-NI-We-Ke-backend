const { appDataSource} = require("./data-source");

const createOrder = async(user_id, order_number, status_id, price, quantity ) => {
    await appDataSource.query(
        `
        INSERT INTO orders(
            user_id,
            order_number,
            status_id,
            price,
            quantity
        )VALUES (?,?,?,?,?)
        `,[ user_id, order_number, status_id, price, quantity ]
    );
}

module.exports = {
    createOrder
};
