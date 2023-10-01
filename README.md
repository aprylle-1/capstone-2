# CreativeCompanion

Creative Companion is a writing app designed to inspire and support a writer's creativity. It is connected to OpenAI's API where a user can simply provide a prompt, and the app will generate a title and initial content for your project. From there, the creative reins are in the the user's. Edit, refine, and mold the content to your liking, ensuring every word reflects your unique voice and vision. With Creative Companion, the journey from inspiration to creation has never been smoother or more intuitive."

You can find the deployed app [HERE](https://creactivecompanion.onrender.com)

# Creative Companion

Creative Companion is a writing app designed to inspire and support a writer's creativity. It is connected to [OpenAI's API](https://openai.com/) where a user can simply provide a prompt, and the app will generate a title and initial content for your project. From there, the creative reins are in the user's hands. Edit, refine, and mold the content to your liking, ensuring every word reflects your unique voice and vision. With Creative Companion, the journey from inspiration to creation has never been smoother or more intuitive.

## App Details

This app was developed using Node.js, Express, and PostgreSQL for the database.

## User Flow
- **Main Page**: After logging in or signing up, users will be taken to the main page where they can see the following sections:
    - **Recent Updated Stories**: Displaying the most recent stories that they have updated.
    - **Feed**: Contains the most recent stories from users they are following.
    - **Following**: A list of users they are currently following.
- **Registration and Login**: Users can register and log in to their accounts.

- **Navbar Options**:
    - **Write**: This section allows users to utilize OpenAI to generate stories.
    - **Stories**: Users can view their written stories. In this section, they have links to their stories. Clicking a link will allow them to edit or delete their stories.
    - **Discover**: Here, users can explore stories from other users.

## Tests
Tests can be found on the routes for the backend. Executing tests cases can be done by going to the root directory of the backend files and running **npm test**.
- The following tests have been made:
    - **Auth Routes**: These test cases will test the register and login/authenticate function of the backend
    - **Stories Routes**: These test cases will test the CRUD function of the backend
    - **Users Routes**: These test cases will test the **follow/unfollow** feature of the backend


Enjoy your writing journey with Creative Companion!
