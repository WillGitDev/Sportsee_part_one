"use client";
import { useState, useEffect } from "react";

export default function useUserActivity(url, token, startWeek, endWeek) {
    const path = "http://localhost:8000";
    const [dataUserActivity, setDataUserActivity] = useState(null);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!url) {
            console.error("L'url n'est pas renseigner");
            return;
        }
        if (!token) {
            console.error("Le token est vide");
            return;
        }
        if (!startWeek) {
            console.error("Il faut renseigner la date de départ");
            return;
        }
        if (!endWeek) {
            console.error("Il faut renseigner la date de fin");
            return;
        }

        async function getUserActivity() {
            setIsLoading(true);
            try {
                const response = await fetch(
                    `${path}${url}?startWeek=${startWeek}&endWeek=${endWeek}`,
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    },
                );
                if (!response.ok) {
                    throw new Error(`Erreur HTTP : ${response.status}`);
                }

                const data = await response.json();
                setDataUserActivity(data);
            } catch (error) {
                setIsError(true);
                console.error(
                    "Erreur lors de la récupération des données d'activitées",
                    error,
                );
            } finally {
                setIsLoading(false);
            }
        }
        getUserActivity();
    }, [url, token, startWeek, endWeek]);
    return { isLoading, isError, dataUserActivity };
}
