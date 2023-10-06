import './App.css';
import { ButtonIcon } from './components/ButtonIcon';
import { Header } from './components/Header';
import { AddCartIcon, RefreshIcon } from './components/Icons';
import { Welcome } from './components/sections/welcome';
import { useMealAPI } from './hooks/useMealAPI';

function App() {
  const { recipes, newRecipes } = useMealAPI()

  return (
    <>
      <Header />
      <main className='wrapper'>
        <Welcome />
        <article className='products'>
          <h2 className='title'>Some Meals</h2>
          <ButtonIcon onClick={newRecipes}>
            <RefreshIcon fontSize={24} />
          </ButtonIcon>
          <section className='meals'>
            {
              recipes?.recipes.map(meal => {
                return (
                  <article key={meal.id} className='meal-card'>
                    <img className="image" src={meal.image} alt={meal.title} />
                    <h3 className='name'>{meal.title}</h3>
                    {/* <button>add to cart</button> */}
                    <ButtonIcon>
                      <AddCartIcon fontSize={24} />
                    </ButtonIcon>
                    {/* <p className='description'>{meal.summary}</p> */}
                  </article>
                )
              })
            }
          </section>
        </article>
      </main>
    </>
  )
}

export default App
