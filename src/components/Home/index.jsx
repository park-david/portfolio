import { Container } from "semantic-ui-react"

export default function Home() {
    return (
        <section className="home">
            <Container>
                <img className="portrait" src="../assets/portrait.png" alt="Portrait" />
                <h1>Hello, I'm David</h1>
                <p>Full-Stack Engineer</p>
            </Container>
        </section>
    )
}