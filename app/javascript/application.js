// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
// Add Semantic UI
import "@hotwired/turbo-rails"
import * as jquery from "jquery"
import "semantic-ui"

// Add Semantic UI
$(document).on('turbo:load', function() {
    console.log('loaded turbo links')
    $('.ui.dropdown').dropdown()
    
    // js for close error/success message 
    $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
});

// add auto scroll to bottom in messages
$(document).on('turbo:load', function() {
  if ($('#messages').length > 0) {
  $('#messages').scrollTop($('#messages')[0].scrollHeight);
  }
})


import "channels"
