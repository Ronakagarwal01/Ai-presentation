/**
 * Central Database & Configuration for EEDI Agentic AI Suite
 * Contains:
 * 1. Realistic Role & JD Data (Job Role, Job Description, Required Skills, Technologies, Responsibilities, Experience Level)
 * 2. Question Bank (Technical, HR/Behavioral, Scenario-based with Easy/Medium/Hard difficulties)
 * 3. Expected Answers & Key Points (Important Concepts, Keywords, Correct & Incorrect/Penalty Conditions)
 * 4. EEDI Evaluation Parameters & Scoring Rules (Technical 30%, Problem Solving 25%, Communication 20%, Critical Thinking 15%, Professionalism 10%)
 * 5. Real Student Data Storage & Trainer Verification
 */

const EEDI_CONFIG = {
  version: "2.4.0",
  defaultWeights: {
    technical: 30,       // Technical Knowledge (30%)
    problemSolving: 25,  // Problem Solving (25%)
    communication: 20,   // Communication (20%)
    criticalThinking: 15,// Critical Thinking (15%)
    professionalism: 10  // Professionalism (10%)
  },
  additionalParameters: [
    "Role Relevance",
    "Evidence Grounding",
    "Confidence & Coherence",
    "Time Management"
  ]
};

// Comprehensive Roles & JDs Database
const ROLES_DATABASE = {
  "data-science-ai": {
    id: "data-science-ai",
    title: "Data Scientist / Machine Learning Engineer",
    domain: "Artificial Intelligence & Data Science",
    experienceLevel: "Mid to Senior (3-6 Years)",
    experienceLevelDetails: "3+ years designing production ML pipelines, model evaluation, and feature engineering.",
    jdSummary: "Seeking an applied Data Scientist / ML Engineer to design predictive models, evaluate machine learning pipelines, build vector-grounded RAG architectures, and deploy scalable inference microservices. The candidate must deeply understand supervised vs unsupervised algorithms, loss metrics, and feature drift.",
    requiredSkills: [
      "Machine Learning Algorithms",
      "Supervised & Unsupervised Learning",
      "Python (Pandas, NumPy, Scikit-Learn)",
      "Model Evaluation (ROC-AUC, Precision, Recall)",
      "Deep Learning (PyTorch or TensorFlow)",
      "Vector Databases (FAISS, ChromaDB)",
      "RAG Architecture & Embeddings",
      "Feature Engineering & Cross-Validation"
    ],
    technologies: [
      "Python 3.11+",
      "Scikit-Learn",
      "PyTorch",
      "FAISS",
      "LangChain / LangGraph",
      "FastAPI",
      "MLflow",
      "Pandas",
      "Docker"
    ],
    responsibilities: [
      "Architect end-to-end training pipelines for classification, regression, and clustering tasks",
      "Formulate diagnostic loss functions and evaluate models using rigorous cross-validation",
      "Implement Retrieval-Augmented Generation (RAG) pipelines with vector search to eliminate hallucinations",
      "Monitor production models for concept drift, data distribution shift, and inference latency"
    ],
    questionBank: [
      {
        id: "ds-q1",
        category: "Technical",
        difficulty: "Medium",
        question: "Explain the difference between supervised and unsupervised learning, providing real-world examples for each.",
        expectedAnswer: "Supervised learning trains models on labeled input-output pairs to learn a mapping function for prediction (such as classification or regression), evaluated against known ground-truth targets. Real-world examples include spam email filtering (binary classification) and real estate price forecasting (regression). In contrast, unsupervised learning discovers hidden patterns, clusters, or underlying feature distributions in unlabeled datasets without predefined outcome targets. Real-world examples include customer segmentation in e-commerce using K-Means clustering and anomaly detection in financial fraud analytics.",
        importantConcepts: [
          "Labeled datasets with explicit target labels vs Unlabeled datasets without ground-truth targets",
          "Objective: Function approximation / mapping (Supervised) vs Pattern discovery / clustering (Unsupervised)",
          "Supervised sub-tasks: Classification and Regression",
          "Unsupervised sub-tasks: Clustering (e.g., K-Means, DBSCAN) and Dimensionality Reduction (PCA)",
          "Concrete real-world use case for Supervised (e.g., spam detection, price prediction)",
          "Concrete real-world use case for Unsupervised (e.g., customer segmentation, anomaly detection)"
        ],
        keywords: [
          "supervised", "unsupervised", "labeled", "unlabeled", "ground truth", 
          "target", "classification", "regression", "clustering", "k-means", "patterns", "examples"
        ],
        correctConditions: "Student clearly contrasts labeled vs unlabeled data, explicitly distinguishes prediction from pattern discovery, and provides valid concrete real-world examples for both paradigms.",
        incorrectConditions: "Penalty applied if student simply echoes/copies the question prompt without substance, rambles about unrelated topics (e.g. software deployment, server hosting, hardware shut down), confuses supervised with unsupervised labels, or fails to provide examples.",
        sampleGoodResponse: "Supervised learning operates on labeled training data where each input is paired with a target outcome, aiming to predict targets for unseen data (e.g., medical diagnosis classification or house price regression). Unsupervised learning works with unlabeled datasets to discover intrinsic structures or groupings without predefined answers (e.g., customer cohort clustering via K-Means or dimensionality reduction via PCA).",
        sampleBadResponse: "v supervised and unsupervised learning, providing real-world examples for each. Deployment is complete ONLY after the backend is actually reachable over the public internet and the mobile app works while my laptop is completely shut down."
      },
      {
        id: "ds-q2",
        category: "Technical",
        difficulty: "Hard",
        question: "Explain the bias-variance tradeoff and how L1 (Lasso) and L2 (Ridge) regularization help prevent overfitting.",
        expectedAnswer: "The bias-variance tradeoff describes the conflict between high bias (underfitting due to oversimplified assumptions) and high variance (overfitting due to excessive sensitivity to training noise). Regularization adds a penalty term to the loss function to constrain model complexity. L1 (Lasso) adds the absolute sum of coefficients (λ Σ|w|), driving non-essential coefficients to exact zero for automatic feature selection. L2 (Ridge) adds the squared sum of coefficients (λ Σw²), shrinking weights toward zero without eliminating them, which effectively handles multicollinearity and stabilizes predictions.",
        importantConcepts: [
          "Bias (underfitting, error from wrong assumptions)",
          "Variance (overfitting, sensitivity to training data noise)",
          "Loss function penalty term (λ / regularization parameter)",
          "L1 Lasso (L1 norm, sparsity, feature selection)",
          "L2 Ridge (L2 norm, coefficient shrinkage, multicollinearity reduction)"
        ],
        keywords: [
          "bias", "variance", "tradeoff", "overfitting", "underfitting", "regularization", 
          "l1", "l2", "lasso", "ridge", "penalty", "coefficients", "sparsity"
        ],
        correctConditions: "Explains underfitting vs overfitting trade-off and mathematically or conceptually describes how L1 drives weights to zero while L2 shrinks weights.",
        incorrectConditions: "Confuses L1 with L2, states regularization increases variance, or writes superficial definitions without explaining the penalty mechanism."
      },
      {
        id: "ds-q3",
        category: "Scenario-based",
        difficulty: "Hard",
        question: "Your production fraud detection model has 98% accuracy on historical data, but the business team reports that high-value fraudulent transactions are slipping through. How do you diagnose and fix this issue?",
        expectedAnswer: "High accuracy in fraud detection is misleading due to severe class imbalance (e.g., 99% legitimate, 1% fraud). The model likely suffers from high false negatives, having learned a trivial majority-class classifier. Diagnostic steps: 1) Switch from accuracy to Precision, Recall, F1-score, and PR-AUC. 2) Analyze the confusion matrix to evaluate false negative cost. 3) Remediation: Tune decision threshold toward higher sensitivity; rebalance training data using SMOTE, focal loss, or class weights; engineer transactional behavioral features (velocity, geographic IP jump); and implement a tiered human-in-the-loop review for high-value transactions.",
        importantConcepts: [
          "Severe class imbalance flaw in accuracy metric",
          "False negative rate & high cost of missed fraud",
          "Precision, Recall, F1-score, PR-AUC analysis",
          "Threshold tuning & cost-sensitive learning / focal loss",
          "Data resampling (SMOTE / undersampling) and feature engineering"
        ],
        keywords: [
          "class imbalance", "accuracy paradox", "precision", "recall", "f1-score", 
          "false negatives", "threshold", "smote", "class weights", "pr-auc"
        ],
        correctConditions: "Identifies that class imbalance renders accuracy meaningless and prescribes metric replacement (Recall/PR-AUC) along with concrete remediation strategies.",
        incorrectConditions: "Suggests relying on overall accuracy, ignores class imbalance, or offers purely generic advice with no ML metrics."
      },
      {
        id: "ds-q4",
        category: "HR/Behavioral",
        difficulty: "Medium",
        question: "How do you explain the predictions and potential risks of a complex machine learning model to non-technical business stakeholders?",
        expectedAnswer: "I begin by translating technical metrics into business impact and ROI rather than discussing loss functions. I use interpretability frameworks like SHAP values or feature importance charts to show which specific inputs drove a decision in plain language. I present confidence intervals, clearly explain false positive vs false negative risks in dollars or user friction, and establish guardrails for human review so stakeholders feel confident in governance.",
        importantConcepts: [
          "Translating technical metrics to business outcomes / ROI",
          "Interpretability techniques (SHAP, LIME, feature importance)",
          "Communicating risk and trade-offs (False positives vs False negatives)",
          "Governance, transparency, and human-in-the-loop safeguards"
        ],
        keywords: [
          "business impact", "stakeholders", "interpretability", "shap", "feature importance", 
          "risk", "transparency", "trade-offs", "roi"
        ],
        correctConditions: "Demonstrates clear communication, use of interpretability tools, and focus on business decision-making.",
        incorrectConditions: "Suggests overwhelming business teams with raw math/formulas or dismissing stakeholder concerns."
      }
    ]
  },

  "senior-python-backend": {
    id: "senior-python-backend",
    title: "Senior Backend Python Engineer",
    domain: "Backend & Distributed Systems",
    experienceLevel: "Senior (4-7 Years)",
    experienceLevelDetails: "4+ years building high-throughput Python APIs, microservices, and relational database architectures.",
    jdSummary: "Seeking a Senior Backend Python Engineer to architect, build, and optimize scalable distributed microservices, APIs, and data ingestion pipelines. You will lead database optimization, asynchronous workflows with Asyncio and Celery, Docker containerization, and AWS infrastructure.",
    requiredSkills: [
      "Python 3 (Asyncio & Object-Oriented Design)",
      "FastAPI or Django REST Framework",
      "PostgreSQL Query Optimization & Indexing",
      "Docker & Container Security",
      "Redis Caching & Distributed Locks",
      "Microservices Architecture & REST/gRPC",
      "Asynchronous Concurrency & Task Queues (Celery)",
      "AWS Cloud Infrastructure & CI/CD"
    ],
    technologies: [
      "Python 3.12",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
      "AWS (EC2, RDS, S3)",
      "Celery",
      "SQLAlchemy",
      "Git"
    ],
    responsibilities: [
      "Design resilient RESTful microservices handling 10k+ requests/sec",
      "Optimize complex PostgreSQL queries, B-Tree indexes, and eliminate N+1 bottlenecks",
      "Implement asynchronous workers using Celery, Redis, and Python Asyncio",
      "Containerize applications with multi-stage Docker builds and automate CI/CD deployments"
    ],
    questionBank: [
      {
        id: "py-q1",
        category: "Technical",
        difficulty: "Medium",
        question: "How does B-Tree indexing work in PostgreSQL, and under what circumstances does adding an index degrade database performance?",
        expectedAnswer: "A B-Tree index maintains a balanced, self-sorting tree of key-pointer nodes, enabling point lookups and range queries in O(log n) time. However, indices degrade performance in three major scenarios: 1) High-volume write workloads: Every INSERT, UPDATE, or DELETE requires rebalancing index trees and updating WAL (write amplification). 2) Low-cardinality columns: On boolean or status fields with few unique values, index traversal is slower than sequential scans. 3) Memory bloat: Excessive unused indices consume buffer pool RAM, evicting active data pages.",
        importantConcepts: [
          "B-Tree balanced tree structure and O(log n) search complexity",
          "Write amplification and overhead on INSERT/UPDATE/DELETE",
          "Low cardinality columns where sequential scan is faster",
          "Memory cache overhead and index bloat"
        ],
        keywords: [
          "b-tree", "index", "o(log n)", "write amplification", "insert", "update", 
          "cardinality", "sequential scan", "memory", "buffer pool", "wal"
        ],
        correctConditions: "Explains balanced tree mechanics and accurately articulates write amplification and low cardinality drawbacks.",
        incorrectConditions: "Claims indices speed up write operations or fails to explain write amplification."
      },
      {
        id: "py-q2",
        category: "Technical",
        difficulty: "Hard",
        question: "How does Python Asyncio event loop handle concurrency, and what causes event loop starvation in production?",
        expectedAnswer: "Python asyncio runs a single-threaded cooperative multitasking event loop. Coroutines yield control back to the loop at 'await' points while waiting for non-blocking I/O (like network or DB sockets). Event loop starvation occurs when CPU-bound operations (heavy computation, image processing, regex) or synchronous blocking I/O calls (e.g. standard time.sleep, requests.get, or non-async DB drivers) run on the main loop thread, halting all concurrent tasks. To prevent starvation, CPU-intensive or blocking tasks must be offloaded to an executor using asyncio.to_thread or run_in_executor with a ProcessPoolExecutor.",
        importantConcepts: [
          "Single-threaded cooperative multitasking event loop",
          "Yielding control via await during non-blocking socket I/O",
          "Root cause of starvation: Blocking calls (synchronous I/O or heavy CPU work) on the main thread",
          "Remediation: asyncio.to_thread, ThreadPoolExecutor, ProcessPoolExecutor"
        ],
        keywords: [
          "event loop", "asyncio", "single-threaded", "cooperative", "await", 
          "starvation", "blocking", "cpu-bound", "run_in_executor", "to_thread"
        ],
        correctConditions: "Differentiates cooperative non-blocking I/O from blocking calls and prescribes offloading to thread/process pools.",
        incorrectConditions: "Claims asyncio runs on multiple parallel OS threads or confuses async I/O with multiprocessing."
      },
      {
        id: "py-q3",
        category: "Scenario-based",
        difficulty: "Hard",
        question: "During a flash sale, your API server CPU shoots to 100% and response latency jumps from 50ms to 8 seconds. How do you systematically triage and resolve this outage?",
        expectedAnswer: "Triage workflow: 1) Rapid mitigation: Enable rate limiting / DDoS shielding via Cloudflare/Nginx, shed non-critical traffic with load balancer circuit breakers. 2) Diagnostics: Inspect APM metrics (Datadog/NewRelic) and run 'pg_stat_activity' to identify connection pool exhaustion or unindexed slow queries locking tables. 3) Database remediation: Kill blocking queries, offload read-heavy traffic to Redis caches and PostgreSQL read replicas. 4) Code fix: Check for N+1 ORM queries or unpaginated endpoints, add composite indexes, and queue writes asynchronously via Celery/RabbitMQ.",
        importantConcepts: [
          "Immediate mitigation (rate limiting, load shedding)",
          "Root cause diagnostics (APM, pg_stat_activity, connection pools)",
          "Caching & Read replica offloading",
          "Asynchronous decoupling via message queues"
        ],
        keywords: [
          "rate limiting", "pg_stat_activity", "connection pool", "slow query", 
          "redis", "cache", "read replica", "celery", "circuit breaker"
        ],
        correctConditions: "Follows structured incident management: stop the bleeding -> identify bottleneck -> offload DB with caching -> fix code.",
        incorrectConditions: "Suggests restarting servers blindly or rewriting the entire codebase during an active outage."
      }
    ]
  },

  "devops-cloud": {
    id: "devops-cloud",
    title: "Cloud DevOps & Platform Engineer",
    domain: "Cloud Infrastructure & Platform Engineering",
    experienceLevel: "Senior (4-8 Years)",
    experienceLevelDetails: "4+ years deploying Kubernetes clusters, Infrastructure-as-Code with Terraform, and zero-trust CI/CD pipelines.",
    jdSummary: "Seeking an experienced DevOps & Platform Engineer to manage Kubernetes clusters, automate infrastructure with Terraform, build zero-trust CI/CD pipelines, and implement production observability with Prometheus and Grafana.",
    requiredSkills: [
      "Kubernetes Architecture (Ingress, Pods, Services, HPA)",
      "Docker Multi-Stage Containerization",
      "Terraform & Infrastructure as Code (IaC)",
      "CI/CD Automation (GitHub Actions / GitLab CI)",
      "AWS / Cloud Platform Infrastructure",
      "Monitoring & Observability (Prometheus, Grafana)",
      "Linux System Administration & Networking",
      "Container Security & Non-Root Hardening"
    ],
    technologies: [
      "Kubernetes (EKS / GKE)",
      "Terraform",
      "Docker",
      "Helm",
      "Prometheus & Grafana",
      "AWS (VPC, IAM, EKS, S3)",
      "GitHub Actions",
      "Linux / Bash",
      "ArgoCD"
    ],
    responsibilities: [
      "Maintain highly available Kubernetes clusters across multiple availability zones",
      "Manage Infrastructure as Code with Terraform and state locking",
      "Harden CI/CD deployment pipelines with automated security scans and SAST",
      "Implement distributed tracing, alerting rules, and incident SLA runbooks"
    ],
    questionBank: [
      {
        id: "do-q1",
        category: "Technical",
        difficulty: "Medium",
        question: "How does Terraform remote state locking work, and what problems occur if state locking is not enabled in a multi-engineer team?",
        expectedAnswer: "Terraform remote state stores the infrastructure blueprint in a shared backend (like AWS S3) paired with a locking mechanism (like AWS DynamoDB). When a command like 'terraform apply' runs, it acquires a unique LockID in DynamoDB. Without state locking, concurrent runs by different engineers or CI/CD pipelines can corrupt the state file, cause conflicting resource mutations, or accidentally overwrite infrastructure changes, leading to state desynchronization and production outages.",
        importantConcepts: [
          "Shared remote backend (e.g., S3) and locking backend (e.g., DynamoDB)",
          "LockID acquisition and release lifecycle",
          "Concurrency race conditions and state corruption without locking",
          "Risk of conflicting updates and orphaned cloud resources"
        ],
        keywords: [
          "terraform", "state file", "remote backend", "s3", "dynamodb", 
          "state locking", "concurrency", "corruption", "lockid", "race condition"
        ],
        correctConditions: "Explains how DynamoDB LockID prevents concurrent mutations and outlines the risk of state corruption.",
        incorrectConditions: "Believes Git version control alone is sufficient for Terraform state synchronization."
      },
      {
        id: "do-q2",
        category: "Technical",
        difficulty: "Hard",
        question: "Explain the lifecycle and routing of a packet entering a Kubernetes cluster through an Ingress controller down to a Pod container.",
        expectedAnswer: "1) The external client packet hits the Cloud Load Balancer (AWS ALB / GCP LB). 2) The load balancer routes to NodePorts on cluster nodes. 3) Kube-proxy / iptables (or eBPF) directs the packet to an active Ingress Controller Pod (e.g. NGINX Ingress). 4) The Ingress controller evaluates Host header and path routing rules, performing TLS termination. 5) It queries Kubernetes Endpoints / EndpointSlices for healthy backend Pod IPs. 6) The packet is routed directly across the CNI network overlay (like Calico or AWS VPC CNI) to the target container's network namespace and target port.",
        importantConcepts: [
          "External Load Balancer -> NodePort / Ingress Pod",
          "Ingress Controller rule evaluation & TLS termination",
          "EndpointSlices / Kube-proxy service discovery",
          "CNI network overlay routing to Container network namespace"
        ],
        keywords: [
          "ingress", "load balancer", "nodeport", "kube-proxy", "endpoints", 
          "tls termination", "cni", "network namespace", "iptables", "pod ip"
        ],
        correctConditions: "Details the step-by-step path from external LB to Ingress Controller, EndpointSlice lookup, and CNI delivery.",
        incorrectConditions: "Omits the Ingress controller or CNI overlay, or treats Services as physical network nodes."
      }
    ]
  },

  "frontend-react": {
    id: "frontend-react",
    title: "Senior Frontend React / Next.js Engineer",
    domain: "Frontend Web Engineering",
    experienceLevel: "Senior (4-6 Years)",
    experienceLevelDetails: "4+ years building production React applications, Next.js architectures, and optimizing Web Vitals.",
    jdSummary: "Looking for a Senior Frontend Developer specializing in React, Next.js, TypeScript, and high-performance Web Vitals. You will build reactive user interfaces, optimize client-side bundle sizes, and manage state architecture.",
    requiredSkills: [
      "React 18+ (Hooks, Concurrent Mode, Virtual DOM)",
      "Next.js App Router (Server & Client Components)",
      "TypeScript & Modern ESNext",
      "State Management (Zustand, Redux Toolkit, Context)",
      "Core Web Vitals Optimization (LCP, CLS, INP)",
      "CSS Architecture & Responsive Design",
      "REST & GraphQL Integration",
      "Frontend Testing (Vitest, React Testing Library, Playwright)"
    ],
    technologies: [
      "React",
      "Next.js 14+",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Vite",
      "HTML5 / CSS3",
      "Playwright",
      "Git"
    ],
    responsibilities: [
      "Design and maintain performant component libraries and page layouts",
      "Optimize bundle sizes, code splitting, and asset delivery to score 95+ on Lighthouse",
      "Architect clean client and server-side state machines",
      "Implement accessible (a11y), responsive web interfaces across devices"
    ],
    questionBank: [
      {
        id: "fe-q1",
        category: "Technical",
        difficulty: "Medium",
        question: "Explain the difference between Next.js React Server Components (RSC) and Client Components, and when to use each.",
        expectedAnswer: "React Server Components (RSC) execute exclusively on the server at request time or build time. They do not ship JavaScript to the client, reducing bundle size and enabling direct access to databases, files, and backend microservices securely without exposing secrets. Client Components (marked with 'use client') are rendered on the client (with initial SSR hydration) and are necessary whenever interactivity, state (useState, useReducer), lifecycle effects (useEffect), or browser APIs (localStorage, window) are required. Best practice is to keep components as Server Components by default, pushing Client Components to the leaves of the render tree.",
        importantConcepts: [
          "RSC server-only execution: Zero client JS bundle overhead",
          "Direct access to backend data sources in RSC",
          "Client Components ('use client') for interactivity, hooks, and browser APIs",
          "Architecture pattern: Server components wrapping interactive client leaves"
        ],
        keywords: [
          "react server components", "rsc", "client components", "use client", 
          "bundle size", "hydration", "usestate", "useeffect", "interactivity", "ssr"
        ],
        correctConditions: "Explains zero bundle JS benefit of RSC and identifies when 'use client' is required for state and browser APIs.",
        incorrectConditions: "Confuses RSC with standard SSR or claims RSC can use useState hooks."
      }
    ]
  },

  "fullstack-web": {
    id: "fullstack-web",
    title: "Full Stack Software Engineer",
    domain: "Full Stack Development",
    experienceLevel: "Mid-Level (3-5 Years)",
    experienceLevelDetails: "3+ years building full stack web applications with Node.js/Python and React.",
    jdSummary: "Seeking a versatile Full Stack Developer to build end-to-end web applications. You will create responsive frontends in React/TypeScript, develop backend RESTful APIs, manage relational databases, and configure CI/CD deployments.",
    requiredSkills: [
      "Frontend: React.js, TypeScript, HTML5/CSS3",
      "Backend: Node.js / Express or Python FastAPI",
      "Database: PostgreSQL or MySQL, Prisma / SQLAlchemy ORM",
      "Authentication: JWT, OAuth2, Session Management",
      "API Design: RESTful Standards & WebSockets",
      "Docker & Deployment Basics",
      "Git Version Control & CI/CD"
    ],
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Tailwind CSS",
      "Prisma",
      "Git"
    ],
    responsibilities: [
      "Develop responsive user interfaces and connect with backend endpoints",
      "Create secure, documented RESTful APIs with input validation",
      "Design normalized relational database schemas and manage migrations",
      "Write unit and integration tests across both frontend and backend codebases"
    ],
    questionBank: [
      {
        id: "fs-q1",
        category: "Technical",
        difficulty: "Medium",
        question: "How do you securely implement user authentication using JWT and Refresh Tokens in a modern web application?",
        expectedAnswer: "A secure JWT pattern uses a short-lived Access Token (e.g., 10-15 minutes) and a longer-lived Refresh Token (e.g., 7-30 days). The Access Token is sent in authorization headers for API requests. The Refresh Token should be stored in an HttpOnly, Secure, SameSite=Strict cookie to protect against XSS attacks. When the access token expires, the client calls a refresh endpoint with the cookie to issue a new access token. Refresh token rotation (invalidating previous tokens and detecting reuse) prevents token theft and replay attacks.",
        importantConcepts: [
          "Short-lived Access Token vs Long-lived Refresh Token",
          "HttpOnly, Secure, SameSite cookie storage to block XSS",
          "Token refresh endpoint & handshake lifecycle",
          "Refresh Token Rotation to mitigate token theft"
        ],
        keywords: [
          "jwt", "access token", "refresh token", "httponly", "cookie", 
          "xss", "csrf", "samesite", "token rotation", "expiration"
        ],
        correctConditions: "Mentions HttpOnly cookie for refresh token, short-lived access token, and explains how to prevent XSS/theft.",
        incorrectConditions: "Recommends storing sensitive JWT tokens in unencrypted localStorage without XSS protection."
      }
    ]
  },

  "cyber-security": {
    id: "cyber-security",
    title: "Cybersecurity & Incident Response Analyst",
    domain: "Information Security & SecOps",
    experienceLevel: "Mid to Senior (3-6 Years)",
    experienceLevelDetails: "3+ years analyzing security telemetry, vulnerability scanning, and incident response.",
    jdSummary: "Seeking a Cybersecurity Analyst to monitor enterprise security events, conduct vulnerability assessments, mitigate threats, and lead incident response triage following NIST frameworks.",
    requiredSkills: [
      "SIEM Tools & Log Telemetry (Splunk, Elastic)",
      "OWASP Top 10 Web Vulnerabilities",
      "Incident Response Lifecycle (NIST SP 800-61)",
      "Network Protocol Analysis & Wireshark",
      "Vulnerability Scanning & Penetration Testing Basics",
      "Identity & Access Management (IAM, MFA, Zero Trust)"
    ],
    technologies: [
      "Splunk",
      "Wireshark",
      "Nmap",
      "Burp Suite",
      "Linux",
      "Snort / Suricata",
      "CrowdStrike"
    ],
    responsibilities: [
      "Monitor SIEM alerts and triage suspicious security telemetry",
      "Conduct regular web application and network vulnerability assessments",
      "Execute incident response containment, eradication, and lessons-learned post-mortems",
      "Audit cloud IAM policies and enforce Zero Trust principles"
    ],
    questionBank: [
      {
        id: "sec-q1",
        category: "Technical",
        difficulty: "Medium",
        question: "Explain the difference between SQL Injection (SQLi) and Cross-Site Scripting (XSS), and how each is remediated.",
        expectedAnswer: "SQL Injection occurs on the database backend when untrusted user input is directly concatenated into a dynamic SQL query, allowing attackers to bypass authentication, read sensitive data, or drop tables. Remediation: Use parameterized queries (prepared statements) and ORMs. In contrast, Cross-Site Scripting (XSS) executes malicious scripts in the victim's client browser when an application reflects or stores unescaped user input in HTML. Remediation: Context-aware output encoding, Content Security Policy (CSP), and React-style automatic escaping.",
        importantConcepts: [
          "Target layer: Database backend (SQLi) vs Client browser (XSS)",
          "Impact: Data exfiltration / DB manipulation vs Session hijacking / defacement",
          "SQLi Defense: Parameterized queries / Prepared statements",
          "XSS Defense: Context-aware output encoding, Content Security Policy (CSP)"
        ],
        keywords: [
          "sqli", "sql injection", "xss", "cross-site scripting", "database", 
          "browser", "prepared statements", "parameterized queries", "encoding", "csp"
        ],
        correctConditions: "Clearly contrasts the execution target (DB vs Browser) and specifies prepared statements for SQLi and output encoding/CSP for XSS.",
        incorrectConditions: "Confuses which vulnerability affects the database vs the browser, or suggests regex blacklist filtering as the primary remediation."
      }
    ]
  }
};

// 7-Day Curriculum Templates mapped dynamically to roles and weak areas
const ROLE_CURRICULUM_GENERATOR = {
  generate(roleId, roleTitle, weakAreasText) {
    const roleKey = roleId || "senior-python-backend";
    const weakLines = weakAreasText.split("\n").filter(l => l.trim().length > 2);
    const topGap = weakLines[0] ? weakLines[0].replace(/\s*\(\d+\/\d+\)/, "").trim() : "Core Architectural Fundamentals";
    const secondGap = weakLines[1] ? weakLines[1].replace(/\s*\(\d+\/\d+\)/, "").trim() : "Hands-on Practical Execution";
    const thirdGap = weakLines[2] ? weakLines[2].replace(/\s*\(\d+\/\d+\)/, "").trim() : "Production System Resilience";

    // Dynamic tailored roadmaps per domain
    if (roleKey.includes("data-science") || roleTitle.toLowerCase().includes("data") || roleTitle.toLowerCase().includes("machine learning") || roleTitle.toLowerCase().includes("ai")) {
      return [
        {
          day: "Day 1 • Foundation",
          time: "⏱️ 45 Mins",
          title: `Root Cause Analysis: ${topGap}`,
          desc: `Deconstruct theoretical underpinnings, mathematical loss functions, and assumptions behind ${topGap}.`
        },
        {
          day: "Day 2 • Hands-on Lab",
          time: "⏱️ 60 Mins",
          title: "Scikit-Learn & Feature Engineering Pipeline",
          desc: "Build an end-to-end data preprocessing and cross-validation sandbox addressing feature leakage and class imbalance."
        },
        {
          day: "Day 3 • Deep Dive",
          time: "⏱️ 50 Mins",
          title: `Remediation Drill: ${secondGap}`,
          desc: `Tune hyperparameters, regularize models with L1/L2 penalties, and analyze PR-AUC curves to fix ${secondGap}.`
        },
        {
          day: "Day 4 • Real-World Scenario",
          time: "⏱️ 60 Mins",
          title: "Production RAG & Vector Embeddings Integration",
          desc: "Implement vector similarity search with FAISS or ChromaDB, verifying groundedness and hallucination suppression."
        },
        {
          day: "Day 5 • System Integration",
          time: "⏱️ 55 Mins",
          title: `End-to-End Application: ${thirdGap}`,
          desc: `Deploy a low-latency model inference service using FastAPI and Docker, handling live request payloads.`
        },
        {
          day: "Day 6 • Code Review & Edge Cases",
          time: "⏱️ 40 Mins",
          title: "Model Drift & Diagnostic Telemetry Audit",
          desc: "Benchmark inference latencies, simulate data distribution shifts, and configure Prometheus/MLflow alerts."
        },
        {
          day: "Day 7 • Mastery Verification",
          time: "⏱️ 50 Mins",
          title: "Timed Diagnostic Retest & Domain Benchmark",
          desc: `Complete a 50-minute timed retest to verify score recovery across ${topGap} and ${secondGap} from <50% to 85%+.`
        }
      ];
    }

    if (roleKey.includes("devops") || roleTitle.toLowerCase().includes("devops") || roleTitle.toLowerCase().includes("cloud")) {
      return [
        {
          day: "Day 1 • Foundation",
          time: "⏱️ 45 Mins",
          title: `Architecture Breakdown: ${topGap}`,
          desc: `Analyze cloud topologies, networking overlays, and root bottlenecks in ${topGap}.`
        },
        {
          day: "Day 2 • Hands-on Lab",
          time: "⏱️ 60 Mins",
          title: "Kubernetes Manifest & Ingress Routing Sandbox",
          desc: "Configure zero-downtime rolling updates, Ingress controllers, and Pod Disruption Budgets in an isolated cluster."
        },
        {
          day: "Day 3 • Deep Dive",
          time: "⏱️ 50 Mins",
          title: `Terraform IaC Hardening: ${secondGap}`,
          desc: `Implement remote state locking with DynamoDB, modularize configs, and resolve ${secondGap}.`
        },
        {
          day: "Day 4 • Real-World Scenario",
          time: "⏱️ 60 Mins",
          title: "CI/CD Pipeline Security & Container Hardening",
          desc: "Embed vulnerability scanning (Trivy), eliminate root privileges, and create multi-stage Docker builds."
        },
        {
          day: "Day 5 • System Integration",
          time: "⏱️ 55 Mins",
          title: `Prometheus & Grafana Observability: ${thirdGap}`,
          desc: `Create real-time alerting rules, SLA burn alerts, and cluster health dashboards to conquer ${thirdGap}.`
        },
        {
          day: "Day 6 • Disaster Recovery Drill",
          time: "⏱️ 45 Mins",
          title: "Chaos Engineering & Failover Simulation",
          desc: "Simulate node terminations and traffic spikes to verify auto-scaling (HPA) and failover recovery."
        },
        {
          day: "Day 7 • Mastery Verification",
          time: "⏱️ 50 Mins",
          title: "Production Infrastructure Diagnostic Retest",
          desc: `Validate mastery through a timed live cluster troubleshooting challenge targeting ${topGap}.`
        }
      ];
    }

    if (roleKey.includes("frontend") || roleTitle.toLowerCase().includes("frontend") || roleTitle.toLowerCase().includes("react")) {
      return [
        {
          day: "Day 1 • Foundation",
          time: "⏱️ 45 Mins",
          title: `Core Render Pipeline: ${topGap}`,
          desc: `Understand React Fiber reconciliation, Virtual DOM diffing, and common memory leaks in ${topGap}.`
        },
        {
          day: "Day 2 • Hands-on Lab",
          time: "⏱️ 60 Mins",
          title: "Profiler & Re-render Elimination Lab",
          desc: "Use React DevTools Profiler to isolate wasteful renders and apply precise memoization patterns."
        },
        {
          day: "Day 3 • Deep Dive",
          time: "⏱️ 50 Mins",
          title: `State Architecture & Next.js RSC: ${secondGap}`,
          desc: `Migrate monolithic client components into high-performance Server Components (RSC) to resolve ${secondGap}.`
        },
        {
          day: "Day 4 • Real-World Scenario",
          time: "⏱️ 60 Mins",
          title: "Core Web Vitals Optimization Drill",
          desc: "Optimize LCP, CLS, and INP metrics by refactoring image loading, code splitting, and font preloading."
        },
        {
          day: "Day 5 • System Integration",
          time: "⏱️ 55 Mins",
          title: `Component Resiliency & Testing: ${thirdGap}`,
          desc: `Write robust Playwright and Vitest tests to safeguard ${thirdGap} against regression.`
        },
        {
          day: "Day 6 • Polish & Accessibility",
          time: "⏱️ 40 Mins",
          title: "WCAG Accessibility & Design System Polish",
          desc: "Audit keyboard navigation, ARIA landmarks, and responsive breakpoints across all viewports."
        },
        {
          day: "Day 7 • Mastery Verification",
          time: "⏱️ 50 Mins",
          title: "Timed High-Performance UI Build Challenge",
          desc: `Build a production-grade interactive dashboard under 50 minutes, demonstrating full recovery in ${topGap}.`
        }
      ];
    }

    // Default / Backend Python / Full Stack
    return [
      {
        day: "Day 1 • Foundation",
        time: "⏱️ 45 Mins",
        title: `Root Cause Analysis: ${topGap}`,
        desc: `Study architectural fundamentals, underlying execution mechanics, and failure modes of ${topGap}.`
      },
      {
        day: "Day 2 • Hands-on Lab",
        time: "⏱️ 60 Mins",
        title: "Isolated Code Sandbox Implementation",
        desc: `Write focused unit tests and code examples to eliminate anti-patterns related to ${topGap}.`
      },
      {
        day: "Day 3 • Deep Dive",
        time: "⏱️ 50 Mins",
        title: `Optimization Strategies: ${secondGap}`,
        desc: `Analyze production benchmarks, edge cases, and architectural best practices addressing ${secondGap}.`
      },
      {
        day: "Day 4 • Real-World Scenario",
        time: "⏱️ 60 Mins",
        title: "End-to-End System Integration",
        desc: "Refactor a high-volume microservice component to handle concurrency, caching, and resiliency."
      },
      {
        day: "Day 5 • Security & Performance",
        time: "⏱️ 45 Mins",
        title: `Hardening & Resiliency Drill: ${thirdGap}`,
        desc: `Conduct stress testing and implement telemetry for ${thirdGap}.`
      },
      {
        day: "Day 6 • Code Review & Refactor",
        time: "⏱️ 40 Mins",
        title: "Production Best Practices & Clean Code",
        desc: "Review design patterns, static typing, and automated CI test suites."
      },
      {
        day: "Day 7 • Mastery Verification",
        time: "⏱️ 50 Mins",
        title: "Timed Diagnostic Retest & Milestone Review",
        desc: `Execute a timed diagnostic retest under pressure to verify complete mastery over ${topGap}.`
      }
    ];
  }
};

// LocalStorage Manager for Real Student Submissions & Trainer Verification
const RealStudentDataManager = {
  STORAGE_KEY: "eedi_real_student_data",

  getAll() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : this.getDefaultSeedData();
    } catch (e) {
      console.warn("Error reading student data:", e);
      return this.getDefaultSeedData();
    }
  },

  save(record) {
    const list = this.getAll();
    list.unshift(record);
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list));
    } catch (e) {
      console.warn("Storage full, trimming oldest entries:", e);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list.slice(0, 50)));
    }
    return record;
  },

  update(id, updates) {
    const list = this.getAll();
    const idx = list.findIndex(item => item.id === id);
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...updates, updatedAt: new Date().toISOString() };
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list));
      return list[idx];
    }
    return null;
  },

  delete(id) {
    let list = this.getAll();
    list = list.filter(item => item.id !== id);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list));
  },

  getDefaultSeedData() {
    return [
      {
        id: "SUB-1001",
        timestamp: "2026-10-05T14:30:00.000Z",
        studentName: "Aman Verma",
        targetRole: "Data Scientist / Machine Learning Engineer",
        question: "Explain the difference between supervised and unsupervised learning, providing real-world examples for each.",
        studentAnswer: "Supervised learning uses labeled training datasets where the algorithm learns a mapping function to predict targets, like spam email classification or house price regression. Unsupervised learning analyzes unlabeled data to uncover hidden patterns and natural clusters without target answers, such as customer segmentation in marketing.",
        expectedAnswer: "Supervised uses labeled data for prediction (classification/regression). Unsupervised discovers patterns in unlabeled data (clustering/dimensionality reduction).",
        scores: {
          technical: 95,
          problemSolving: 90,
          communication: 92,
          criticalThinking: 88,
          professionalism: 95
        },
        overallScore: 92,
        verdictTitle: "Mastery Level: Advanced (92/100)",
        verdictDesc: "Clear technical definitions, correct labeled vs unlabeled distinction, and valid real-world examples provided.",
        aiFeedback: "Excellent conceptual clarity. Both paradigms are accurately contrasted with precise examples.",
        trainerStatus: "Verified",
        trainerScore: 94,
        trainerNotes: "Verified by Lead Trainer. Exemplary answer structure."
      },
      {
        id: "SUB-1002",
        timestamp: "2026-10-06T10:15:00.000Z",
        studentName: "Pooja Sharma",
        targetRole: "Senior Backend Python Engineer",
        question: "How does B-Tree indexing work in PostgreSQL, and under what circumstances does adding an index degrade database performance?",
        studentAnswer: "B-Trees keep data sorted for fast searches. If you add too many indexes, INSERT and UPDATE queries become slow because every index must be written to.",
        expectedAnswer: "B-Tree maintains balanced nodes for O(log n) lookups. Degrades on heavy write amplification, low-cardinality columns, and memory cache bloat.",
        scores: {
          technical: 70,
          problemSolving: 65,
          communication: 75,
          criticalThinking: 60,
          professionalism: 80
        },
        overallScore: 69,
        verdictTitle: "Mastery Level: Developing (69/100)",
        verdictDesc: "Identified write overhead, but missed low-cardinality issues and memory buffer eviction.",
        aiFeedback: "Good start on write performance. Detail the logarithmic complexity and explain why boolean columns should avoid B-Trees.",
        trainerStatus: "Pending Review",
        trainerScore: null,
        trainerNotes: ""
      }
    ];
  }
};

// Export to window object for browser access
window.ROLES_DATABASE = ROLES_DATABASE;
window.EEDI_CONFIG = EEDI_CONFIG;
window.ROLE_CURRICULUM_GENERATOR = ROLE_CURRICULUM_GENERATOR;
window.RealStudentDataManager = RealStudentDataManager;
