import React from "react";

/* nextjs */
import Head from "next/head";
import Image from "next/image";

/* css */
import styles from "../styles/Register.module.css";

/* components */
import { NormalInput, NormalButton } from "../components";

const Register = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>LikeShoes</title>
        <meta name="Register" content="Registro de usuario" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.border}>
          <h4 style={{ marginBottom: 70 }}>
            Regístrate para comprar lo que mas te gusta
          </h4>

          <div className={styles.inputContainer}>
            <NormalInput label="Correo electronico" />
          </div>

          <div className={styles.inputContainer}>
            <NormalInput label="Nombre completo" />
          </div>

          <div className={styles.inputContainer}>
            <NormalInput label="Nombre completo" />
          </div>

          <div>
            <NormalButton
              backgroundColor="#5CA1F7"
              textColor="#fff"
              value="Registrarme"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Register;
