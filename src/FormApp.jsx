import useForm from "./hooks/useForm";

const FormApp = () => {
  const initialValue = {
    username: "",
    email: "",
    password: "",
  };

  const { username, email, password, onInputChange } = useForm(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    const objectForm = {
      username,
      email,
      password,
    };
    console.log(objectForm);
  };

  return (
    <>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={username}
            onChange={onInputChange}
          />
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pass" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="pass"
            name="password"
            value={password}
            onChange={onInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default FormApp;
