export default function registerScreen() {
  function handleLogin() {
    window.location = "/";
  }
  return (
    <div className="registerScreen">
      <p1>Register Screen</p1>
      <button type="button" class="btn btn-primary" onClick={handleLogin}>
        Primary
      </button>
    </div>
  );
}
