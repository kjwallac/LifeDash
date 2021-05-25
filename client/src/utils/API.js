import axios from "axios";

export const API = {
  // USERS //////////////////////////////////
  getAllUsers: () => {
    return axios.get("/api/user", { withCredentials: true });
  },
  getUser: (id) => {
    return axios.get(`/api/user/${id}`, { withCredentials: true });
  },
  updateUser: (id) => {
    return axios.put(`/api/user/update/${id}`, { withCredentials: true });
  },

  // PROFILES //////////////////////////////////
  getAllProfiles: () => {
    return axios.get("/api/profile", { withCredentials: true });
  },
  getProfile: (id) => {
    return axios.get(`/api/profile/${id}`, { withCredentials: true });
  },
  getUserProfiles: (id) => {
    return axios.get(`/api/profile/user/${id}`, { withCredentials: true });
  },
  createProfile: () => {
    return axios.post("/api/profile/create", { withCredentials: true });
  },
  updateProfile: (id, body) => {
    return axios(
      {
        method: "put",
        url: `/api/profile/update/${id}`,
        data: body,
      },
      { withCredentials: true }
    );
  },
  removeProfile: (id) => {
    return axios.delete(`/api/profile/remove/${id}`, { withCredentials: true });
  },

  // LOGOUTS ACCOUNT //////////////////////////////////
  logout: () => {
    return axios.get("/api/google/logout");
  },
};

export default API;
