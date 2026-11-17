// Edit everything about your portfolio here.

export const site = {
    name: "Gabriel Mamman",
    role: "Software engineering student",
    headline: "I build backend systems and mobile apps.",
    intro:
        "I'm a final-year software engineering student. I enjoy working close to the metal in Rust and C++, and shipping real apps with Flutter and Postgres.",
    email: "gmghorse@gmail.com",
    github: "",
    linkedin: "",
};

export type Project = {
    title: string;
    summary: string;
    tags: string[];
    aspect: "phone" | "wide"; // shape of the screenshots
    screenshots: { src: string; alt: string }[];
};

export const featuredProjects: Project[] = [
    {
        title: "EV Charging Edge Server",
        summary:
            "An edge server that sits close to the chargers and connects them to the EV charging app, handling charger communication and keeping session data in sync.",
        tags: ["Rust", "PostgreSQL"],
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
        tags: ["Flutter", "Dart"],
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
