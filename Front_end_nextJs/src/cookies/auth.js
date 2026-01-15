import Cookies from "js-cookie";

export function setCookie(token, userId) {
    Cookies.set("auth_token", token, { expires: 7, path: "/" });
}

export function logout() {
    Cookies.remove("auth_token", { path: "/" });
}

export function getToken() {
    const token = Cookies.get("auth_token");
    if (!token) {
        return false;
    }
    return token;
}
