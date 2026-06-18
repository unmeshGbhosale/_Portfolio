# Unmesh Bhosale Portfolio

Professional AI/ML Engineer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the app:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Theme Toggle

The header includes a visible theme toggle. The default theme is the clean professional light theme. Clicking the button switches the site into dark/cyberpunk mode and stores the choice in `localStorage`, so the selected theme persists after refresh.

## Resume

The resume download button points to `public/resume.pdf`. Replace that file whenever you update your resume.

## Profile Photo

The hero profile image is stored at `public/profile-photo.jpeg`. Replace that file to update the photo without changing component code.

## Update Portfolio Content

- Profile, education, skills, experience, certifications, and contact values: edit `data/profile.ts`.
- Active project content and source-code snippets: edit `data/projects.json`.
- Future project templates: open `components/Projects.tsx` and search for `Future Project Card Template`.
- Public sections: components live in `components/`.

## Add A Future Project

1. Open `components/Projects.tsx`.
2. Search for `Future Project Card Template`.
3. Copy one commented template object.
4. Paste it into the top-level array in `data/projects.json`.
5. Update the `id`, `title`, `description`, `techStack`, `highlights`, `links`, `category`, `order`, `date`, and `sourceCode` fields.
6. Keep valid JSON syntax: commas between project objects, double quotes around keys/strings, and no comments inside `data/projects.json`.

## Local Test Checklist

```bash
npm run lint
npm run build
npm run dev
```

Then check:

- Light theme loads by default.
- Header theme toggle switches to dark/cyberpunk mode and persists after refresh.
- Mobile header links follow the order: About, Education, Experience, Skills, Projects, Contact.
- Hero photo is not stretched on desktop or mobile.
- Hero has only `View Projects` and `Download Resume` buttons.
- Project `Source Code` opens a formatted code modal with line numbers, copy button, and horizontal scrolling.
- Contact section shows email, LinkedIn, GitHub, and phone rows.
- `/admin` returns 404 because the admin panel has been removed.

## Deploy on Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Deploy with the default Next.js settings.
