import { NextResponse } from "next/server";

const UserId = process.env.STATIC_USER_ID;

export async function POST(req: Request) {
  try {
    if (!UserId) {
      return NextResponse.json({ error: "Unauthorize", status: 401 });
    }

    const { title, description, date, completed, important } = await req.json();

    if (!title || description || date) {
      return NextResponse.json({
        error: "Missing required fields",
        status: 400,
      });
    }

    const task = await prisma.task.create({
      data: {
        title,
        description,
        date,
        isCompleted: completed,
        isImportant: important,
        userId: UserId,
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    console.log(`ERROR on creating task: ${error}`);
    return NextResponse.json({ error });
  }
}
export async function GET(req: Request) {
  try {
  } catch (error) {
    console.log(`ERROR on getting task: ${error}`);
    return NextResponse.json({ error });
  }
}
export async function PUT(req: Request) {
  try {
  } catch (error) {
    console.log(`ERROR on updating task: ${error}`);
    return NextResponse.json({ error });
  }
}
export async function DELETE(req: Request) {
  try {
  } catch (error) {
    console.log(`ERROR on deleting task: ${error}`);
    return NextResponse.json({ error });
  }
}
