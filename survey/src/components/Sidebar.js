import React, { Component } from 'react'
import "../assets/Sidebar.css"
export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div class="area"></div><nav class="main-menu">
          <ul>
            <li>
              <a href="/anket-cevapla">
                <i class="fa fa-check-square-o fa-2x"></i>
                <span class="nav-text">
                  Anket Cevapla
                </span>
              </a>

            </li>
            <li class="has-subnav">
              <a href="/anket-hazirla">
                <i class="	fa fa-cog fa-2x"></i>
                <span class="nav-text">
                  Anket Hazırla
                </span>
              </a>

            </li>
            <li class="has-subnav">
              <a href="/anket-analizi">
                <i class="fa fa-bar-chart-o fa-2x"></i>
                <span class="nav-text">
                  Anket Analizi
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
