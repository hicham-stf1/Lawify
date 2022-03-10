import React, { Component } from 'react'



class Banner extends Component {
    render() {
        return (
            <div class="container1">
            <div class="cover-photo">
              <img src="https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" class="profile" />
            </div>
            <div class="profile-name">Maître Prenom NOM</div>
            <p class="about">250 rue Saint Jacques-Paris</p>
            <p class="about">NB d'annees d'experience </p>
            <p class="about">Rendez-vous au cabinet<br/>Rendez-vous online</p><br/>
          </div>
        )
    }
}

export default Banner


