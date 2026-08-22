import { NextResponse } from "next/server";
import getMongoClient from "@/lib/mongodb";

export async function POST(
  _request: Request,
  ctx: RouteContext<"/api/links/[id]/click">,
) {
  const { id } = await ctx.params;

  const client = await getMongoClient();
  const db = client.db(process.env.MONGODB_DB || "linknamu");

  const result = await db
    .collection("linkClicks")
    .findOneAndUpdate(
      { linkId: id },
      { $inc: { count: 1 }, $set: { updatedAt: new Date() } },
      { upsert: true, returnDocument: "after" },
    );

  return NextResponse.json({ linkId: id, count: result?.count ?? 1 });
}
