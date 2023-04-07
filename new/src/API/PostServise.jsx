import axios from "axios";

export default class PostServiese {
  static async getAll() {
    try {
      const reponse = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return reponse.data;
    } catch (e) {
      console.log(e);
    }
  }
}
