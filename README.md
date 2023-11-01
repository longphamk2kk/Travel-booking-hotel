# online-travel-agent
## Build Project

## Run Backend
### Run ASP.Net API
#### Step 1. Open the project using Visual Studio
#### Step 2. Open the NuGet package
#### Step 3. Install the following packages
```
Microsoft.EntityFrameworkCore.SqlServer
Microsoft.EntityFrameworkCore
Microsoft.AspNetCore.Authentication.JwtBearer
```

### Setting up SQL Server Database
#### Step 1. Open appsettings.json and you will see the following code:
```
"ConnectionStrings": {
    "MyDb": "Server=localhost;Database=BookingHotel;User=sa;Password=password;Initial Catalog=BookingHotel;Integrated Security=True"
  },
```
#### Step 2. Change password with the password of sa user in your sql server management
#### Step 3. Run the project

### Create URL using ngrok
#### Step 1. Download ngrok from https://ngrok.com/download
#### Step 2. Open ngrok that you have installed
#### Step 3. Run the following command:
```
ngrok http --host-header=localhost https://localhost:your_port/
```
#### Step 4. Copy the URL that can be used to access your API

## Run Booking Mobile app
### Install Android virtual device
#### Step 1. Install Android Studio and open it
#### Step 2. Open Device Manager and Create a new virtual device

### Build app in Android
#### Step 1. Install all dependencies 
```
yarn install
```
#### Step 2. Open the file axios.js in the folder BookingApp/src
#### Step 3. Change the value of baseURL to the ngrok URL that you have created
#### Step 4. Open terminal and run the cmd:
```
yarn react-native run-android
```

## Run Admin App (Web App)
### Step 1. Project setup
```
npm install
```

### Step 2.Compiles and minifies for production
```
npm run build
npm run start
```
### Step 3. Because we are using URL from the same host. The CORS policy will prevent us from calling API. To avoid this, open the Command Prompt and run:
```
"chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp
```
