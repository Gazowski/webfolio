import React from 'react'
import CloseButton from '../CloseButton/CloseButton'
import axios from 'axios'

import './ContactForm.css'

class ContactForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: ''
        }
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
      }
    
      onEmailChange(event) {
        this.setState({email: event.target.value})
      }
    
      onMessageChange(event) {
        this.setState({message: event.target.value})
      }
    
    handleSubmit(event) {
        event.preventDefault();
        axios({
            method: "POST", 
            url:"http://localhost:3002/send", 
            data:  this.state
          }).then((response)=>{
            if (response.data.status === 'success'){
              alert("Votre message a été envoyé."); 
              this.resetForm()
            }else if(response.data.status === 'fail'){
              alert("Échec de l'envoi.")
            }
          })
    }

    resetForm(){    
        this.setState({name: '', email: '', message: ''})
     }

    closeContactForm(){
        let form = document.querySelector('.contactForm')
        form.classList.toggle('displayNone')

    }

    render(){
        return(
            <div className={this.props.class}>
                <h3>Laissez-moi un message</h3>
                <form onSubmit={(e)=>{this.handleSubmit(e)}} method="POST">
                    <div className="">
                        <input type="text" 
                            className=""
                            placeholder="Votre nom" 
                            value={this.state.name}
                            required 
                            onChange={(e)=>{this.onNameChange(e)}} />
                    </div>
                    <div className="">
                        <input type="email" 
                            className="" 
                            placeholder="Votre Courriel"
                            value={this.state.email}
                            required 
                            onChange={(e)=>{this.onEmailChange(e)}} />
                    </div>
                    <div className="">
                        <textarea 
                            className=""
                            placeholder="Votre message" 
                            rows="5" 
                            value={this.state.message} 
                            required
                            onChange={(e)=>{this.onMessageChange(e)}} />
                    </div>
                    <button type="submit" className="btn btn--dark">Envoyer</button>
                </form>
                <CloseButton action={this.closeContactForm}/>
            </div>
        )
    }
}

export default ContactForm