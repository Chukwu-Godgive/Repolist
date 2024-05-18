// Repo
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Repo() {

  const { name } = useParams();
  console.log(name);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* footer section  */}
      <Footer />
    </>
  );
}

export default Repo;
