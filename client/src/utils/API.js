import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?apikey=";
const APIKEY = "703d1eb1f23d44738fd589f6fd7d2cbd&q=";

// export object with search method that searches NYT API
export default {
  search: function(query) {
    return axios.get(BASEURL + APIKEY + query);
  },
  saveArticle: function(data) {
    return axios.post("/api/articles", data);
  },
  getArticles: function() {
    return axios.get("/api/articles");
  },
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  }
};
