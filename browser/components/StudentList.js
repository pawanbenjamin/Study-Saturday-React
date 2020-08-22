import React from 'react'
import SingleStudent from './SingleStudent'

const StudentList = (props) => {
  console.log(props)
  return (
      <tbody>
            <tr>
              <th>Name</th>
              <th>Tests</th>
            </tr>
            {props.students.map(student => {
              return (
                <tr key={student.id} onClick={props.selectStudent(student)}>
                  <td>{student.fullName}</td>
                  <td>Details</td>
                </tr>
              );
            })}
      </tbody>
  )
}

export default StudentList;
