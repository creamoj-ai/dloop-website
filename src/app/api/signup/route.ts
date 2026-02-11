import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, city_zone } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Nome ed email obbligatori" },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from("website_signups")
      .insert({ name, email, phone, city_zone, source: "landing_page" });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "Questa email e' gia' registrata" },
          { status: 409 }
        );
      }
      throw error;
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Signup error:", err);
    return NextResponse.json(
      { error: "Errore del server" },
      { status: 500 }
    );
  }
}
