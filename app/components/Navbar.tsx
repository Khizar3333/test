import Link from 'next/link'
import React from 'react'
import styles from "../styles/navbar.module.css"


const Navbar = () => {
  return (
    <>
    <nav className={styles.navbar}>
      <div className={styles.logodiv} >

      <Link  href="/" className={styles.navbarlogo}>
        {/* Replace with your logo image or text */}
        Logo
      </Link>
      <div className={styles.navbarsearch}>
        <form className={styles.form} action="">
        <input type="text" placeholder="Search for Movies,tv Shows,Themes & Cast" />
        <span>
        <i className={styles.icon}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20.004"><path d="m19.705 18.288-5.531-5.531a7.927 7.927 0 1 0-1.424 1.421l5.531 5.532a1.006 1.006 0 0 0 1.422-1.422ZM3.738 12.096a5.908 5.908 0 1 1 8.354 0 5.869 5.869 0 0 1-8.354 0Z"></path></svg></i>

        </span>
        </form>
      </div>
      <div className={styles.navbaricons}>
        <Link className={styles.li} href="#">
        <i className={styles.icon}><svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 512 512"><path d="M256 0C114.616 0 0 114.616 0 256s114.616 256 256 256c141.394 0 256-114.616 256-256S397.394 0 256 0zm0 460.8c-112.927 0-204.8-91.873-204.8-204.8S143.073 51.2 256 51.2 460.8 143.073 460.8 256 368.927 460.8 256 460.8z"></path><path d="m349.112 238.08-124.15-71.68c-17.07-9.851-31.037-1.792-31.037 17.92v143.36c0 19.712 13.967 27.781 31.037 17.92l124.15-71.68c17.07-9.851 17.07-25.989 0-35.84z"></path></svg></i>
        </Link>
        <Link className={styles.li} href="#">
            {/* icon2
          <i className={styles.iconuser} /> */}
        <i className={styles.icon} ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960"><path d="M232.688-396.413q-34.536 0-59.112-24.554Q149-445.52 149-480q0-34.674 24.553-59.13 24.554-24.457 59.034-24.457 34.578 0 59.202 24.457 24.624 24.456 24.624 59.01 0 34.555-24.594 59.131t-59.131 24.576Zm247.432 0q-34.555 0-59.131-24.554Q396.413-445.52 396.413-480q0-34.674 24.554-59.13Q445.52-563.587 480-563.587q34.674 0 59.13 24.457 24.457 24.456 24.457 59.01 0 34.555-24.457 59.131-24.456 24.576-59.01 24.576Zm247.361 0q-34.606 0-59.25-24.554Q643.587-445.52 643.587-480q0-34.674 24.644-59.13 24.644-24.457 59.25-24.457t59.063 24.457Q811-514.674 811-480.12q0 34.555-24.456 59.131-24.457 24.576-59.063 24.576Z"></path></svg></i>
        </Link>
        <button className={styles.btn}>
            Whislist
        </button>
      </div>
          </div>
      
    <div>
    <ul className={styles.ul}>
    <li className={styles.li}>
      <Link  href={'#'}>Stock Video</Link>
    </li>
    <li className={styles.li}>
      <Link  href={'#'}>Video templates</Link>
    </li>
    <li className={styles.li}>
      <Link  href={'#'}>Music</Link>
    </li>
    <li className={styles.li}>
      <Link  href={'#'}>Sound Effect</Link>
    </li>
    <li className={styles.li}>
      <Link  href={'#'}>Web templates</Link>
    </li>
    <li className={styles.li} >
      <Link href={'#'}>Graphics templates</Link>
    </li>
    <li className={styles.li} >
      <Link href={'#'}>Photos</Link>
    </li>
    <li className={styles.li} >
      <Link href={'#'}>Font</Link>
    </li>
    </ul>


</div>
    </nav>
</>
  )
}

export default Navbar
