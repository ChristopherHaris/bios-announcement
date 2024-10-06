import { NextResponse } from "next/server";

const users = [
  { nim: "123456", password: "password1", name: "John Doe" },
  { nim: "654321", password: "password2", name: "Jane Smith" },
  { nim: "789012", password: "password3", name: "Alice Johnson" },
];

export async function POST(req: Request) {
  try {
    const { nim, password } = await req.json();

    const user = users.find((u) => u.nim === nim && u.password === password);

    if (!user) {
      return new NextResponse("Invalid credentials", { status: 401 });
    }

    return NextResponse.json({ name: user.name, nim: user.nim });
  } catch (error) {
    console.log("USER_FIND, error", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
