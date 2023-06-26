import PageHeader from './components/page-header'
import Loading from './components/loading'
import { useEffect, useState } from 'react'
import { api } from './api.service'
import Button from './components/button'
import Table from './components/table'

export default function People() {
  const [data, setData] = useState(null);

  useEffect(() => { setData(api('people')) }, [])

  const addPerson = () => {
    //Dummy Method
  }

  if (!data) return <Loading></Loading>

  return (<>
    <PageHeader headline={"People"} actions={<Button text="Add Person" onClick={() => { addPerson() }}></Button>}></PageHeader>
    <div className="flex">
      <div className="w-full pb-20 2xl:max-w-6xl max-w-5xl mx-auto my-10">
        <div>
          <Table
            data={data.map(x => {
              return {
                ...x, name: x.firstName
              }
            })} columns={[
              {
                Header: 'Name',
                accessor: 'name',
              },
              {
                Header: 'Job',
                accessor: 'job',
              },
              {
                Header: 'Rating',
                accessor: 'rating',
              }
            ]}></Table>
        </div>
      </div>
    </div>
  </>
  )
}