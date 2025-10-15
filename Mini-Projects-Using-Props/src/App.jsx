import React from 'react'
import Card from './components/Card'


const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$65/hour",
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "React Native Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$80/hour",
    location: "London, UK"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Backend Developer (Node.js)",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$75/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "3 days ago",
    post: "iOS Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$85/hour",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Cloud Solutions Engineer (Azure)",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$90/hour",
    location: "Toronto, Canada"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "2 days ago",
    post: "Full Stack Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$88/hour",
    location: "Los Angeles, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "10 weeks ago",
    post: "Software Engineer (Autopilot)",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$95/hour",
    location: "Berlin, Germany"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "6 days ago",
    post: "AI/ML Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$100/hour",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
    companyName: "Oracle",
    datePosted: "3 weeks ago",
    post: "Database Engineer",
    tag1: "Part-time",
    tag2: "Senior Level",
    pay: "$70/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    datePosted: "1 day ago",
    post: "UI/UX Designer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$60/hour",
    location: "Dhaka, Bangladesh"
  }
];

  return (
    <div className='parent'>
      {jobOpenings.map(function(cards){
        return <Card company={cards.companyName} datePosted={cards.datePosted} post={cards.post} tag1={cards.tag1} tag2={cards.tag2} pay={cards.pay} location={cards.location} brandLogo={cards.brandLogo} />
      })}
    </div>
  )
}

export default App