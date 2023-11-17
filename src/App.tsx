import './App.css';
// import { Cart } from './components/Cart';
import { Header } from './components/Header';
// import { Products } from './components/sections/Products';
import { Welcome } from './components/sections/Welcome';

function App() {

  return (
    <>
      <Header />
      <main className='wrapper'>
        <Welcome />
        {/* <Products /> */}
        <article className='support'>
          <h2>Did you have a problem?</h2>
          <p>Send us your problem</p>
          <form className='form'>
            <section className='form__section'>
              <label htmlFor="name">Nombre Completo:</label>
              <input type="text" name="name" id="name" placeholder='Carlos García, Maria López, etc...' />
            </section>

            <section className='form__section'>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" placeholder='john@example.com' />
            </section>

            <section className='form__section'>
              <label htmlFor="message">Mensaje:</label>
              <input type="text" name="message" id="message" placeholder='I did not get my meal in the delivery service ' />
            </section>
          </form>
        </article>
      </main>
      {/* <Cart /> */}
    </>
  )
}

export default App
