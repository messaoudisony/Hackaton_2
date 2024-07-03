
import styles from '../styles/pages/home.module.scss';
import { useAppDispatch } from "../stores/index";
import { DATA } from '../data/associations'
import { useEffect } from "react";

export default function Home() {

  const dispatch = useAppDispatch();
 
  
  return (   
  <div className={"container " + styles.main}>
   <img src="/images/img01.jpeg" width={300} height={300}/>
   <h1 className="my-3">AIDE UN VIOQUE</h1>
   <button>Button</button>
   <button>Button</button>
  </div>

  )
}