import React, { Component } from 'react'
import "../App.css";

export class ErrorPage extends Component {
  render() {
    return (
      <>
      <div class="error-body">
        <h1>404 Error Page </h1>
        <section class="error-container">
          <span>4</span>
          <span><span class="screen-reader-text">0</span></span>
          <span>4</span>
        </section>
        <h1>No Page Found</h1>
        </div>
    </>
    )
  }
}

export default ErrorPage