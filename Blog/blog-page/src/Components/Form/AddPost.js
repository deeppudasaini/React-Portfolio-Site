import React from 'react'

export default function AddContact() {
    return (
        <div>
            <h4>Add Posts</h4>
            <form id="contactForm" name="sentMessage" novalidate="novalidate" method="POST">
               
               <div class="control-group">
                   <div class="form-group floating-label-form-group controls"><label>Title</label><input class="form-control" type="text" id="name" required="" name="name" placeholder="Name" /><small class="form-text text-danger help-block"></small></div>
               </div>
               <div class="control-group">
                   <div class="form-group floating-label-form-group controls"><label>Email</label><input class="form-control" type="email" id="email" name="email" required="" placeholder="Email Address" /><small class="form-text text-danger help-block"></small></div>
               </div>
               <div class="control-group">
                   <div class="form-group floating-label-form-group controls"><label>Writer Name</label><input class="form-control" type="tel" id="phone" name="number" required="" placeholder="Phone Number" /><small class="form-text text-danger help-block"></small></div>
               </div>

               <div id="success"></div>
               <div class="form-group"><button class="btn btn-primary" id="sendMessageButton" type="submit">Send</button></div>
           </form>
        </div>
    )
}
