import React, { Component } from 'react'
import Navbar from '../components/Navbar1'
import ListImage from '../assets/images/img_525475.png'



class Banner extends Component {
    render() {
        return (
            <div class="container1">
              <div class="cover-photo">
                <img src="https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" class="profile" />
              </div>
              <div class="profile-name">Maître Prenom NOM</div>
              <div class="about">
                <p class="adresse">250 rue Saint Jacques-Paris</p>
                <ul class="domaines">
                  <li>Domaine 1</li>
                  <li>Domaine 2</li>
                  <li>Domaine 3</li>
                </ul>
                <ul class="services">
                  <li><img style={{width:'15px'}} src={ListImage}/> Rendez-vous online</li>
                  <li><img style={{width:'15px'}} src={ListImage}/> Rendez-vous au cabinet</li>
                </ul>
              </div>
              <p class="experience">NB d'annees d'experience </p>
              <Navbar/>
          </div>
        )
    }
}

export default Banner


