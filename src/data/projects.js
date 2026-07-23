export const projects = [
  {
    id: "lease-easy",
    title: "LeaseEasy (AI Real Estate Support Bot)",
    description:
      "A context-aware virtual assistant integrated into a property management SaaS dashboard to automate landlord-tenant communications, billing queries, and maintenance logistics.",
    detailedDescription:
      "Built LeaseEasy AI, a context-aware virtual assistant integrated into a property management SaaS dashboard to automate landlord-tenant communications, billing queries, and maintenance logistics. Leveraged LLM Function Calling / Tool Use to allow the chatbot to securely query a mock database to check tenant payment statuses, log new maintenance tickets, and calculate late fees dynamically. Designed and developed a responsive React web interface featuring a sleek floating support widget, achieving seamless integration with the SaaS platform's dashboard. Engineered prompt templates and context-retrieval mechanisms that enable the bot to accurately interpret complex lease clauses and draft professional, legally-aligned responses for landlords.",
    challenge: "Enabling secure database queries through LLM chat interface without exposure to SQL Injection.",
    solution: "Used LLM Function Calling with pre-defined utility schemas to restrict model actions to specific parameter boundaries.",
    architecture: [
      "React.js frontend interface with custom floating chat widgets",
      "Node.js server orchestrating LLM tool definition and routing",
      "PostgreSQL mock database for tenant ledger records"
    ],
    codeSnippet: `// Example of LLM function definition schemas for secure execution
const tools = [{
  type: "function",
  function: {
    name: "get_payment_status",
    description: "Check the payment status of a tenant",
    parameters: {
      type: "object",
      properties: { tenantName: { type: "string" } },
      required: ["tenantName"]
    }
  }
}];`,
    dbType: "Mock PostgreSQL",
    framework: "React.js + Node.js",
    deployment: "Vercel / Local Host",
    tech: ["React.js", "Node.js", "TailwindCSS", "RESTful APIs"],
    liveUrl: "https://github.com/MakwanaSumit11/LeaseEasy",
    githubUrl: "https://github.com/MakwanaSumit11/LeaseEasy",
    accent: "cyan",
    image: null
  },
  {
    id: "split-easy",
    title: "SplitEasy (Expense Splitter)",
    description:
      "A dynamic, real-time expense-splitting mobile application featuring P2P payment routing, UPI intent integration, and offline persistence.",
    detailedDescription:
      "Designed and built a dynamic, real-time expense-splitting mobile application using Flutter and Firebase, featuring dual light/dark theme support with persistence using shared_preferences. Implemented instant P2P payment routing by constructing custom UPI deep links (upi://pay) and launching system-level payment sheets (Google Pay, PhonePe, Paytm) via url_launcher. Integrated QR code generation and live camera scanning using mobile_scanner to streamline group creation and instant joining flows. Optimized screen render performance and keyboard focus stability in Firestore-backed text inputs by caching database streams and resolving UI jitter. Secured data access using database security rules (firestore.rules), restricting read/write queries exclusively to validated group members.",
    challenge: "Synchronizing high-frequency realtime database state inputs without disrupting UI focus or input focus.",
    solution: "Cached stream updates and decoupled active text input controllers from Firestore document streams.",
    architecture: [
      "Flutter mobile application supporting iOS and Android",
      "Firebase Firestore realtime document syncing",
      "UPI Intent Integration for secure peer-to-peer checkouts"
    ],
    codeSnippet: `// Custom UPI payment routing trigger
final String upiUrl = "upi://pay?pa=\${payeeUpi}&pn=\${payeeName}&am=\${amount}&cu=INR";
if (await canLaunchUrl(Uri.parse(upiUrl))) {
  await launchUrl(Uri.parse(upiUrl));
}`,
    dbType: "Cloud Firestore",
    framework: "Flutter + Firebase",
    deployment: "App Store / Google Play",
    tech: ["Flutter", "Firebase", "Deep Linking", "UPI Integration"],
    liveUrl: "https://github.com/MakwanaSumit11/SplitEasy",
    githubUrl: "https://github.com/MakwanaSumit11/SplitEasy",
    accent: "violet",
    image: null
  },
  {
    id: "beat-it",
    title: "BeatIT (Music Feature Segregation)",
    description:
      "An interactive web app for Exploratory Data Analysis (EDA) and unsupervised machine learning clustering on music track datasets.",
    detailedDescription:
      "Developed an interactive Streamlit web application for Exploratory Data Analysis (EDA) and unsupervised machine learning on music datasets (e.g., Spotify Million Song Dataset). Engineered a data preprocessing pipeline using scikit-learn to standardize high-dimensional audio features (danceability, energy, valence, tempo, loudness) using StandardScaler for unbiased clustering. Implemented K-Means Clustering with configurable cluster counts (k=2 to 10) to segment music tracks into distinct sonic profiles based on mathematical feature similarities. Created interactive 2D and 3D scatter plots, Plotly correlation heatmaps, and genre distribution charts to allow users to visually inspect cluster separation and statistical profiles. Designed a content-based music recommendation framework using the resulting cluster groups as a foundation for personalized track suggestions.",
    challenge: "Visualizing high-dimensional (7+ features) data clusters in a user-understandable way.",
    solution: "Applied Principal Component Analysis (PCA) to project high-dimensional records into interactive 3D and 2D Scatter plots.",
    architecture: [
      "Streamlit dashboard server with interactive slider inputs",
      "Scikit-learn clustering and dimensionality reduction models",
      "Plotly visualization layer rendering vector clusters"
    ],
    codeSnippet: `# Standardizing audio metrics for K-Means Clustering
scaler = StandardScaler()
scaled_features = scaler.fit_transform(df[audio_cols])
kmeans = KMeans(n_clusters=k, random_state=42)
df['cluster'] = kmeans.fit_predict(scaled_features)`,
    dbType: "CSV / Local Cache",
    framework: "Python Streamlit",
    deployment: "Streamlit Community Cloud",
    tech: ["Python", "Streamlit", "K-Means Clustering", "Scikit-Learn"],
    liveUrl: "https://github.com/MakwanaSumit11/BeatIT_Genre_Segregration",
    githubUrl: "https://github.com/MakwanaSumit11/BeatIT_Genre_Segregration",
    accent: "purple",
    image: null
  }
];
