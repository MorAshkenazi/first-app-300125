import { FunctionComponent } from "react";

interface ProductsProps {}

const Products: FunctionComponent<ProductsProps> = () => {
  const products: any = [
    { id: 1, name: "Laptop", price: 5000 },
    { id: 2, name: "Earphone", price: 210 },
    { id: 3, name: "DOK", price: 60 },
  ];
  // const products: any = [];
  return (
    <>
      <h4>Products</h4>
      {products.length ? (
        <ul>
          {products.map((product: any) => (
            <li key={product.id}>
              {product.name}, {product.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no products</p>
      )}
    </>
  );
};

export default Products;
