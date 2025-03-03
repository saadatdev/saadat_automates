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
    categories: ('tool' | 'crm' | 'bot' | 'ai')[]; // Changed to array of categories
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
      categories: ["crm", "tool"], // Can have multiple categories
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
      image: "/tool1.png",
      technologies: ["Zapier", "Stripe", "Automation", "Invoicing"],
      categories: ["tool"],
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
      categories: ["crm"],
      loomVideoUrl: "https://www.loom.com/embed/2930bc8b175c4607bffc0a4456592f7d"
    },
    {
      id: 4,
      title: "Automation for GHL & Google Sheets via Zapier",
      description: "Created automated integration of Sheets and GHL.",
      longDescription: "Integrated the workflow in Google sheet with GHL , then create a zap to automate this process.",
      image: "/ghlZapier.png",
      technologies: ["Zapier", "GHL", "Google Sheets", "Automation"],
      categories: ["tool", "crm"],
      duration: "6 months",
      loomVideoUrl: "https://www.loom.com/embed/2930bc8b175c4607bffc0a4456592f7d",
      rating: "4.7/5.0",
    },
    {
        id: 5,
        title: "AI-Powered Analytics Dashboard",
        description: "Real-time analytics platform with AI-driven insights and predictive modeling capabilities.",
        longDescription: "Built a sophisticated analytics dashboard that leverages machine learning algorithms to provide actionable business insights and forecasting.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
        technologies: ["TensorFlow", "React", "Python", "AWS"],
        categories: ["ai"],
        liveUrl: "https://project2.com",
        duration: "3 months",
        rating: "4.8/5.0",
      },
      {
        id: 6,
        title: "Blog Generation Automation in Make.com",
        description: "Developed an advanced automation system that generates SEO-optimized blog posts based on the latest Google Trends. ",
        longDescription: "This automation streamlines content creation by identifying trending keywords relevant to a client's industry using Google Trends. It then generates a fully formatted, SEO-optimized blog post, complete with structured HTML and AI-generated graphics. Once the blog is ready, the system extracts key highlights to create engaging social media posts for Twitter, Facebook, and Instagram. These posts are paired with relevant graphics and scheduled for automated publishing. This project significantly reduces manual effort, enhances content consistency, and maximizes online visibility.",
        image: "/makeblog.png",
        technologies: ["Make.com","API Integration", "Automation"],
        categories: ["ai","tool"],
        duration: "1 week",
        rating: "4.8/5.0",
        loomVideoUrl: "https://www.loom.com/embed/74406010eebb44b5859c69ce8cf18e5f",
      },
      {
        id: 7,
        title: "Automated CRM & Workflow Management for a Roofing Company",
        description: "Developed a Monday.com-based CRM and workflow management system for a roofing company. Integrated automation to streamline lead management, production tracking, and QuickBooks synchronization.",
        longDescription: "his project involved creating a custom CRM and workflow automation system within Monday.com for a roofing company. The system includes multiple tables to manage leads, contacts, deals, and production tasks. It automates lead filtering, appointment tracking, and deal conversion, ensuring seamless workflow progression. Additionally, a CRM dashboard was designed to provide key business insights. Internal Monday.com automations were implemented to enhance efficiency, and QuickBooks integration was established to automate financial processes. This solution significantly improves operational management and reduces manual workload.",
        image: "/monday1.png",
        technologies: ["Monday.com","CRM Development", "Quickbooks" , "Dashboard creation"],
        categories: ["crm"],
        duration: "3 weeks",
        rating: "4.8/5.0",
        loomVideoUrl: "https://www.loom.com/embed/df5399ddf5ad472fac66f1a9a7ecb65e",
      },
      {
        id: 8,
        title: "Twilio Integration with Google sheets via App Script",
        description: "Developed a custom webhook-based automation that logs incoming messages into Google Sheets using Apps Script. This approach bypassed errors from a previous method and ensured seamless data processing.",
        longDescription: `I built a Google Apps Script-based automation to capture and log messages into Google Sheets whenever they arrive. Instead of using a pre-existing method that caused multiple unknown errors, I implemented a custom webhook solution. This setup involves:

Creating a Webhook URL to trigger whenever a message is received.
Writing a Google Apps Script to handle the webhook call.
Extracting relevant data and adding it as a new row in Google Sheets.
This lightweight and efficient automation ensures reliable data capture without manual intervention. 🚀`,
        image: "/TWILIO AU.png",
        technologies: ["Twilio","App Script", "Google sheets"],
        categories: ["tool"],
        duration: "1 day",
        rating: "5.0/5.0",
        loomVideoUrl: "https://www.loom.com/embed/02a329d3c82f418b82ba344d769c9160",
      },
      {
        id: 9,
        title: "Invoice Generation Automation with Pabbly Connect",
        description: "Developed order and inventory management automations using Pabbly Connect and Latenode to streamline order processing for Shopify and WooCommerce stores.",
        longDescription: `This project involved creating Shopify and WooCommerce order management automations using Pabbly Connect and Latenode. Key functionalities include:

Webhook Integration to capture new and canceled orders.
Data Formatting & Processing to organize order details.
Google Sheets Sync to log order statuses, cancellations, and inventory updates.
These automations help store owners efficiently track and manage orders with minimal manual effort. The project demonstrates expertise in Shopify, WooCommerce, and multiple automation platforms, including Zapier, Make.com, Pabbly Connect, and Latenode.`,
        image: "/pabbly.png",
        technologies: ["Pabbly Connect","Shopify", "Invocing" , "App Script"],
        categories: ["tool"],
        duration: "4 days",
        rating: "4.6/5.0",
        loomVideoUrl: "https://www.loom.com/embed/df2cd15672d64e05994dfc3b5cd9f64b",
      },
      {
        id: 10,
        title: "Creating and Automating CRM system in Google Sheets",
        description: "Built Google Sheets-based automations for a medical tracking system and a GoHighLevel booking system. Integrated automated email reminders, payment tracking, and patient follow-ups using Zapier, Apps Script, and APIs.",
        longDescription: `This project involved developing advanced Google Sheets automations for two main use cases:

1. Medical Patient Tracking & Email Automation:
Patients submit a form on the client’s medical website, which logs their details in Google Sheets.
The client qualifies patients for medication, triggering automated email notifications.
A 4-month medication cycle is tracked, sending patients reminders at key milestones.
Patients receive automated emails for medication updates, progress tracking, and feedback collection.
2. Booking & Payment Automation (GoHighLevel & Stripe):
Integrated GoHighLevel CRM with Google Sheets via API to track bookings.
Used a combination of Zapier & Google Apps Script to automatically generate Stripe invoices.
Implemented automated payment follow-ups, sending reminders if payment isn’t completed within 7 days.
Post-event feedback emails are sent automatically.
These automations streamline client workflows, reducing manual effort while ensuring seamless tracking of patients, bookings, and payments.`,
        image: "/bob.png",
        technologies: ["App Script","CRM Development", "GHL" , "Dashboard creation"],
        categories: ["crm"],
        duration: "4 weeks",
        rating: "4.9/5.0",
        loomVideoUrl: "https://www.loom.com/embed/98f2678a77484a69a0d20e8dcc9748b6",
      },
  ];