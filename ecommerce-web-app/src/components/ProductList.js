import React from "react";
import ProductCard from './ProductCard';
import mouse from '../assets/mouse.jpg';
import keyboard from '../assets/keyboard.jpg';
import monitor from '../assets/monitor.jpg';
import apple from '../assets/apple.jpg';
import printer from '../assets/printer.jpg';

const products = [
  { id: 1, title: 'Mouse', price: 23, img: mouse },
  { id: 2, title: 'Keyboard', price: 45, img: keyboard },
  { id: 3, title: 'Monitor', price: 70, img: monitor },
  { id: 4, title: 'Printer', price: 25, img: printer },
  { id: 5, title: 'Apple Vision Pro', price: 80, img: apple },
];

function ProductList() {
  return (
    <>
      <main>
        <div className="product-container">
          {products.map(product => (
            <ProductCard
              key={product.id}
              img={product.img}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default ProductList;
