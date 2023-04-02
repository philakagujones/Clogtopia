import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from '@/styles/Navbar.module.css'
import Logo from '@/public/clogo.png'
import { Navbar, Button, Text, Card, Radio } from "@nextui-org/react";

export default function Navski() {
  return (
      <div className={styles.navbar}>
        <div className={styles.logo}>
            <Link href="/">
                <Image
                  src={Logo}
                  alt="Clogtopia logo"
                  width="625px"
                  height="703px"
                  style={styles.image}
                  layout="responsive"
                />
            </Link>
        </div>
      </div>
  )
}
