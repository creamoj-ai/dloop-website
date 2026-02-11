import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const revalidate = 300; // 5 minutes ISR

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("hot_zones")
      .select(
        "id, name, demand, orders_per_hour, distance_km, earning_min, earning_max, latitude, longitude, updated_at"
      )
      .order("orders_per_hour", { ascending: false });

    if (error) throw error;

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Errore caricamento zone" },
      { status: 500 }
    );
  }
}
