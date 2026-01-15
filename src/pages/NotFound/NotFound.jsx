function Error() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <LinkRouter to="/home">Go to Home</LinkRouter>
    </div>
  );
}

export default Error;
