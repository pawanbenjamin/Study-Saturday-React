import React, { Component } from 'react';
import axios from 'axios';
import StudentList from './StudentList'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      singleStudent: {}
    };
    this.selectStudent = this.selectStudent.bind(this)
  }

  componentDidMount() {
    this.getStudents();
  }

  async getStudents() {
    console.log('fetching');
    try {
      const { data } = await axios.get('/student');
      this.setState({ students: data });
    } catch (err) {
      console.error(err);
    }
  }

  selectStudent(student){
    console.log('I have been clicked')
    this.setState({ singleStudent: student })
    console.log(this.state.singleStudent)
  }

  render() {
    return (
      <div>
        <h1>Students</h1>
        <table>
          <StudentList singleStudent={this.state.singleStudent} selectStudent={this.selectStudent} students={this.state.students}/>
        </table>
      </div>
    );
  }
}
