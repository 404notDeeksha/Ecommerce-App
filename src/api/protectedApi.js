import API from "./axiosInstance";

// export const createTask = async (data) => {
//   try {
//     const response = await API.post("", data);
//     return response?.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const updateTask = async (data, id) => {
//   try {
//     const response = await API.put(`/${id}`, data);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const deleteTask = async (id) => {
//   try {
//     const response = await API.delete(`/${id}`);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getCarousel = async () => {
  try {
    const response = await API.get("/carousel/featured");
    return response?.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Something went wrong. Please try again.");
    }
  }
};
