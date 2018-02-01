# E/PRO

### This fitness application is primarily designed for the scheduling of workout and nutritional regimen in harmony to user-specific hormonal cycle.

![Example](readme_files/log-in.png)

Motivation

The motivation behind this project came from a need within the fitness community to optimize workout and nutritional routines in accordance to estrogen and progesterone levels.  By automizing hormonal, exercise, and dietary tracking, this app not only helps women achieve peak physical performance but also saves time to pursue other professional or recreational endeavors.  Additionally, the app is both mobile and desktop friendly so that users may access their schedule while stationary or in-transit.  Finally, metadata representing the user base may aid pharmaceutical, marketing, and distributive operations for female centered fitness organizations.

### Getting Started

Prerequisites: NodeJS

First, navigate to the preferred local directory that to host the demo site.

Next, access the demo site by cloning the Github repository:

```bash
$ git clone https://github.com/mafutomo/Q3_Project_Galvanize.git
```

Navigate inside the directory 'Q3_Project_Galvanize' and run the following commands:
```bash
$ yarn install
$ yarn start
```

A local browser should automatically open the site:

http://localhost:3000/

Change the site on the address bar to:

http://localhost:3000/log-in

![Example](readme_files/lead-in.png)

The lead-in page provides potential users 'call-to-action' in registering for the app through fitness and time-saving incentives.  The lead-in page summarizes the app functionality and brings users to a log-in and registration module.

### Site Navigation

On the lead-in page, click on 'GET STARTED' to access the log-in and registration module.

![Example](readme_files/log-in.png)

New clients will be brought to a registration page that collects their name, email, password, first day of last period, cycle length, age, and birth control method.

![Example](readme_files/register.png)

Upon clicking submit, new users will be brought to a personal page that details a suggested workout and nutritional regimen based on estrogen and progesterone levels.  To access exercise suggestions, click on 'EXERCISE.'  To access nutritional advice, click on 'NUTRITION.'

![Example](readme_files/exercise.png)
![Example](readme_files/nutrition.png)

The estrogen and progesterone levels are calculated from medical surveys on the contraceptive's specific effects on hormonal levels.  Registered users will always have access to the workout/nutritional regimen page contingent upon logging in with the correct email and password.

The top navigation bar houses both the E/Pro title and a triple bar that triggers a left-side drawer.  This left-side drawer leads both to the user's personal page and a userbase page.  The userbase page provides metadata on the entire userbase which details the number of users by age, contraceptive methods by number of users, and contraceptive methods by age and number of users.

![Example](readme_files/userbase.png)

### App Development

E/PRO is the culmination of an intensive one-week production to demonstrate skillsets gained during the third quarter of the Galvanize Web Immersive program.  The ultimate goal is to deploy a production-ready mobile-friendly app that aids women in scheduling fitness and diet in accordance to hormonal cycles.

Real-Time Task Management:

https://trello.com/b/2UcMtrMG/e-pro

Stand-Up and Stand-Down Meeting Notes:

https://docs.google.com/document/d/123UeQj5rZcWYBSZZsAOeV2khFpfh0_z_9trXmqKEo6I/edit

Initial Project Plan:

https://docs.google.com/document/d/1o_fJjAJjN6ap57sRY_2_UMNWrs7iiUU0Y1E5aeEWZMU/edit

Initial Wireframe:
![Example](readme_files/wireframe.png)

Color Schema and Styling:
![Example](readme_files/style.png)

Entity Relationship Diagram:
```
```
![Example](readme_files/erd.png)

Server Routes and Seed Data:
https://github.com/nigelflippo/epro_api

Hormonal Levels Based on Contraceptive Methods:
https://docs.google.com/spreadsheets/d/17uY40CoRoSx7AAcXc91DV6eTvk4X754zQd8T7hDT0B8/edit#gid=0
https://docs.google.com/spreadsheets/d/1fN_7pFMh2C1Yx7xcXeRv8iJ3hEe1eAxonzAaxh74ss8/edit
https://docs.google.com/spreadsheets/d/17Gv6IzMj6D9YJojoLrjegNdZcDRyF5To_AU45wZFfZY/edit#gid=0
https://docs.google.com/spreadsheets/d/1ce1bsJh7oe0OPq6K_WDZiABzS_OK8Qv0m-7E5hUTImk/edit#gid=0

### Contributions
