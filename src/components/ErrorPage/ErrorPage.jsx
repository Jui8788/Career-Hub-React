import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h2>Ooppsss</h2>
      <Link to="/">Go back to home</Link>
    </div>
  );
};

export default ErrorPage;
