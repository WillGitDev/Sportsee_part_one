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
    const [isError, setIsError] = useState(null);
    const [isUnauthorized, setIsUnauthorized] = useState(false);

    async function login(url, name, password) {
        setIsLoading(true);
        setIsUnauthorized(false);
        setIsError(false);
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
                if (response.status === 401) {
                    setIsUnauthorized(true);
                    throw new Error(
                        "Le mot de passe/identifiant est incorrect",
                    );
                }
                throw new Error("Une erreur s'est produite");
            }

            const data = await response.json();
            setUserId(data.userId);
            setToken(data.token);
            setCookie(data.token, data.userId);
            router.push("/dashboard");
        } catch (error) {
            console.error("Erreur api : ", error);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }

    return { login, userId, token, isLoading, isError, isUnauthorized };
}
