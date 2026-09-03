import { ProjectItem } from '../types';

export const AUDITO_AI_PROJECT: ProjectItem = {
  id: "audito",
  title: "AUDITO AI",
  tagline: "AI-powered document and policy intelligence platform built around Retrieval-Augmented Generation",
  description: "Enterprise-grade document intelligence platform designed to ingest complex multi-format policies and documents, execute semantic chunking, and provide context-grounded reasoning with precision citations. Deployed in production on AWS.",
  category: "flagship",
  technologies: [
    "Python",
    "FastAPI",
    "React",
    "RAG",
    "SBERT",
    "FAISS",
    "Docker",
    "AWS",
    "NLP",
    "Document AI"
  ],
  liveUrl: "https://auditoai.online",
  githubUrl: "https://github.com/yashhanamghar000-code?tab=repositories",
  architectureSteps: [
    "DOCUMENT INGESTION",
    "PARSING & EXTRACTION",
    "SEMANTIC CHUNKING",
    "SBERT EMBEDDINGS",
    "FAISS VECTOR SEARCH",
    "CROSS-ENCODER RERANKING",
    "LLM REASONING",
    "ANSWER + VERIFIED SOURCE"
  ],
  highlights: [
    "Production deployed on AWS with custom domain auditoai.online",
    "High-fidelity document chunking preserving tabular structures and footnotes",
    "Sub-second vector retrieval with FAISS and hybrid ranking",
    "Verifiable source attribution for zero-hallucination policy reviews"
  ]
};

export const DASTAVEJ_ECOSYSTEM = {
  id: "dastavej",
  title: "DASTAVEJ",
  tagline: "An evolving Document Intelligence / AI Developer Ecosystem",
  description: "A comprehensive developer framework and suite of Python modules crafted to tackle end-to-end document intelligence pipelines—from structural parsing and embeddings to visual evaluation and developer playgrounds.",
  nodes: [
    {
      id: "dastavej-rag",
      name: "dastavej-rag",
      category: "Retrieval",
      description: "Modular RAG pipeline with customizable chunking strategies, hybrid keyword-vector search, and dynamic rerankers.",
      status: "Active Development"
    },
    {
      id: "dastavej-visualization",
      name: "dastavej-visualization",
      category: "Visualization",
      description: "Interactive visual representations for high-dimensional document embeddings, attention heatmaps, and retrieval quality.",
      status: "Active Development"
    },
    {
      id: "document-processing",
      name: "Document Processing",
      category: "Parsing",
      description: "Intelligent layout analysis for complex PDF, OCR, and multi-column structured documents.",
      status: "Core Engine"
    },
    {
      id: "embeddings",
      name: "Embeddings",
      category: "Vectorization",
      description: "Specialized embedding generation tuned for dense semantic similarity and technical/legal terminology.",
      status: "Core Engine"
    },
    {
      id: "retrieval",
      name: "Retrieval",
      category: "Search",
      description: "Multi-stage retrieval engine integrating dense vector indexing with lexical BM25 reranking.",
      status: "Core Engine"
    },
    {
      id: "developer-tooling",
      name: "Developer Tooling",
      category: "Tools",
      description: "CLI utilities, evaluation harnesses, and synthetic benchmark generators for document AI builders.",
      status: "Utilities"
    },
    {
      id: "pyforge",
      name: "PyForge Playground",
      category: "Playground",
      description: "Interactive browser-ready developer sandbox to test chunking parameters, prompt templates, and pipeline latency.",
      status: "Ecosystem Tool"
    }
  ]
};

export const YASHALYZE_PROJECT: ProjectItem = {
  id: "yashalyze",
  title: "yashalyze",
  tagline: "Python EDA/data-analysis library designed to simplify exploratory data analysis",
  description: "An intuitive, lightweight Python library that automates comprehensive exploratory data analysis with a single line of code, rendering diagnostic statistics, outlier flags, and correlation heatmaps.",
  category: "library",
  technologies: ["Python", "Pandas", "NumPy", "EDA", "Data Analysis", "Open Source"],
  githubUrl: "https://github.com/yashhanamghar000-code?tab=repositories",
  pypiUrl: "https://pypi.org/project/yashalyze",
  highlights: [
    "One-line execution: report = yz.analyze(df)",
    "Instant automated diagnostic checks across 9 structural categories",
    "Generates clean CLI summaries and structured visual reporting",
    "Optimized memory usage for multi-gigabyte DataFrames"
  ],
  architectureSteps: [
    "Dataset Shape",
    "Data Types",
    "Missing Values",
    "Duplicate Detection",
    "Numeric Statistics",
    "Categorical Analysis",
    "Correlations",
    "Outlier Detection",
    "Value Counts"
  ]
};

export const OTHER_PROJECTS: ProjectItem[] = [
  {
    id: "llama2-qlora",
    title: "Yash-Llama2-7B-QLoRA-v1",
    tagline: "Fine-Tuned 7B Model with QLoRA Weights on Hugging Face Hub",
    description: "Parameter-efficient fine-tuning (PEFT) of Meta's Llama-2-7B architecture using 4-bit NormalFloat (NF4) quantization and Low-Rank Adaptation (LoRA), published openly on the Hugging Face Hub.",
    category: "research",
    technologies: ["Llama-2-7B", "QLoRA", "PEFT", "PyTorch", "Hugging Face", "BitsAndBytes"],
    liveUrl: "https://huggingface.co/yashhanamghar9099/Yash-Llama2-7B-QLoRA-v1",
    githubUrl: "https://huggingface.co/yashhanamghar9099/Yash-Llama2-7B-QLoRA-v1",
    highlights: [
      "Published model repository on Hugging Face Hub: yashhanamghar9099/Yash-Llama2-7B-QLoRA-v1",
      "4-bit NF4 quantized base model with double quantization for high VRAM efficiency",
      "Trained low-rank adapter matrices (r=16, alpha=32) over attention projection layers",
      "Seamless 1-line deployment with Hugging Face transformers and peft library"
    ]
  },
  {
    id: "agroai",
    title: "AgroAI",
    tagline: "Smart Agriculture Assistant",
    description: "AI assistant designed for agriculture-related queries using RAG and document-based knowledge retrieval. Enables farmers and researchers to query agronomy research papers, soil health manuals, and crop advisories in natural language.",
    category: "application",
    technologies: ["RAG", "LangChain", "Python", "Document Processing", "AI Assistant"],
    githubUrl: "https://github.com/yashhanamghar000-code?tab=repositories",
    highlights: [
      "Domain-specific agricultural document ingestion",
      "LangChain conversational memory with grounding verification",
      "Multi-lingual crop advisory retrieval pipeline"
    ]
  },
  {
    id: "ner-system",
    title: "Financial & Entity NER System",
    tagline: "Named Entity Recognition for Unstructured Documents",
    description: "High-precision Named Entity Recognition pipeline trained on 500+ annotated domain entities for extracting financial entities, transaction identifiers, dates, and contract clauses from complex PDF documents.",
    category: "research",
    technologies: ["Python", "SpaCy", "NLP", "NER", "Annotation Pipelines"],
    githubUrl: "https://github.com/yashhanamghar000-code?tab=repositories",
    highlights: [
      "500+ custom-annotated domain entities for training and evaluation",
      "Custom SpaCy pipeline component with rule-based post-validation",
      "Automated extraction from invoices, audit statements, and legal contracts"
    ]
  }
];

export const MODEL_LAB_DATA = {
  title: "Model Lab & SLM Research",
  subtitle: "Small Language Models, Fine-tuning, Parameter-Efficient Adaptation & Benchmarking",
  modelName: "Yash-Llama2-7B-QLoRA-v1",
  repoId: "yashhanamghar9099/Yash-Llama2-7B-QLoRA-v1",
  huggingFaceUrl: "https://huggingface.co/yashhanamghar9099/Yash-Llama2-7B-QLoRA-v1",
  huggingFaceProfileUrl: "https://huggingface.co/yashhanamghar9099",
  baseModel: "meta-llama/Llama-2-7b-hf",
  architecture: "Llama-2-7B (Causal LM)",
  quantization: "4-bit NormalFloat (NF4) with Double Quantization",
  adapterConfig: "LoRA (r=16, lora_alpha=32, lora_dropout=0.05)",
  targetModules: "q_proj, v_proj, k_proj, o_proj",
  areas: [
    "Small Language Models (SLMs)",
    "Supervised Fine-Tuning (SFT)",
    "Parameter-Efficient Fine-Tuning (PEFT)",
    "LoRA & QLoRA Quantization",
    "Legal-Domain Adaptation",
    "Carbon-Credit Domain Research",
    "Model Evaluation & Benchmarking",
    "Hugging Face Hub Ecosystem"
  ],
  codeSnippet: `from transformers import AutoModelForCausalLM, AutoTokenizer
from peft import PeftModel

base_model = "meta-llama/Llama-2-7b-hf"
adapter = "yashhanamghar9099/Yash-Llama2-7B-QLoRA-v1"

# Load 4-bit base model & apply QLoRA adapter
model = AutoModelForCausalLM.from_pretrained(
    base_model,
    load_in_4bit=True,
    device_map="auto"
)
model = PeftModel.from_pretrained(model, adapter)
tokenizer = AutoTokenizer.from_pretrained(adapter)`,
  trainingSimulation: {
    epoch: "1/3",
    loss: "0.284",
    lossBar: "███████░░░",
    gpuStatus: "ACTIVE (NVIDIA A100)",
    loraStatus: "ENABLED (r=16, alpha=32)",
    datasetStatus: "LOADED (Domain Corpus)",
    evalStatus: "RUNNING..."
  }
};

export const CREATIX_DATA = {
  title: "CREATIX",
  tagline: "ENGINEER × BUILDER × ENTREPRENEUR",
  founder: "Yash Hanamghar",
  mission: "My entrepreneurial and creative technology initiative bridging production-grade AI solutions with bespoke digital experiences and brand identities.",
  domains: [
    {
      title: "AI Solutions",
      description: "Custom RAG deployments, intelligent document parsers, and custom LLM agent workflows."
    },
    {
      title: "Web Development",
      description: "Ultra-fast modern web applications, interactive web experiences, and developer-first portals."
    },
    {
      title: "Digital Products",
      description: "From concept to prototype to cloud deployment with seamless user experience."
    },
    {
      title: "Creative Technology",
      description: "Interactive visual interfaces, 3D animations, and dynamic algorithmic experiments."
    },
    {
      title: "Branding & Identity",
      description: "Design systems, developer brands, and cohesive identity for cutting-edge tech ventures."
    },
    {
      title: "Social Media Content",
      description: "Technical storytelling, visual architecture diagrams, and developer community education."
    }
  ]
};
