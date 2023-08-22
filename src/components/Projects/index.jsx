import { Card, Container } from "semantic-ui-react"

export default function Projects() {
    return (
        <section id="projects">
            <Container text>
                <h1>My Projects</h1>
                <p>Check out some of my work</p>
                <Card centered>
                    <p>
                        <img src="" alt="" />
                        <a href="https://all-f1-5090b40bdcf1.herokuapp.com/" target="_blank" rel="noopener noreferrer">All F1</a>|
                        <a href="https://github.com/park-david/all-f1" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </p>
                </Card>
                <Card centered>
                    <p>
                        <a href="https://java-book-a57dc0cae3ed.herokuapp.com/" target="_blank" rel="noopener noreferrer">JavaBook</a>|
                        <a href="https://github.com/alexcibski/JavaBook" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </p>
                </Card>
                <Card centered>
                    <p>
                        <a href="https://monitor-reviews-154641efa8e1.herokuapp.com/" target="_blank" rel="noopener noreferrer">Monitor Reviews</a>|
                        <a href="https://github.com/park-david/MEN-Stack-Application" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </p>
                </Card>

            </Container>
        </section>
    )
}