import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Cart } from "../../types";

interface CartState {
  items: Cart[];
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchUserCart = createAsyncThunk(
  "cart/fetchUserCart",
  async (userId: number) => {
    const response = await axios.get(`https://fakestoreapi.com/carts/user/${userId}`);
    return response.data;
  }
);

export const updateCart = createAsyncThunk(
  "cart/updateCart",
  async ({ cartId, cart }: { cartId: number; cart: Cart }) => {
    const response = await axios.put(`https://fakestoreapi.com/carts/${cartId}`, cart);
    return response.data;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    updateCartQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const cartIndex = state.items.findIndex((cart) =>
        cart.products.some((item:any) => item.productId === productId)
      );

      if (cartIndex !== -1) {
        const cart = state.items[cartIndex];
        const productIndex = cart.products.findIndex((item:any) => item.productId === productId);

        if (productIndex !== -1) {
          if (quantity > 0) {
            cart.products[productIndex].quantity = quantity;
          } else {
            cart.products.splice(productIndex, 1);
          }
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchUserCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch cart";
      })
      .addCase(updateCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updateCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to update cart";
      });
  },
});

export const {updateCartQuantity } = cartSlice.actions;
export default cartSlice.reducer;
