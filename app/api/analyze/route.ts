import { NextRequest, NextResponse } from "next/server";
import { investmentGraph } from "@/lib/graph/graph";

export async function POST(req: NextRequest) {
  try {
    const { company } = await req.json();

    const result = await investmentGraph.invoke({
      company,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Analysis failed" },
      { status: 500 }
    );
  }
}