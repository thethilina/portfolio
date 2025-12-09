import connect from "@/lib/db";
import Project from "../../../lib/project";
import { NextRequest, NextResponse } from "next/server";




export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      projectName,
      projectDes,
      githublink,
      livelink,
      type,
      category,
      techs,
      collaborators,
      mainImage,
      images
    } = body;

    if (!projectName || !projectDes || !type) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await connect();

    const project = await Project.create({
      projectName,
      projectDes,
      githublink,
      livelink,
      type,
      category,
      techs,
      collaborators,
      photo: mainImage || null,
      photos: images || []
    });

    return NextResponse.json(project, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to create project" },
      { status: 500 }
    );
  }
}


export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const category = searchParams.get("category");
    const type = searchParams.get("type"); 
    const tech = searchParams.get("tech");
    const search = searchParams.get("search");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    let query: any = {};

    if (category) query.category = category;
    if (type) query.type = type;
    if (tech) query.techs = tech;
    if (search) {
      query.$or = [
        { projectName: { $regex: search, $options: "i" } },
        { projectDes: { $regex: search, $options: "i" } },
      ];
    }

    const skip = (page - 1) * limit;
    await connect();
    const [projects, total] = await Promise.all([
      Project.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Project.countDocuments(query),
    ]);

    return NextResponse.json({
      projects,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch projects" },
      { status: 500 }
    );
  }
}


