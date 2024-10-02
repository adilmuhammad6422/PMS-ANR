import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewProduct() {
  const [product, setProduct] = useState({
    productName: "",
    description: "",
    price: "",
    status: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const result = await axios.get(`http://localhost:8080/product/${id}`);
    setProduct(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Product Details</h2>

          <div className="card">
            <div className="card-header">
              Details of Product id: {product.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Product Name:</b>
                  {product.productName}
                </li>
                <li className="list-group-item">
                  <b>Description:</b>
                  {product.description}
                </li>
                <li className="list-group-item">
                  <b>Price:</b>
                  {product.price}
                </li>
                <li className="list-group-item">
                  <b>Status:</b>
                  {product.status}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
