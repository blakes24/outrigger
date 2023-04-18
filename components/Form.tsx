export const Form = () => {
  return (
    <div className="ContactForm">
      <div className="container">
        <form id="contact-form">
          <div className="col-6">
            <input
              type="text"
              name="name"
              className="formInput"
              placeholder="Name"
            ></input>
          </div>
          <div className="col-6">
            <input
              type="email"
              name="email"
              className="formInput"
              placeholder="Email"
            ></input>
          </div>

          <div className="col">
            <input
              type="tel"
              name="phone"
              className="formInput"
              placeholder="Phone Number"
            ></input>
          </div>

          <div className="col">
            <textarea
              rows={3}
              name="message"
              className="formInput"
              placeholder="Message"
            ></textarea>
          </div>

          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
