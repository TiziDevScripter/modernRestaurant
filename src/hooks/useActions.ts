import { Product, addProduct } from "../redux/cart/cartSlice";
import { useAppDispatch } from "./store";

export function useActions() {
    const dispatch = useAppDispatch();

    function AAddProduct(product: Product) {
        return dispatch(addProduct(product))
    }

    return { AAddProduct }
}