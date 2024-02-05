import React from 'react'
import Image from "next/image";
import styles from "@/app/styles/converter.module.css"
import word from '@/public/images/pdf-word.svg'
import excel from "@/public/images/Excel-PDF.svg";
import ppt from "@/public/images/PPT-PDF.svg";
import rtf from "@/public/images/Image-in-RTX.svg";
import txt from "@/public/images/Image-in-TXT.svg";
import pub from "@/public/images/Excel-PUB.svg";

import Link from 'next/link';
const Converter = () => {
  return (
    
    <>
    <div className={styles.box}>

    <h1 className={styles.h1}> Convert to pdf</h1>
    <div className={styles.gridcontainer}>
    <Link href="https://www.hipdf.com/pdf-to-word" className={styles.converterlink} >
      <div>

<Image className={styles.img} src={word} alt={'ms word'}/>
<h3 className={styles.h3}>Word to PDF</h3>
<div className={styles.p}>
Easily convert word to PDF
</div>
      </div>
</Link>
    <Link href="https://www.hipdf.com/excel-to-pdf" className={styles.converterlink} >
      <div>

<Image className={styles.img} src={excel} alt={'ms word'}/>
<h3 className={styles.h3}>Word to excel</h3>
<div className={styles.p}>
Easily convert excel to pdf
</div>
      </div>
</Link>
    <Link href="https://www.hipdf.com/rtf-to-pdf" className={styles.converterlink} >
      <div>

<Image className={styles.img} src={rtf} alt={'img'}/>
<h3 className={styles.h3}>ppt to PDF</h3>
<div className={styles.p}>
Easily convert PDF to Word document.
</div>
      </div>
</Link>
    <Link href="https://www.hipdf.com/ppt-to-pdf" className={styles.converterlink} >
      <div>

<Image className={styles.img} src={ppt} alt={'ppt'}/>
<h3 className={styles.h3}>Ppt to PDF</h3>
<div className={styles.p}>
Easily convert Ppt to PDF
</div>
      </div>
</Link>
<Link href="https://www.hipdf.com/ppt-to-pdf" className={styles.converterlink} >
      <div>

<Image className={styles.img} src={txt} alt={'image'}/>
<h3 className={styles.h3}>Txt to PDF</h3>
<div className={styles.p}>
Easily convert Txt to PDF
</div>
      </div>
</Link>

<Link href="https://www.hipdf.com/ppt-to-pdf" className={styles.converterlink} >
      <div>

<Image className={styles.img} src={pub} alt={'image'}/>
<h3 className={styles.h3}>Txt to PDF</h3>
<div className={styles.p}>
Easily convert Txt to PDF
</div>
      </div>
</Link>
</div>

    </div>
    </>
  )
}

export default Converter
