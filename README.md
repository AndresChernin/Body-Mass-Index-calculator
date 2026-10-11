
BMI Calculator
Overview

This project is a Body Mass Index (BMI) calculator that allows users to enter their body measurements and calculate their BMI. It also provides information about BMI and helps users understand the meaning of the calculated result.

The project was developed in several phases, starting with the basic user interface and gradually improving the structure, functionality, and presentation of the application.

Development Process
Phase 1: Introduction and BMI Calculation

I created the IntroductionComponent to explain what BMI is and provide users with basic information about its purpose.

I also developed the ComputationComponent, which handles both the input of the user's body measurements and the display of the calculated BMI. This established the core functionality of the application and provided the foundation for further development.

Phase 2: BMI Model and Controller

In this phase, I focused on implementing the BMI calculation logic and connecting it to the user interface.

The main goals of the project were to allow users to:

Choose between metric and imperial units.
Enter their height and weight.
View their calculated BMI, weight classification, and healthy weight range.
Use a responsive interface adapted to different screen sizes.
See hover and focus states on all interactive elements.

To achieve these goals, I developed two main classes: BMIModel and BMIController.

The BMIModel is responsible for processing the user's measurements and providing the relevant BMI information. In addition to calculating the BMI from height and weight, it uses a data object containing the healthy weight ranges, BMI classifications, and explanations associated with the calculated result. This allows the application to display not only a numerical value but also additional information to help users understand their results.

The BMIController connects the view and the model. Whenever the user changes an input, the controller checks whether the input is valid and determines whether the user is working with metric or imperial units. It then passes the validated measurements to the model.

The model returns the calculated BMI, its classification, and the corresponding explanation. The controller then passes this information back to the view, where the result is displayed to the user.

Separating these responsibilities made the application easier to understand, maintain, and extend.

Phase 3: BMI Results and Explanations

In this phase, I improved the presentation of the BMI results by adding an image of a happy man to make the interface more engaging and visually appealing.

I also implemented the display of explanations for the calculated BMI. Instead of showing only the numerical result and weight classification, the application provides additional information to help users understand what their BMI result means.

This made the results section more informative and user-friendly.

Phase 4: Healthy Tips and BMI Limitations

In the final phase, I added a section with tips for maintaining a healthy BMI and another section explaining the limitations of BMI as a health indicator.

To keep the content separate from the presentation logic, I created dedicated data files for the healthy tips and BMI limitations. The corresponding components use these data files to display the information in the interface.

This approach made the content easier to organize, maintain, and update without having to modify the component code itself.

Challenges and Future Development

During development, I faced several challenges.

One challenge was making the bottom part of the IntroductionComponent overlap with the ComputationComponent as intended. I was unable to achieve the desired layout.

I also struggled to implement a responsive desktop layout for the LimitationSection because I did not fully understand the required structure and how to organize the layout correctly.

I would like to improve these areas in the future, deepen my understanding of responsive web design, and make the layout work as intended across different screen sizes.

If anyone has suggestions or could help me understand how to solve these layout issues, I would really appreciate it. Thank you for your time and support!
