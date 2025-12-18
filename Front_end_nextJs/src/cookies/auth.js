"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import data from "@/data/mockedData.json";

export async function login(formData) {
  const email = formData.get("mail");
  const password = formData.get("password");

  //Utilisation des données mock.
  const user = data.apiLogin;

  if (user === null) {
    console.error("Combinaisons mots de passe/identifiant incorrecte");
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

export async function logout() {
  const cookieStore = await cookies();

  cookieStore.delete("auth_token");

  redirect("/");
}
