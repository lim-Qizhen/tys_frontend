# tys_frontend

Deployed site: 

### Objective
Secondary school students can register for an account and practise on past year science multiple choice questions. Upon completion, their answers will be assessed and they can review their work. 

Teachers can also create accounts for students to arrange for consultations with them. 

### Project Objective
The purpose of the project was to create a full stack app. I chose to work with postgreSQL, python django and reactJS for this app.

### App Features
1. Account registration and log in
2. Relevant question papers generated
3. Self-marking
4. Consultation booking (in progress with backend)

### How the App Works
The main page is a login page with links for a student and teacher registration.

<img src="https://user-images.githubusercontent.com/65413578/157150712-8af035dd-1bb9-42d6-9750-b39a52b0a70e.png" width="400"> 
<img src="https://user-images.githubusercontent.com/65413578/157150730-02b845d6-fc14-45eb-96ca-beee1500adde.png" width="400">

Upon a student login, the relevant exam papers will be sorted by subject and completion status.


### Codes and Struggles
1. Planning the database and the necessary APIs for the student papers
   a. Which tables to create and the type of data they should store (how minuscule)
   b. When and where a record should be saved
3. Preparing the clickable drop down list of all relevant question papers using what is given from the database
   a. Since the number of subjects must be retrieved from the database, the required states used is dynamic
   b. Having to sort out the incomplete and completed papers to be displayed on the student homepage

### Possible Extensions
1. Adding a class table for students and teachers to be linked so that teachers can monitor their students' progress
2. Allowing students to edit their subjects and exam level for relevant papers to be retrieved again
