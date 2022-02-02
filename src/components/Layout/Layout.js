import Head from 'next/head';

import Footer from '@components/Footer';

import styles from './Layout.module.scss';

const Layout = ({ children, className, ...rest }) => {
  let layoutClassName = styles.layout;

  if ( className ) {
    layoutClassName = `${layoutClassName} ${className}`
  }

  return (
    <div className={layoutClassName} {...rest}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>{ children }</main>
      <Footer />
    </div>
  )
}

export default Layout;