import { NextRequest, NextResponse } from "next/server";

const RUNTIME_URL = process.env.RUNTIME_URL || "http://localhost:3001";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const res = await fetch(`${RUNTIME_URL}/ask`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { answer: "Could not reach the CognitiveAgent runtime.", source: "error", beliefs: 0 },
      { status: 502 }
    );
  }
}
