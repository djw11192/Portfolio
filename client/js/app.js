angular.module('portfolio', ['ui.router'])

  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/')

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/home.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'templates/about.html',
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'templates/projects.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'templates/contact.html'

      })
    })
