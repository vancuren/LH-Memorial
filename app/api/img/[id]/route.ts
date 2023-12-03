import type { NextRequest } from "next/server";
import { getRawBucketData } from "@/services/bucketFunctions";

export const runtime = "edge";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  // api/img/{id}
  // api/img/1234567890

  const id = params.id;

  const r2Data = await getRawBucketData("img/" + id);

  if (!r2Data) {
    return new Response(null, { status: 404 });
  }

  const imageData = await r2Data.json<{
    data: string;
    contentType: string;
  }>();

  const imageBuffer = Buffer.from(imageData.data, "base64");

  return new Response(imageBuffer, {
    headers: {
      "Content-Type": imageData.contentType,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
