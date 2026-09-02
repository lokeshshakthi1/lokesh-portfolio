export const profile = {
    name: "Lokesh Shakthi",
    firstName: "Lokesh",
    lastName: "Shakthi",
    title: "Software Engineering Analyst",
    company: "Accenture",
    headline:
        "Software Engineering Analyst at Accenture | .NET Developer | SQL Server | Cloud Security | Software Design | Agile | Continuous Learner",
    statement:
        "Data analyst and developer with 3+ years of experience building and optimizing data-driven applications with SQL, ASP.NET and C# — crafting responsive web apps, integrating backend systems, and resolving production issues that keep enterprise platforms running.",
    location: "Bengaluru, Karnataka, India",
    email: "lokeshshakthi1@gmail.com",
    linkedin: "https://www.linkedin.com/in/lokesh-shakthi-20bb20216",
    stats: [
        { value: "3+", label: "Years of Experience" },
        { value: "7", label: "Certifications" },
        { value: "1", label: "Enterprise Journey — Accenture" },
    ],
};

export const aboutStory = [
    "I'm a software engineer who lives at the intersection of data and application engineering. At Accenture, I develop and upgrade both front-end and back-end components for enterprise applications on a CGS project — working deep in C#, SQL and application architecture.",
    "My work spans the full lifecycle: designing data models, building integrations, tuning queries, and resolving production issues that directly improve operational efficiency. I care about clean code, maintainability and timely delivery — and I'm a continuous learner by nature.",
];

export const journey = [
    {
        year: "2018",
        title: "B.Tech — Computer Science (Internet of Things)",
        org: "Jain (Deemed-to-be University)",
        period: "Jul 2018 — Jul 2022",
        detail: "Built the computer science foundation — programming, problem solving and connected systems — that powers everything since.",
    },
    {
        year: "2022",
        title: "Software Associate",
        org: "Accenture India · Bengaluru",
        period: "Oct 2022 — Dec 2024",
        detail: "Entered the enterprise world — delivering software solutions across front-end and back-end components with cross-functional teams.",
    },
    {
        year: "2022—23",
        title: "Software Engineering Associate",
        org: "Accenture",
        period: "2022 — 2023",
        detail: "Delivered high-impact software solutions against client specifications and deadlines, driving successful project outcomes through effective problem-solving.",
    },
    {
        year: "2024",
        title: "Software Analyst → Software Engineering Analyst",
        org: "Accenture · Bengaluru",
        period: "Dec 2024 — Present",
        detail: "Developing and upgrading enterprise application components on a CGS project — C#, SQL, data modeling, integration and clean, maintainable delivery.",
    },
];

export const skillGroups = [
    {
        name: "Languages & Backend",
        color: "#00F5D4",
        skills: [
            { name: "C#", note: "Core language across enterprise application development at Accenture." },
            { name: ".NET", note: ".NET Framework & .NET Core application development." },
            { name: "ASP.NET MVC", note: "Enterprise web applications and reporting modules." },
            { name: "Web API", note: "RESTful APIs for application integration and backend processes." },
            { name: "Entity Framework", note: "Database interaction and application data access." },
            { name: "LINQ", note: "Data access and querying within .NET applications." },
            { name: "Python", note: "Certified — Learning Python & Intro to Programming Using Python." },
        ],
    },
    {
        name: "Data & Databases",
        color: "#38BDF8",
        skills: [
            { name: "SQL", note: "Querying, investigation and optimization for business-critical modules." },
            { name: "T-SQL", note: "Stored procedures, views and reporting logic on SQL Server." },
            { name: "SQL Server", note: "Enterprise database platform across development and support." },
            { name: "SSRS", note: "Report generation and business-rule implementation." },
            { name: "Data Visualization", note: "Turning data into decisions." },
        ],
    },
    {
        name: "Cloud & DevOps",
        color: "#10B981",
        skills: [
            { name: "Azure", note: "Cloud platform for enterprise deployments." },
            { name: "Azure DevOps", note: "Work items, source control and deployment pipelines." },
            { name: "Git", note: "Source control and code collaboration." },
            { name: "Cloud Security", note: "Security-aware engineering practice." },
        ],
    },
    {
        name: "Monitoring & Support",
        color: "#F59E0B",
        skills: [
            { name: "Dynatrace", note: "Application performance and availability monitoring." },
            { name: "Grafana", note: "System metrics, degradation and failure detection." },
        ],
    },
    {
        name: "Practices",
        color: "#A78BFA",
        skills: [
            { name: "Agile", note: "Agile delivery across the development lifecycle." },
            { name: "Software Design", note: "Architecture, data modeling and integration." },
            { name: "Front-End Development", note: "Responsive web application interfaces." },
        ],
    },
];

export const projects = [
    {
        id: "production-support",
        name: "Enterprise Application & Production Support",
        role: "Software Engineer / Custom Software Analyst",
        tagline: "L3 application & infrastructure support for enterprise systems",
        environment: ["C#", ".NET", "SQL Server", "Azure", "Azure DevOps", "Git", "Dynatrace", "Grafana"],
        points: [
            "Provided L3 application and production support for enterprise applications, monitoring system health and resolving application, database, and infrastructure-related issues.",
            "Investigated production incidents using application logs, SQL queries, monitoring tools, and system metrics to identify root causes and implement permanent fixes.",
            "Performed RCA, incident troubleshooting, defect resolution, and post-deployment validation for critical production issues.",
            "Worked with infrastructure, database, development, and business teams to troubleshoot issues and restore services within defined SLAs.",
            "Monitored application performance and availability using Dynatrace and Grafana, identifying performance degradation and potential failures.",
            "Supported deployments and production changes through Azure DevOps and Git, including validation and post-release monitoring.",
            "Created and optimized SQL queries and stored procedures to investigate data-related issues and resolve reporting/application defects.",
        ],
    },
    {
        id: "dotnet-reporting",
        name: "Enterprise Application Development & Reporting Platform",
        role: "Software Engineer / Custom Software Analyst",
        tagline: ".NET application development with business-critical reporting",
        environment: ["C#", ".NET Framework", ".NET Core", "ASP.NET MVC", "Web API", "SQL Server", "T-SQL", "SSRS", "Entity Framework", "LINQ", "Git", "Azure DevOps"],
        points: [
            "Developed and enhanced enterprise web applications using C#, .NET Framework/.NET Core, ASP.NET MVC, and Web API.",
            "Designed and implemented RESTful APIs for application integration and backend business processes.",
            "Developed and optimized SQL queries, stored procedures, views, and reporting logic for business-critical reporting modules.",
            "Worked on SSRS/reporting modules, ensuring accurate data processing, report generation, and business-rule implementation.",
            "Implemented application enhancements and defect fixes based on functional requirements and business needs.",
            "Used Entity Framework and LINQ for database interaction and application data access.",
            "Performed debugging, unit testing, integration testing, and code reviews while following development and deployment standards.",
            "Collaborated with Business Analysts, QA teams, frontend developers, and stakeholders throughout the development lifecycle.",
            "Used Git and Azure DevOps for source control, work-item management, code collaboration, and deployment activities.",
        ],
    },
];

export const experience = [
    {
        position: "Software Analyst · Software Engineering Analyst",
        company: "Accenture",
        period: "Dec 2024 — Present",
        location: "Bengaluru, Karnataka, India",
        points: [
            "Develop and upgrade both front-end and back-end components for enterprise applications on a CGS project.",
            "Work across C# and SQL with a strong grasp of application architecture, data modeling, and integration.",
            "Collaborative team player focused on clean code, maintainability and timely delivery.",
        ],
    },
    {
        position: "Software Associate",
        company: "Accenture India",
        period: "Oct 2022 — Dec 2024",
        location: "Bengaluru, Karnataka, India",
        points: [
            "Delivered high-impact software solutions, enhancing both front-end and back-end components.",
            "Collaborated with cross-functional teams to meet client specifications and deadlines.",
            "Drove successful project outcomes through effective problem-solving and timely delivery of high-quality solutions.",
        ],
    },
    {
        position: "Software Engineering Associate",
        company: "Accenture",
        period: "2022 — 2023",
        location: "India",
        points: [
            "Enhanced product features with cross-functional teams while adhering to client requirements and timelines.",
            "Delivered solutions across the full stack of enterprise application components.",
        ],
    },
];

export const education = [
    {
        institution: "Jain (Deemed-to-be University)",
        degree: "Bachelor of Technology — Computer Science (Internet of Things)",
        period: "Jul 2018 — Jul 2022",
    },
    {
        institution: "Jain (Deemed-to-be University)",
        degree: "Bachelor of Technology — Computer Science and Engineering",
        period: "2018 — 2022",
    },
];

export const certifications = [
    { name: "Software Design & Development: Design Patterns & SOLID Principles", issuer: "Certification", highlight: true },
    { name: "GIT", issuer: "Certification", highlight: true },
    { name: "Microsoft Azure AZ-900", issuer: "Microsoft Azure Fundamentals", highlight: true },
    { name: "Microsoft SC-900", issuer: "Security, Compliance & Identity Fundamentals", highlight: true },
    { name: "Learning Python", issuer: "LinkedIn Learning" },
    { name: "Introduction to Programming Using Python", issuer: "Certification" },
    { name: "Problem Solving", issuer: "Certification" },
];

export const marqueeItems = [
    "C#", ".NET", "SQL SERVER", "PYTHON", "ASP.NET MVC", "WEB API", "T-SQL", "SSRS",
    "AZURE", "AZURE DEVOPS", "GIT", "DYNATRACE", "GRAFANA", "ENTITY FRAMEWORK", "LINQ", "AGILE",
];
