import React from "react";
import "./advice.css";
import CircularIndeterminate from "../spinner";
class Advice extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      spinner: false,
      result: [],
      error: "",
      hour: null
    };
  }

  componentDidMount() {
    this.getHour();
    this.setState({
      spinner: true
    });
    return fetch("https://api.adviceslip.com/advice", {
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
  }
  loadMoreQuote = () => {
    this.setState({
      spinner: true
    });
    return fetch("https://api.adviceslip.com/advice", {
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
  };
  //Fucntion handling this.getHour()
  getHour = () => {
    const date = new Date();
    const hour = date.getHours();
    this.setState({
      hour
    });
  };
  render() {
    const { result, spinner, error, hour } = this.state;
    return (
      <React.Fragment>
        <div className="big-container">
          <h1>{hour < 12 ? "Hey, Good Morning" : "Good Evening"}</h1>
          <button className="load-quote" onClick={this.loadMoreQuote}>
            More Quote
          </button>
          {spinner && <CircularIndeterminate />}
          <h3>{result.advice}</h3>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </React.Fragment>
    );
  }
}

export default Advice;
