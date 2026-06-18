import type { Project } from '../types/Project';

export const projects: Project[] = [
  {
    title: "Artificial Isaac: Personalized AI Chatbot",
    description: [
      "Fine-tuned Qwen 2.5 (7B) on personal WhatsApp and Instagram chats to create a chatbot that mimics my communication style.",
      "Integrated Retrieval-Augmented Generation (RAG) using ChromaDB for accurate personal knowledge retrieval.",
      "Optimized training with LoRA and 4-bit quantization to enable fine-tuning on consumer GPUs (16GB+ VRAM).",
      "Developed local preprocessing scripts for chat data, including parsing, cleaning, and formatting for model fine-tuning."
    ],
    technologies: ["Python", "PyTorch", "Hugging Face Transformers", "PEFT", "BitsAndBytes", "ChromaDB", "LoRA"],
    links: {
      github: "https://github.com/Isaac-Abell/Artificial-Isaac"
    }
  },
  {
    title: "Rental Listings with Commute Filter",
    description: [
      `Developed a full-stack rental search platform where users must specify a destination (e.g., work or school) and can filter listings based on commute time, with a React front end and serverless backend`,
      `Engineered a hybrid data pipeline that scrapes real estate listings locally to bypass IP address blocks, storing data in AWS S3 for downstream processing.`,
      `Designed and deployed a serverless backend using AWS Lambda and a SQL database, which automatically updates when new data is available in S3 and exposes a REST API for real-time filtering.`
    ],
    technologies: ["Python", "SQL", "JavaScript", "React", "Docker", "GitHub Actions", "AWS"],
    links: {
      github: "https://github.com/Isaac-Abell/Find-Optimal-Commute-Rentals"
    }
  },
  {
    title: "Algorithm Visualizer",
    description: [
      "Built an interactive web tool to visualize classic algorithms (DFS, BFS, Quicksort, Heapsort, Binary Search) for students and developers.",
      "Implemented real-time animations of algorithm steps with React and Framer Motion, allowing step-by-step tracing of array and graph operations.",
    ],
    technologies: ["React", "TypeScript", "Framer Motion"],
    links: {
      live: "https://isaacabell.com/algo-visualizer/",
      github: "https://github.com/Isaac-Abell/algo-visualizer"
    }
  },
  {
    title: "Recursive Website Health Checker",
    description: [
      "Built a concurrent web crawler in Go that recursively discovers site links, including JavaScript-rendered pages, and generates detailed health reports.",
      "Added deep latency analysis, retry logic, and dependency graph visualization to make large sites easier to audit and debug.",
      "Integrated headless Chrome support, infinite-scroll handling, and GitHub Actions automation for recurring health checks and report generation.",
    ],
    technologies: ["Go", "Chrome", "Mermaid", "GitHub Actions"],
    links: {
      github: "https://github.com/Isaac-Abell/recursive-website-health-checker"
    }
  },
  {
    title: "Hockey Season Outcome Predictor",
    description: [
      "Built a hockey data analysis pipeline that collects NHL, MoneyPuck, Hockey-Reference, and salary cap data into a single team-season feature table.",
      "Engineered features covering roster demographics, turnover, scoring distribution, goalie performance, draft context, and schedule difficulty.",
      "Trained and validated predictive models with cross-validation, then generated future season predictions and report charts from the resulting ensemble.",
    ],
    technologies: ["Python", "Scikit-learn", "numpy", "pandas"],
    links: {
      github: "https://github.com/Isaac-Abell/hockey-season-outcome-predictor"
    }
  },
  {
    title: "TheStudentBase",
    description: [
      `Worked with a team of students to develop an online marketplace web app for University of Toronto students.`,
      `Built the majority of the front-end using JavaScript/React, deployed via AWS Amplify.`,
      `Implemented Spring Boot REST APIs for product listings and set up CI/CD pipelines using GitHub Actions for automated testing and deployment.`
    ],
    technologies: ["Java", "SpringBoot", "Javascript", "React", "Github Actions", "AWS"]
  }
];