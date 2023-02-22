import api from "./api";

export const getUser = async () => {
  const token = localStorage.getItem("token");

  return api.post(
    "/me",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
