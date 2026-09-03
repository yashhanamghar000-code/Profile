import { ExperienceItem } from '../types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "NyAI.ai",
    role: "AI/ML Intern",
    period: "Recent",
    location: "Pune, India (Hybrid)",
    type: "Internship",
    skills: [
      "Multimodal RAG",
      "Document Understanding",
      "SLM Fine-tuning",
      "SLM Evaluation",
      "Information Retrieval",
      "Vision-Language Pipelines"
    ],
    descriptionBullets: [
      "Architected and evaluated Multimodal RAG systems capable of parsing complex unstructured documents containing text, embedded tables, and visual schematics.",
      "Conducted fine-tuning and benchmark evaluations on Small Language Models (SLMs) customized for high-accuracy domain-specific comprehension.",
      "Engineered end-to-end information retrieval pipelines with semantic reranking for cross-modal queries.",
      "Built specialized extraction modules targeting tabular data preservation and image-grounded citations."
    ]
  },
  {
    company: "V Edge Slide Systems India Pvt. Ltd.",
    role: "Student Intern",
    period: "Past",
    location: "Pune, India",
    type: "Internship",
    skills: [
      "LLM Applications",
      "LangChain",
      "OpenAI APIs",
      "RAG Pipelines",
      "FAISS",
      "FastAPI"
    ],
    descriptionBullets: [
      "Developed enterprise LLM applications using LangChain, OpenAI APIs, and custom RAG retrieval architectures.",
      "Constructed FAISS vector indices for semantic search across multi-page technical documentation and industrial manuals.",
      "Built resilient backend microservices with FastAPI for real-time document querying and context injection.",
      "Reduced query latency through vectorized caching and optimized prompt templates."
    ]
  }
];
