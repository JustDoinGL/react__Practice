import axios from "axios";

export default class PostServiese {
  static async getAll() {
    const reponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return reponse.data;
  }
}
