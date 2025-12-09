import { NextResponse } from "next/server";
import connect from "@/lib/db";
import mongoose from "mongoose";
import Project from "../../../../lib/project";

export const GET = async (request: Request, context: any) => {
  try {
    await connect();

    const params = await context.params;
    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return new NextResponse(
        JSON.stringify({ message: "Project ID not found" }),
        { status: 404 }
      );
    }

    const project = await Project.findById(id);

    if (!project) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid Project ID" }),
        { status: 400 }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "Project fetched successfully!", project }),
      { status: 200 }
    );
  } catch (e: any) {
    return new NextResponse(
      JSON.stringify({ message: "Error fetching project", error: e.message }),
      { status: 500 }
    );
  }
};


export const PUT = async (request: Request, context: any) => {
  try {
    await connect();

    const params = await context.params;
    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return new NextResponse(
        JSON.stringify({ message: "Project ID not found" }),
        { status: 404 }
      );
    }

    const body = await request.json();

    const project = await Project.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!project) {
      return new NextResponse(
        JSON.stringify({ message: "Project not found" }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "Project updated successfully!", project }),
      { status: 200 }
    );
  } catch (e: any) {
    return new NextResponse(
      JSON.stringify({ message: "Error updating project", error: e.message }),
      { status: 500 }
    );
  }
};

export const DELETE = async (request: Request, context: any) => {
  try {
    await connect();

    const params = await context.params;
    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return new NextResponse(
        JSON.stringify({ message: "Project ID not found" }),
        { status: 404 }
      );
    }

    const project = await Project.findByIdAndDelete(id);

    if (!project) {
      return new NextResponse(
        JSON.stringify({ message: "Project not found" }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "Project deleted successfully!" }),
      { status: 200 }
    );
  } catch (e: any) {
    return new NextResponse(
      JSON.stringify({ message: "Error deleting project", error: e.message }),
      { status: 500 }
    );
  }
};
