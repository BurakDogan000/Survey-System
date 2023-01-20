import React, { Component } from 'react'
import HandleForm from "../HandleForm";
import axios from "axios";
import "../assets/Survey.scss"

export default class SurveyQuestion extends Component {
  state = {
    selectedType: "",
    formData: {}
  }
  async surveySubmit(event) {
    event.preventDefault();
    let textType = []
    let options = []
    let question;
    for (let data in this.state.formData) {
      if (data === "text" || data === "type") {
      }
      else {
        options.push(
          {
            selection: this.state.formData[data]
          }
        )
      }
    }
    for (let data in this.state.formData) {
      if (data === "text" || data === "type") {
        textType.push({
          [data]: this.state.formData[data]
        })
      }
      else {
      }
    }
    question = {
      id: String.createId(),
      textType: textType,
      options: options
    }
    let response = await axios.post("http://localhost:3001/questions", question)
    if (response) {
      alert("Sorunuz eklendi!")
      window.location.reload();
    }
    else
      alert("Yanlış bir şeyler var?!")
  }
  render() {
    return (
      // <div>
      //   <h3 style={{ textAlign: "center" }}>Anket Hazırlama</h3>
      //   <form onSubmit={e => this.surveySubmit(e)}>
      //     <div className="card" style={{ marginTop: "30px" }}>
      //       <div className="card-header">
      //         <label>Lütfen sorunuzu giriniz.</label><br />
      //       </div>
      //       <div className="card-body">
      //         <textarea name="text" className="form-control" aria-label="With textarea" onChange={e => HandleForm.onChangeInput(e, this)}></textarea><br />
      //         <label>Lütfen soru tipinizi seçiniz.</label><br /><br />
      //         <div>
      //           <input name="type" className="form-check-input" type="radio" value="single-select" onChange={e => { HandleForm.onChangeInput(e, this); this.setState({ selectedType: "single-select" }) }} /><label>Tek Seçmeli</label>
      //         </div>
      //         <div>
      //           <input name="type" className="form-check-input" type="radio" value="multi-select" onChange={e => { HandleForm.onChangeInput(e, this); this.setState({ selectedType: "multi-select" }) }} /><label>Çoktan Seçmeli</label>
      //         </div>
      //         <div>
      //           <input name="type" className="form-check-input" type="radio" value="open-ended" onChange={e => { HandleForm.onChangeInput(e, this); this.setState({ selectedType: "open-ended" }) }} /><label>Açık Uçlu</label>
      //         </div><br></br>
      //         {
      //           this.state.selectedType === "single-select" ?
      //             <div>
      //               Seçenekleriniz:
      //               <input name="selection1" type="text" className="form-control" placeholder="Lütfen seçeneğinizi yazınız." onChange={e => HandleForm.onChangeInput(e, this)} /><br></br>
      //               <input name="selection2" type="text" className="form-control" placeholder="Lütfen seçeneğinizi yazınız." onChange={e => HandleForm.onChangeInput(e, this)} /><br></br>
      //               <input name="selection3" type="text" className="form-control" placeholder="Lütfen seçeneğinizi yazınız." onChange={e => HandleForm.onChangeInput(e, this)} /><br></br>
      //               <input name="selection4" type="text" className="form-control" placeholder="Lütfen seçeneğinizi yazınız." onChange={e => HandleForm.onChangeInput(e, this)} /><br></br>
      //             </div>
      //             : this.state.selectedType === "multi-select" ?
      //               <div>
      //                 Seçenekleriniz:
      //                 <input name="selection1" type="text" className="form-control" placeholder="Lütfen seçeneğinizi yazınız." onChange={e => HandleForm.onChangeInput(e, this)} /><br></br>
      //                 <input name="selection2" type="text" className="form-control" placeholder="Lütfen seçeneğinizi yazınız." onChange={e => HandleForm.onChangeInput(e, this)} /><br></br>
      //                 <input name="selection3" type="text" className="form-control" placeholder="Lütfen seçeneğinizi yazınız." onChange={e => HandleForm.onChangeInput(e, this)} /><br></br>
      //                 <input name="selection4" type="text" className="form-control" placeholder="Lütfen seçeneğinizi yazınız." onChange={e => HandleForm.onChangeInput(e, this)} /><br></br>
      //               </div>
      //               : null
      //         }
      //       </div>
      //     </div>
      //     <button type="submit" className="btn btn-primary" style={{ marginLeft: "350px", marginTop: "10px", marginBottom: "10px" }}>Gönder</button>
      //   </form>
      // </div>
      <main id="main" className="container">
        <div className="row">
          <div className="">
            <div className="m-b-md text-center">
              <h1 id="title">Anket Hazırlama Formu</h1>
              <p id="description" className="description text-center">Lütfen anketi doldurunuz.</p>
            </div>
            <form action="" id="survey-form" name="survey-form" onSubmit={e => this.surveySubmit(e)}>
              <fieldset>
                <label>
                  Lütfen sorunuzu giriniz.
                  <textarea name="text" maxlength="500" onChange={e => HandleForm.onChangeInput(e, this)}></textarea>
                </label>
              </fieldset>
              <fieldset>
                <div className="labels">
                  How likely is that you would recommend freeCodeCamp to a friend? *
                </div>
                <label className="m-b-xs">
                  <input type="radio" name="type" value="single-select" onChange={e => { HandleForm.onChangeInput(e, this); this.setState({ selectedType: "single-select" }) }} /> Tek Seçmeli
                </label>
                <label className="m-b-xs">
                  <input type="radio" name="type" value="multi-select" onChange={e => { HandleForm.onChangeInput(e, this); this.setState({ selectedType: "multi-select" }) }} /> Çoktan Seçmeli
                </label>
                <label className="m-b-xs">
                  <input type="radio" name="type" value="open-ended" onChange={e => { HandleForm.onChangeInput(e, this); this.setState({ selectedType: "open-ended" }) }} /> Açık Uçlu
                </label>
              </fieldset>
              {
                this.state.selectedType === "single-select" ?
                  <fieldset>
                    <label className="m-b-xs">
                      Seçenekleriniz:
                      <input className="" type="text" name="selection1" placeholder="Lütfen seçeneğinizi yazınız." onChange={e => HandleForm.onChangeInput(e, this)} />
                    </label>
                    <label className="m-b-xs">
                      <input className="" type="text" name="selection2" placeholder="Lütfen seçeneğinizi yazınız." onChange={e => HandleForm.onChangeInput(e, this)} />
                    </label>
                    <label className="m-b-xs">
                      <input className="" type="text" name="selection3" placeholder="Lütfen seçeneğinizi yazınız." onChange={e => HandleForm.onChangeInput(e, this)} />
                    </label>
                    <label className="m-b-xs">
                      <input className="" type="text" name="selection4" placeholder="Lütfen seçeneğinizi yazınız." onChange={e => HandleForm.onChangeInput(e, this)} />
                    </label>
                  </fieldset>
                  : this.state.selectedType === "multi-select" ?
                  <fieldset>
                    <label className="m-b-xs">
                      Seçenekleriniz:
                      <input className="" type="text" name="selection1" placeholder="Lütfen seçeneğinizi yazınız." onChange={e => HandleForm.onChangeInput(e, this)} />
                    </label>
                    <label className="m-b-xs">
                      <input className="" type="text" name="selection2" placeholder="Lütfen seçeneğinizi yazınız." onChange={e => HandleForm.onChangeInput(e, this)} />
                    </label>
                    <label className="m-b-xs">
                      <input className="" type="text" name="selection3" placeholder="Lütfen seçeneğinizi yazınız." onChange={e => HandleForm.onChangeInput(e, this)} />
                    </label>
                    <label className="m-b-xs">
                      <input className="" type="text" name="selection4" placeholder="Lütfen seçeneğinizi yazınız." onChange={e => HandleForm.onChangeInput(e, this)} />
                    </label>
                  </fieldset> : null
              }
              <button id="submit" type="submit" className="btn">Formu gönder</button>
            </form>
          </div>
        </div>
      </main>
    )
  }
}
