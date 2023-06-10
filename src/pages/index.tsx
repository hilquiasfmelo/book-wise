import { signOut, useSession } from 'next-auth/react'

import { NextPageWithLayout } from './_app'
import { DefaultLayout } from '@/layouts/default-layout'

const HomePage: NextPageWithLayout = () => {
  const { data } = useSession()

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <button onClick={() => signOut()}>Deslogar</button>
    </div>
  )
}

HomePage.getLayout = (page) => {
  return <DefaultLayout title="Início">{page}</DefaultLayout>
}

export default HomePage
