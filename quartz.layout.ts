import type { PageLayout, SharedLayout } from "./quartz/cfg";
import * as Component from "./quartz/components";

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
	head: Component.Head(),
	header: [
		Component.PageTitle(),
		Component.Flex({
			components: [
				{ Component: Component.Search(), grow: true },
				{ Component: Component.Darkmode() },
				{ Component: Component.ReaderMode() },
			],
			gap: "0.75rem",
		}),
	],
	afterBody: [],
	footer: Component.Footer({
		links: {
			GitHub: "https://github.com/adrianvillanueva997/brain",
			"Main site": "https://adrianvillanueva.com",
		},
	}),
};

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
	beforeBody: [
		Component.ConditionalRender({
			component: Component.Breadcrumbs(),
			condition: (page) => page.fileData.slug !== "index",
		}),
		Component.ArticleTitle(),
		Component.ContentMeta(),
		Component.TagList(),
	],
	left: [
		Component.MobileOnly(Component.TableOfContents()),
		Component.MobileOnly(Component.Spacer()),
		Component.Explorer(),
	],
	right: [
		Component.ConditionalRender({
			component: Component.Graph(),
			condition: (page) => page.fileData.slug !== "index",
		}),
		Component.DesktopOnly(Component.TableOfContents()),
		Component.Backlinks(),
		Component.RecentNotes(),
	],
};

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
	beforeBody: [
		Component.ConditionalRender({
			component: Component.Breadcrumbs(),
			condition: (page) => page.fileData.slug !== "index",
		}),
		Component.ArticleTitle(),
		Component.ContentMeta(),
	],
	left: [Component.MobileOnly(Component.Spacer()), Component.Explorer()],
	right: [
		Component.ConditionalRender({
			component: Component.Graph(),
			condition: (page) => page.fileData.slug === "index",
		}),
		Component.RecentNotes(),
	],
};
