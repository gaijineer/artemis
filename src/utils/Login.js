/* const [email, setEmail] = useState("example@example.com");
const [pass, setPass] = useState("examplePassword123456!$%");
const auth = getAuth();
import {
  signOut,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
function Login(props) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.onSubmit(event);
      }}
    >
      <label htmlFor="email">email:</label>
      <input type="email" value={props.email} name="email" onChange={props.onChange} />
      <label htmlFor="pass">password:</label>
      <input type="password" name="pass" value={props.pass} onChange={props.onChange} />
      <button
        type="submit"
        className="min-w-0 border-2 shadow-sm bg-emerald-100 grow-0 shrink max-w-min"
      >
        Login
      </button>
      <button
        onClick={props.onClick}
        className="min-w-0 bg-red-200 border-2 shadow-sm grow-0 shrink max-w-min"
      >
        Logout
      </button>
    </form>
  );
}

export default Login;

function handleLoginSubmit() {
  signInWithEmailAndPassword(auth, email, pass)
    .then((cred) => {
      console.log("login: ", cred);
    })
    .catch((err) => {
      alert(err);
    });
}

function handleLoginChange(event) {
  if (event.target.type == "email") {
    setEmail(event.target.value);
  }
  if (event.target.type == "password") {
    setPass(event.target.value);
  }
}

function handleLogoutClick() {
  signOut(auth)
    .then((res) => {
      console.log("logout: " + res);
    })
    .catch((err) => {
      alert(err);
    });
}

onAuthStateChanged(auth, (user) => {
  console.log("changed: ", user);
});

<Login
  email={email}
  pass={pass}
  onChange={handleLoginChange}
  onSubmit={handleLoginSubmit}
  onClick={handleLogoutClick}
/>;
 */
