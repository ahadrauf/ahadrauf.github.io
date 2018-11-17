//Hi future readers! Kudos to you for actually opening the .js file of this website! Enjoy!
//- from The Administrator (read in the same voice as The Terminator)

var tempTime = new Date(); //current time in milliseconds
var timeNow = new Date(tempTime.getFullYear(), tempTime.getMonth(), tempTime.getDate());
//timeNow = new Date(2016, 1, 1);
var date_count = 28; //four weeks
var millisecond_count = (date_count - 1) * 24 * 60 * 60 * 1000; // milliseconds from timeNow to a time date_count days away

var month_names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



var events = [{

  name: "Walk-Thru Registration", 

  link: "walk-thru-ak",
  month: 8, date: 8, year: 2016, time: "12:00 PM -- 06:00 PM",
  description: "Be sure to mark your calendars for Monday, August 8 and Tuesday, August 9 for walk-thru registration for the 2016-2017 school year. Registration starts in the small gym and ends in the multipurpose room.", 
  fullDescription: "Be sure to mark your calendars for Monday, August 8 and Tuesday, August 9 for walk-thru registration for the 2016-2017 school year. Registration starts in the small gym and ends in the multipurpose room.<br><br>" + 

    "Monday, August 8 -- A-K<br>" + 
    "A-B -- Noon to 1:30 p.m.<br>" + 
    "C-D -- 1:30 p.m. to 3 p.m.<br>" + 
    "E-H -- 3 p.m. to 4:30 p.m.<br>" + 
    "I-K -- 4:30 p.m. to 6 p.m.<br><br>" + 

    "Tuesday, August 9 -- L-Z<br>" + 
    "L-M -- Noon to 1:30 p.m.<br>" + 
    "N-R -- 1:30 p.m. to 3 p.m.<br>" +
    "S-T -- 3 p.m. to 4:30 p.m.<br>" +
    "U-Z -- 4:30 p.m. to 6 p.m.<br><br>" +

    "Makeup registration will be Friday, August 12 from 11 a.m. to 2 p.m. at the front office. School starts Monday, August 15.<br><br>" +

    "Follow <a href='https://foothill.futurefundapp.com/registration/sessions/new' target='_blank'>this link</a> for on-line registration.<br><br>" + 

    "If you're interested in signing up to volunteer at walk-thru, <a href='http://www.signupgenius.com/go/4090e4ea8a82fa46-foothill' target='_blank'>click here to access the handy online volunteer sign-up website to claim your favorite shifts.</a><br><br>" + 

    "Make sure to follow the link below for all necessary details before signing up.",
  moreInfoLink: "http://www.foothillfalcons.org/apps/pages/index.jsp?uREC_ID=74714&type=d&pREC_ID=465359",
  formsNumbers: []
}, {

  name: "Makeup Registration",  

  link: "walk-thru-makeup", 
  month: 8, date: 12, year: 2016, time: "11:00 AM -- 02:00 PM", 
  description: "Be sure to mark your calendars for Monday, August 8 and Tuesday, August 9 for walk-thru registration for the 2016-2017 school year. Registration starts in the small gym and ends in the multipurpose room.", 
  fullDescription: "Makeup registration is on Friday, August 12 from 11 a.m. to 2 p.m. at the front office.<br><br>" + 

    "Follow <a href='https://foothill.futurefundapp.com/registration/sessions/new' target='_blank'>this link</a> for on-line registration.<br><br>" + 

    "Make sure to follow the link below for all necessary details before signing up.",
  moreInfoLink: "http://www.foothillfalcons.org/apps/pages/index.jsp?uREC_ID=74714&type=d&pREC_ID=465359",
  formsNumbers: []
}, {

  name: "Welcome back to school!", 

  link:"firstdayofschool",
  month: 8, date: 15, year: 2016,
  description: "The deadline for schedule change forms is two weeks after school starts.",
  fullDescription: "The deadline for schedule change forms is two weeks after school starts.",
  moreInfoLink: "",
  formsNumbers: [],
}, {


  name:"College Essay Application Seminar", 

  link: "college-app-sem",
  month: 8, date: 30, year: 2016, 
  description: "Need help writing essays for college application? Then participate at C2 Education sponsored &quot;College Essay Application Seminar&quot;!",
  fullDescription: "Need help writing essays for college application? Do you want your personal statements to make you a stand-out candidate to your chosen university? If so, we welcome you to participate at C2 Education sponsored &quot;College Essay Application Seminar&quot;, hosted by Foothill High School PTSA!<br>" +
    "Come to room C-6 at Foothill from 6:30 p.m. to 7:30 p.m. on August 30th, 2016.<br><br>" +

    "The price of the workshop is $25 per student. All proceeds benefit Foothill High School PTSA.<br><br>" +

    "Complete form 1 in the Forms section. Completed forms and payment should be turned in to the counseling office.<br><br>",
  moreInfoLink: "",
  formsNumbers: [1],
}, {

  name: "Senior Picnic", 

  link: "senior-picnic",
  month: 8, date: 31, year: 2016,
  description: "Fun in the sun! The picnic will be at Waterworld in Concord.",
  fullDescription: "Fun in the sun! The picnic will be at Waterworld in Concord.<br><br>" + 
    "<ul><li>Students should start to line up at 7:45am for bus ride</li>" + 
    "<li>Tickets will be $55 (with ASB) and $65 (without ASB)</li>" + 
    "<li>Tickets will be sold starting 8/19-8/25 during lunch and after school at the office windows.</li>" + 
    "<li>Students will receive all their forms in their Civic's classes and all three forms need to be filled out and turned in to buy their ticket</li></ul><br><br>" +

    "Students who do not participate in the senior picnic will be required to attend classes as usual that day."
  ,
  moreInfoLink: "",
  formsNumbers: [],

}, {

  name: "Welcome Back Dance", 

  link: "welcome-back-dance",
  month: 9, date: 4, year: 2015,
  description: "Location: Large Gym<br>" + 
    "Tickets will be sold in the quad area during lunch. You may also buy tickets at the door for an additional price.<br>" + 
    "Prices: $10 with ASB, $15 without ASB sticker, and $20 at the door.",
  fullDescription: "Location: Large Gym<br>" + 
    "Date/Time: 8/26, 7 p.m. - 10 p.m.<br><br>" + 

    "The dance's theme will be sports jerseys. All outfits must adhere to the regular Foothill dress code.<br><br>" + 

    "Tickets will be sold in the quad area during lunch. You may also buy tickets at the door for an additional price.<br>" + 
    "Prices: $10 with ASB, $15 without ASB sticker, and $20 at the door.<br><br>" +

    "Please read the Dance Behavior Agreement (form 2) and fill out the Dance Agreement Form (form 3)",
  moreInfoLink: "",
  formsNumbers: [2, 3]

}, {

  name: "Back to School Night", 

  link: "back-to-school-night",
  month: 9, date: 7, year: 2016, 
  description: "Parents can meet their child's teachers and get in touch with other parents.<br><br>" + 
    "A rally for the parents will be held in the large gym at 6:15 p.m. Classroom visits will run from 7 p.m. to 9 p.m.",
  fullDescription: "Parents can meet their child's teachers and get in touch with other parents.<br><br>" + 
    "Schedule:<br>" + 
    "6:15 p.m. &#8212; A rally for the parents will be held in the large gym.<br>" + 
    "7:00 p.m. to 7:12 p.m. &#8212; Period 1<br>" +
    "7:18 p.m. to 7:30 p.m. &#8212; Period 2<br>" +
    "7:36 p.m. to 7:48 p.m. &#8212; Period 3<br>" +
    "7:54 p.m. to 8:06 p.m. &#8212; Period 4<br>" +
    "8:12 p.m. to 8:24 p.m. &#8212; Period 5<br>" +
    "8:30 p.m. to 8:42 p.m. &#8212; Period 6<br>" + 
    "8:48 p.m. to 9:00 p.m. &#8212; Period A/B<br><br>" + 
    "Please follow your child's schedule in order. Click " + 
    "<a href='http://www.foothillfalcons.org/about_us/fhs_map.jsp' target='_blank'>here</a> " + 
    "for the campus map.<br><br>" +
    "The schedule at Back to School Night is extremely tight. For detailed questions or concerns, please email the teacher to " + 
    "schedule an individual meeting with " + 
    "the teacher. Teacher email forms can be found " + 
    "<a href='http://www.foothillfalcons.org/apps/staff/?rn=6852900' target='_blank'>here</a>.",
  moreInfoLink: "",
  formsNumbers: []
}, {
  name:"Deadline for Senior Yearbook Quotes due", 

  link: "deadline-senior-quotes",
  month: 9, date: 16, year: 2016, 
  description: "Be sure to submit any senior yearbook quotes by September 24, 2016! ",
  fullDescription: "Be sure to submit any senior yearbook quotes by September 24, 2016!<br><br>" + 

  "You may sign the Google Form at <a href='tinyurl.com/seniorquotes17' target='_blank'>this link</a>, or contact Kelly Cook via Facebook message or private email, to submit your senior quote. Kelly's email is kcook7065@gmail.com. <br><br>" + 

  "When submitting, include your first and last name as registered in Q, your PUSD email, and your senior quote (under 140 characters.)",
  moreInfoLink: "",
  formsNumbers: [],
}, {
  name:"Falcon Fest", 

  link: "falcon-fest",
  month: 9, date: 16, year: 2016, 
  description: "Bring some money to support Foothill's clubs at the annual Falcon Fest!",
  fullDescription: "Bring some money to support Foothill's clubs at the annual Falcon Fest!<br><br>" + 
  "Admission is forever free, and the event will last from 3 p.m. to 5:30 p.m. Tell your friends!",
  moreInfoLink: "",
  formsNumbers: [],
}, {

  name:"Homecoming Skits", 

  link: "homecoming-skits",
  month: 10, date: 5, year: 2016, 
  description: "Come see the class skits this evening!<br><br>" +
  "Location: Alameda County Fairgrounds amphitheater<br>" +
  "Time: 7 p.m.",
  fullDescription: "Come see the class skits this evening! Support your senior classmates who have been working hard for this wonderful presentation.<br><br>" +
    "Location: Alameda County Fairgrounds amphitheater<br>" +
    "Time: 7 p.m.<br><br>" +

    "This year, the senior theme for skits is Harry Potter!",
  moreInfoLink: "",
  formsNumbers: [],
}, {

  name:"Homecoming Dance", 

  link: "homecoming-dance",
  month: 10, date: 8, year: 2016, 
  description: "Location: Large gym<br>Time: 7 p.m. - 10 p.m.",
  fullDescription: "Location: Large gym<br>Time: 7 p.m. - 10 p.m.<br><br>" +
    "Tickets will be sold before/after school and during lunch at the front office. " + 
    "Students must fill out the dance forms before purchasing their tickets (see the Forms page to download these forms).<br>" + 
    "Ticket prices are $20 with an ASB sticker and $25 without an ASB sticker.",
  moreInfoLink: "",
  formsNumbers: [2, 3],
}, {


  name:"Seniors Get Cap/Gown/Announcement Order Packets", 

  link: "cap-gown-order-packetes",
  month: 10, date: 10, year: 2016, 
  description: "Order packets will be distributed to seniors in their Econ/Gov/Civics classes.",
  fullDescription: "This year, cap/gown/announcement order packets will be distributed to seniors in their Econ/Gov/Civics classes.<br><br>" + 

  "Stop by the office to request a replacement form if you lose yours. Alternatively, you may always place your orders online by using <a href='http://www.jostens.com/apps/store/customer/1006185/Foothill-High-School/' target='_blank'>this link</a>.<br><br>" + 

  "Class rings are delivered to campus roughly six weeks after the order date.<br><br>" +

  "Senior wear items (hoodies, T-shirts, jewelry, etc.) are delivered to the home 4-5 weeks after order date.<br><br>" + 

  "Grad announcements, name cards and paper products are delivered on campus mid-April.",
  moreInfoLink: "",
  formsNumbers: [],
}, {

  name:"Cap/Gown/Announcement Orders Due. Names: A-M", 

  link: "cap-gown-order-due",
  month: 10, date: 20, year: 2016, 
  description: "You may turn in your orders near the senior quad at lunch.",
  fullDescription: "Seniors, remember to turn in your orders near the senior quad at lunch! Jostens representatives will be on campus to take your orders. Seniors will also have the opportunity to order class rings.<br><br>" + 

  "Today is for those with last names starting with A through M. N through Z-ers, come on the 21st instead!",
  moreInfoLink: "",
  formsNumbers: [],
}, {

  name:"Cap/Gown/Announcement Orders Due. Names: N-Z", 

  link: "cap-gown-order-due",
  month: 10, date: 21, year: 2016, 
  description: "You may turn in your orders near the senior quad at lunch.",
  fullDescription: "Seniors, remember to turn in your orders near the senior quad at lunch! Jostens representatives will be on campus to take your orders. Seniors will also have the opportunity to order class rings.<br><br>" + 

  "If you missed turning in your packet previously, don't forget to stop by the quad this time for sure!",
  moreInfoLink: "",
  formsNumbers: [],
}, {
  
  name:"Senior Class Photo", 

  link: "senior-class-photo",
  month: 10, date: 26, year: 2016, 
  description: "Want to be in the senior class photo? Then stop by the senior quad early on Wednesday, at 8:30 a.m.!",
  fullDescription: "Want to be in the senior class photo? Then stop by the senior quad early on Wednesday, at 8:30 a.m.!<br><br>" + 

  "This photo will appear front and center in the yearbook, so prepare your best smile!",
  moreInfoLink: "",
  formsNumbers: [],

  }, {
  name:"Deadline for Senior Yearbook Ads", 

  link: "deadline-senior-yearbook",
  month: 10, date: 30, year: 2016, 
  description: "Dedicate a personalized quarter-page to a graduating senior in the Foothill 2015-16 Yearbook!<br>" +
    
  "Submissions will cost $110. Students are limited to a maximum of two ads each.",
  fullDescription: "Dedicate a personalized quarter-page to a graduating senior in the Foothill 2015-16 Yearbook!<br><br>" +

    "Submissions by this deadline cost $90. After this date until the final deadline, Nov. 1, submissions will cost $110. " +

    "Students are limited to a maximum of two ads each.<br><br>" +

    "Ads can be created using various softwares, such as Photoshop or InDesign. Instructions for how to submit your ads can be found " +
    "<a href='https://d2ct263enury6r.cloudfront.net/Aci7TpYwOA3CZXFhaD3Lw4irKOsoh2ESdPQSeYXIIki1Pfi1.pdf' target='_blank'>here</a>.",
  moreInfoLink: "http://www.foothillfalcons.org/apps/pages/index.jsp?uREC_ID=45121&type=d&pREC_ID=197113",
  formsNumbers: [],

}, {

  name:"Make-up Cap/Gown/Announcement Orders Due", 

  link: "cap-gown-order-due",
  month: 11, date: 1, year: 2016, 
  description: "You may turn in your orders near the senior quad at lunch.",
  fullDescription: "Seniors, remember to turn in your orders near the senior quad at lunch! Jostens representatives will be on campus to take your orders, for the last time this year. Seniors will also have the opportunity to order class rings.",
  moreInfoLink: "",
  formsNumbers: [],
}, {
  
  name:"College Application Lab 11/17", 

  link: "college-app-lab-11/17",
  month: 11, date: 17, year: 2016, 
  description: "This lab, offered by the Foothill Counseling Department, grants helpful info about the college application process. <br>Location: B-1 <br>Time: 2:47 p.m. - 3:47 p.m.",
  fullDescription: "This lab, offered by the Foothill Counseling Department, grants helpful info about the college application process. <br>Location: B-1 <br>Time: 2:47 p.m. - 3:47 p.m.<br><br>" + 

    "Please sign up at <a href='https://docs.google.com/forms/d/e/1FAIpQLSeJA5esqvNjeX2CwVZHNXeHn0jfLC0XGyuXLKhAvaQLEcuRcQ/viewform?c=0&w=1' target='_blank'>this Google Form.</a><br><br>" +

    "If you cannot attend this lab, there are more labs planned for future dates, so stay tuned.",
  moreInfoLink: "",
  formsNumbers: [],
}, {
  
  name:"College Application Lab 11/29", 

  link: "college-app-lab-11/29",
  month: 11, date: 29, year: 2016, 
  description: "This lab, offered by the Foothill Counseling Department, grants helpful info about the college application process. <br>Location: B-1 <br>Time: 2:47 p.m. - 3:47 p.m.",
  fullDescription: "This lab, offered by the Foothill Counseling Department, grants helpful info about the college application process. <br>Location: B-1 <br>Time: 2:47 p.m. - 3:47 p.m.<br><br>" + 

    "Please sign up at <a href='https://docs.google.com/forms/d/e/1FAIpQLSeJA5esqvNjeX2CwVZHNXeHn0jfLC0XGyuXLKhAvaQLEcuRcQ/viewform?c=0&w=1' target='_blank'>this Google Form.</a><br><br>" +

    "If you cannot attend this lab, there is one more lab planned for the 7th of December, so stay tuned.",
  moreInfoLink: "",
  formsNumbers: [],
}, {
  
  name:"1st Grad Nite Deposit Deadline", 

  link: "grad-nite-depo-1",
  month: 12, date: 1, year: 2016, 
  description: "A deposit of at least $105 must be turned into the front office by this date to guarantee your spot on the Grad Nite field trip.",
  fullDescription: "This is the first of two official Grad Nite deposit deadlines.<br><br>" +

  "A deposit of at least $105 must be turned into the front office by this date to guarantee your spot on the Grad Nite field trip.<br><br>" +

  "If you did not make a $50 deposit for Grad Nite during walk-thru registration, you must deposit $155 instead.<br><br>" +

  "Checks are made payable to FAB, Grad Nite, Student name and student ID must to be included on the check memo line. Please note that there are no refunds, and that non-payment or failure to turn in completed forms on time will result in cancellation.<br><br>" +

  "The Grad Nite form is not due until February 1st; just the deposit is due today.",
  moreInfoLink: "http://www.foothillfalcons.org/apps/pages/index.jsp?uREC_ID=45121&type=d&pREC_ID=654725",
  formsNumbers: [],

  }, {
  
  name:"College Application Lab 12/7", 

  link: "college-app-lab-12/7",
  month: 12, date: 7, year: 2016, 
  description: "This lab, offered by the Foothill Counseling Department, grants helpful info about the college application process. <br>POST-NOTICE: This event has been canceled due to low interest. <br>Location: B-1 <br>Time: 2:47 p.m. - 3:47 p.m.",
  fullDescription: "This lab, offered by the Foothill Counseling Department, grants helpful info about the college application process. <br>Location: B-1 <br>Time: 2:47 p.m. - 3:47 p.m.<br><br>" + 

    "Please sign up at <a href='https://docs.google.com/forms/d/e/1FAIpQLSeJA5esqvNjeX2CwVZHNXeHn0jfLC0XGyuXLKhAvaQLEcuRcQ/viewform?c=0&w=1' target='_blank'>this Google Form.</a><br><br>" +

    "POST-NOTICE: This event has been canceled due to low interest.",
  moreInfoLink: "",
  formsNumbers: [],
}, {
    
  name:"Deadline for Senior Favorites", 

  link: "deadline-senior-favorites",
  month: 12, date: 14, year: 2016, 
  description: "Select your choices for this year's senior favorites " + 
           "<a href='http://tinyurl.com/seniorfaves17' target='_blank'>here</a>.",
  fullDescription: "Select your choices for this year's senior favorites " + 
           "<a href='http://tinyurl.com/seniorfaves17' target='_blank'>here</a>. NOTE: Please don't put anyone's name down as a joke. Keep your responses appropriate.<br>" + 
           "CAUTION: You'll only be able to submit your selections once. You cannot revise your picks after submitting the form.",
  moreInfoLink: "",
  formsNumbers: [],
  }, {

  
  name:"Deadline to Order Yearbooks", 

  link: "deadline-yearbook-order",
  month: 12, date: 22, year: 2016, 
  description: "Don't forget to order your yearbooks! The deadline for ordering yearbooks is 12/22 for $90. <br>Click <a href='https://www.yearbookordercenter.com/' target='_blank'>here</a>. Our school code is 7378.",
  fullDescription: "Don't forget to order your yearbooks! The deadline for ordering yearbooks is 12/22 for $90. <br><br>" +

  "<a href='https://www.yearbookordercenter.com/' target='_blank'>Click here to go straight to the yearbook website</a>. You'll need the code 7378 to access the Foothill pages. Follow the prompts to order a yearbook or create and buy an ad for your favorite senior.<br><br>" + 
 
  "The yearbook adviser will get a list of people who have purchased yearbooks, but keep your online receipt just to be safe.",
  moreInfoLink: "",
  formsNumbers: [],
}, {
  name:"Deadline for Senior Yearbook Photos", 

  link: "yearbook-photos-deadline",
  month: 12, date: 23, year: 2016, 
  description: "All senior yearbook photos must be taken by Studio One Photography. Extra fees apply for extra poses and photo orders. Click <a href='http://studio1experience.com/senior-appointment-info' target='_blank'>here</a> for more info on these prices.<br><br>",
  fullDescription: "You may schedule senior photo appointments by contacting Studio One Photography at (925) 361-0430. Foothill's official photography company for its yearbook photos is Studio One Photography in Dublin.<br><br>" +

  "All appointments must be made by phone. There is currently no online scheduling.<br><br>" +
  
  "Click <a href='http://studio1experience.com/' target='_blank'>here</a> to visit the Studio One website.<br><br>" +
  
  "All senior yearbook photos must be taken by Studio One Photography. Extra fees apply for extra poses and photo orders. Click <a href='http://studio1experience.com/senior-appointment-info' target='_blank'>here</a> for more info on these prices.<br><br>" +

  "The deadline to get senior pictures has been extended to December 23, 2016, so don't delay getting yearbook photos.",
  moreInfoLink: "http://www.foothillfalcons.org/apps/pages/index.jsp?uREC_ID=45121&type=d&pREC_ID=471133",
  formsNumbers: [],

}, {
  
  name:"2nd Grad Nite Deposit Deadline", 

  link: "grad-nite-depo-2",
  month: 2, date: 1, year: 2017, 
  description: "",
  fullDescription: "This is the second of two official Grad Nite deposit deadlines!<br><br>" +

  "You must deposit the remaining $105 must be turned into the front office by this date to guarantee your spot on the Grad Nite field trip AS WELL AS the necessary paperwork.<br><br>" +

  "With this donation, you should have donated $260 in total!<br><br>" +

  "Checks are made payable to FAB, Grad Nite, Student name and student ID must to be included on the check memo line. Please note that there are no refunds, and that non-payment or failure to turn in completed forms on time will result in cancellation.<br><br>" +

  "The absolute final deadline for submissions is February 16th. However, don't delay too long -- spots on the bus are on first-come, first-serve basis.",
  moreInfoLink: "http://www.foothillfalcons.org/apps/pages/index.jsp?uREC_ID=45121&type=d&pREC_ID=654725",
  formsNumbers: [],
}, {

  name:"Absolute Deadline for Grad Nite Deposits", 

  link: "grad-nite-deadline",
  month: 2, date: 16, year: 2017, 
  description: "All payments must be paid by February 16, 2017. Checks are made payable to FAB, Grad Nite, Student name and student ID must to be included on the check memo line.",
  fullDescription: "This is the absolute deadline to turn in Grad Night deposits and paperwork at the front office.<br><br>" +

  "All payments must be paid by February 16, 2017. Checks are made payable to FAB, Grad Nite, Student name and student ID must to be included on the check memo line.<br><br>" +

  "If there are any unpaid fees or outstanding forms after February 16, student/graduate space will be forfeited to the next person on the waiting list. Those who register late may not be able to attend if there are not enough students to fill another bus.",
  moreInfoLink: "",
  formsNumbers: [],
}, {
  
  name:"Deadline for OPTIONAL Senior Memory Collages", 

  link: "deadline-memory-collage",
  month: 4, date: 15, year: 2017, 
  description: "Collages are due by: April 15th. Collages will be displayed at the after-the-ball breakfast on April 30th." + 
  "Collages should be 11”x14”. No need to laminate.<br><br>",
  fullDescription: "Each year, parents may create a photo collage of their student. Collages will be displayed at the after-the-ball breakfast on April 30th. This is a great surprise and unique keepsake for your graduate.<br><br>" +

  "Collages are due by: April 15th. There will be a box in the front office beginning March 1st. <br>" + 
  "Collages should be 11”x14”. No need to laminate.<br><br>" +

  "Foothill recommends using the Photo Dept at www.Costco.com for the cheapest and fastest way to create a memory collage. Snapfish.com and Shutterfly.com are both great alternatives as well.",
  moreInfoLink: "http://www.foothillfalcons.org/apps/pages/index.jsp?uREC_ID=45121&type=d&pREC_ID=57254",
  formsNumbers: [],

  }, {
  
  name:"Senior Awards at Achievement Rally", 

  link: "senior-awards",
  month: 4, date: 28, year: 2017, 
  description: "Don't miss school on April 28th, 2016, when senior awards will be given out!<br>Location: Sweeney Athletic Complex",
  fullDescription: "Don't miss school on April 28th, 2016, when senior awards will be given out!<br>Location: Sweeney Athletic Complex<br><br>" +

  "More details coming soon!",
  moreInfoLink: "",
  formsNumbers: [],
}, {
  
  name: "Senior Ball", 

  link: "senior-ball",
  month: 4, date: 29, year: 2017, 
  description: "Attend the last major senior dance of the year! Location and time TBD. Students are also invited to attend the after-the-ball breakfast when they return from the venue.",
  fullDescription: "Attend the last major senior dance of the year! Location and time TBD. Students are also invited to attend the after-the-ball breakfast when they return from the venue.<br><br>" +

  "Compared to other Foothill dances, Senior Ball has a special, additional form to sign. <br>Please note that busing is included in the price of the ticket and will be the required transportation for all students and their guests to and from senior ball. No leaving early!",
  moreInfoLink: "http://www.foothillfalcons.org/apps/pages/index.jsp?uREC_ID=45121&type=d&pREC_ID=57248",
  formsNumbers: [],
}, {
  
  name:"After-the-ball Breakfast", 

  link: "Location and time TBD. <br>Enjoy a early morning breakfast after ball! Admission is free for students.",
  month: 4, date: 30, year: 2017, 
  description: "Location and time TBD. <br>Enjoy a early morning breakfast after ball! Admission is free for students.",
  fullDescription: "Location and time TBD. <br>Enjoy a early morning breakfast after ball! Admission is free for students.<br><br>" + 
    "This breakfast is paid for by senior ball funds. Donations are greatly appreciated. Please make checks out to FHS Grad Nite and write Ball Breakfast " + 
    "in the memo section. Deposit checks in the office.<br><br>" + 
    "Due to the large scale of this event, volunteers are required to make it a success. Stay tuned for more info on how to sign up and contribute.",
  moreInfoLink: "",
  formsNumbers: [],

}, {
  
  name: "Sign Up For Teacher/Staff to Give Your Diploma",

  link: "teacher-diploma-signup",
  month: 5, date: 1, year: 2017, 
  description: "Sign up in the front office for your favorite teacher/staff members to give you your diploma.",
  fullDescription: "Sign up in the front office for your favorite teacher/staff members to give you your diploma.",
  moreInfoLink: "",
  formsNumbers: [],
  }, {
    
  name:"Pick Up Caps/Gowns", 

  link: "caps-gown-pickup",
  month: 5, date: 2, year: 2017, 
  description: "You can pick up the grad announcements, including cap and gown, in the outer quad at lunch ON MAY 2ND ONLY.",
  fullDescription: "You can pick up the grad announcements, including cap and gown, in the outer quad at lunch ON MAY 2ND ONLY.",
  moreInfoLink: "http://www.foothillfalcons.org/apps/pages/index.jsp?uREC_ID=45121&type=d&pREC_ID=653955",
  formsNumbers: [],
}, {
  
  name:"Baccalaureate Ceremony", 

  link: "baccalaureate-ceremony",
  month: 5, date: 21, year: 2017, 
  description: "Seniors and their families are invited to attend baccalaureate, a non-denominational, inspirational, and <em>voluntary</em> senior celebration of graduation.<br><br>Location: Valley Community Church, 4455 Del Val Parkway, Pleasanton <br>Time: TBD",
  fullDescription: "Seniors and their families are invited to attend baccalaureate, a non-denominational, inspirational, and <em>voluntary</em> senior celebration of graduation.<br><br>Location: Valley Community Church, 4455 Del Val Parkway, Pleasanton <br>Time: TBD<br>" +
  "No tickets are required to attend.<br><br>" +
  "The event will feature performances by students, advice from teachers and former students, and a final slideshow presentation on leaving high school. Performance auditions will be in April.<br><br>" +
  "Seniors should wear their graduation gowns. Boys should wear a collared shirt and slacks. Girls should wear a dress shorter than the gown. There is no dressing room, so please dress at home. No graduation caps.",
  moreInfoLink: "http://www.foothillfalcons.org/apps/pages/index.jsp?uREC_ID=45121&type=d&pREC_ID=57250",
  formsNumbers: [],
}, {

  name:"Senior Yearbooks", 

  link: "senior-yearbooks",
  month: 5, date: 23, year: 2017, 
  description: "You'll get your senior yearbooks in your English class.",
  fullDescription: "You'll get your senior yearbooks in your English class. Cheers!",
  moreInfoLink: "",
  formsNumbers: [],
}, {

  name:"Graduation Ribbon Leis Order Deadline", 

  link: "deadline-grad-ribbons",
  month: 5, date: 27, year: 2017, 
  description: "Order a ribbon lei for your graduation at <a href='https://kakunaflowers.com/' target='_blank'>kahunaflowers.com</a>.",
  fullDescription: "Order a ribbon lei for your graduation! Visit <a href='https://kakunaflowers.com/' target='_blank'>here</a> and click the &quot;Order Flowers Now&quot; button at the bottom of the landing page.<br>" +
  "Prices vary based on the lei style and additional accessories you choose.<br><br>" +

  "The last day to pre-order will be the Saturday prior to graduation which is Saturday, May 27.<br>" +
  "Some leis will be available day of at graduation, but don’t wait -- order now!",
  moreInfoLink: "http://www.foothillfalcons.org/apps/pages/index.jsp?uREC_ID=45121&type=d&pREC_ID=112612",
  formsNumbers: [],

}, {

  name:"Senior Scholarships Awards Breakfast", 

  link: "senior-scholarships-awards-breakfast",
  month: 5, date: 31, year: 2017, 
  description: "Time: TBD<br><br>This breakfast will celebrate the achievements of graduating seniors who were granted scholarships by their future " + 
           "colleges and universities.",
  fullDescription: "Time: TBD<br><br>This breakfast will celebrate the achievements of graduating seniors who were granted scholarships by their future " +
           "colleges and universities.",
  moreInfoLink: "",
  formsNumbers: [],
}, {

  name:"Mandatory Graduation Rehearsal", 

  link: "graduation-practice",
  month: 5, date: 31, year: 2017, 
  description: "All graduating seniors and approved speakers who want to attend the graduation ceremony must attend this practice session.<br><br>",
  fullDescription: "All graduating seniors and approved speakers who want to attend the graduation ceremony must attend this practice session.<br><br>" +

  "To get permission to skip the graduation practice, you must get prior approval from VP Jennifer Friesen.",
  moreInfoLink: "http://www.foothillfalcons.org/apps/pages/index.jsp?uREC_ID=45121&type=d&pREC_ID=57301",
  formsNumbers: [],
}, {

  name:"Graduation Ceremony", 

  link: "graduation-ceremony",
  month: 6, date: 2, year: 2017, 
  description: "It's time to graduate! Graduating seniors should report to the softball field by around 5 p.m. (exact time TBD.)",
  fullDescription: "It's time to graduate! Graduating seniors should report to the softball field by around 5 p.m. (exact time TBD.)<br><br>" + 

  "Note that students should not bring cell phones, purses, or valuables to the graduation ceremony. Water bottles will be provided.<br><br>" + 
  
  "Note that graduates will get their diplomas after the ceremony. Graduates will return to the track on the visitor's side in front of the bleachers after the ceremony to the alphabetically marked tables. Diplomas will be handed out when the mortar board (cap) with name label is presented.<br><br>" +

  "Graduation photos will be provided by Studio One Photography. Students will receive order forms, or they can place orders and view photos online at <a href='http://www.s1portal.com/foothill.html' target='_blank'>this website</a>.",
    
  moreInfoLink: "http://www.foothillfalcons.org/apps/pages/index.jsp?uREC_ID=45121&type=d&pREC_ID=57252",
  formsNumbers: [],
}, {

  name:"Disneyland Grad Night Trip", 

  link: "grad-night-trip",
  month: 6, date: 2, year: 2017, 
  description: "This will be a two-day trip from 6/2 to 6/4.",
  fullDescription: "This will be a two-day trip from 6/2 to 6/4.",
  moreInfoLink: "",
  formsNumbers: [6],
}]

/*

Be sure to mark your calendars for Monday, August 8 and Tuesday, August 9 for walk-thru registration for the 2016-2017 school year. Registration starts in the small gym and ends in the multipurpose room.

Monday, August 8 -- A-K
A-B -- Noon to 1:30 p.m.
C-D -- 1:30 p.m. to 3 p.m.
E-H -- 3 p.m. to 4:30 p.m.
I-K -- 4:30 p.m. to 6 p.m.

Tuesday, August 9 -- L-Z
L-M -- Noon to 1:30 p.m.
N-R -- 1:30 p.m. to 3 p.m.
S-T -- 3 p.m. to 4:30 p.m.
U-Z -- 4:30 p.m. to 6 p.m.

Makeup registration will be Friday, August 12 from 11 a.m. to 2 p.m. at the front office. School starts Monday, August 15.

Follow the link below for on-line registration:

https://foothill.futurefundapp.com/registration/sessions/new

*/


var valid_indexes = []; //This will store the indexes in the events array that occur from 0 <= timeLeft <= millisecond_count 


for (var i = 0; i < events.length; i++) //This assumes the events are ordered correctly by date
{
    var event_time = new Date(events[i].year, events[i].month - 1, events[i].date); //month parameter from 0-11; date and year parameters 
    //start at 1
    var timeLeft = (event_time.valueOf() - timeNow.valueOf());
    if (timeLeft >= 0 && timeLeft <= millisecond_count || (events[i].month - 1 == timeNow.getMonth() && events[i].date == 0)) {
        valid_indexes.push(i);
    }
}

var eventsEle = document.getElementById("important-events");

if (eventsEle) //this will only be true if the user is on the home page
{
    eventsEle.innerHTML = "";

    for (var i = 0; i < valid_indexes.length; i++)
        //Source for this section: http://stackoverflow.com/questions/19494339/creating-dynamic-div-using-javascript 
    {
        var tempDiv = document.createElement("div");
        var tempHeader = document.createElement("h4");
        var tempLink = document.createElement("a");

        var tempEvent = events[valid_indexes[i]];


        tempDiv.setAttribute("class", "well well-sm");
        tempLink.href = "events/#" + tempEvent.link;
        if (tempEvent.date == 0)
            tempLink.innerHTML = month_names[tempEvent.month - 1] + ": " + tempEvent.name;
        else
            tempLink.innerHTML = month_names[tempEvent.month - 1] + " " + tempEvent.date + ": " + tempEvent.name;

        tempHeader.appendChild(tempLink);
        tempDiv.appendChild(tempHeader);

        if (tempEvent.description || tempEvent.formsNumbers.length != 0) {
            var tempDescription = document.createElement("blockquote");
            tempDescription.innerHTML = "";
            if (tempEvent.description) {
                tempDescription.innerHTML = tempEvent.description;
            }
            if (tempEvent.formsNumbers.length != 0) {
                var formLink = document.createElement("a");
                formLink.href = "forms";
                formLink.innerHTML = "Forms page";
                if (tempDescription.innerHTML)
                    tempDescription.innerHTML += "<br>";

                if (tempEvent.formsNumbers.length == 1)
                    tempDescription.appendChild(document.createTextNode("Download form #" + tempEvent.formsNumbers[0] + " on the "));
                else if (tempEvent.formsNumbers.length == 2)
                    tempDescription.appendChild(document.createTextNode("Download forms #" + tempEvent.formsNumbers[0] + " and " +
                        tempEvent.formsNumbers[1] + " on the "));
                else {
                    var temp_formString = "Download forms #";
                    var counter = 0;
                    while (counter < tempEvent.formsNumbers.length - 1) {
                        temp_formString += tempEvent.formsNumbers[counter++];
                        temp_formString += ", ";
                    }
                    temp_formString += " and " + tempEvent.formsNumbers[tempEvent.formsNumbers.length - 1] + " on the ";

                    tempDescription.appendChild(document.createTextNode(temp_formString));
                }

                tempDescription.appendChild(formLink);
                tempDescription.appendChild(document.createTextNode("."));
            }
            tempDiv.appendChild(tempDescription);
        }

        eventsEle.appendChild(tempDiv);
    }

    ///*
    var adEle = document.getElementById("advertisements");
    var infoEle = document.getElementById("important-info");
    if (!adEle.innerHTML)
    {
        infoEle.style.maxHeight = "64vh";
    }
    //*/
}

var eventsIndex = 0; //current index of event counter
//var monthNum = 7; //August = 8th month (if I can count correctly) --> convert to array index by subtracting 1
var monthEle = document.getElementById("august");

if (monthEle) //this will only be true if the user is on the events page
{
    for (var i = 7; i <= 17; i++) //7 = august, 17%12 = 5 = june in index notation
    {
        monthEle = document.getElementById(month_names[i % 12].toLowerCase());
        monthEle.innerHTML = "";

        var divHeader = document.createElement("div");
        var header = document.createElement("h3");
        var divBody = document.createElement("div");
        var pToTop = document.createElement("p");
        var pToTopLink = document.createElement("a");

        divHeader.setAttribute("class", "panel-heading");
        header.setAttribute("class", "panel-title");
        header.innerHTML = month_names[i % 12];
        divHeader.appendChild(header);


        //if (i % 2 == 0)
        //    divHeader.style.backgroundColor = "#fbca32";

        divBody.setAttribute("class", "panel-body");
        var monthCounter = 0;
        while (eventsIndex < events.length && events[eventsIndex].month == (i%12) + 1) {
            var tempEvent = events[eventsIndex];
            var divEvent = document.createElement("div");
            var event_title = document.createElement("h4");

            divEvent.setAttribute("class", "well well-sm");
            divEvent.setAttribute("id", tempEvent.link);

            if (i % 2 === 0) {
                event_title.style.backgroundColor = "#fbca32";
                event_title.style.color = "black";
            }
            //event.style.fontSize = "2em";

            if (tempEvent.date == 0)
                event_title.innerHTML = month_names[tempEvent.month - 1] + ": " + tempEvent.name;
            else
                event_title.innerHTML = month_names[tempEvent.month - 1] + " " + tempEvent.date + ": " + tempEvent.name;



            divEvent.appendChild(event_title);

            if (tempEvent.fullDescription || tempEvent.moreInfoLink || tempEvent.formsNumbers.length != 0) {
                var event_description = document.createElement("blockquote");
                event_description.innerHTML = "";
                if (tempEvent.fullDescription) {
                    event_description.innerHTML = tempEvent.fullDescription;
                }
                if (tempEvent.moreInfoLink) {
                    var event_link = document.createElement("a");
                    event_link.href = tempEvent.moreInfoLink;
                    event_link.setAttribute("target", "_blank");
                    event_link.innerHTML = "here";
                    event_description.innerHTML += "<br><br>";
                    event_description.appendChild(document.createTextNode("More information "));
                    event_description.appendChild(event_link);
                    event_description.appendChild(document.createTextNode("."));
                }
                if (tempEvent.formsNumbers.length != 0) {
                    var form_link = document.createElement("a");
                    form_link.href = "../forms";
                    form_link.innerHTML = "Forms page";
                    if (tempEvent.moreInfoLink)
                        event_description.innerHTML += "<br>";
                    else
                        event_description.innerHTML += "<br><br>";
                    if (tempEvent.formsNumbers.length == 1)
                        event_description.appendChild(document.createTextNode("Download form #" + tempEvent.formsNumbers[0] + " on the "));
                    else if (tempEvent.formsNumbers.length == 2)
                        event_description.appendChild(document.createTextNode("Download forms #" + tempEvent.formsNumbers[0] + " and " +
                            tempEvent.formsNumbers[1] + " on the "));
                    else
                    {
                        var temp_formString = "Download forms #";
                        var counter = 0;
                        while (counter < tempEvent.formsNumbers.length - 1) {
                            temp_formString += tempEvent.formsNumbers[counter++];
                            temp_formString += ", ";
                        }
                        temp_formString += " and " + tempEvent.formsNumbers[tempEvent.formsNumbers.length - 1] + " on the ";

                        event_description.appendChild(document.createTextNode(temp_formString));
                    }
                    
                    event_description.appendChild(form_link);
                    event_description.appendChild(document.createTextNode("."));
                }
                divEvent.appendChild(event_description);

            }


            divBody.appendChild(divEvent);

            monthCounter++;
            eventsIndex++;
        }
        if (monthCounter == 0)
        {
            var tempMessage = document.createElement("p");
            tempMessage.innerHTML = "No events currently registered for this month.";
            tempMessage.style.fontSize = "1.25em";
            tempMessage.style.fontStyle = "italic";
            divBody.appendChild(tempMessage);
        }

        pToTop.setAttribute("class", "back-to-top-link");
        //pToTopLink.href = "#top";
        pToTopLink.href = "";
        pToTopLink.innerHTML = "Back to top";
        pToTop.appendChild(pToTopLink);
        divBody.appendChild(pToTop);

        monthEle.appendChild(divHeader);
        monthEle.appendChild(divBody);
    }

}