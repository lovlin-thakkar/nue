import React , { Component } from 'react'
import axios from 'axios'
import { Navigate } from "react-router-dom";

class Profile extends Component{

   constructor(props){
        super(props);
        this.state= {
	    submitted: '',
	    formData: {
	            name:'',
		    username:'',
		    about:'',
	            websiteLink:''
	    }
        }
    }

    handleHtmlControlChange = (event) => {
        this.setState({formData: {[event.target.name]:event.target.value}});
    }

    handleSubmit  = (event) => {
        console.log(this.state);
        event.preventDefault();
        axios.post('http://localhost:8080/profile', this.state.formData).
        then( response => {
            console.log(response);
	    if (response.status == 201) {
		this.setState({submitted: 'true'});
	    }
        }).catch( error => {
            console.log(error)
        })
    }

  render(){
  const {submitted, formData} = this.state;
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Complete your profile</h2>
          </div>
	  {submitted=='true' && (
            <Navigate to="/home" replace={true} />
          )}
          <form className="mt-8 space-y-6" onSubmit={this.handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
	      <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="Username"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
		  onChange={this.handleHtmlControlChange}
                />
              </div>	
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="Name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
		  onChange={this.handleHtmlControlChange}
                />
              </div>
	      <div>
                <label htmlFor="about" className="sr-only">
                  About
                </label>
                <input
                  id="about"
                  name="about"
                  type="about"
                  autoComplete="about"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="About"
		  onChange={this.handleHtmlControlChange}
                />
              </div>
	      <div>
                <label htmlFor="Social or Website link" className="sr-only">
                  Social or Website link
                </label>
                <input
                  id="websiteLink"
                  name="websiteLink"
                  type="websiteLink"
                  autoComplete="websiteLink"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Social or Website link"
		  onChange={this.handleHtmlControlChange}
                />
              </div>	
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )}
}

export default Profile;

