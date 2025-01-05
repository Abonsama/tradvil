# tradvil

this trading game simulates trading and making money in real life and gives interesting expeirence with stock market and crypto
the work on it began in 27 Dec 2024
## Homepage

the home page has the balance,ads and the analysis sections
it saves all the user logs and actions
### analysis section
has the data and the log of what you bought in the last 24 hours and the hourly income of every section and
the net worth of stock and crypto and the amount of them ; the collection of the items of the free market. it provieds a graph of
the data using the graphs or japanese candels
detailed analytics may be found in the profile button

### balance

has the brief balance and when clicked gonna have the detailed balance with fractions and all the numbers will be displayed
balance doesn't show the amount of shares and crypto, it doesn't show the items of the free market and its worth.

## header

has the logo, the messages button and the profile button

### profile button

has the setting and profile info. You can log in using another account and logout, you may reset the progress and
contact the developer here,you can choose the theme and color of the whole game and even customize each individual page.
you can read about this game and read the game docs.
the progress of the game is saved automatically.
profiles will have badges based on their activities and acheivements
will have leader board and view the best players based on some acheivements

### messages button

has all the social elements:searching for players using id and messaging them as well as the contact list and partnerships
you may even sell and buy to your friends from and to the collection

## navbar

the navigation bar is the main way to navigate through the app and has four sections:
- the home button
- the jobs and business sections
- the stock and crypto sections
- the free market section

## jobs and business Page

has two main cards to choose from:
- jobs
- business
### jobs
here you can make the first $hapos to start playing. here you'll find tasks based on the salary
the more salary it gives, the more complex and time consuming it is
most players start here, you may not do the task and buy the capital you want from the bank but its not a fun way to play!
you'll have the list button showen when you start a certain task, you can start more than one task.
the task list is not limited by a number but the timeout of them will increase based on the amount of them in the list.
its prefered to finish them one by one its the most effeciant way to earn in the jobs page.
every $hapo you earn will be transfered to the balance.

### business
here is the fun part. when you make the suffeciant ammount to start a business, you'll make $hapos based on the hourly estimate of the business
the hourly estimate of the business has min and max values you can make the min and max values larger by upgrading them in the business list and they have a limit,once hit the upgrading limit you cannot upgrade them unless you upgrade the business
when the business is maxed out you can start merging it with another maxed out business based on the merge requirements
when merging businesses they yeild more hourly income than being individuals and take less space in the business list
the business list starts with a limit of 10 businesses. you can buy more space from the bank or special gifts.
the limit to mereged business is half the business space
if you have 10 slots you can merge 5 and if you have 12 you can merge 6. the odd number slots will be as the preveious even value ex:11 slots is the same merging space as the 10 slots

the choices of business are:
- store(must choose the specialty! the specialties are "grocories", "gadgets", "electonics","automobile","clothing","beuty shop",...)
- factory(must choose specialty! the specialties are "grocories", "gadgets", "electonics","automobile","clothing",...)
- resturant
- farm
- airline company
- workshop(must choose specialty! the specialties are "wood", "metal" ,"plastic","automobile")
- taxi company(establishment fees and at least one car to start earning, earning based on the cars and the class. each car has a capasity and will need fixing when hit capasity, you can sell it or fix it)
- tech(establishment fees and the sufficent employees to the project. ** note that its not hourly income, its projct income and the employee will be working on one project at the time. there salary will be hourly paid)
- construction (establishment fees and suffecint workes and gadgets for the project, ** note that its not hourly income , its project income and workers and gadgets consume hourly salary and power fees)
- shiping company (establishment fees and one truck at least to start earning, each truck has a capasity and will need fixing when hit capasity, you can sell it or fix it, earning based on load capacity and class)
- gas and oil company
- mining company
- media company
mereged business
- clothing brand (must have maximum level of 5 shops and shiping company level 30 with 100 small trucks and 50 large trucks and clothing factory level 40)
- electronics company (must have maximum level of 5 shops and a shiping company level 10 with 40 small trucks and 10 large trucks and three maximum level electronics factory)
- telecom company
## stocks and crypto Page

the most fun and risky way to earn money. You can do only one job and take the $hapos to investment rather than doing alot of jobs to make capital
takes all the data from real world
you can buy shares and crypto at the price today

## free market
### items
list of items that you can buy and brag about you can sell it to your friends and in the annual auction
### real estate

buy real estate and fix in it
you can make profit by selling it or taking rent
mall
### cars
all of them
### yachets
### plains

## functionality

for now we'll save every progress made in the local storage along with a time stamp and when user logs in again the progress gets calculated and showen
the jobs are taskes that are predefined and when done there payment gets added to the balance and saved in the log connected to the payment so everything is knowen
### jobs
five levels of jobs you can choose the level in filter menu or make it random to show all the levels
- easy (maximum value is ten $hapos)
- medium(from 10 to 100)
- hard(from 100 to 1000)
- very hard(from 1000 to 10,000)
- extreme(from 10,000 to 100,000)

if you take less than five jobs the time limit to earn the money is five minuts for each task starting from the second you confirm
more than five and the time limit is equal to the tasks amount in mintus(7 task is 7 minuts for each task and so on)
if you didn't solve the task the timer is still counting but when time is over you get 0
you can cancle the task and still get 0
if you cancle or let the task time over as a penality you get harder task only (if you cancled the medium task the new task list will only list hard and above task not the medium or easy task until you solve one of the penality tasks, once done it resets)
 ### business

 you'll have a list of busineses you can choose from. you can start any one of them but keep in mind that you can only have 10 business slots and you can by more from the bank
you can merge them to make alot more in one slot to save space
the balance gets updated every ten seconds with (total of the past ten seconds)

#### rules of...

### stock market

the rules are simple. if you buy share at x and the price of x increases to 1.1x, if you sell you get 1.1 of your capital
the same goes to the decrese you gonna lose equivilant ammount and its gonna be taken from the balance.there is no limit to the negative value but if you want to buy or upgrade anything you need to pay the negative value first (its called dept)
you can do the analysis of the market to predect the price
### crypto market

same goes here

### free market

it has no clear rules to predect values, all ruled by luck
if you want items for a business (ex cars for taxi company you gonna have it from here)
you can sell items here and set the price
its not garenteed to get buyers if you set a too high price, but its possible
you'll have to wait but you can have list of interested buyers and you can choose the one you want to sell to

## styling
we'll have set of variabls to colors and we use them all across the website you can change them in the setting or when you start the game

for radius we have two
pill and circle
each one will have the className that set them
two font faces one for the logo alone(till we have a dedicated logo)
the other is for the rest of the page(may be will be another for details)
icons are from icon providers
the styles will be all in styles.css
if we have differnt styles we'll replace the style file