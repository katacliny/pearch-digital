
# Pearch Digital Test

The intention of this project is to test general knowledge of python / django.

The first thing that is needed from the test, is to be able to access the solution through a public version control, I leave it to your choice. Likewise, it must be specified in the code how to execute it and thus prove that it really works.

The second thing is to develop a small frontend and backend that inserts, modifies and deletes data from various tables. For this I want to store the user's information in the best way that you can suggest me for these data that are needed:
- User information (such as name, surname, telephone number and ID number)
- Information on where you live (address, city, country and postal code)
- Academic information of the user (studies, year, city ...)


## Author

- [@Alejandro Garrido](https://www.linkedin.com/in/alejandro-garrido-gongora-24315b155/)
    
## Run Locally

Clone the project

Go to the project directory

You can use docker for the back, in that case you only need to run docker-compose up in the api folder.
If you dont wanna use docker you also can run python -m pip install -r requirements.txt and then python manage.py runserver

For the front you need nodejs then run this command npm install and npm start

Install dependencies

python >= 3
nodejs

  
## Screenshots

![image](https://user-images.githubusercontent.com/34369026/124379193-d4a97a00-dcb5-11eb-8487-a09c10ddaa6d.png)
![image](https://user-images.githubusercontent.com/34369026/124379204-e559f000-dcb5-11eb-82c7-ac0febaf7ca7.png)
![image](https://user-images.githubusercontent.com/34369026/124379215-f0ad1b80-dcb5-11eb-8afd-f8c07c0bf681.png)
![image](https://user-images.githubusercontent.com/34369026/124379227-015d9180-dcb6-11eb-8d8a-ad1987774d2b.png)
![image](https://user-images.githubusercontent.com/34369026/124379248-2225e700-dcb6-11eb-8276-4fd30d2bedf3.png)
![image](https://user-images.githubusercontent.com/34369026/124379255-2eaa3f80-dcb6-11eb-9d35-5bb747154ec5.png)
![image](https://user-images.githubusercontent.com/34369026/124379269-4681c380-dcb6-11eb-9bb3-6a681635d903.png)
![screencapture-localhost-8000-swagger-2021-07-04-10_55_07](https://user-images.githubusercontent.com/34369026/124379278-51d4ef00-dcb6-11eb-8d27-b5d7b738c8cf.png)
![screencapture-localhost-8000-redoc-2021-07-04-10_55_28](https://user-images.githubusercontent.com/34369026/124379286-63b69200-dcb6-11eb-8f53-e7e00cad2be9.png)


  
## Running Tests

For backend test run => docker-compose run web_pearch_digital pytest

  
