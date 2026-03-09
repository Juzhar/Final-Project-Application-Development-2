One problem faced today is that people know how to cook less and less

Cook inn serves to alleviate this by being a social media cookbook app where users can see feeds of different recipes they can make. They can favorite the recipes they like and view more detail about said recipe
Technologies used are React and Vite in order to configure the application and Vercel in order to host the application. 
Technology stack required is react router dom, vite test, react node.js

Authentication system uses a mock token in order to simulate users.
Currently there is no setup required to use the app, as long as you click on the app link you can access the full features the app has
The API used is TheMealDB, a free recipe database that does not require the use of an API key when used in non profit applications.
Routes include: "Feed" in which the user can see a variety of recipes offered to them 
"Search" where users can search up keywords in order to find a recipe
"Recipe Detail" where users can see the full detail of the recipe they selected
"Favorites" where users can see all of the recipes that they have favorited

This application is deployed using Vercel and its React functionality, there is not API key needed as the API used is public
deployment url is https://cook-inn.vercel.app/
<img width="1841" height="865" alt="image" src="https://github.com/user-attachments/assets/1108cd2a-41be-4969-935d-150b8ae4deba" />
The application shows various different recipes to the user in the "feed" page

Known issues are search breaking due to use of CSRF token.
Future enhancement plans include a pantry function in which users can input what ingredients they have so the app can show what they can make, and a feature in which users can post their own recipes for others to see.
