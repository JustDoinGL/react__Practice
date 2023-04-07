import axios from "axios";

export default class PostServiese {
  static async getAll(limit = 10, page = 1) {
    const reponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );
    return reponse;
  }
}
