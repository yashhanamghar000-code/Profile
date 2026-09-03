import { CommandResult } from '../types';
import { PROFILE_DATA, ABOUT_TEXT } from '../data/profile';
import { AUDITO_AI_PROJECT, DASTAVEJ_ECOSYSTEM, YASHALYZE_PROJECT, OTHER_PROJECTS, MODEL_LAB_DATA, CREATIX_DATA } from '../data/projects';
import { EXPERIENCES } from '../data/experience';
import { SKILL_CLUSTERS } from '../data/skills';
import { EDUCATION_DATA, CERTIFICATIONS } from '../data/education';

export interface TerminalCommand {
  name: string;
  description: string;
  aliases?: string[];
  category: 'core' | 'projects' | 'info' | 'easter_egg' | 'system';
  execute: (args: string[]) => CommandResult;
}

class TerminalCommandRegistry {
  private commands: Map<string, TerminalCommand> = new Map();

  register(command: TerminalCommand) {
    this.commands.set(command.name.toLowerCase(), command);
    if (command.aliases) {
      for (const alias of command.aliases) {
        this.commands.set(alias.toLowerCase(), command);
      }
    }
  }

  get(name: string): TerminalCommand | undefined {
    return this.commands.get(name.toLowerCase());
  }

  getAllCommands(): TerminalCommand[] {
    // Unique by name
    const seen = new Set<string>();
    const list: TerminalCommand[] = [];
    for (const cmd of this.commands.values()) {
      if (!seen.has(cmd.name)) {
        seen.add(cmd.name);
        list.push(cmd);
      }
    }
    return list;
  }

  getCommandNames(): string[] {
    return Array.from(this.commands.keys());
  }
}

export const registry = new TerminalCommandRegistry();

// 1. HELP
registry.register({
  name: "help",
  description: "List all available YASH.OS commands",
  aliases: ["commands", "?"],
  category: "core",
  execute: () => {
    const list = [
      "╔══════════════════════════════════════════════════════════════════╗",
      "║               YASH.OS // COMMAND DIRECTORY                       ║",
      "╚══════════════════════════════════════════════════════════════════╝",
      "",
      "CORE UTILITIES:",
      "  whoami       - Display identity, roles, and focus areas",
      "  about        - View background & engineering philosophy",
      "  experience   - Display professional internships & technical achievements",
      "  skills       - Inspect technical stack & AI competencies",
      "  education    - Print formal degree & academic credentials JSON",
      "  contact      - Get direct communication channels",
      "  resume       - Trigger resume PDF download",
      "",
      "AI SYSTEMS & PROJECTS:",
      "  projects     - List all featured applications & libraries",
      "  audito       - Inspect Audito AI (Production RAG & Policy Intelligence)",
      "  dastavej     - Explore Dastavej Document Intelligence Ecosystem",
      "  yashalyze    - Python EDA library documentation & test output",
      "  agroai       - Smart Agriculture Assistant (RAG)",
      "  models       - Access Model Lab, SLM training & fine-tuning telemetry",
      "  research     - Small Language Models & domain fine-tuning overview",
      "  creatix      - Launch Creatix Creative Agency & Entrepreneurship UI",
      "",
      "EXTERNAL LINKS:",
      "  github       - Launch GitHub profile",
      "  linkedin     - Launch LinkedIn network",
      "  huggingface  - Hugging Face model repo (Yash-Llama2-7B-QLoRA-v1)",
      "",
      "SYSTEM / EASTER EGGS:",
      "  clear        - Flush terminal buffer",
      "  sudo hire yash - Execute priority recruitment protocol",
      "  coffee       - Brew compiler fuel",
      "  matrix       - Initialize cybernetic digital rain (Press ESC to exit)",
      "  rm -rf /     - Execute system purge (Safe Mode Enforced)"
    ];
    return {
      lines: list.map(content => ({ type: 'output', content }))
    };
  }
});

// 2. WHOAMI
registry.register({
  name: "whoami",
  description: "Display Yash Hanamghar's identity and system status",
  category: "core",
  execute: () => {
    return {
      lines: [
        { type: 'ascii', content: "Yash Hanamghar" },
        { type: 'output', content: "----------------------------------------" },
        { type: 'output', content: "Role:     AI/ML Engineer & Python Developer" },
        { type: 'output', content: "Domain:   RAG Pipelines | LLMs & SLMs | Document Intelligence" },
        { type: 'output', content: "Founder:  Creatix (Engineering × Builder × Entrepreneur)" },
        { type: 'output', content: "Location: Pune, India" },
        { type: 'output', content: "Status:   ● BUILDING (Active Production R&D)" },
        { type: 'output', content: "Philosophy: Real AI products over static notebooks." }
      ]
    };
  }
});

// 3. ABOUT
registry.register({
  name: "about",
  aliases: ["cat about_yash.txt", "bio"],
  description: "Read about_yash.txt dossier",
  category: "info",
  execute: () => {
    return {
      lines: [
        { type: 'system', content: "$ cat about_yash.txt" },
        { type: 'output', content: ABOUT_TEXT },
        { type: 'output', content: "" },
        { type: 'output', content: "Focusing on end-to-end architectures: multi-format parsers, dense/sparse embeddings, hybrid rerankers, and domain-tuned SLMs." }
      ],
      action: 'scroll-to',
      target: 'about'
    };
  }
});

// 4. EXPERIENCE
registry.register({
  name: "experience",
  aliases: ["work", "ls ./experience"],
  description: "Inspect production internship history",
  category: "info",
  execute: () => {
    const lines: { type: 'output' | 'system'; content: string }[] = [
      { type: 'system', content: "$ ls -la ./experience" },
      { type: 'output', content: "TOTAL 2 PRODUCTION ROLES FOUND:" },
      { type: 'output', content: "" }
    ];

    EXPERIENCES.forEach(exp => {
      lines.push({ type: 'output', content: `[+] ${exp.role} @ ${exp.company} (${exp.period})` });
      lines.push({ type: 'output', content: `    Location: ${exp.location} | Track: ${exp.skills.join(', ')}` });
      exp.descriptionBullets.forEach(b => {
        lines.push({ type: 'output', content: `    • ${b}` });
      });
      lines.push({ type: 'output', content: "" });
    });

    return { lines, action: 'scroll-to', target: 'experience' };
  }
});

// 5. SKILLS
registry.register({
  name: "skills",
  aliases: ["./skills --visualize", "stack", "tech"],
  description: "Visualize complete AI/ML & Engineering clusters",
  category: "info",
  execute: () => {
    const lines: { type: 'output' | 'system'; content: string }[] = [
      { type: 'system', content: "$ ./skills --visualize" },
      { type: 'output', content: "SKILL CLUSTERS ACTIVE:" }
    ];

    SKILL_CLUSTERS.forEach(cluster => {
      lines.push({ type: 'output', content: `\n[ ${cluster.name.toUpperCase()} ]` });
      lines.push({ type: 'output', content: `  ` + cluster.skills.map(s => s.name).join(" • ") });
    });

    return { lines, action: 'scroll-to', target: 'skills' };
  }
});

// 6. PROJECTS
registry.register({
  name: "projects",
  aliases: ["ls ~/projects", "ls ~/projects --featured"],
  description: "List all flagship AI applications and libraries",
  category: "projects",
  execute: () => {
    return {
      lines: [
        { type: 'system', content: "$ ls ~/projects --featured" },
        { type: 'output', content: "1. AUDITO AI    - Production Document & Policy Intelligence Platform (auditoai.online)" },
        { type: 'output', content: "2. DASTAVEJ     - Modular Document Intelligence / AI Developer Ecosystem" },
        { type: 'output', content: "3. yashalyze    - Python EDA & Automated Diagnostic Analysis Library" },
        { type: 'output', content: "4. AgroAI       - Smart Agriculture Assistant with Grounded RAG" },
        { type: 'output', content: "5. NER Pipeline - SpaCy Financial & Entity Extraction System (500+ Annotated Entities)" },
        { type: 'output', content: "" },
        { type: 'output', content: "Type 'audito', 'dastavej', 'yashalyze', or 'agroai' for deep inspection." }
      ],
      action: 'scroll-to',
      target: 'projects'
    };
  }
});

// 7. AUDITO AI
registry.register({
  name: "audito",
  aliases: ["auditoai"],
  description: "Inspect AUDITO AI production platform",
  category: "projects",
  execute: () => {
    return {
      lines: [
        { type: 'system', content: "$ curl https://auditoai.online/api/status" },
        { type: 'ascii', content: "AUDITO AI // PRODUCTION ACTIVE" },
        { type: 'output', content: "Tagline:      " + AUDITO_AI_PROJECT.tagline },
        { type: 'output', content: "Architecture: " + AUDITO_AI_PROJECT.architectureSteps?.join(" -> ") },
        { type: 'output', content: "Stack:        " + AUDITO_AI_PROJECT.technologies.join(" | ") },
        { type: 'output', content: "Deployment:   AWS Production Cluster with Live Domain" },
        { type: 'link', content: "Live URL:     https://auditoai.online", url: "https://auditoai.online", urlLabel: "Open auditoai.online" }
      ],
      action: 'scroll-to',
      target: 'audito'
    };
  }
});

// 8. DASTAVEJ
registry.register({
  name: "dastavej",
  description: "Explore Dastavej Document Intelligence Ecosystem",
  category: "projects",
  execute: () => {
    return {
      lines: [
        { type: 'system', content: "$ tree ~/dastavej-ecosystem" },
        { type: 'ascii', content: "DASTAVEJ ECOSYSTEM" },
        { type: 'output', content: "  ├── dastavej-rag           (Modular chunking & hybrid retrieval)" },
        { type: 'output', content: "  ├── dastavej-visualization (High-dimensional embedding & attention maps)" },
        { type: 'output', content: "  ├── document-processing    (Multi-column & table OCR extraction)" },
        { type: 'output', content: "  ├── embeddings             (Dense domain-tuned bi-encoders)" },
        { type: 'output', content: "  ├── retrieval              (Lexical BM25 + dense FAISS reranking)" },
        { type: 'output', content: "  ├── developer-tooling      (Benchmark harnesses & synthetic suites)" },
        { type: 'output', content: "  └── PyForge Playground     (Interactive in-browser latency & chunk tester)" }
      ],
      action: 'scroll-to',
      target: 'dastavej'
    };
  }
});

// 9. YASHALYZE
registry.register({
  name: "yashalyze",
  description: "View Python EDA library & live terminal simulation",
  category: "projects",
  execute: () => {
    return {
      lines: [
        { type: 'system', content: "$ python3 -c 'import yashalyze as yz; report = yz.analyze(df)'" },
        { type: 'output', content: "✓ Dataset Shape Diagnostic      [COMPLETED]" },
        { type: 'output', content: "✓ Data Types & Memory Profiling  [COMPLETED]" },
        { type: 'output', content: "✓ Missing Values Matrix          [COMPLETED]" },
        { type: 'output', content: "✓ Duplicate Key Detection        [COMPLETED]" },
        { type: 'output', content: "✓ Numeric Statistics Summary     [COMPLETED]" },
        { type: 'output', content: "✓ Categorical Entropy & Skew     [COMPLETED]" },
        { type: 'output', content: "✓ Pearson / Spearman Correlation [COMPLETED]" },
        { type: 'output', content: "✓ Outlier IQR & Z-Score Analysis [COMPLETED]" },
        { type: 'output', content: "✓ Value Counts & Class Balance   [COMPLETED]" },
        { type: 'link', content: "PyPI Package: https://pypi.org/project/yashalyze", url: "https://pypi.org/project/yashalyze", urlLabel: "View on PyPI" }
      ],
      action: 'scroll-to',
      target: 'yashalyze'
    };
  }
});

// 10. AGROAI
registry.register({
  name: "agroai",
  description: "Smart Agriculture Assistant overview",
  category: "projects",
  execute: () => {
    return {
      lines: [
        { type: 'system', content: "$ query_agroai --domain='crop_intelligence'" },
        { type: 'output', content: "AgroAI: AI assistant designed for agriculture-related queries using RAG and document-based knowledge retrieval." },
        { type: 'output', content: "Technologies: RAG • LangChain • Python • Document Processing • Vector Search" },
        { type: 'output', content: "Capabilities: Multi-source agronomy paper retrieval, grounded soil diagnosis guidance, multilingual advisory." }
      ],
      action: 'scroll-to',
      target: 'other-projects'
    };
  }
});

// 11. MODELS & RESEARCH
registry.register({
  name: "models",
  aliases: ["cd ~/model-lab", "model-lab", "research"],
  description: "Small Language Models, Fine-tuning, LoRA & QLoRA research",
  category: "projects",
  execute: () => {
    return {
      lines: [
        { type: 'system', content: "$ cd ~/model-lab && cat telemetry.log" },
        { type: 'ascii', content: "MODEL TRAINING ENGINE" },
        { type: 'output', content: `Epoch:        ${MODEL_LAB_DATA.trainingSimulation.epoch}` },
        { type: 'output', content: `Loss:         ${MODEL_LAB_DATA.trainingSimulation.lossBar} (${MODEL_LAB_DATA.trainingSimulation.loss})` },
        { type: 'output', content: `GPU:          ${MODEL_LAB_DATA.trainingSimulation.gpuStatus}` },
        { type: 'output', content: `LoRA:         ${MODEL_LAB_DATA.trainingSimulation.loraStatus}` },
        { type: 'output', content: `Dataset:      ${MODEL_LAB_DATA.trainingSimulation.datasetStatus}` },
        { type: 'output', content: `Evaluation:   ${MODEL_LAB_DATA.trainingSimulation.evalStatus}` },
        { type: 'output', content: "Specialization: Legal-Domain Adaptation & Carbon-Credit Domain Research" }
      ],
      action: 'scroll-to',
      target: 'model-lab'
    };
  }
});

// 12. CREATIX
registry.register({
  name: "creatix",
  aliases: ["launch creatix"],
  description: "Launch Creatix creative tech & entrepreneurship platform",
  category: "projects",
  execute: () => {
    return {
      lines: [
        { type: 'system', content: "$ launch creatix" },
        { type: 'ascii', content: "CREATIX // FOUNDER: YASH HANAMGHAR" },
        { type: 'output', content: "ENGINEER × BUILDER × ENTREPRENEUR" },
        { type: 'output', content: "Initiative:   Bridging production-grade AI systems with bespoke digital products & brand identity." },
        { type: 'output', content: "Focus Areas:  AI Solutions • Web Development • Digital Products • Branding • Creative Technology" }
      ],
      action: 'scroll-to',
      target: 'creatix'
    };
  }
});

// 13. EDUCATION
registry.register({
  name: "education",
  aliases: ["cat education.json", "edu"],
  description: "Inspect education.json & professional certifications",
  category: "info",
  execute: () => {
    return {
      lines: [
        { type: 'system', content: "$ cat education.json" },
        {
          type: 'output',
          content: JSON.stringify(EDUCATION_DATA, null, 2)
        },
        { type: 'output', content: "\nCERTIFICATIONS:" },
        ...CERTIFICATIONS.map(c => ({
          type: 'output' as const,
          content: `• ${c.title} (${c.issuer} / ${c.platform})`
        }))
      ],
      action: 'scroll-to',
      target: 'education'
    };
  }
});

// 14. RESUME
registry.register({
  name: "resume",
  aliases: ["download resume.pdf"],
  description: "Download Yash's engineering resume PDF",
  category: "core",
  execute: () => {
    return {
      lines: [
        { type: 'system', content: "$ download resume.pdf" },
        { type: 'output', content: "Target: /public/resume/Yash_Hanamghar_Resume.pdf" },
        { type: 'link', content: "Click here to download Resume PDF", url: "/resume/Yash_Hanamghar_Resume.pdf", urlLabel: "Download Resume.pdf" }
      ]
    };
  }
});

// 15. CONTACT
registry.register({
  name: "contact",
  aliases: ["./contact --yash", "email"],
  description: "Display direct contact coordinates",
  category: "core",
  execute: () => {
    return {
      lines: [
        { type: 'system', content: "$ ./contact --yash" },
        { type: 'output', content: `Name:     ${PROFILE_DATA.name}` },
        { type: 'output', content: `Location: ${PROFILE_DATA.location}` },
        { type: 'output', content: `Email:    ${PROFILE_DATA.email}` },
        { type: 'link', content: `Send Email: ${PROFILE_DATA.email}`, url: PROFILE_DATA.socials.email, urlLabel: "Send Email" },
        { type: 'link', content: `LinkedIn: ${PROFILE_DATA.socials.linkedin}`, url: PROFILE_DATA.socials.linkedin, urlLabel: "Open LinkedIn" },
        { type: 'link', content: `GitHub:   ${PROFILE_DATA.socials.github}`, url: PROFILE_DATA.socials.github, urlLabel: "Open GitHub" }
      ],
      action: 'scroll-to',
      target: 'contact'
    };
  }
});

// 16. SOCIAL LINKS
registry.register({
  name: "github",
  description: "Navigate to Yash's GitHub profile",
  category: "core",
  execute: () => ({
    lines: [
      { type: 'output', content: "Redirecting to GitHub..." },
      { type: 'link', content: PROFILE_DATA.socials.github, url: PROFILE_DATA.socials.github, urlLabel: "Open GitHub Profile" }
    ]
  })
});

registry.register({
  name: "linkedin",
  description: "Navigate to Yash's LinkedIn profile",
  category: "core",
  execute: () => ({
    lines: [
      { type: 'output', content: "Redirecting to LinkedIn..." },
      { type: 'link', content: PROFILE_DATA.socials.linkedin, url: PROFILE_DATA.socials.linkedin, urlLabel: "Open LinkedIn Profile" }
    ]
  })
});

registry.register({
  name: "huggingface",
  aliases: ["hf", "llama2", "qlora"],
  description: "View Yash's Hugging Face model repository (Yash-Llama2-7B-QLoRA-v1)",
  category: "core",
  execute: () => ({
    lines: [
      { type: 'system', content: "$ huggingface-cli repo info yashhanamghar9099/Yash-Llama2-7B-QLoRA-v1" },
      { type: 'output', content: "Repository: yashhanamghar9099/Yash-Llama2-7B-QLoRA-v1" },
      { type: 'output', content: "Model Type: Causal LM (Meta Llama-2-7B Base)" },
      { type: 'output', content: "Method:     QLoRA (4-bit NF4 Quantization + LoRA Adapter)" },
      { type: 'output', content: "Config:     r=16, alpha=32 | Targets: q_proj, v_proj, k_proj, o_proj" },
      { type: 'output', content: "Status:     VERIFIED PUBLIC REPO ON HUGGING FACE HUB" },
      { type: 'link', content: "Open Model on Hugging Face Hub", url: PROFILE_DATA.socials.huggingface, urlLabel: "huggingface.co/yashhanamghar9099/Yash-Llama2-7B-QLoRA-v1" },
      { type: 'link', content: "Open Hugging Face Profile", url: "https://huggingface.co/yashhanamghar9099", urlLabel: "huggingface.co/yashhanamghar9099" }
    ],
    action: 'scroll-to',
    target: 'model-lab'
  })
});

// 17. EASTER EGGS
registry.register({
  name: "sudo hire yash",
  aliases: ["hire", "hire yash", "sudo hire"],
  description: "Priority recruitment authorization protocol",
  category: "easter_egg",
  execute: () => {
    return {
      lines: [
        { type: 'output', content: "Permission granted." },
        { type: 'output', content: "" },
        { type: 'output', content: "Excellent decision." },
        { type: 'output', content: "" },
        { type: 'system', content: "Opening contact protocol..." },
        { type: 'link', content: `Dispatch transmission to: ${PROFILE_DATA.email}`, url: PROFILE_DATA.socials.email, urlLabel: "Send Email" }
      ],
      action: 'hire'
    };
  }
});

registry.register({
  name: "coffee",
  description: "Brew developer fuel",
  category: "easter_egg",
  execute: () => {
    return {
      lines: [
        { type: 'output', content: "Brewing developer fuel..." },
        { type: 'system', content: "████████████████ 100%" },
        { type: 'output', content: "☕ READY. Neural cache primed for RAG optimization." }
      ]
    };
  }
});

registry.register({
  name: "rm -rf /",
  aliases: ["rm -rf", "delete"],
  description: "Execute root purge",
  category: "easter_egg",
  execute: () => {
    return {
      lines: [
        { type: 'error', content: "Nice try." },
        { type: 'error', content: "YASH.OS has survived worse bugs." },
        { type: 'system', content: "Defense matrix engaged: Immutable filesystem active." }
      ]
    };
  }
});

registry.register({
  name: "matrix",
  description: "Activate cybernetic digital rain (Press ESC to exit)",
  category: "easter_egg",
  execute: () => {
    return {
      lines: [
        { type: 'system', content: "Initializing Matrix stream..." },
        { type: 'output', content: "Wake up, Neo... The Matrix has you. Press ESC to return." }
      ],
      action: 'matrix'
    };
  }
});

// 18. CLEAR
registry.register({
  name: "clear",
  aliases: ["cls"],
  description: "Flush terminal screen",
  category: "system",
  execute: () => {
    return {
      lines: [],
      action: 'clear'
    };
  }
});

export function executeCommand(rawInput: string): CommandResult {
  const trimmed = rawInput.trim();
  if (!trimmed) {
    return { lines: [] };
  }

  const parts = trimmed.split(/\s+/);
  const commandName = parts[0].toLowerCase();
  const args = parts.slice(1);

  // Check compound commands like "sudo hire yash"
  if (trimmed.toLowerCase().startsWith("sudo hire")) {
    const cmd = registry.get("sudo hire yash");
    if (cmd) return cmd.execute(args);
  }

  // Check aliases or full command name
  const cmd = registry.get(commandName) || registry.get(trimmed.toLowerCase());
  if (cmd) {
    return cmd.execute(args);
  }

  // Suggest closest command
  const all = registry.getCommandNames();
  const suggestions = all.filter(c => c.startsWith(commandName.slice(0, 2))).slice(0, 3);
  const suggestionText = suggestions.length > 0 ? ` Did you mean: ${suggestions.join(', ')}?` : " Type 'help' for available commands.";

  return {
    lines: [
      { type: 'error', content: `yash-os: command not found: ${trimmed}.${suggestionText}` }
    ]
  };
}
