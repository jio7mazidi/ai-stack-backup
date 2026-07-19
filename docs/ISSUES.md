# Project Backlog

> Central issue tracker for AI Stack Backup Kit.

Version: 1.0

Status: Active

Last Updated: 2026-07-19

---

# Workflow

Every task follows the same lifecycle.

```
Backlog
    ↓
Ready
    ↓
In Progress
    ↓
Review
    ↓
Done
```

Only completed tasks may be used as the basis for automation.

---

# Milestone 1 — Reverse Engineering

## Issue-0001

### Title

Reverse Engineer 9router Storage

### Status

✅ Done

### Goal

Identify every critical file required to recover a 9router installation.

### Results

- SQLite database identified
- JWT Secret identified
- Machine ID identified
- Internal backup directory identified

---

## Issue-0002

### Title

Inspect SQLite Schema

### Status

✅ Done

### Goal

Extract every table inside the SQLite database.

### Results

Tables discovered:

- settings
- providerConnections
- providerNodes
- proxyPools
- apiKeys
- combos
- kv
- usageHistory
- usageDaily
- requestDetails

---

## Issue-0003

### Title

Inspect Provider JSON

### Status

🟡 In Progress

### Goal

Understand the structure stored inside the `data` column.

Questions:

- Where are provider tokens stored?
- Are secrets encrypted?
- Is the Base URL stored here?
- Which fields are required for restore?

---

## Issue-0004

### Title

Document 9router Architecture

### Status

🟢 Ready

### Goal

Create complete technical documentation describing:

- Startup flow
- Runtime directories
- Database
- Secret management
- Backup strategy
- Restore strategy

---

## Issue-0005

### Title

Design Backup Strategy

### Status

⬜ Backlog

### Goal

Determine the minimum file set required for a complete recovery.

Expected Deliverables

- Backup specification
- Validation rules
- Archive structure

---

# Milestone 2 — Automation

## Issue-0006

### Title

Build 9router Inspector

### Status

⬜ Backlog

### Goal

Create a tool capable of:

- Reading SQLite
- Inspecting providers
- Inspecting proxy pools
- Verifying backup integrity

---

## Issue-0007

### Title

Build Backup Engine

### Status

⬜ Backlog

### Goal

Automate backup creation.

Deliverables:

- backup.ps1
- archive format
- metadata generation

---

## Issue-0008

### Title

Build Restore Engine

### Status

⬜ Backlog

### Goal

Automate restore.

Deliverables:

- restore.ps1
- verification
- rollback support

---

# Milestone 3 — Hermes

## Issue-0009

### Title

Reverse Engineer Hermes Backup

### Status

⬜ Backlog

### Goal

Understand:

- backup command
- restore flow
- configuration
- dependency mapping

---

# Milestone 4 — Railway

## Issue-0010

### Title

Railway Disaster Recovery

### Status

⬜ Backlog

### Goal

Document and automate Railway deployment.

---

# Future Ideas

Potential future work.

- Open WebUI
- LiteLLM
- MCP Servers
- Ollama
- Cloudflare Tunnel
- Docker support
- VPS deployment
- Cross-platform restore

---

# Notes

This file is intentionally independent of GitHub Issues.

The repository should remain fully usable offline.

GitHub Issues are optional.

This file is the authoritative project backlog.