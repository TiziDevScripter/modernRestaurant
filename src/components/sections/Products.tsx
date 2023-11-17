import { useMealAPI } from '../../hooks/useMealAPI';
import { ButtonIcon } from '../ButtonIcon';
import { AddCartIcon } from '../Icons';
import './Products.css';

export function Products() {
    const { recipes, searchText, updateSearchText, isLoading, isError } = useMealAPI()
    return (
        <article className='products'>
            <h2 className='title'>Search Fast and Buy Fast</h2>
            <form className='searcher-container'>
                <input type="text" placeholder='pasta, fish, etc...' value={searchText} onChange={(event) => updateSearchText(event.target.value)} />
            </form>
            <section className='meals'>
                {recipes &&
                    recipes.map(meal => {
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
                {
                    recipes.length == 0 && !isLoading &&
                    <p>not found meals</p>
                }
                {
                    isError &&
                    <p>we had a problem</p>
                }
            </section>
        </article>
    )
}