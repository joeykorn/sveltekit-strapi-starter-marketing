# SvelteKit Strapi Starter

This starter uses SvelteKit and Strapi.

Along with SvelteKit, it also includes:

- Bits UI
- Tailwind CSS
- heroicons and Simple Icons (using unplugin-icons)

## Setup

### Prerequisites

- Node.js LTS
- Clone this repo

### Back-end

```bash
cd backend
```

Copy contents from `.env-example` into `.env` and update values as needed

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run develop
```

### Front-end

Install dependencies

```bash
cd frontend
```

```bash
npm install
```

Start development server

```bash
npm run dev
```

### Create token to access content

In Strapi Admin, navigate to Settings -> API Tokens and click on `Create new API Token`

**Name**: Public API Token Content
**Description**: Access to public content
**Token duration**: Unlimited
**Token type**: Read-only

Provide Permissions access as needed

Add token to `.env` by updating value for `PUBLIC_STRAPI_API_TOKEN`

### Concurrently

Start development server for both front-end and back-end

```bash
npm run dev
```
