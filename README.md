php-pingdom-wrapper
===================

Basic Pingdom REST API wrapper to consume check data in client-side JavaScript.

### What is it?

Simple PHP wrapper to get Pingdom checks data (may easily be extened to do more API calls), JavaScript that fetches it and an example web page that auto updates and show the status of each check.

The original purpose of this hack is to display checks on a wall display dashboard.

### How to use?

Edit `pingdom_api.php` with your own **Application Key**, **Username** and **Password**. See `index.html` and `pingdom.js` how it may be used. Style it in whatever way suits your need by changing the css file.

Edit the `fields` array in the `pingdom.js` to define which check fields to present, and their format.

Depends on jQuery and DateJS, but that's just for convenience.

### Preview

Just a preview of current look...

![Just an example...](https://github.com/stpe/js-php-pingdom-wrapper/raw/master/demo/preview.png "php-pingdom-wrapper preview")