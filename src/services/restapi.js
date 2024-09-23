import axios from "axios";

export const fetchImages = async () => {
  const { data } = await axios.get(`https://api.3unsplash.com/search/photos`, {
    params: {
      client_id: "ScXQbCA0rXnTGDcfyBGyY2tr7rJs2A3jNTw_bAH-8TE",
      page: 3,
      query: "flower",
      per_page: 12,
    },
  });
  return data;
};
