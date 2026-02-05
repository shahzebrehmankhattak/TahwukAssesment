import chartBar from '../chart-bar-line.png'
import folderOne from "../folder-01.png";
import folderCheck from "../folder-check.png";
import fileSecurity from "../file-security.png";
import fileVerified from "../file-verified.png";
import fileUpload from "../file-upload.png";


export const progressData = [
  {
    id: 1,
    label: "Overall Progress",
    icon: chartBar,
    percentage: "78.65%",
  },
  {
    id: 2,
    label: "Total Criteria",
    icon: folderOne,
    percentage: "95",
  },
  {
    id: 3,
    label: "Completed Criteria",
    icon: folderCheck,
    percentage: "52",
  },
  {
    id: 4,
    label: "Evidence Documents",
    icon: fileSecurity,
    percentage: "386",
  },
  {
    id: 5,
    label: "Evidence (Completed)",
    icon: fileVerified,
    percentage: "302",
  },
  {
    id: 6,
    label: "Uploaded to DGA",
    icon: fileUpload,
    percentage: "258",
  },
];

export const progressStatus = [
  {
    color:'bg-[#8597A8]',
    name:"Not Started"
  },
  {
    color:'bg-[#F59F0A]',
    name:"In Progress"
  },
  {
    color:'bg-[#1EA54E]',
    name:"Completed"
  },
  {
    color:'bg-[#004479]',
    name:"Partially Uploaded "
  },
  {
    color:'bg-[#0078D7]',
    name:"Fully Uploaded "
  },
  {
    color:'bg-[#F50A0A]',
    name:"Delayed"
  },
];

export const progressDataPercent = [
{
  name:"Strategy and Planning",
  percentage:"97.78%"
},
{
  name:"Organization and Culture",
  percentage:"70.83%"
},
{
  name:"Operations and Execution",
  percentage:"80.00%"
},
{
  name:"Business Continuity",
  percentage:"90.59%"
},
{
  name:"Information Technology",
  percentage:"75.00%"
},
{
  name:"Comprehensive Governance",
  percentage:"64.44%"
},
{
  name:"Channels and Services",
  percentage:"100%"
},
{
  name:"Beneficiary Centralization",
  percentage:"60.00%"
},
{
  name:"Government Data",
  percentage:"87.50%"
},
{
  name:"Research and Innovation",
  percentage:"17.65%"
},
];

export const gridData = [
  {
    title: "Digital Transformation",
    items: [
      {
        label: "Digital Transformation",
        levels: ["green", "green", "green"],
      },
      {
        label: "Digital Governance",
        levels: ["green", "green", "yellow"],
      },
      {
        label: "Enterprise Architecture",
        levels: ["green", "green", "green", "green"],
      },
    ],
  },
  {
    title: "Digital Culture And Environment",
    items: [
      {
        label: "Digital Culture And Environment",
        levels: ["green", "yellow", "green"],
      },
      {
        label: "Leadership Development",
        levels: ["green", "green", "green", "green"],
      },
      {
        label: "Skills & Capacity Building",
        levels: ["yellow", "yellow", "yellow"],
      },
    ],
  },
  {
    title: "Business Processes",
    items: [
      {
        label: "Business Processes",
        levels: ["green", "yellow", "yellow", "green"],
      },
    ],
  },
  {
    title: "Risk Management",
    items: [
      {
        label: "Risk Management",
        levels: ["green", "green", "green", "green", "green", "green"],
      },
    
      {
        label: "Business Continuity",
        levels: ["green", "gray", "green", "gray", "gray", "green"],
      },
     
    ],
  },
  {
    title: "Support Systems",
    items: [
      {
        label: "Support Systems",
        levels: ["blue", "green", "green", "gray"],
      },
        {
        label: "IT Infrastructure",
        levels: ["green", "green", "green", "green", "blue", "green","green"],
      },
       {
        label: "Cloud Infrastructure",
        levels: ["green", "green", "blue"],
      },
      
    ],
  },
  {
    title: "Governance Platforms",
    items: [
      {
        label: "Governance Platforms",
        levels: ["green", "green", "green", "gray", "green","green","green","green",],
      },
    ],
  },
  {
    title: "Service Quality",
    items: [
      {
        label: "Service Quality",
        levels: ["green", "green", "green"],
      },
      {
        label: "Digital Channels",
        levels: ["green", "green", "green", "green"],
      },
     
    ],
  },
  {
    items: [
       {
        label: "User Engagement",
        levels: ["green", "yellow", "yellow", "yellow"],
      },
       {
        label: "User Relationship",
        levels: ["green", "yellow", "yellow"],
      },
      {
        label: "User Experience",
        levels: ["green", "yellow", "green", "yellow", "green"],
      },
      
    ],
  },
  {
    title: "Data Governance",
    items: [
      {
        label: "Data Governance",
        levels: ["green", "yellow", "yellow"],
      },
      {
        label: "Data Usage & Availability",
        levels: ["green", "yellow", "yellow"],
      },
      {
        label: "Open Data",
        levels: ["green", "green", "green"],
      },
    ],
  },
  {
    title: "Innovation",
    items: [
       {
        label: "Innovation",
        levels: ["red", "red", "red", "red"],
      },
      {
        label: "Creative Solutions",
        levels: ["yellow", "red"],
      },
      
    ],
  },
];

export const levelColors = {
  green: "bg-[#1EA54E] text-white",
  yellow: "bg-[#F59F0A] text-white",
  red: "bg-[#F50A0A] text-white",
  gray: "bg-[#8597A8] text-white",
  blue: "bg-[#0078D7] text-white",
  royalBlue: "bg-[#004479] text-white",
};