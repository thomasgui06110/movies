import React, { Component } from "react";
import Style from "./MovieElement.module.scss";

export default class MovieElement extends Component {
  click = () => {
    this.props.updateSelectedMovie(this.props.movie.title);
  };
  render() {
    return (
      <div
        onClick={this.click}
        className={" d-flex bg-light flex-row " + Style.container}
      >
        <img width="185" alt="film" src={this.props.movie.img} />
        <div className="flex-fill d-flex flex-column p-3">
          <h5>{this.props.movie.title}</h5>
          <hr className="w-100" />
          <p>{this.props.movie.details}</p>
          <div className="d-flex flex-row justify-content-end">
            {/* {this.props.isFavori ? ( */}
            {this.props.isFavori ? (
              <button
                onClick={() => {
                  this.props.removeFavori(this.props.movie.title);
                }}
                className="btn btn-small btn-danger"
              >
                Delete
              </button>
            ) : (
              <button
                onClick={() => {
                  this.props.addFavori(this.props.movie.title);
                }}
                className="btn btn-small btn-primary"
              >
                Add
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
