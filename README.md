# AI Stack Backup Kit

> Build once. Recover anywhere.

A documentation and automation project for backing up, restoring and maintaining a self-hosted AI infrastructure.

---

## Why this project exists

Deploying an AI stack is easy.

Rebuilding it after a server failure is not.

After spending many hours configuring Railway deployments, Hermes Agent, 9router, Telegram integration, API providers, proxy pools and custom settings, I wanted a reproducible way to recover everything without starting from scratch.

This repository documents every discovery and provides the tooling required to recreate the entire environment.

The goal is simple:

> **A complete recovery in under five minutes.**

---

# Current Stack

| Component | Status |
|-----------|--------|
| Hermes Agent | ✅ |
| 9router | ✅ |
| Railway | ✅ |
| Telegram | ✅ |

Future integrations:

- LiteLLM
- Open WebUI
- Ollama
- MCP Servers
- Cloudflare Tunnel
- n8n
- Other AI infrastructure

---

# Project Goals

- Reverse engineer every component
- Identify critical files
- Discover hidden dependencies
- Automate backups
- Automate restore
- Verify backups before deployment
- Keep documentation synchronized with discoveries

---

# Repository Structure

```
ai-stack-backup/

├── docs/
│
├── scripts/
│
├── tools/
│
├── templates/
│
├── examples/
│
├── backups/
│
├── README.md
│
├── AI_CONTEXT.md
│
└── CHANGELOG.md
```

---

# Documentation

| Document | Purpose |
|----------|---------|
| architecture.md | Overall system architecture |
| findings.md | Reverse engineering discoveries |
| 9router.md | Internal analysis of 9router |
| hermes.md | Hermes Agent notes |
| railway.md | Railway deployment documentation |
| restore.md | Disaster recovery guide |
| roadmap.md | Project roadmap |

---

# Current Progress

## Milestone 1 — Reverse Engineering

### 9router

- ✅ Database location identified
- ✅ Critical files identified
- ✅ SQLite schema extracted
- ✅ Internal backup directory discovered
- ⏳ Provider JSON analysis

### Hermes

- ✅ Internal backup mechanism identified

---

## Milestone 2

Backup Engine

Status:

Not started.

---

## Milestone 3

Restore Engine

Status:

Not started.

---

# Design Principles

This project follows a few simple rules.

### 1. Never trust memory.

Every important discovery must be documented.

---

### 2. Never modify production while investigating.

Production environments remain untouched.

Research is performed separately.

---

### 3. Every script must be repeatable.

Running the same backup twice should produce the same result.

---

### 4. Documentation is part of the code.

If something changes but documentation is not updated, the task is incomplete.

---

### 5. Platform independence.

Railway is only one deployment target.

Nothing in this repository should depend exclusively on Railway.

---

# Confirmed Findings

Current critical files for 9router:

```
db/data.sqlite
machine-id
jwt-secret
auth/
```

Current non-critical directories:

```
runtime/
logs/
node_modules/
```

---

# Planned Tooling

Eventually this repository should provide commands similar to:

```bash
stack backup
```

↓

Discover configuration

↓

Backup databases

↓

Backup secrets

↓

Validate

↓

Create archive

↓

Done

---

```bash
stack restore
```

↓

Deploy

↓

Restore

↓

Verify

↓

Ready

---

# Philosophy

Infrastructure should be reproducible.

Knowledge should not live inside chat history.

Every solved problem becomes permanent documentation.

Every manual task should eventually become automated.

---

# License

This repository contains documentation and automation only.

Never commit secrets, API keys, databases or production credentials.
