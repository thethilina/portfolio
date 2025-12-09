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
   


    await connect();

    const projects = await Project.find()

    return NextResponse.json({ projects }, { status: 200 });


 


  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

