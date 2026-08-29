#!/usr/bin/env node

// GitHub Pages has no server-side rewrite, so any URL beyond the built
// index.html (e.g. /travel-guest-post) has no real file and gets served with
// a genuine HTTP 404 status via the 404.html SPA fallback. Googlebot reads
// that 404 status and refuses to index the page, even though the JS bundle
// would render it correctly for a human visitor. Fix: copy the built
// index.html into a real directory per route so each URL resolves to an
// actual 200 response, while the client router still takes over on load.
//
// This script also extends llms.txt (started by tools/generate-llms.js) with
// the guest-post landing pages and blog posts, since those pages use dynamic
// Helmet titles that the static-title regex in generate-llms.js can't read.

import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const distDir = path.join(process.cwd(), '../../dist/apps/web');
const indexHtmlPath = path.join(distDir, 'index.html');
const llmsTxtPath = path.join(distDir, 'llms.txt');
const SITE_URL = 'https://guestpostplatform.com';

const STATIC_PAGES = [
	{ path: '/', title: 'Guest Post Platform: Browse 6,000+ Publisher Opportunities', description: 'Use Guest Post Platform to browse niche-relevant publisher opportunities by authority, traffic and price, with optional blogger outreach and content support.' },
	{ path: '/buy-guest-posts', title: 'Buy Guest Posts | Vetted Publisher Marketplace', description: 'Compare guest post publisher opportunities by niche, DA, DR, estimated traffic, quality and price. Request a relevant, editorially reviewed placement.' },
	{ path: '/blogger-outreach', title: 'Blogger Outreach Services | Relevant Publisher Research', description: 'Get managed blogger outreach with publisher research, personalized pitches, opportunity approval, original content and transparent placement reporting.' },
	{ path: '/link-insertion', title: 'Contextual Link Insertion Services | Relevant Niche Edits', description: 'Request contextual link insertions in relevant existing articles, with publisher review, destination-page matching and transparent reporting.' },
	{ path: '/pricing', title: 'Guest Post Pricing | Publisher and Outreach Options', description: 'Compare guest post and outreach pricing options. Final cost depends on publisher availability, niche, editorial requirements and content scope.' },
	{ path: '/submit-guest-post', title: 'Submit Your Website | Publisher Partnership Application', description: 'Apply to list your website as a publisher opportunity. Share your niche, audience, traffic and editorial requirements for manual review.' },
	{ path: '/about', title: 'About Guest Post Platform | Publisher Outreach Process', description: 'Learn how Guest Post Platform researches publishers, coordinates original content and reports guest post and link-building placements transparently.' },
	{ path: '/contact', title: 'Contact Guest Post Platform | Request a Publisher Shortlist', description: 'Contact Guest Post Platform with your target pages, niche and market to request a relevant publisher shortlist or discuss an outreach campaign.' },
	{ path: '/blog', title: 'Guest Posting and Link Building Guides | Guest Post Platform', description: 'Read practical guides about publisher research, guest post quality, blogger outreach, contextual links, pricing and campaign measurement.' },
	{ path: '/privacy-policy', title: 'Privacy Policy | Guest Post Platform', description: 'Learn what information Guest Post Platform collects, why it is used, how it is protected and what choices you have.' },
	{ path: '/terms-of-services', title: 'Terms of Service | Guest Post Platform', description: 'Review the service scope, approvals, payment terms and responsibilities that apply when working with Guest Post Platform.' },
	{ path: '/case-study', title: 'Guest Posting Case Study | Campaign Method and Reporting', description: 'See how a relevance-led guest posting campaign is planned, quality-checked and measured without inflated SEO promises.' },
	{ path: '/best-guest-post-platforms', title: 'Best Guest Post Platforms: Marketplace Comparison Guide', description: 'Compare guest post platforms by publisher transparency, relevance, editorial quality, pricing, fulfilment and reporting before selecting a marketplace.' },
];

async function getLandingPages() {
	const filePath = path.join(process.cwd(), 'src/content/landingPages.js');
	if (!fs.existsSync(filePath)) return [];

	try {
		const mod = await import(pathToFileURL(filePath).href);
		return mod.landingPages.map((page) => ({
			slug: page.slug,
			title: page.title,
			description: page.description,
		}));
	} catch (error) {
		console.warn(`prerender-routes: could not import landingPages.js (${error.message})`);
		return [];
	}
}

function getBlogPosts() {
	const blogDir = path.join(process.cwd(), 'src/content/blog');
	const indexPath = path.join(blogDir, 'index.js');
	if (!fs.existsSync(indexPath)) return [];

	const indexContent = fs.readFileSync(indexPath, 'utf-8');
	const files = [...indexContent.matchAll(/from\s+['"]\.\/([^'"]+)['"]/g)].map((match) => match[1]);

	return files
		.map((file) => {
			const filePath = path.join(blogDir, file);
			if (!fs.existsSync(filePath)) return null;
			const content = fs.readFileSync(filePath, 'utf-8');
			const slug = content.match(/slug:\s*['"]([^'"]+)['"]/)?.[1];
			const title = content.match(/title:\s*['"]([^'"]+)['"]/)?.[1];
			const description = content.match(/description:\s*['"]([^'"]+)['"]/)?.[1];
			if (!slug) return null;
			return { slug, title: title || slug, description: description || '' };
		})
		.filter(Boolean);
}

function escapeHtml(value) {
	return String(value)
		.replaceAll('&', '&amp;')
		.replaceAll('"', '&quot;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;');
}

function injectSeo(html, page) {
	const pathname = page.path === '/' ? '/' : `${page.path.replace(/\/$/, '')}/`;
	const canonical = `${SITE_URL}${pathname}`;
	const title = escapeHtml(page.title);
	const description = escapeHtml(page.description);
	const tags = [
		`<meta data-react-helmet="true" name="description" content="${description}">`,
		'<meta data-react-helmet="true" name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">',
		`<link data-react-helmet="true" rel="canonical" href="${canonical}">`,
		'<meta data-react-helmet="true" property="og:type" content="website">',
		'<meta data-react-helmet="true" property="og:site_name" content="Guest Post Platform">',
		`<meta data-react-helmet="true" property="og:title" content="${title}">`,
		`<meta data-react-helmet="true" property="og:description" content="${description}">`,
		`<meta data-react-helmet="true" property="og:url" content="${canonical}">`,
		`<meta data-react-helmet="true" property="og:image" content="${SITE_URL}/images/guest-post-seo-growth.webp">`,
		'<meta data-react-helmet="true" property="og:image:alt" content="Guest Post Platform guest posting and publisher outreach services">',
		'<meta data-react-helmet="true" name="twitter:card" content="summary_large_image">',
		`<meta data-react-helmet="true" name="twitter:image" content="${SITE_URL}/images/guest-post-seo-growth.webp">`,
	].join('\n\t\t');

	return html
		.replace(/\s*<meta(?:\s[^>]*)?name=["']description["'][^>]*>/i, '')
		.replace(/<title(?:\s[^>]*)?>.*?<\/title>/i, `<title data-react-helmet="true">${title}</title>`)
		.replace('</head>', `\t\t${tags}\n\t</head>`);
}

function prerenderRoutes(pages) {
	if (!fs.existsSync(indexHtmlPath)) {
		console.error(`prerender-routes: built index.html not found at ${indexHtmlPath}`);
		process.exit(1);
	}

	const html = fs.readFileSync(indexHtmlPath, 'utf-8');

	for (const page of pages) {
		const routeDir = path.join(distDir, page.path.replace(/^\//, ''));
		fs.mkdirSync(routeDir, { recursive: true });
		fs.writeFileSync(path.join(routeDir, 'index.html'), injectSeo(html, page));
	}

	console.log(`prerender-routes: wrote route-aware HTML metadata for ${pages.length} routes`);
}

function appendLlmsTxt(landingPages, blogPosts) {
	try {
		let content = fs.existsSync(llmsTxtPath)
			? fs.readFileSync(llmsTxtPath, 'utf-8')
			: '## Pages\n';

		if (landingPages.length) {
			content += '\n\n## Guest Post & Link Building Services\n';
			content += landingPages
				.map((page) => `- [${page.title}](${SITE_URL}/${page.slug}/): ${page.description}`)
				.join('\n');
		}

		if (blogPosts.length) {
			content += '\n\n## Blog\n';
			content += blogPosts
				.map((post) => `- [${post.title}](${SITE_URL}/${post.slug}/): ${post.description}`)
				.join('\n');
		}

		fs.writeFileSync(llmsTxtPath, `${content}\n`);
		console.log(`prerender-routes: extended llms.txt with ${landingPages.length} landing pages and ${blogPosts.length} blog posts`);
	} catch (error) {
		console.warn(`prerender-routes: skipped llms.txt extension (${error.message})`);
	}
}

async function main() {
	const landingPages = await getLandingPages();
	const blogPosts = getBlogPosts();

	const routes = [
		...STATIC_PAGES,
		...landingPages.map((page) => ({ ...page, path: `/${page.slug}` })),
		...blogPosts.map((post) => ({ ...post, path: `/${post.slug}` })),
	];

	prerenderRoutes(routes);
	appendLlmsTxt(landingPages, blogPosts);
}

main();
