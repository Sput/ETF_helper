# Overview
ETF helper is an application that takes in acceptable price ranges for ETFs and outputs when it makes sense to buy and sell postions in those ETFs

# Wireframe
Below is a wireframe for what the main page for the application will look like. 

<img src="./img/Screenshot from 2021-05-17 11-06-14.png">

# ERD for models

The database will consist of three tables:
- user: data about the user which is logged on
- current tickers: the ETF tickers we are currently tracking
- historic data: historic price data for the ETFs we are tracking

<img src="./img/Screenshot from 2021-05-17 11-04-09.png">

# RESTful routing table
| VERB | URL | CRUD | Description |
|------|-----|------|-------------|
| GET | /etf | READ | list all existing ETFS being tracked |
| GET | /etf/new | READ | shows form to add new ETF to track |
| POST | /etf | CREATE | a new ETF to track with POST payload |
| PUT | /etf/new | UPDATE | update the listing of ETFs we track |
| PUT | /etf/data | UPDATE | insert new price data into the historical_data table |
| DELETE | /etf/:id | DELETE | remove an existing ETF to track |

# User Stories
## Daily update on prices
Bill is an ETF investor. He wants to know, based on current market conditions which of his ETFs he should buy and sell. Bill logs into the website. He is presented with a screen with the existing ETFs being tracked. Once he clicks the button to fetch updated prices, we reach out to an API to get the current price of those ETFs. Once the data from the API is returned we make an analysis of weather he should buy more, sell some, or hold on his current position. We return to the screen what he should do, and save the data we have captured to our data model.

## Weekly update on ranges
Alaster is tasked with updating the weekly ranges when they are published on Monday. He has recieved a list of the new ranges for the week. He logs into ETF Helper where he sees a list of the ETFs currently being tracked. He is able to update the ranges for the tickers. When he is done updating the ranges, he clicks a save button, which will do two things: 
1. make that the new ranges for current tickers 
2. fetch current prices, and make an entry into the historical data table. 

## Monthly updates to ETFs tracked
Denise is tasked with updating the monthly ticker updates when they are published. She has recieved a list of the tickers to add and delete for the month. She logs into ETF Helper where she sees a list of the ETFs currently being tracked. She is able to add and remove ETFs from the list. When she is done making changes she can save her changes. Her changes are loaded into the table that tracks current ETFs.

