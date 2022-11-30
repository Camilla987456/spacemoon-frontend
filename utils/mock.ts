import { Cart } from "../model/cart";
import { Order } from "../model/order";
import { Product } from "../model/product";

export const mockProduct = {
  categoryId: "1",
  name: "Test",
  price: 500,
  productId: "1",
  rating: 4,
  description: "Test product, not in database",
  image:
    "https://b.stripecdn.com/docs-statics-srv/assets/e9d184fcb37d32f21df2171a070f5fbc.png",
} as unknown as Product;

export const mockCart = {
  price: 500,
  products: [mockProduct],
  userId: "1",
} as unknown as Cart;

export const mockOrder = {
  cart: mockCart,
} as Order;
