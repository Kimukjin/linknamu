import { NextResponse } from "next/server";
import getMongoClient from "@/lib/mongodb";

export async function GET() {
  const client = await getMongoClient();
  const db = client.db(process.env.MONGODB_DB || "linknamu");

  const docs = await db
    .collection("linkClicks")
    .find({}, { projection: { linkId: 1, count: 1, _id: 0 } })
    .toArray();

  const counts: Record<string, number> = {};
  for (const doc of docs) {
    counts[doc.linkId] = doc.count;
  }

  return NextResponse.json(counts);
}
