// app/api/projects/route.ts
import { NextResponse } from "next/server";
import { client } from "../../../sanity/lib/client";
import { allProjectsQuery } from "../../../sanity/lib/query";

export async function GET() {
	try {
		const projects = await client.fetch(allProjectsQuery);
		return NextResponse.json(projects);
	} catch (error) {
		console.error("Error fetching projects:", error);
		return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
	}
}
