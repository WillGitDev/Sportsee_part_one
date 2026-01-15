"use client";

import { useState } from "react";
import { setCookie } from "@/cookies/auth";
import { useRouter } from "next/navigation";

export default function useAuth() {
    const router = useRouter();
    const path = "http://localhost:8000";
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    async function login(url, name, password) {
        setIsLoading(true);
        try {
            const response = await fetch(`${path}${url}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: name,
                    password: password,
                }),
            });
            if (!response.ok) {
                throw new Error("Identifiant/mot de passe incorrect.");
            }
            const data = await response.json();
            setUserId(data.userId);
            setToken(data.token);
            setCookie(data.token, data.userId);
            router.push("/dashboard");
        } catch (error) {
            console.error("Erreur api : ", error);
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return { login, userId, token, isLoading, error };
}
