# PROJECT_CONTEXT.md

> Source of Truth for the AI Stack Backup Kit project.

Version: 1.0
Status: Active
Owner: Jio Mazidi

---

# Project Mission

This repository exists to eliminate manual recovery work for a personal AI infrastructure.

The final objective is to rebuild the complete AI stack from zero in less than **5 minutes**, without relying on memory, old chat history or undocumented configuration.

Everything discovered during the project must eventually become documentation or automation.

Knowledge must never stay inside conversations.

---

# Scope

Current supported components:

- Hermes Agent
- 9router
- Railway
- Telegram

Future components may include:

- LiteLLM
- Open WebUI
- Ollama
- MCP Servers
- Cloudflare Tunnel
- n8n
- Other AI services

The project must remain vendor-independent.

No component should assume Railway will always exist.

---

# Primary Objectives

1. Reverse engineer every component.

2. Identify every critical file.

3. Understand hidden dependencies.

4. Produce deterministic backups.

5. Produce deterministic restores.

6. Validate backups automatically.

7. Reduce deployment complexity.

8. Document every important discovery.

---

# Engineering Philosophy

## Documentation First

Every important discovery becomes documentation before automation.

Automation built on undocumented assumptions is considered incomplete.

---

## Evidence First

Nothing is accepted as truth unless it is verified.

Acceptable evidence:

- Source code
- Runtime inspection
- Database inspection
- Controlled experiments

Assumptions must always be labeled as assumptions.

---

## Production Safety

Production systems are never modified during investigation.

Research must not introduce unnecessary risk.

---

## Reproducibility

Every script must be repeatable.

Running the same script twice should produce the same expected result.

---

## Vendor Independence

The project must not depend on Railway-specific behavior.

Migration to another platform should always remain possible.

---

# Repository Rules

Every significant discovery must result in at least one of the following:

- documentation
- automation
- test
- verification

Nothing important should exist only inside GitHub Issues, chat history or personal memory.

---

# Documentation Rules

Every document should answer three questions:

1.

What is known?

2.

How was it verified?

3.

Why does it matter?

If a document cannot answer these questions, it is incomplete.

---

# Reverse Engineering Rules

Whenever reverse engineering a component:

1.

Locate critical files.

2.

Locate configuration.

3.

Locate secrets.

4.

Locate databases.

5.

Understand startup sequence.

6.

Identify backup requirements.

7.

Identify restore requirements.

8.

Document every dependency.

---

# Backup Philosophy

A backup is considered valid only if it can successfully restore a working system.

Copying files alone does not guarantee recoverability.

Every backup strategy must eventually include verification.

---

# Restore Philosophy

The restore process should require minimal manual intervention.

The ideal workflow:

Deploy

↓

Restore

↓

Verify

↓

Ready

---

# Project Deliverables

The repository should eventually provide:

- Documentation

- Backup scripts

- Restore scripts

- Inspection tools

- Validation tools

- Templates

- Disaster Recovery guides

---

# Current Verified Findings

## 9router

Verified:

- Main SQLite database location
- JWT secret location
- Machine ID location
- Internal backup directory
- SQLite schema

Pending:

- Provider JSON structure
- Secret storage strategy
- Encryption analysis

---

## Hermes

Verified:

- Built-in backup functionality exists.

Pending:

- Restore workflow analysis
- Configuration dependency mapping

---

# Coding Standards

Automation should prioritize:

1.

Reliability

2.

Readability

3.

Recoverability

Performance is secondary.

Correctness is mandatory.

---

# Long-term Vision

This repository is not intended to become a collection of scripts.

Its purpose is to become a complete Disaster Recovery toolkit for personal AI infrastructure.

Every manual task should eventually become automated.

Every undocumented behavior should eventually become documented.

Every recovery step should eventually become a single command.

---

# Definition of Done

A task is complete only when:

✓ Discovery is verified.

✓ Documentation is updated.

✓ Automation (if applicable) is implemented.

✓ Restore procedure is documented.

Otherwise the task remains incomplete.

---

# Motto

Build once.

Recover anywhere.

Forget nothing.