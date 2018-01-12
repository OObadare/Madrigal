# Madrigal ![CI status](https://img.shields.io/badge/build-passing-brightgreen.svg)

Madrigal is a clone of 8tracks, a mixtape-making site.

## Overview

### Website
[Madrigal](https://aa-madrigal.herokuapp.com/#/)

### Using Madrigal

Create a user, and use either the dropdown menu or the new mix button to create a new playlist.The playlist form has a list of uploaded tracks, which the user can preview by clicking the grey play button and add to the playlist with the blue plus button. The user can currently add new tracks using the middle menu.

### Development

Madrigal was made using Ruby on Rails and Redux and is hosted on heroku. Paperclip was used to host the image and audio files.

## Challenges

The main function of Madrigal is to make and play mixestapes, or playlists. As such the playlist creation component and its associated components were the most difficult to create. Additionally, some intial problems with paperclip went unnoticed initially and ballooned later, much to my detriment. Several of these had simple fixes, but were hard to pinpoint - for example, I had a number of errors in production when I tried to add tracks to the website. Notably, these errors weren't occurring in development, making debugging more difficult. Eventually I traced the errors to a number of sources, ranging from mis-labeled buckets to unnoticed audio file conversion.

## Updates
This application is continuously being updated, so be sure to check regularly for updates.

## About Me
I'm Dare Ogundipe, a NYC based web developer who's interested in learning more. 
