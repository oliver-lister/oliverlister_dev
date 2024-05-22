import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const { email, name } = await req.json();

  if (!email || !name) {
    return NextResponse.json(
      { error: "Email and name are required" },
      { status: 400 }
    );
  }

  const supabase = createClient();
  // Need to find a way around Role based auth for this!

  const { statusText, error } = await supabase
    .from("mailingList")
    .insert({ email: email, name: name });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ statusText: statusText }, { status: 200 });
}
