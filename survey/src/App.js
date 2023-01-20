import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import SurveyAnswer from './components/SurveyAnswer';
import { Route, Routes } from "react-router-dom";
import SurveyQuestion from './components/SurveyQuestion';
import SurveyAnalysis from './components/SurveyAnalysis';

export default class App extends Component {
  state = {
    questions: [],
    answers: []
  };
  componentDidMount() {
    this.getQuestions();
    this.getAnswer();
  }

  getQuestions = () => {
    fetch("http://localhost:3001/questions")
      .then(response => response.json())
      .then(data => this.setState({ questions: data }));
  }

  getAnswer = () => {
    fetch("http://localhost:3001/answers")
      .then(response => response.json())
      .then(data => this.setState({ answers: data }));
  }

  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-2'>
              <Sidebar title="Category List" currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} />
            </div>
            <div className='col-sm-10'>
              <Routes>
                <Route exact path="/" element={
                  <SurveyAnswer questions={this.state.questions} />
                } />
                <Route path="/anket-cevapla" element={
                  <SurveyAnswer questions={this.state.questions} />
                } />
                <Route path="/anket-hazirla" element={
                  <SurveyQuestion />
                } />
                <Route path="/anket-analizi" element={
                  <SurveyAnalysis answers={this.state.answers} questions={this.state.questions} />
                } />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
