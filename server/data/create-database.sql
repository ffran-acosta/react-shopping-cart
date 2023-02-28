CREATE TABLE store_items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    price INT,
    imgUrl VARCHAR(255)
)

INSERT INTO store_items (name, price, imgUrl) VALUES ('Product 1', 100,'product.jpg')
INSERT INTO store_items (name, price, imgUrl) VALUES ('Galaxy Z Flip4', 1059.99,'/imgs/Galaxy_Z_Flip4.png')