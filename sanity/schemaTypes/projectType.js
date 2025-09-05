import { defineType, defineField } from "sanity";

export const projectType = defineType({
	name: "project",
	title: "Project",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string"
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "text"
		}),
		defineField({
			name: "featureDoc",
			title: "Feature Document",
			type: "url"
		}),
		defineField({
			name: "images",
			title: "Images",
			type: "array",
			of: [
				{
					type: "image",
					options: { hotspot: true }
				}
			],
			options: {
				layout: "grid"
			}
		}),
		defineField({
			name: "links",
			title: "Links",
			type: "object",
			fields: [
				defineField({
					name: "live",
					title: "Live",
					type: "object",
					fields: [
						defineField({ name: "url", title: "URL", type: "url" }),
						defineField({ name: "unavailableMsg", title: "Unavailable Message", type: "string" })
					]
				}),
				defineField({
					name: "github",
					title: "GitHub",
					type: "object",
					fields: [
						defineField({ name: "url", title: "URL", type: "url" }),
						defineField({ name: "unavailableMsg", title: "Unavailable Message", type: "string" })
					]
				})
			]
		}),
		defineField({
			name: "technologies",
			title: "Technologies",
			type: "array",
			of: [{ type: "string" }]
		}),
		defineField({
			name: "order",
			title: "Order",
			type: "number"
		})
	]
});
