import { NextResponse } from "next/server";

export function GET(request, context) {
  const userid = context.params.userid;

  return NextResponse.json({
    userid,
  });
}