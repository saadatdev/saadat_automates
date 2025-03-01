// projectsData.ts
interface Project {
    id: number;
    title: string;
    description: string;
    longDescription?: string;
    technologies: string[];
    loomVideoUrl?: string;
    liveUrl?: string;
    githubUrl?: string;
    useCases?: string[];
    challenges?: string[];
    outcomes?: string[];
    image?: string;
    category: 'web' | 'mobile' | 'automation' | 'ai';
    rating?: string;
    duration?: string;
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "GHL Automation Suite",
      description: "End-to-end solution using GoHighLevel for streamlined client communication and marketing automation.",
      longDescription: "Designed and implemented an end-to-end solution using GoHighLevel (GHL) to automate and streamline client communication and marketing processes.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
      technologies: ["GoHighLevel", "Zapier", "Google Sheets", "API Integration"],
      category: "automation",
      liveUrl: "https://project1.com",
      githubUrl: "https://github.com/project1",
      duration: "Ongoing",
      rating: "4.9/5.0",
      useCases:["Automated client onboarding","Streamlined client communication"],
      loomVideoUrl: "https://www.loom.com/embed/34d002105a914920b9eab29585f94f82"
    },
    {
      id: 2,
      title: "Automated Stripe Payment & Invoicing with Zapier",
      description: "Integrated Stripe with Zapier to automate recurring payments and manage subscriptions. ",
      longDescription: "I developed a seamless Zapier automation to streamline Stripe payments and invoicing. The system automatically detects whether a customer already exists in Stripe, ensuring efficient customer management. If found, it generates an invoice; if not, it creates a new customer before processing the payment. Additionally, the automation integrates with Keygen to fetch software purchase details, ensuring accurate transaction handling. This setup eliminates manual invoicing, reduces errors, and enhances the overall payment workflow.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
      technologies: ["Zapier", "Stripe", "Automation", "Invoicing"],
      category: "automation",
      duration: "2 days",
      rating: "4.8/5.0",
      loomVideoUrl: "https://www.loom.com/embed/34d002105a914920b9eab29585f94f82"
    },
    {
      id: 3,
      title: "Client Portal System",
      description: "Custom portal solution combining Softr's frontend capabilities with Airtable's database.",
      longDescription: "Built a comprehensive client portal that seamlessly integrates Softr's intuitive frontend with Airtable's robust database capabilities.",
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=500&q=80",
      technologies: ["Softr", "Airtable", "API Integrations", "Zapier"],
      category: "web",
      githubUrl: "https://github.com/project3",
      duration: "Ongoing",
    },
    {
      id: 4,
      title: "Mobile Task Manager",
      description: "Cross-platform mobile app for advanced task and project management.",
      longDescription: "Developed a feature-rich mobile application for task management with real-time collaboration features.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&q=80",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      category: "mobile",
      liveUrl: "https://project4.com",
      githubUrl: "https://github.com/project4",
      duration: "6 months",
      rating: "4.7/5.0",
    },
    {
        id: 5,
        title: "AI-Powered Analytics Dashboard",
        description: "Real-time analytics platform with AI-driven insights and predictive modeling capabilities.",
        longDescription: "Built a sophisticated analytics dashboard that leverages machine learning algorithms to provide actionable business insights and forecasting.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
        technologies: ["TensorFlow", "React", "Python", "AWS"],
        category: "ai",
        liveUrl: "https://project2.com",
        duration: "3 months",
        rating: "4.8/5.0",
      },
  ];