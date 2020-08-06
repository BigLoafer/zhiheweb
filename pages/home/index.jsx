import { useState, useEffect } from "react";
import styles from "./index.module.scss";

const Home = ({ data }) => {
  const [test, setTest] = useState(data);
  return <div className={styles.container}>{test}</div>;
};

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:4000/api/hello`);
  const data = await res.text();
  const status = res.status;
  return { props: { data, status } };
}

export default Home;
