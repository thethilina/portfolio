import { NextResponse } from "next/server";
import connect from "@/lib/db";
import mongoose from "mongoose";
import Message from "../../../../lib/message";

export const GET = async (request: Request, context: any) => {
  try {
    await connect();

    const { id } = await context.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return new NextResponse(
        JSON.stringify({ message: "Message ID not found" }),
        { status: 404 }
      );
    }

    const message = await Message.findById(id);

    if (!message) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid Message ID" }),
        { status: 400 }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "Message fetched successfully!", messageData: message }),
      { status: 200 }
    );
  } catch (e: any) {
    return new NextResponse(
      JSON.stringify({ message: "Error fetching message", error: e.message }),
      { status: 500 }
    );
  }
};

export const PUT = async (request: Request, context: any) => {
  try {
    await connect();

    const { id } = await context.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return new NextResponse(
        JSON.stringify({ message: "Message ID not found" }),
        { status: 404 }
      );
    }

    const body = await request.json();

    const message = await Message.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!message) {
      return new NextResponse(
        JSON.stringify({ message: "Message not found" }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "Message updated successfully!", messageData: message }),
      { status: 200 }
    );
  } catch (e: any) {
    return new NextResponse(
      JSON.stringify({ message: "Error updating message", error: e.message }),
      { status: 500 }
    );
  }
};

export const DELETE = async (request: Request, context: any) => {
  try {
    await connect();

    const { id } = await context.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return new NextResponse(
        JSON.stringify({ message: "Message ID not found" }),
        { status: 404 }
      );
    }

    const message = await Message.findByIdAndDelete(id);

    if (!message) {
      return new NextResponse(
        JSON.stringify({ message: "Message not found" }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "Message deleted successfully!" }),
      { status: 200 }
    );
  } catch (e: any) {
    return new NextResponse(
      JSON.stringify({ message: "Error deleting message", error: e.message }),
      { status: 500 }
    );
  }
};
