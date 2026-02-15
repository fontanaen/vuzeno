---
title: Getting Started
description: Start using Vuetella
name: getting-started
---

# Getting Started

Get up and running with Vuetella in your Vue project.

## Prerequisites

Before installing Vuetella components, make sure you have:

- **Vue 3.5+** — Vuetella uses the latest Vue features
- **Tailwind CSS 4** — For styling components
- **shadcn-vue** — Vuetella extends shadcn-vue, so you'll need an existing setup

If you haven't set up shadcn-vue yet, follow their [installation guide](https://www.shadcn-vue.com/docs/installation) first.

## Installation

Vuetella is a [shadcn-vue registry](https://www.shadcn-vue.com/docs/registry). Install components with the shadcn-vue CLI by passing the registry URL for the component you want.

**Requirements:** Your project must already be set up with shadcn-vue (run `bunx shadcn-vue@latest init` if needed) and have a `components.json` file.

Add a Vuetella component:

<InstallationTabs exec value="shadcn-vue@latest add https://vuzeno.com/r/[component].json" />

Replace `[component]` with the component name: `autocomplete`, `filters`, `image`, or `phone-field`.

The CLI will install the component and its registry dependencies (e.g. shadcn-vue Combobox, Input Group) into your project. Some components list extra npm dependencies on their docs (e.g. `libphonenumber-js` for Phone Field)—install those if prompted or as shown on the component page.

### Manual installation

You can also copy component source code from the docs into your project. Each component page includes dependencies, source snippets, and usage examples.

## TypeScript

Vuetella is written in TypeScript and provides full type definitions. No additional configuration is required — types are inferred automatically.

## Next Steps

Ready to add your first component? Check out:

- [Phone Field](/components/phone-field) — A great starting point with auto-formatting and validation
- [Image](/components/image) — Enhanced images with zoom capabilities
- [Filters](/components/filters) — Build complex filtering interfaces

Each component page includes detailed documentation, props reference, and usage examples.
