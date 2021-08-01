import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Button from "react-bootstrap/Button";

import "./ContactForm.css";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mjvjawnb");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="name">Full Name:</label>
        </div>
        <input id="name" type="text" name="name" />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div>
        <div>
          <label className="form-label" htmlFor="email">
            Email Address:
          </label>
        </div>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div>
        <div>
          <label className="form-label" htmlFor="message">
            Message:
          </label>
        </div>
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <Button
        variant="outline-secondary"
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;

<form class="mx-2">
  <div class="row">
    <div class="col-md my-2">
      <div class="form-floating">
        <input
          type="text"
          aria-label="First name"
          class="form-control"
          id="floatingInputGrid"
          placeholder="First Name"
        />
        <label for="floatingInputGrid">First Name</label>
      </div>
    </div>
    <div class="col-md my-2">
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingInputGrid"
          placeholder="Surname"
        />
        <label for="floatingInputGrid">Surname</label>
      </div>
    </div>
  </div>
  <div class="form-floating my-2">
    <input
      type="email"
      class="form-control"
      id="floatingInputGrid"
      placeholder="name@example.com"
    />
    <label for="floatingInputGrid">Email address</label>
  </div>
  <div class="form-floating mt-4">
    <input
      type="text"
      class="form-control"
      id="floatingInputGrid"
      placeholder="subject"
    />
    <label for="floatingInputGrid">Subject</label>
  </div>
  <div class="form-floating mt-4">
    <textarea
      class="form-control"
      placeholder="Leave a comment here"
      id="floatingTextarea2"
      style="height: 100px"
    ></textarea>
    <label for="floatingTextarea2">Message</label>
  </div>
  <div class="text-center mx-auto my-3">
    <button type="button" class="btn btn-primary" disabled>
      Submit
    </button>
  </div>
</form>;
