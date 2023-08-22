import { Container, Divider, Grid, Segment } from "semantic-ui-react"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function Contact() {
    const email = "davidpark1094@gmail.com"
    const [isCopied, setIsCopied] = useState(false)

    const handleEmailClick = () => {
        const tempInput = document.createElement("input")
        tempInput.value = email
        document.body.appendChild(tempInput)
        tempInput.select()
        document.execCommand("copy")
        document.body.removeChild(tempInput)

        setIsCopied(true)

        toast.success("Email copied to clipboard!", {
            position: "bottom-center",
            autoClose: 2000,
        })
    }

    return (
        <section id="contact">
            <Container text>
                <h1>Contact Me</h1>
                <Segment>
                    <Grid columns={2}>
                        <Grid.Column>
                            <a
                                href="https://www.linkedin.com/in/park-david/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                        </Grid.Column>
                        <Grid.Column>
                            <div onClick={handleEmailClick} style={{ cursor: "pointer" }}>
                                {isCopied ? "Email Copied!" : "Copy Email to clipboard"}
                                <ToastContainer />
                            </div>
                        </Grid.Column>
                    </Grid>
                    <Divider vertical>or</Divider>
                </Segment>
            </Container>
        </section>
    )
}
