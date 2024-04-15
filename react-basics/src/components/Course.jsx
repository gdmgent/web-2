import React from 'react'

const person = {
    age: 20,
    name: 'Jan'
}

const { name } = person;

const ConditionalDescription = ({ label, value }) => (
    value && <>
        <dt>{label}</dt>
        <dd>{value}</dd>
    </>
)

const Course = ({ name, teacher = 'Dieter', numberOfStudents }) => {
    return (
        <div>
            <h2>Het vak: </h2>
            <dl>
                <ConditionalDescription label='Naam' value={name} />
                <ConditionalDescription label='Docent' value={teacher} />
                <ConditionalDescription label='Aantal studenten' value={numberOfStudents} />
            </dl>
        </div>
    )
}

export default Course