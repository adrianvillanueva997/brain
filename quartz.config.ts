import { QuartzConfig } from "./quartz/cfg";
import * as Plugin from "./quartz/plugins";

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
	configuration: {
		pageTitle: "Digital garden",
		pageTitleSuffix: "",
		enableSPA: true,
		enablePopovers: true,
		analytics: {
			provider: "custom",
			host: "https://analytics.thexiao77.com",
			scriptPath: "/api/script.js",
			siteId: "f48eefb9235d",
		},
		locale: "en-US",
		baseUrl: "brain.adrianvillanueva.com",
		ignorePatterns: ["private", "templates", ".obsidian"],
		defaultDateType: "modified",
		theme: {
			fontOrigin: "googleFonts",
			cdnCaching: true,
			typography: {
				header: "Schibsted Grotesk",
				body: "Lora",
				code: "IBM Plex Mono",
			},
			colors: {
				lightMode: {
					light: "#fef9f3", // Warm cream background
					lightgray: "#f3ebe1", // Soft beige
					gray: "#c9b8a3", // Warm gray
					darkgray: "#5a4a3a", // Cozy brown
					dark: "#3d2f21", // Deep warm brown
					secondary: "#d4754f", // Terracotta/warm orange
					tertiary: "#9c826f", // Dusty rose/taupe
					highlight: "rgba(212, 117, 79, 0.12)", // Warm highlight
					textHighlight: "#ffd89688", // Warm yellow highlight
				},
				darkMode: {
					light: "#1a1612", // Warm dark background
					lightgray: "#2d2520", // Soft dark brown
					gray: "#6b5d52", // Medium warm gray
					darkgray: "#c9b8a3", // Light warm gray
					dark: "#f3ebe1", // Cream text
					secondary: "#e8956f", // Lighter terracotta
					tertiary: "#b89a84", // Warm taupe
					highlight: "rgba(232, 149, 111, 0.15)", // Warm dark highlight
					textHighlight: "#ffb86688", // Warm amber highlight
				},
			},
		},
	},
	plugins: {
		transformers: [
			Plugin.FrontMatter(),
			Plugin.CreatedModifiedDate({
				priority: ["frontmatter", "git", "filesystem"],
			}),
			Plugin.SyntaxHighlighting({
				theme: {
					light: "github-light",
					dark: "github-dark",
				},
				keepBackground: false,
			}),

			Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
			Plugin.GitHubFlavoredMarkdown(),
			Plugin.TableOfContents(),
			Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
			Plugin.Description(),
			Plugin.Latex({ renderEngine: "katex" }),
		],
		filters: [Plugin.RemoveDrafts()],
		emitters: [
			Plugin.AliasRedirects(),
			Plugin.ComponentResources(),
			Plugin.ContentPage(),
			Plugin.FolderPage(),
			Plugin.TagPage(),
			Plugin.ContentIndex({
				enableSiteMap: true,
				enableRSS: true,
			}),
			Plugin.Assets(),
			Plugin.Static(),
			Plugin.Favicon(),
			Plugin.NotFoundPage(),
			// Comment out CustomOgImages to speed up build time
			Plugin.CustomOgImages(),
		],
	},
};

export default config;
