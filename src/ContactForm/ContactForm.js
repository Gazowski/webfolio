import React from 'react'
import CloseButton from '../CloseButton/CloseButton'

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

    closeContactForm(){
        let form = document.querySelector('.contactForm')
        form.classList.toggle('displayNone')

    }

    render(){
        return(
            <div className={this.props.class}>
                <form onSubmit={()=>{this.handleSubmit()}} method="POST">
                    <div className="">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="" value={this.state.name} onChange={()=>{this.onNameChange()}} />
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="" value={this.state.email} onChange={()=>{this.onEmailChange()}} />
                    </div>
                    <div className="">
                        <label htmlFor="message">Message</label>
                        <textarea className="" rows="5" value={this.state.message} onChange={()=>{this.onMessageChange()}} />
                    </div>
                    <button type="submit" className="">Submit</button>
                </form>
                <CloseButton action={this.closeContactForm}/>
            </div>
        )
    }
}

export default ContactForm