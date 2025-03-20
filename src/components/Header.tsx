import { Link } from "react-router-dom";
import { ShoppingBag, Heart, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/shop" className="text-xl font-bold text-gray-900">
              ShopStyle
            </Link>
            <nav className="ml-10 space-x-8">
              <Link to="/home" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link to="/shop" className="text-gray-600 hover:text-gray-900">
                Shop
              </Link>
              <Link
                to="/categories"
                className="text-gray-600 hover:text-gray-900"
              >
                Categories
              </Link>
              <Link to="/deals" className="text-gray-600 hover:text-gray-900">
                Deals
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <button className="text-gray-600 hover:text-gray-900">
              <Heart size={20} />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <Link to="/cart" className="text-gray-600 hover:text-gray-900">
                <ShoppingBag size={20} />
              </Link>
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <User size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
