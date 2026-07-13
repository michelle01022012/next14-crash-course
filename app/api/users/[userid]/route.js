import {NextResponse} from "next/server"
export async function GET() {

    return NextResponse.json({
        fruits: ["apple", "grapes", "oranges"],
       
    })
}

export async function POST(request) {

    return NextResponse.json({
        fruits: ["apple", "grapes", "oranges"]
    })

}