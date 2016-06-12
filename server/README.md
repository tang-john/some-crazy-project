# Portfolio Application

Application by John Tang to track porfolio.  The following technology are used.

Axios
React
React-Redux
React-Router
React-Promise
Webpack
Babel


###Home Page###


###Admin Page###


## MongoDB ##

mongo localhost:27017/portfolio
show collections
show databases
db.user.find()
db.user.drop()


### Relationships ###
   user
       assets
          stocks
          bonds
          homes

### Relationships ###
   user
       assets
          stocks
          bonds
          homes
       phone_number
           mobile
           home
       address
           home
           work


#### user ####

db.user.insert(
    {
      _id: 1,
      firstname: "Joe",
      middlename: "UCLA",
      lastname: "Bruin",
      username: "bruinjoe",
      password: "Ready2go",
      url: "http://ucla.edu",
      gender: "male",
      dob: "1919-05-23"
    }
);

db.user.insert(
    {
      _id: 2,
      firstname: "Melinda",
      middlename: "Mary",
      lastname: "Gonzales",
      username: "mgonzales",
      password: "Too-Hot-For-U",
      url: "http://melinda1098.ucla.edu",
      gender: "female",
      dob: '1981-09-19'
    }
);


#### assets ####
{
  _id: 1,
  user_id: 1,
  assets: [
        {
            asset_type: "stocks",
            symbol: "EXK",
            purchase_date: "2016-3-23",
            purchase_price: 1.13,
            sold_date: null,
            sold_price: null,
            geocode: null
        },
        {
            asset_type: "stocks",
            symbol: "SVMLF",
            purchase_date: "2016-3-25",
            purchase_price: 1.10,
            sold_date: null,
            sold_price: null,
            geocode: null
        },
        {
            asset_type: "home",
            symbol: null
            purchase_date: "2001-3-25",
            purchase_price: 425000,
            sold_date: null,
            sold_price: null,
            geocode: 41.03531125,29.0124264
        },
  ]
}


#### phone_number ####
{
  user_id: 1,
  numbers: [
    {
       number: "900-999-0981",
       type: "mobile"
    },
    {
       number: "900-888-9809",
       type: "mobile"
    },
    {
       number: "900-777-4567",
       type: "home"
    }
  ]
}

#### address ####
{
  user_id: 1,
  addresses: [
    {
       street: "1092 Tracie Dr.",
       street2: "",
       city: "Brea",
       state: "CA",
       zip: "92821",
       country: "USA"
    },
  addresses: [
    {
       street: "14059 Oak Street",
       street2: "Apt 398",
       city: "Los Angeles",
       state: "CA",
       zip: "90024",
       country: "USA"
    },
  ]
}


