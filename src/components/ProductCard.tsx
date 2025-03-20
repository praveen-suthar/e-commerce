import { Heart } from "lucide-react";
import { Product } from "../types";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {

  return (
    <>
      {}

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative">
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
          </Link>

          <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm hover:bg-gray-100">
            <Heart className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {product.title}
          </h3>
          <div className="flex items-center mt-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-${
                    i < Math.round(product.rating.rate) ? "yellow" : "gray"
                  }-400`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">
              ({product.rating.count})
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900">
              ${product.price}
            </span>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
