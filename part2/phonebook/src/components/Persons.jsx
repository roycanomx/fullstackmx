const Person = ({ name, number, handleDelete }) => (
  <p>
    {name} {number} <button onClick={handleDelete}>delete</button>
  </p>
)

const Persons = ({ persons, deletePerson }) => {
  return (
    <div>
      {persons.map(person => (
        <Person 
          key={person.id} 
          name={person.name} 
          number={person.number} 
          handleDelete={() => deletePerson(person.id)} 
        />
      ))}
    </div>
  )
}

export default Persons