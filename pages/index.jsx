import { useEffect, useState } from "react";
import { Button } from "antd-mobile";
import http from '../http';
import styles from "../styles/Home.module.css";

export default function Home() {
  const [name, setName] = useState("zhihe");
  const fetch = async ()=>{
    const {data} = await http.get('http://c.sit.kuaiyufenqi.com/zhclientface/v3/mainPage');
    setName(data.stickyTitleBar.title);
  }
  useEffect(() => {
    setName("快鱼分期");
    fetch();
  }, []);
  return (
    <div className={styles.container}>
      <Button type="primary">primary</Button>
      <span>{process.env.SP_ENV}</span>
    </div>
  );
}
