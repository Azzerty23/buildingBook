import EditCompanyCell from 'src/components/Admin/Company/EditCompanyCell'

type CompanyPageProps = {
  id: number
}

const EditCompanyPage = ({ id }: CompanyPageProps) => {
  return <EditCompanyCell id={id} />
}

export default EditCompanyPage
