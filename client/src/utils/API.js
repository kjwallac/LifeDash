import axios from "axios";

export const API = {
  // USERS
  getAllUsers: () => {
    return axios.get("/api/user");
  },
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  updateUser: (id) => {
    return axios.put(`/api/user/update/${id}`);
  },
  // PROFILES
  getAllProfiles: () => {
    return axios.get("/api/profile");
  },
  getProfile: (id) => {
    return axios.get(`/api/profile/${id}`);
  },
  createProfile: () => {
    return axios.post("/api/profile/create");
  },
  updateProfile: (id) => {
    return axios.put(`/api/profile/update/${id}`);
  },
  removeProfile: (id) => {
    return axios.delete(`/api/profile/remove/${id}`);
  },
};
