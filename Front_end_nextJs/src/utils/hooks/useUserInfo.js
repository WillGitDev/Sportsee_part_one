"use client";

import { useState, useEffect } from "react";

export default function useUserInfo(url, token) {
    const path = "http://localhost:8000";
    const [dataUserInfo, setDataUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (!url) {
            console.error("L'url vide");
            return;
        }
        if (!token) {
            console.error("Token vide");
            return;
        }

        async function fetchData() {
            setIsLoading(true);
            try {
                const response = await fetch(`${path}${url}`, {
                    method: "GET",
                    headers: { Authorization: `Bearer ${token}` },
                });
                if (!response.ok) {
                    throw new Error(`Erreur HTTP: ${response.status}`);
                }
                const data = await response.json();

                setDataUserInfo(data);
                setIsLoading(false);
            } catch (error) {
                console.error("erreur : ", error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [url, token]);
    return { isLoading, dataUserInfo, isError };
}
