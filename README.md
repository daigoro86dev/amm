# AMM Campaign Automated Tests

Automated tests for the A Million More campaign @ https://www.volvocars.com/intl/v/car-safety/a-million-more

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Local setup](#local-setup)
- [Docker setup](#docker-setup)
- [Implementation](#implementation)
- [Test specs](#test-specs)

## General info

This suite of automated tests seek to verify and validate function and non-functional requirements of the campaign page. I focused on the links which lead to other pages, the execution and behaviour of the testimonial videos and also added some visual regression tests. Currently the test suits run in parallel both on chrome and firefox. This project is also configured to run within a docker container.

## Technologies

- @wdio/cli - version ^6.7.2
- @wdio/local-runner - version ^6.7.2
- @wdio/mocha-framework - version ^6.7.0,
- @wdio/spec-reporter - version ^6.7.0
- @wdio/sync - version ^6.7.2
- wdio-chromedriver-service - version ^6.0.4
- geckodriver - version ^1.20.0
- chromedriver - version ^86.0.0
- live-server - version ^1.2.1
- mochawesome-report-generator - version 3.1.5
- wdio-image-comparison-service - version ^1.14.0
- wdio-mochawesome-reporter - version 3.2.0
- wdio-rerun-service - version 0.0.10
- rimraf - version ^3.0.2

## Local setup

npm i - install dependencies
npm test - run tests
npm run report - generate merged report in html format
npm run serve-report - serves report @ localhost:8080 (both generated locally or in docker container)

## Docker setup

docker-compose up - sets up container, executes test suite and generate report, with the first run taking longer given the container setup.

## Implementation

- webdriverio was used as the primary tool of this test suite, in conjunction with an additional reporter and services.
- additional tools were used for some quality of life improvements such as rimraf for cleanup and live-server to host the html report.
- a "before" hook was used to address navigation to the campaign page and handling of the accept cookies popup
- the project implemented the Page Object Pattern, with a generic Page class and a CampaignPage class that inherits from the former. The UI mapping was done through getter functions and the page actions were implemented as class functions.
- the navigation bar and the vehical slider on the bottom of the page were left out from the test suites scopes since they are cross page features and not specific to the campaign page.

## Test specs

- Campaign links - the simpler test suite, focused on the the 2 links ("Learn more about car safety" and "Learn more")
- Campaign videos - the most complex test suite, focused the behaviour of the video playbacks. The focus here if the boundary value analysis of the currentTime property of the video element. In this cases the test either asserts over a value above 0 as the baseline to check if the video playback executes. The other case regards the testimonial videos stopping execution if the user scrolls out of view, and in this case the baseline occurs at the moment before the video is scrolled out of view with a boundary of 1 additional second as a reasonable interval.
- Campaign visual regression - implemented through the use of wdio-image-comparison-service. I excluded the top of the page given the video running on loop but I assume this could have been included given a a certain boundary.
