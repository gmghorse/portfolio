// Edit everything about your portfolio here.

export const site = {
    name: "Gabriel Mamman",
    role: "Software engineering student",
    headline: "I build backend systems and web apps.",
    intro:
        "I'm a final-year software engineering student. I enjoy working close to the metal in Rust and C++, and shipping web apps with Flutter and Postgres.",
    email: "gmghorse@gmail.com",
    github: "",
    linkedin: "",
};

export type Project = {
    title: string;
    summary: string;
    overview: string;
    workflow: string[];
    focus: string[];
    tags: string[];
    aspect: "phone" | "wide"; // shape of the screenshots
    screenshots: { src: string; alt: string }[];
};

export const featuredProjects: Project[] = [
    {
        title: "EV Charging Edge Server",
        summary:
            "An edge server that sits close to the chargers and connects them to the EV charging app, handling charger communication and keeping session data in sync.",
        overview:
            "This project bridges physical EV chargers and the app that people use to start and follow a charging session. The edge server gives charger communication a nearby home and keeps session information moving between the charger side and the app.",
        workflow: [
            "Connect chargers to the edge server.",
            "Handle charger communication close to the hardware.",
            "Keep charging session data in sync with the app.",
        ],
        focus: ["Reliable charger communication", "Consistent session state", "A clear boundary between chargers and the app"],
        tags: ["Rust", "Actix", "OCPP", "WebSocket", "PostgreSQL", "Tauri", "SQLite"],
        aspect: "wide",
        screenshots: [
            { src: "/grems_ev/Screenshot 2026-11-16 at 21.32.12.png", alt: "EV charging project screenshot" },
            { src: "/grems_ev/Screenshot 2026-11-16 at 21.32.24.png", alt: "EV charging project screenshot" },
            { src: "/grems_ev/Screenshot 2026-11-16 at 21.32.31.png", alt: "EV charging project screenshot" },
            { src: "/grems_ev/Screenshot 2026-11-16 at 21.32.39.png", alt: "EV charging project screenshot" },
        ],
    },
    {
        title: "Phone Case Design App",
        summary:
            "A mobile app where people design their own phone case: pick a phone model, add artwork and text, and preview the result.",
        overview:
            "The app turns a custom phone case into a small, guided design experience. People start with a compatible phone model, personalize the case with artwork and text, then review the composition in a preview.",
        workflow: [
            "Choose the phone model and matching case shape.",
            "Add artwork and text to make the design personal.",
            "Preview the case before settling on the design.",
        ],
        focus: ["A simple design flow", "Personalization with artwork and text", "Previewing the finished composition"],
        tags: ["React", "Next.js", "UploadThing"],
        aspect: "wide",
        screenshots: [
            { src: "/case_cobra/Screenshot 2026-11-16 211641.png", alt: "Phone case design project screenshot" },
            { src: "/case_cobra/Screenshot 2026-11-16 211755.png", alt: "Phone case design project screenshot" },
            { src: "/case_cobra/Screenshot 2026-11-16 212115.png", alt: "Phone case design project screenshot" },
            { src: "/case_cobra/Screenshot 2026-11-16 212252.png", alt: "Phone case design project screenshot" },
        ],
    },
];

export const otherProjects = [
    {
        title: "Meeting Scheduling App",
        org: "Choice International Group",
        summary: "A meeting scheduling app built for the team at Choice International Group.",
        details: "The project focused on giving the team a dedicated place to coordinate meeting times. More implementation details can be added here as the project story is documented.",
        tags: ["Scheduling", "Web app"],
    },
];

export const skills = [
    "Rust",
    "JavaScript",
    "PostgreSQL",
    "Flutter (Dart)",
    "Python",
    "C++",
];
