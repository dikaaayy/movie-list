import Modal from '../components/modal/Modal'

export default function test() {
  const handler = () => {
    return 0
  }
  return (
    <>
      <Modal handleClose={handler} movie={true} />
    </>
  )
}
