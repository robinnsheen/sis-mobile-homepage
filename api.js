import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8000";

/** API Class*/

class SISApi {

  static token = "71ba9fbb567c76e604ac05dd28ec8a3bfea61073";

  static async request(endpoint, data = {}, method = "get") {
    // console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;

    const headers = {
      "Authorization": `Token ${token}`,
      "Content-Type": "application/json",
    }

    const params = (method === "get")
      ? data
      : {};

    try {
      const res = (await axios({ url, method, data, params, headers }));
      return res.data;

    } catch (err) {
      // console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get all listings.
   *
   *  Returns:
   *
   *  [ { id, owner, title, description, price_per_day, location, images: [ image , ... ] } ]

  */

  static async getAssessmentSessionsList() {

    let res = await this.request(
      `/api/assessmentsessions/`
    );
    return res.data.results;
  }

  /** Get details on a listing by id.
   *
   *  id =>
   *
   *    { id, owner, title, description, price_per_day, location, images: [ image , ... ] }
   *
  */

  static async getListing(id) {
    let res = await this.request(`listings/${id}`);
    return res.listing;
  }

  /** Add new listing:
   *
   *  { title, description, price_per_day, location, [ image_file , ... ] } =>
   *
   *  { id, owner_id, title, description, price_per_day, location, images: [ image , ... ] }
   */

  static async addListing(listingDetails) {
    let res = await this.request(
      'listings',
      listingDetails,
      "post"
    );
    return res.listing;
  }

  /** On login - get token by making a POST request to /login:
   * { username, password } => token
   */

  static async loginUser(userLoginDetails) {
    let res = await this.request(
      'login',
      userLoginDetails,
      "post"
    );

    this.token = res.token;
    return res.token;
  }

  /** On registering - get token by making a POST request to /signup:
  * { username, password, first_name, last_name, email } => token
  */

  static async signupUser(userRegisterDetails) {
    let res = await this.request(
      'signup',
      userRegisterDetails,
      "post"
    );

    this.token = res.token;
    return res.token;
  }

  /** On registering - get token by making a POST request to /signup:
  * { username, password, first_name, last_name, email } => token
  */

  static async getUserDetails() {
    let res = await this.request(
      'user'
    );

    return res.user;
  }
}

export default SISApi;