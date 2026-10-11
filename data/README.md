# Updating the portfolio

Open `content.js` in a text editor. Save and refresh `index.html` to see changes. Works directly from disk and on GitHub Pages; no build or JSON fetch is needed.

- `hero`, `sections`, `expertise`, `toolkit`, and `about` contain the visible copy and technology lists.
- `projects` controls the cards, in order. Add or remove entries as needed.
- Each project has a `title`, `description`, `tags`, and optional `url`. Empty URLs render no link. Use an HTTPS destination for a real project.
- `preview` selects a built-in CSS illustration: `android`, `multiplatform`, or `web`.
- To use a screenshot, put it in `data/images/`, set `image` to its relative path (for example `data/images/app.webp`), and provide `imageAlt`. Images are lazy-loaded. Prefer optimized WebP files.
- The eight projects and their screenshots were imported from the published portfolio at https://jopakka.github.io/. Individual project URLs were absent in the source, so `url` fields are empty.
- Update `projectNote` to change the line below the project grid.
- Replace the three URLs in `socialLinks` with your actual profiles. The default URLs are platform homepages.

Keep JavaScript strings quoted and separate entries with commas. Content is inserted as text rather than HTML. Appearance and decorative previews live in `index.html`; SEO metadata is in its `<head>`.
