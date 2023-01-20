import { Component } from "react";
import axios from "axios";
import "../assets/Survey.scss"
import HandleForm from "../HandleForm";


export default class SurveyAnswer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
            }
        }
    }

    async surveySubmit(event) {
        event.preventDefault();
        let answers = [];
        for (let b in this.state.formData) {
            answers.push(
                {
                    id: String.createId(),
                    questionId: b,
                    value: this.state.formData[b]
                })
        }
        let user_answers = {
            userId: String.createId(),
            answers: answers
        }
        let response = await axios.post("http://localhost:3001/answers", user_answers)
        if (response){
            alert("Cevaplar eklendi")
            window.location.reload();}
        else
            alert("Yanlış bir şeyler var?!")
    }

    render() {
        return (
            <main id="main" className="container">
                <div className="row">
                    <div className="">
                        <div className="m-b-md text-center">
                            <h1 id="title">Anket Cevaplama Formu</h1>
                            <p id="description" className="description text-center">Lütfen anketi cevaplayınız.</p>
                        </div>
                        <form action="" id="survey-form" name="survey-form" onSubmit={e => this.surveySubmit(e)}>
                            {
                                this.props.questions.map(question => (
                                    <fieldset>
                                        <label>{question.textType[0].text || question.textType[1].text}</label>
                                        {
                                            question.textType[0].type === "open-ended" || question.textType[1].type === "open-ended" ?
                                                <textarea name={question.id} maxlength="500" placeholder="Cevabınız 500 karakteri geçemez." onChange={e => HandleForm.onChangeInput(e, this)}></textarea>
                                                : null
                                        }
                                        {
                                            question.options.map((option) => (
                                                question.textType[0].type === "single-select" || question.textType[1].type === "single-select" ?
                                                    <label className="m-b-xs">
                                                        <input type="radio" name={question.id} value={option.selection} onChange={e => { HandleForm.onChangeInput(e, this) }} /> {option.selection}
                                                    </label>
                                                    : question.textType[0].type === "multi-select" || question.textType[1].type === "multi-select" ?
                                                    <label className="m-b-xs">
                                                        <input type="checkbox" name={question.id} value={option.selection} onChange={e => { HandleForm.onChangeInput(e, this) }} /> {option.selection}
                                                    </label>
                                                    : null
                                            ))
                                        }
                                    </fieldset>
                                ))
                            }
                            <button id="submit" type="submit" className="btn">Formu gönder</button>
                        </form>
                    </div>
                </div>
            </main>
        );
    }
}