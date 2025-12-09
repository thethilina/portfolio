import { NextRequest, NextResponse } from "next/server";
import connect from "@/lib/db";
import Message from "../../../lib/message";

await connect();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const message = await Message.create(body);
    return NextResponse.json(message, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to save message" },
      { status: 400 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const status = searchParams.get("status");        
    const search = searchParams.get("search");       
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const startDate = searchParams.get("startDate");  
    const endDate = searchParams.get("endDate");     
    let query: any = {};

    if (status) query.status = status;

    if (search) {
      query.$or = [
        { Name: { $regex: search, $options: "i" } },
        { Email: { $regex: search, $options: "i" } },
        { body: { $regex: search, $options: "i" } },
      ];
    }

    if (startDate || endDate) {
      query.createdAt = {};
      if (startDate) query.createdAt.$gte = new Date(startDate);
      if (endDate) {
        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999);
        query.createdAt.$lte = end;
      }
    }

    const skip = (page - 1) * limit;

    const [messages, total] = await Promise.all([
      Message.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Message.countDocuments(query),
    ]);

    return NextResponse.json({
      messages,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch messages" },
      { status: 500 }
    );
  }
}