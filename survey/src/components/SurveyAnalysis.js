import React, { Component } from 'react'
import "../assets/Survey.scss"
import HandleForm from "../HandleForm";

export default class SurveyAnalysis extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main id="main" className="container">
        <div className="row">
          <div className="">
            <div className="m-b-md text-center">
              <h1 id="title">Anket Analizi Formu</h1>
              <p>Ankete {this.props.answers.length} kişi katılmıştır.</p>
            </div>
            <form action="" id="survey-form" name="survey-form" onSubmit={e => this.surveySubmit(e)}>
              {
                this.props.questions.map((question) => {
                  return (
                    <fieldset>
                      <label>
                        "{question.textType[0].text || question.textType[1].text}" adlı sorunun cevapları:
                      </label>
                      {
                        this.props.answers.map((answer) => (
                          answer.answers.map((ans) => (
                            ans.questionId === question.id ?
                              <ul>
                                <li>
                                  <label>
                                    {
                                      Array.isArray(ans.value) ?
                                        <>{ans.value.join(', ')}</> : ans.value
                                    }
                                  </label>
                                </li>
                              </ul> : null
                          ))
                        ))
                      }
                    </fieldset>
                  )
                })
              }
            </form>
          </div>
        </div>
      </main>
    )
  }
}
