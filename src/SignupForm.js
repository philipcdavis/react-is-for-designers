import React, { Component } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import {Button, Input} from './styled'

// a basic form
const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value
    });

  return (
    <div>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "purple" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <br />
      <Input
        ref={node => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <Button onClick={submit}>
        Submit
      </Button>
    </div>
  );
};

class SignupForm extends Component {
  render() {
    const url =
      "https://twitter.us18.list-manage.com/subscribe/post?u=4b8048aee994b838162f80e3a&amp;id=21229251bb";
    return (
      <div>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
      </div>
    );
  }
}


export default SignupForm;
