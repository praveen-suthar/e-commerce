import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { formatCurrency } from "../utils/helpers";
import { fetchUserCart, updateCart, updateCartQuantity } from "../store/slices/cartSlice";

const userId = 1; // Replace with dynamic user ID if needed

const CartPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    dispatch(fetchUserCart(userId));
  }, [dispatch]);

  const handleQuantityChange = (productId: number, newQuantity: number, cartId: number) => {
    dispatch(updateCartQuantity({ productId, quantity: newQuantity }));

    const updatedCart = items.map((cart) => ({
      ...cart,
      products: cart.products.map((item:any) =>
        item.productId === productId ? { ...item, quantity: newQuantity } : item
      ),
    }));

    dispatch(updateCart({ cartId, cart: updatedCart[0] }));
  };

  const handleRemove = (productId: number, cartId: number) => {
    dispatch(updateCartQuantity({ productId, quantity: 0 }));

    const updatedCart = items.map((cart) => ({
      ...cart,
      products: cart.products.filter((item:any) => item.productId !== productId),
    }));

    dispatch(updateCart({ cartId, cart: updatedCart[0] }));
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-600">{error}</div>;

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      {items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items[0]?.products.map((item:any) => (
              <div key={item.productId} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow">
                <img
                  src={`https://fakestoreapi.com/img/${item.productId}.jpg`}
                  alt="Product"
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-medium">Product {item.productId}</h3>
                  <p className="text-gray-600">{formatCurrency(20 * item.quantity)}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleQuantityChange(item.productId, item.quantity - 1, items[0].id)}
                    className="px-3 py-1 border rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.productId, item.quantity + 1, items[0].id)}
                    className="px-3 py-1 border rounded"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemove(item.productId, items[0].id)}
                  className="text-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>{formatCurrency(20 * items[0]?.products.reduce((acc, item) => acc + item.quantity, 0))}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>$9.99</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>{formatCurrency(20 * items[0]?.products.reduce((acc, item) => acc + item.quantity, 0) + 9.99)}</span>
            </div>
            <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default CartPage;
