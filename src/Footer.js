import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <div style={{
        marginTop: 50,
        marginBottom: 50,
        textAlign: "center",
        fontSize:20
      }}>
      <a
          style={{
            textDecoration: "none"
          }}
          href="https://www.twitter.com/philipcdavis"
        >
           Twitter
        </a>
      </div>
    );
  }

}

export default Footer;
