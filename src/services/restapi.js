import axios from "axios";

export const fetchImages = async (page = 1, query) => {
  const { data } = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      client_id: "ScXQbCA0rXnTGDcfyBGyY2tr7rJs2A3jNTw_bAH-8TE",
      query: query,
      page: page,
      per_page: 12,
    },
  });
  return data;
};
