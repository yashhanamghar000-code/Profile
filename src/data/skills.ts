import { SkillCluster } from '../types';

export const SKILL_CLUSTERS: SkillCluster[] = [
  {
    name: "AI & Machine Learning",
    category: "ai-core",
    skills: [
      { name: "RAG Systems", context: "Production hybrid retrieval, semantic chunking, and verifiable source attribution (Audito, NyAI)." },
      { name: "LLMs & SLMs", context: "Prompt engineering, structured outputs, agent loops, and Small Language Model research." },
      { name: "Fine-tuning", context: "Parameter-efficient adaptation (PEFT), LoRA & QLoRA quantization for domain models." },
      { name: "NLP", context: "Tokenization, text normalization, semantic similarity, and document understanding pipelines." },
      { name: "Embeddings", context: "Dense bi-encoders (SBERT), sparse lexical BM25, and hybrid vector representations." },
      { name: "Vector Search", context: "High-dimensional indexing, similarity search, and sub-second recall with FAISS." },
      { name: "NER", context: "Named Entity Recognition trained on 500+ annotated domain entities with SpaCy." },
      { name: "Text Classification", context: "Multi-class and multi-label intent/document routing using scikit-learn and transformers." }
    ]
  },
  {
    name: "AI Frameworks & Ecosystem",
    category: "frameworks",
    skills: [
      { name: "LangChain", context: "Building conversational agents, memory chains, document loaders, and retrieval toolkits." },
      { name: "Hugging Face", context: "Model hub, transformers pipelines, datasets library, and fine-tuning harnesses." },
      { name: "SpaCy", context: "Custom pipeline components, linguistic features, entity extraction, and matcher rules." },
      { name: "Scikit-learn", context: "Baseline classification, clustering, evaluation metrics, and feature transformations." }
    ]
  },
  {
    name: "Languages",
    category: "languages",
    skills: [
      { name: "Python", context: "Primary language for AI pipelines, asynchronous APIs, open-source libraries (yashalyze), and RAG." },
      { name: "SQL", context: "Complex relational queries, indexing strategies, analytical aggregations, and schema design." },
      { name: "C++", context: "Object-oriented programming, data structures, and computational performance fundamentals." }
    ]
  },
  {
    name: "Backend & Systems",
    category: "backend",
    skills: [
      { name: "FastAPI", context: "High-performance async REST microservices, Pydantic validation, and streaming AI endpoints." },
      { name: "Flask", context: "Rapid API prototyping, webhook receivers, and modular application blueprints." }
    ]
  },
  {
    name: "Data Engineering & Analytics",
    category: "data",
    skills: [
      { name: "Pandas", context: "High-throughput tabular transformations, feature extraction, and powering the yashalyze core." },
      { name: "NumPy", context: "Vectorized array calculations, matrix math, distance metrics, and tensor manipulation." },
      { name: "EDA", context: "Automated statistical inspection, missingness diagnosis, and distribution analysis." },
      { name: "Data Cleaning", context: "Deduplication, outlier detection, type inference, and schema normalization." }
    ]
  },
  {
    name: "Databases & Vector Storage",
    category: "databases",
    skills: [
      { name: "FAISS", context: "In-memory & disk-backed dense vector indexing for million-scale chunk retrieval." },
      { name: "PostgreSQL", context: "ACID transactions, relational schemas, JSONB documents, and pgvector exploration." },
      { name: "MySQL", context: "Structured application data persistence, normalized tables, and query optimization." }
    ]
  },
  {
    name: "Developer Tools & DevOps",
    category: "devtools",
    skills: [
      { name: "Git & GitHub", context: "Version control, collaborative workflows, CI/CD actions, and open-source packages." },
      { name: "Docker", context: "Containerizing AI microservices, reproducible runtime environments, and deployment." },
      { name: "AWS", context: "Production hosting for Audito AI, cloud compute, container deployment, and storage." },
      { name: "VS Code & Jupyter", context: "Primary development environments for rapid AI experimentation and clean library authoring." }
    ]
  },
  {
    name: "Visualization & BI",
    category: "visualization",
    skills: [
      { name: "Power BI", context: "Executive dashboards, DAX measures, and data storytelling for decision-makers." },
      { name: "Tableau", context: "Interactive visual analytics, data blending, and drill-down KPI reporting." }
    ]
  }
];
