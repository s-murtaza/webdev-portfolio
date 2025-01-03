
const projects = [
    {
        title: "Entry Mapper",
        description: "A data-driven tool designed to assist businesses in identifying optimal expansion opportunities. Users input countries and specific criteria, such as market size, competition, economic factors. The backend processes this data and the frontend then generates a feasibility heatmap, visually ranking countries based on their suitability for new business ventures.",
        images: ["/projectImages/entrymapper/entrymapper-finalheatmap.png",
            "/projectImages/entrymapper/entrymapperlogin.png", 
            "/projectImages/entrymapper/entrymapper-metric.png",
            "/projectImages/entrymapper/entrymapper-country.png",
            "/projectImages/entrymapper/entrymapper-interimap.png",
            "/projectImages/entrymapper/em6.png"
        ],
        liveUrl: null,
        repoUrl: null,
        stack: ["React", "NextJS", "Typescript", "Node.js", "NestJs", "PostgreSQL", "Material-UI", "React-Context", "AntD"]
    },
    {
        title: "Hotel Booking System",
        description:
            "Full stack Hotel booking website that allows users to browse available rooms, filter by location and category, view listings, make bookings. The platform includes secure user authentication, wishlist functionality, and booking management.",
        images: ["/projectImages/hotelapp/h2.webp", "/projectImages/hotelapp/h1.webp", "/projectImages/hotelapp/h3.png", "/projectImages/hotelapp/h4.png", "/projectImages/hotelapp/h5.png"],
        liveUrl: "https://hotelapp-client.onrender.com/",
        repoUrl: "https://github.com/s-murtaza/hotelApp",
        stack: ["React", "Node.js", "Express.js", "PostgreSQL", "Material-UI", "Redux", "Framer Motion", "JWT"]
    },
    {
        title : "Doors Indoor",
        description: "Simple and clean Landing Page for doorsIndoor Pakistan featuring smooth animations, product catelogue,and email integration",
        images: ["/projectImages/doorsindoor/di1.png", "/projectImages/doorsindoor/di2.png", "/projectImages/doorsindoor/di3.png", "/projectImages/doorsindoor/di4.png" ],
        liveUrl: "https://www.doorsindoor.com/",
        stack: ["NextJs", "Framer Motion", "ShadCn"]
    },
];

export default projects