import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='mt-12 font-bold text-4xl'>Blogs</h1>
            <div className='w-3/4 mx-auto mt-12 mb-40'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
    1. What is CORS?
  </div>
  <div className="collapse-content"> 
    <p>Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.</p>
  </div>
</div>
<div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-1">
  <div className="collapse-title text-xl font-medium">
  2. Why are you using firebase? What other options do you have to implement authentication?
  </div>
  <div className="collapse-content"> 
    <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.<br/>
   <strong>User Authentication Platforms [Auth0, Firebase Alternatives]</strong><br/>
1.STYTCH.
2.Ory.
3.Supabase.
4.Okta.
5.PingIdentity.
6.Keycloak.
7.Frontegg.
8.Authress.
    </p>
  </div>
</div>
<div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-1">
  <div className="collapse-title text-xl font-medium">
 3. How does the private route work?
  </div>
  <div className="collapse-content"> 
    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
  </div>
</div>
<div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-1">
  <div className="collapse-title text-xl font-medium">
 4. What is Node? How does Node work?
  </div>
  <div className="collapse-content"> 
    <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
  </div>
</div>
</div>
        </div>
        
    );
};

export default Blog;