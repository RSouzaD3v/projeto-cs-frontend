import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
        return new Response(JSON.stringify({ error: 'Todos os campos são obrigatórios.' }), { status: 400 });
    }

    console.log('User registered:', { name, email, password });
    try {
        const existingUser = await db.user.findUnique({ where: { email } });

        if (existingUser) {
            return NextResponse.json({ error: 'Usuário já existe.' }, { status: 409 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        if (!hashedPassword) {
            return NextResponse.json({ error: 'Erro ao criptografar a senha.' }, { status: 500 });
        }

        const user = await db.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });
        return NextResponse.json({ user }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Erro ao criar usuário.', details: error }, { status: 500 });
    }
}