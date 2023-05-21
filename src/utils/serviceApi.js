import Axios from "axios";

export const httpService = Axios.create({
    baseURL: "https://645cfb58250a246ae3142b09.mockapi.io/bootcamp",
});