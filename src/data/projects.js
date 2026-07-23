export const projects = [
  {
    id: "restaurant-pos",
    title: "Restaurant POS System",
    description:
      "A point-of-sale system for restaurants with real-time order management, billing, and an AI chatbot that handles menu questions and upsells for staff.",
    detailedDescription:
      "Designed and deployed a highly responsive Point-of-Sale (POS) terminal system for restaurant dining flows. Integrated a specialized assistant that interfaces directly with order logs, enabling real-time conversational order modification and dynamic upsell suggestions based on client history.",
    challenge: "Managing concurrent state updates across multiple order stations while maintaining low latency.",
    solution: "Implemented optimistic UI updates in React coupled with transactional query locking in MySQL to avoid race conditions.",
    architecture: [
      "React SPA frontend with optimized rendering trees",
      "Python FastAPI server using WebSockets for real-time syncing",
      "MySQL server with structured indexing on transactions"
    ],
    codeSnippet: `// WebSocket push connection handling menu & order status updates
const socket = new WebSocket("ws://pos-api.sumit11.tech/orders/live");
socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  dispatch(updateOrderState(data.orderId, data.status));
};`,
    dbType: "MySQL RDS",
    framework: "React + FastAPI",
    deployment: "Docker Container + AWS ECS",
    tech: ["React", "Python", "MySQL", "FastAPI"],
    liveUrl: "https://github.com/MakwanaSumit11/restaurant-pos",
    githubUrl: "https://github.com/MakwanaSumit11/restaurant-pos",
    accent: "violet",
    image: "/project-pos.jpg"
  },
  {
    id: "food-delivery",
    title: "Food Delivery Microservices",
    description:
      "A microservices-based food delivery backend with independent services for orders, payments, and delivery tracking, containerized and monitored in production.",
    detailedDescription:
      "Engineered a distributed food delivery platform using domain-driven microservices. The backend is designed with independent fault-isolated domains for order dispatching, payment checkouts, and delivery runner tracking. Supported with full Prometheus & Grafana metrics telemetry.",
    challenge: "Handling distributed transactions and maintaining consistency across services during payment failure.",
    solution: "Used the Saga Pattern with orchestration steps to automatically coordinate compensating rollback actions.",
    architecture: [
      "Spring Boot core services with Netflix Eureka registry",
      "Apache Kafka as the async event message broker",
      "Prometheus & Grafana dashboard tracking latency & throughput"
    ],
    codeSnippet: `@KafkaListener(topics = "payment-events", groupId = "order-group")
public void handlePaymentStatus(PaymentEvent event) {
    if (event.isFailed()) {
        sagaOrchestrator.triggerRollback(event.getOrderId());
    }
}`,
    dbType: "PostgreSQL + Redis Cache",
    framework: "Spring Boot + Cloud",
    deployment: "Kubernetes (EKS) + Docker",
    tech: ["Spring Boot", "Docker", "Kafka", "Grafana"],
    liveUrl: "https://github.com/MakwanaSumit11/food-delivery-microservices",
    githubUrl: "https://github.com/MakwanaSumit11/food-delivery-microservices",
    accent: "cyan",
    image: "/project-food.jpg"
  },
  {
    id: "freelance-management",
    title: "Online Freelance Platform",
    description:
      "A platform connecting freelancers with clients — project postings, bidding, contracts, and payment milestones in one dashboard.",
    detailedDescription:
      "Created a robust online freelance portal streamlining the client-contractor workflow. Includes secure milestone-based bidding, active contracts tracking, feedback submission, and detailed project category filtering.",
    challenge: "Ensuring secure and tamper-proof storage of agreement terms and transaction histories.",
    solution: "Designed structured schemas with strict integrity constraints, backed by audit log tables updated via database triggers.",
    architecture: [
      "Java server running Spring Security with OAuth2 integration",
      "Relational MySQL schema with strict foreign key cascading",
      "Dynamic dashboards built with interactive UI status modules"
    ],
    codeSnippet: `// Spring Security authentication configuration filter
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    return http.authorizeHttpRequests(auth -> auth
        .requestMatchers("/api/contracts/**").authenticated())
        .oauth2ResourceServer(OAuth2Configurer::jwt).build();
}`,
    dbType: "MySQL Enterprise",
    framework: "Java Spring Boot",
    deployment: "AWS Beanstalk",
    tech: ["Java", "MySQL", "Spring Security"],
    liveUrl: "https://github.com/MakwanaSumit11/freelance-platform",
    githubUrl: "https://github.com/MakwanaSumit11/freelance-platform",
    accent: "purple",
    image: "/project-freelance.jpg"
  },
  {
    id: "ai-resume-assistant",
    title: "AI Resume Assistant",
    description:
      "An LLM-powered assistant that reviews resumes against a target job description and suggests concrete, prioritized edits.",
    detailedDescription:
      "Developed a generative AI utility that uses Large Language Models to parse, critique, and improve resumes. Users upload resumes, input target job requirements, and receive detailed semantic discrepancy reports and immediate phrasing recommendations.",
    challenge: "Reducing processing latency of LLM calls while preventing context window overflows for long resumes.",
    solution: "Implemented prompt chunking and concurrent processing pipelines using Python's asyncio.",
    architecture: [
      "Streamlit dynamic interface for rapid mockup testing",
      "LangChain for agentic model routing and prompts orchestration",
      "OpenAI GPT model APIs with custom temperature setups"
    ],
    codeSnippet: `async def critique_chunk(resume_text, job_desc):
    response = await openai.ChatCompletion.acreate(
        model="gpt-4o",
        messages=[{"role": "user", "content": prompt.format(resume_text, job_desc)}]
    )
    return response.choices[0].message.content`,
    dbType: "ChromaDB (Vector)",
    framework: "FastAPI + LangChain",
    deployment: "Vercel / AWS Lambda",
    tech: ["Python", "LLM", "LangChain", "FastAPI"],
    liveUrl: "https://github.com/MakwanaSumit11/ai-resume-assistant",
    githubUrl: "https://github.com/MakwanaSumit11/ai-resume-assistant",
    accent: "violet",
    image: "/project-resume.jpg"
  }
];
