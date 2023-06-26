import PageHeader from './components/page-header'
import Loading from './components/loading'
import { useEffect, useState } from 'react'
import { api } from './api.service'
import Button from './components/button'
import Table from './components/table'

export default function People() {
  const [data, setData] = useState(null);

  const [showHighRated, setShowHighRated] = useState(false);

  const highRatedPeople = showHighRated ? data.filter(person => person.rating > 5) : data;


  useEffect(() => { setData(api('people')) }, [])

  const addPerson = () => {
    //Dummy Method
  }

  function formatName(person) {
    return `${person.title} ${person.firstName} ${person.middleNames} ${person.lastName}`
  }

  function calculateWeightedRating(person) {
  let weight;
  if (person.yearsOfExperience < 3) weight = 0.8;
  else if (person.yearsOfExperience < 5) weight = 1.2;
  else weight = 1.4;
  
  return person.rating * weight;
}

  if (!data) return <Loading></Loading>

  return (<>
    <PageHeader headline={"People"} actions={<Button text="Add Person" onClick={() => { addPerson() }}></Button>}></PageHeader>
    <div className="flex">
      <div className="w-full max-w-5xl pb-20 mx-auto my-10 2xl:max-w-6xl">
          <Button text="Toggle High Rated" onClick={() => setShowHighRated(prev => !prev)} className={showHighRated ? "bg-blue-500  rounded-2xl hover:bg-blue-800" : "bg-red-500  rounded-2xl hover:bg-red-800"}/>         <div>
          <Table
            data={highRatedPeople.map(x => {
              return {
                ...x, firstName: x.firstName, middleName: x.middleName, lastName: x.lastName, title: x.title
              }
            })} columns={[
              {
                Header: 'Name',
                accessor: 'name',
                Cell: ({ row }) => formatName(row.original),
              },
              {
                Header: 'Job',
                accessor: 'job',
              },
              {
                Header: 'Rating',
                accessor: 'rating',
              },
              {
                Header: 'Weighted Rating',
                accessor: 'weightedRating',
                Cell: ({ row }) => calculateWeightedRating(row.original),
              }
            ]}></Table>
        </div>
      </div>
    </div>
  </>
  )
}