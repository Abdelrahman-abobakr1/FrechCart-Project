import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        message: 'Success',
        users: [
            { name: 'Ali', age: 30 },
            { name: 'Abdo', age: 35 },
            { name: "Ahmed", age: 25 }
        ]
    })
}

export function POST(req: Request) {

}