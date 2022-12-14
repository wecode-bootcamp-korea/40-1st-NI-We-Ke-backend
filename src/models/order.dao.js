const { appDataSource} = require("./data-source");



const Status =Object.freeze ({
    "결제대기" :1,
    "결제완료" :2,
    "배송대기" :3,
    "배송완료" :4
})

const createOrder = async(userId, orderNumber, price, quantity ) => {
    await appDataSource.query(
        `
        INSERT INTO orders(
            user_id,
            order_number,
            status_id,
            price,
            quantity
        )VALUES (?,?, ${Status.결제대기},?,?)
        `,[userId, orderNumber, price, quantity ]
    );

    return appDataSource.query(`
            SELECT 
            user_id,
            order_number,
            status_id,
            price,
            quantity
            FROM orders
            WHERE user_id = ?`, [userId])
}


module.exports = {
    createOrder
};
