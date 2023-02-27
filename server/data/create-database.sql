CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    price INT,
    stock INT,
    imgUrl VARCHAR(255)
)

INSERT INTO products (title, price, stock, imgUrl) VALUES ('Product 1', 100, 10, 'product.jpg')