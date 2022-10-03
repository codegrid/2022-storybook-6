import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button } from '../components/Button'
import { TextField } from '../components/TextField'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Storybook Sample</title>
        <meta name="description" content="Storybook Sample" />
      </Head>
      <main className={styles.main}>
        <form className={styles.form}>
          <span className={styles.title}>My App</span>
          <TextField id="email" label="メールアドレス" errorMessage="メールアドレスが間違っています" />
          <TextField id="password" type="password" label="パスワード" />
          <div className={styles.buttonGroup}>
            <Button type="submit" fullWidth>
              ログイン
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}
