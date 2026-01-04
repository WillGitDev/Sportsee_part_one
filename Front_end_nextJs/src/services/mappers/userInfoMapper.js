import normalizeData from "@/utils/normalizeData";
import { normalizeHeight } from "@/utils/normalizeHeight";

/**
 * Mappe les informations personnel de l'utilsateur.
 * @param {Object[]} data - Les informations de l'utilisateur.
 * @returns {Object} Les données normalisé.
 */
export default function userInfoMapper(data) {
    return {
        firstName: data.apiUserInfo.profile.firstName,
        lastName: data.apiUserInfo.profile.lastName,
        createdAt: normalizeData(data.apiUserInfo.profile.createdAt),
        age: data.apiUserInfo.profile.age,
        weight: data.apiUserInfo.profile.weight,
        height: normalizeHeight(data.apiUserInfo.profile.height),
        profilePicture: data.apiUserInfo.profile.profilePicture,
        totalDistance: data.apiUserInfo.statistics.totalDistance,
        totalSessions: data.apiUserInfo.statistics.totalSessions,
        totalDuration: data.apiUserInfo.statistics.totalDuration,
    };
}
