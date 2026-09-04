# Content Guide

Put published notes under `content/`. Use the folder that best describes the note's subject, not the tool or source where you found it.

## Where things go

- `content/inbox/`: fast capture and notes that need sorting
- Subject folders such as `content/japanese/`: durable knowledge grouped by area
- `content/projects/`: notes about a concrete thing being built
- `content/resources/`: useful external references and summaries
- `templates/`: Obsidian templates; Quartz does not publish this folder

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
