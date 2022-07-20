export const getServerSideProps = async () => {
  return {
    redirect: {
      permanent: false,
      destination: '/',
    },
  }
}

export default function Index() {
  return <div>index</div>
}
