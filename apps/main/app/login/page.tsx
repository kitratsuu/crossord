"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";

export default function LoginPage() {
    const router = useRouter();
    const [error, setError] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const res = await signIn("credentials", {
            email: form.get("email"),
            password: form.get("password"),
            redirect: false,
        });
        if (res?.error) setError("Invalid email or password");
        else router.push("/admin");
    }

    return (
        <main className="min-h-screen flex items-center justify-center px-6">
            <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6">
                <h1 className="text-2xl font-bold">Sign in</h1>
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" name="password" type="password" required />
                </div>
                {error && <p className="text-sm text-destructive">{error}</p>}
                <Button type="submit" className="w-full">Sign In</Button>
            </form>
        </main>
    );
}