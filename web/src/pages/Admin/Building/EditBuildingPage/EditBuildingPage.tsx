import EditBuildingCell from 'src/components/Admin/Building/EditBuildingCell'

type BuildingPageProps = {
  id: number
}

const EditBuildingPage = ({ id }: BuildingPageProps) => {
  return <EditBuildingCell id={id} />
}

export default EditBuildingPage
