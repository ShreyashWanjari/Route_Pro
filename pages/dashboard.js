import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Link from "next/link";

const Dashboard = () => {
  const router = useRouter();

  const logOut = () => {
    Cookies.remove("loggedin-cookie");
    router.push('/')
  };

  return (
    <div>
      <Link href="/">
        <nav>
          <h1>Back to Home</h1>
        </nav>
      </Link>
      <div className="dashboard">
        <h1>Hello! Welcome to dashboard! 👋</h1>
        <button
          type="submit"
          onClick={() => logOut()}
          style={{ backgroundColor: "red", marginTop: "400px" }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
