
	// The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1

var collegeNot = document.getElementById('collegeNot');
var hodNot = document.getElementById('hodNot');
var classNot = document.getElementById('classNot');

var collegeNotification = null;
var hodNotification = null;
var classNotification = null;

/*
(function() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#'+burger.dataset.target);


    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });

    const gotNotifications = (notifications) => {
      notifications.forEach(notification => {
        if(notification.name == "College") {
          collegeNotification = notification.notification;
        } else if(notification.name == "HOD") {
          hodNotification = notification.notification;
        } else if(notification.name == "Class") {
          classNotification = notification.notification;
        }
      })
      
      //collegeNot.classList.remove("is-loading");
      //hodNot.classList.remove("is-loading");
      //classNot.classList.remove("is-loading");

      collegeNot.value = collegeNotification;
      hodNot.value = hodNotification;
      classNot.value = classNotification;
    }

    google.script.run.withSuccessHandler(gotNotifications)
    .getNotifications();

})();
*/

const updateNotification = (name) => {
  console.log(name);
}