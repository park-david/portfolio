import { Grid, Image, Container } from "semantic-ui-react"

const skillImages = [
  'javascript.svg', 'python.svg', 'react.svg', 'css3.svg', 'django.svg',
  'express.svg', 'postgresql.svg', 'html-5.svg', 'mongodb.svg', 'node-js.svg', 'github.svg'
  
]

export default function About() {
  return (
    <section id="about">
      <h1>About Me</h1>
      <Grid>
        <Grid.Row centered>
          <Container>
            <h3>I'm a software engineer based in Seattle Washington. I'm passionate about making applications that are user-friendly for people of all technological proficiencies.</h3>
          </Container>
        </Grid.Row>
        <Grid.Row centered>
          {skillImages.map((imageName, index) => {
            const label = imageName.replace(/\..+$/, "")
            return (
              <figure className="skills" key={index}>
                <figcaption>{label}</figcaption>
                <Image
                  centered
                  src={`assets/skills/${imageName}`}
                  alt={`Skill ${index}`}
                />
              </figure>
            )
          })}
        </Grid.Row>
      </Grid>
    </section>
  )
}
