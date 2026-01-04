"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import data from "@/data/mockedData.json";

/**
 * Vérifie la saisie de l'utilisateur et le couple valeur mot de
 * passe et identifiant est correcte on crée un cookie et on redirige
 * l'utilisateur sur la page dashboard.
 * @param {Object} formData - Contient l'email et le mot de passe
 * saisie par l'utilisateur.
 */
export async function login(formData) {
    const email = formData.get("mail");
    const password = formData.get("password");

    //Utilisation des données mock.
    const user = data.apiLogin;

    if (user === null) {
        console.error("Combinaisons mots de passe/identifiant incorrecte");
        return true;
    }

    const cookieStore = await cookies();

    cookieStore.set("auth_token", user, {
        httpOnly: true,
        secure: process.env.NODE_ENV == "production",
        maxAge: 60 * 60, // Une heure en secondes.
        path: "/",
        sameSite: "lax",
    });

    redirect("/dashboard");
}

/**
 * Déconnecte l'utilisateur, supprime le cookie et le redirige à l'acceuil.
 */
export async function logout() {
    const cookieStore = await cookies();

    cookieStore.delete("auth_token");

    redirect("/");
}
