import { Product } from '../redux/cart/cartSlice'
import './Cart.css'

type CartParams = { shower: boolean, cart: Product[] }

export function Cart({ shower, cart }: CartParams) {
    const cartClass = shower ? 'cart-container show' : 'cart-container'
    return (
        <aside className={cartClass}>
            <article className='buy'>
                <h2>Your Bag</h2>
                <button>Comprar</button>
                {<span>precio total: $77</span>}
            </article>
            <article className='products'>
                {
                    cart.map(product => {
                        return (
                            <section key={product.id} className='product'>
                                <img src={product.image} alt="Producto en el carrito de compras" />
                                <h3 className='title'>{product.title}</h3>
                                <span className='price'>$100</span>
                                <button className='remove'>Remove</button>
                            </section>
                        )
                    })
                }
            </article>
        </aside>
    )
}