import { Button } from '../Button'
import './Welcome.css'

export function Welcome() {
    return (
        <article className='welcome'>
            <section className="section section-left" >
                <img src="https://i.pinimg.com/originals/b5/de/d1/b5ded15f09936463704df221f91f8acc.png" alt="a chef" />
            </section>
            <section className="section section-right" >
                <h1>Bienvenido a Epicurea</h1>
                <p>
                    Donde la exquisitez se encuentra con la tradición. Sumérgete en una experiencia culinaria única que combina sabores auténticos con un ambiente acogedor.
                </p>
                <Button>Conocer más</Button>
            </section>
        </article>
    )
}