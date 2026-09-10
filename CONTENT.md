# Content Guide

Put published notes under `content/`. Use the folder that best describes the note's subject, not the tool or source where you found it.

## Where things go

1. `content/inbox/` is for fast capture and notes that need sorting.
2. `content/knowledge/` is for durable explanations and references.
3. `content/projects/` is for concrete outcomes and current work.
4. `content/learning/` is for guided study areas and progress.
5. Subject folders such as `content/japanese/` remain valid until their notes are intentionally reorganized.
6. `templates/` contains Obsidian templates and Quartz does not publish it.

Private journals and study logs belong under `private/`. That directory is excluded from the site and Git, so use a separate backup if those notes matter.

## Minimal frontmatter

```md
---
title: A useful title
type: concept
status: seed
tags:
  - subject
---
```

Use `type` values of `concept`, `resource`, `project`, or `study`. Use `status` values of `seed`, `growing`, `evergreen`, or `archived`.

Do not delay capture to perfect the metadata. A title and one sentence are enough for an inbox note.

## Linking

Link related notes with Obsidian wikilinks:

```md
This connects to [[another-note]] and [[japanese/grammar/wa-desu]].
```

Prefer links to duplicate explanations. Add a `See also` section when a note has several important neighbors.
