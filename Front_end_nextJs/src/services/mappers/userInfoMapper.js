import { formatDate } from "@/utils/normalizeData";
import { normalizeHeight } from "@/utils/normalizeHeight";

export default function userInfoMapper(data) {
  return {
    firstName: data.apiUserInfo.profile.firstName,
    lastName: data.apiUserInfo.profile.lastName,
    createdAt: formatDate(data.apiUserInfo.profile.createdAt),
    age: data.apiUserInfo.profile.age,
    weight: data.apiUserInfo.profile.weight,
    height: normalizeHeight(data.apiUserInfo.profile.height),
    profilePicture: data.apiUserInfo.profile.profilePicture,
    totalDistance: data.apiUserInfo.statistics.totalDistance,
    totalSessions: data.apiUserInfo.statistics.totalSessions,
    totalDuration: data.apiUserInfo.statistics.totalDuration,
  };
}
