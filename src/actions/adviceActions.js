import { FETCH_POST } from "./types";
export const fetchPost = () => dispatch => {
  fetch("https://api.adviceslip.com/advice", {
    method: "GET"
  })
    .then(response => response.json())
    .then(data => {
      this.setState({
        spinner: false,
        result: data.slip
      });
    })
    .catch(err => {
      this.setState({
        spinner: false,
        error: err.message
      });
    });
  dispatch({
    type: FETCH_POST,
    payload: posts
  });
};
