import React, { useState } from "react";
import { Card, Container, Menu, Tab } from "semantic-ui-react";

const projects = [
    {
        name: "All F1",
        description: "Full-stack MERN (MongoDB, Express.js, React, Node.js) application. Integrates a third-party API, establishing a connection with the backend database. This integration empowers the application to offer comprehensive CRUD (Create, Read, Update, Delete) functionality. All F1 serves as a resource for Formula 1 enthusiasts, delivering information on the current season's drivers, their respective points, constructor standings, and intricate details about the circuits, creating an all-in-one hub for Formula 1 aficionados.",
        links: [
            {
                label: "Live Demo",
                url: "https://all-f1-5090b40bdcf1.herokuapp.com/",
            },
            {
                label: "GitHub",
                url: "https://github.com/park-david/all-f1",
            },
        ],
    },
    {
        name: "JavaBook",
        description: "JavaBook project.",
        links: [
            {
                label: "Live Demo",
                url: "https://java-book-a57dc0cae3ed.herokuapp.com/",
            },
            {
                label: "GitHub",
                url: "https://github.com/alexcibski/JavaBook",
            },
        ],
    },
    {
        name: "Monitor Reviews",
        description: "Monitor Reviews project.",
        links: [
            {
                label: "Live Demo",
                url: "https://monitor-reviews-154641efa8e1.herokuapp.com/",
            },
            {
                label: "GitHub",
                url: "https://github.com/park-david/MEN-Stack-Application",
            },
        ],
    },
];

export default function Projects() {
    const [activeTab, setActiveTab] = useState(projects[0].name);

    const handleTabChange = (e, { name }) => {
        setActiveTab(name);
    };

    const panes = projects.map((project) => ({
        menuItem: (
            <Menu.Item
                key={project.name}
                name={project.name}
                active={activeTab === project.name}
                onClick={handleTabChange}
            />
        ),
        render: () => (
            <Tab.Pane>
                <Card centered>
                    <p>{project.description}</p>
                    {project.links.map((link, index) => (
                        <span key={index}>
                            <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link.label}
                            </a>
                            {index < project.links.length - 1 && " | "}
                        </span>
                    ))}
                </Card>
            </Tab.Pane>
        ),
    }));

    return (
        <section id="projects">
            <Container>
                <h1>My Projects</h1>
                <Tab
                    panes={panes}
                    activeIndex={panes.findIndex((pane) => pane.menuItem.props.name === activeTab)}
                />
            </Container>
        </section>
    );
}
