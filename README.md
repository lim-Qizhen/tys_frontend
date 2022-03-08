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
<img src="https://user-images.githubusercontent.com/65413578/157245664-df7bb780-1ba5-4a0c-aa31-ce32349cffa0.png" width = "400">

Students can attempt a question paper,

<img src = "https://user-images.githubusercontent.com/65413578/157246043-5802db02-4006-4736-8a68-102b5d04c2d6.png" width = "400">

and review it later.


### Codes and Struggles
1. Planning the database and the necessary APIs for the student papers
    
    a. Which tables to create and the type of data they should store (how minuscule)
    
    b. When and where a record should be saved

2. Preparing the clickable drop down list of all relevant question papers using what is given from the database

   a. Since the number of subjects, and which papers are completed, must be retrieved from the database, the required states used is dynamic

### Possible Extensions
1. Adding a class table for students and teachers to be linked so that teachers can monitor their students' progress
2. Allowing students to edit their subjects and exam level for relevant papers to be retrieved again
