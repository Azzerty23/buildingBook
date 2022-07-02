import EditMaterialCell from 'src/components/Admin/Material/EditMaterialCell'

type MaterialPageProps = {
  id: number
}

const EditMaterialPage = ({ id }: MaterialPageProps) => {
  return <EditMaterialCell id={id} />
}

export default EditMaterialPage
