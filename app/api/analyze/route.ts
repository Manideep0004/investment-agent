import { NextRequest, NextResponse } from "next/server";
import { investmentGraph } from "@/lib/graph";

export async function POST(req: NextRequest) {
  try {
    const { company } = await req.json();

    if (!company) {
      return NextResponse.json(
        { error: "Company name is required" },
        { status: 400 }
      );
    }

    const result = await investmentGraph.invoke({
      company,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to analyze company" },
      { status: 500 }
    );
  }
}