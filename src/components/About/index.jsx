import { Grid, Image, Container } from "semantic-ui-react"

const skillImages = ['javascript.svg', 'python.svg', 'react.svg', 'css3.svg', 'django.svg', 'express.svg', 'github.svg', 'html-5.svg', 'mongodb.svg', 'node-js.svg', 'postgresql.svg', 'react.svg']

export default function About() {
  return (
    <section id="about">
          <h1>About Me</h1>
            <Grid >
              <Grid.Row centered>
                <Container text>
                  <p>I'm a software engineer based in Seattle Washington. Im passionate about making applications that are user-friendly for people of all technology proficiencies.</p>
                </Container>
              </Grid.Row>
              {skillImages.map((imageName, index) => (
                <div className="skills">
                    <Image
                      centered
                      src={`../assets/skills/${imageName}`}
                      alt={`Skill ${index}`}
                    />
                </div>
              ))}
            </Grid>
    </section>
  )
}
