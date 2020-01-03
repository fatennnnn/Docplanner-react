import React from 'react';
import Docplanner from './docplanner/Navbar/Docplanner';
import Composant1 from './docplanner/section1/Composant1';
import Patientdocteur from './docplanner/section2/Patientdocteur';
import Company from './docplanner/section3/Company';
import Plateform from './docplanner/section4/Plateform';
import Footer from './docplanner/footer/Footer';


import Description from './docplanner/section5/Description';
import Country from './docplanner/section6/Country';

import './App.css';
const docplanner=[
  {
    elem:"About us",
    active:false
  },
  {
    elem:"Career",
    active:false,
    
  },
  {
    elem:"Departements",
    active:true,
    drop:["Marketing & PR","Customer Success & Sales","IT, Product, Design & UX","Finance & Administration"]
  }
]

const patdoc=[
  {
    image:true,
    elem:"For patients",
    title:"Find a doctor, book a visit and solve any health-related doubt",
    img:"https://www.docplanner.com/img/screen-marketplace@2x.png",
    option:["Choose country","Argentina","Australia","Brazil","Chile","Colombia","Czech","France","Italy","Mexico","Peru","Poland","Portugal","Spain","Turkey","UK"],
    // class:"patient"
    
  },
  {
    image:false,
    elem:"For doctors",
    title:"Save time managing visits and cut no-shows by half",
    img:"https://www.docplanner.com/img/screen-saas@2x.png"
    
  }
]

const country=[
  { lien:"https://www.docplanner.com/career?&loc=mexico#jobs-offers",
    imagee:"https://www.docplanner.com/images/warsaw.png",
    paragraphe:"Warsaw",
    value:"SEE OPENING S",
   
},
{
  lien:"https://www.docplanner.com/career?&loc=mexico#jobs-offers",
  imagee:"https://www.docplanner.com/images/barcelona.png",
  paragraphe:"Barcelona",

  value:"SEE OPENING S",

},{
  lien:"https://www.docplanner.com/career?&loc=mexico#jobs-offers",
  imagee:"https://www.docplanner.com/images/istanbul.png",
  paragraphe:"Istanbul",

  value:"SEE OPENING S",

},{
  lien:"https://www.docplanner.com/career?&loc=mexico#jobs-offers",
  imagee:"https://www.docplanner.com/images/rome.png",
  paragraphe:"Rome",

  value:"SEE OPENING S",

},{
  lien:"https://www.docplanner.com/career?&loc=mexico#jobs-offers",
  imagee:"https://www.docplanner.com/images/mexico-city.png",
  paragraphe:"Mexico City",

  value:"SEE OPENING S",

},{
  lien:"https://www.docplanner.com/career?&loc=mexico#jobs-offers",
  imagee:"https://www.docplanner.com/images/curitiba.png",
  paragraphe:"Curitiba",

  value:"SEE OPENING S",

}]

const plateform=[

{logo:"https://www.docplanner.com/img/flag.png",
description:"Leader in 10 countries",
text:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and,Chile",
condition:true
},
{logo:"https://www.docplanner.com/img/visits.png",
description:"1.5 million appointments",
text:"booked last month",
condition:false
},
{logo:"https://www.docplanner.com/img/patients.png",
description:"30 million unique patients",
text:"visit us every month",
condition:true

},
{logo:"https://www.docplanner.com/img/doctors.png",
description:"2 million active doctors",
text:"trust in our solutions",
condition:false

}
]


function App() {
  return (
    <div className="App">
     <Docplanner dropdown={docplanner}/> 
     <Composant1/>
     <Patientdocteur Patientdo={patdoc}/>
     <Company/>
     <Plateform plateforme={plateform} />
     <Description/>
     <Country differentcountry={country}/>
     <Footer/>
     </div>

  );
}
export default App;
