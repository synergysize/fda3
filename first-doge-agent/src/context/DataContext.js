import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [grantsData, setGrantsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // For demo purposes, we're using the local JSON file
  // In a production environment, this would fetch from the actual API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // This would normally be an API call:
        // const response = await axios.get('https://api.doge.gov/savings/grants?sort_by=value&sort_order=desc&page=1&per_page=10');
        
        // For the demo, we'll use the saved response:
        const data = {
          "success": true,
          "result": {
            "grants": [
              {
                "date": "3/1/2025",
                "agency": "USAID",
                "recipient": "GAVI FOUNDATION",
                "value": 4000000000,
                "savings": 0,
                "link": "https://usaspending.gov/award/ASST_NON_7200GH21IO00002_7200",
                "description": "NEW PIO GAVI COVAX-TO PREVENT, PREPARE FOR , AND RESPOND TO CORONAVIRUS, INCLUDING FOR VACCINE PROCUREMENT AND DELIVERY."
              },
              {
                "date": "3/1/2025",
                "agency": "USAID",
                "recipient": "GAVI FOUNDATION",
                "value": 2630000000,
                "savings": 1750000000,
                "link": "https://usaspending.gov/award/ASST_NON_7200GH22IO00006_7200",
                "description": "THE 2021-2025 STRATEGY (GAVI 5.0), WHICH WAS APPROVED BY THE GAVI BOARD  IN JUNE 2019, BUILDS ON THE ALLIANCE'S YEARS OF DEMONSTRATED SUCCESS AND STRIVES TOWARD ITS VISION  TO "LEAVE NO ONE BEHIND WITH IMMUNIZATION." TO INCREASE COVERAGE AND EQUITY, GAVI 5.0  PRIORITIZES "ZERO-DOSE" CHILDREN WHO HAVE NOT RECEIVED A SINGLE VACCINE SHOT AS WELL AS MISSED  COMMUNITIES. THE ZERO-DOSE AGENDA IS ALSO A KEY PRIORITY FOR THE GLOBAL COMMUNITY'S  IMMUNIZATION AGENDA 2030, WHICH WAS ENDORSED BY THE WORLD HEALTH ASSEMBLY IN MAY 2020."
              },
              {
                "date": "3/23/2025",
                "agency": "Department of Health and Human Services",
                "recipient": "PUBLIC HEALTH FOUNDATION ENTERPRISES, INC",
                "value": 1696424899,
                "savings": 482383724,
                "link": null,
                "description": null
              },
              {
                "date": "3/23/2025",
                "agency": "Department of Health and Human Services",
                "recipient": "TX DEPT OF STATE HEALTH SERVICES",
                "value": 1535405092,
                "savings": 877628206,
                "link": null,
                "description": null
              },
              {
                "date": "3/1/2025",
                "agency": "USAID",
                "recipient": "INTERNATIONAL BANK FOR RECONSTRUCTION AND DEVELOPMENT",
                "value": 1300000000,
                "savings": 372500000,
                "link": null,
                "description": null
              },
              {
                "date": "3/23/2025",
                "agency": "Department of Health and Human Services",
                "recipient": "HEALTH, FLORIDA DEPARTMENT OF",
                "value": 1236223812,
                "savings": 482136996,
                "link": null,
                "description": null
              },
              {
                "date": "3/23/2025",
                "agency": "Department of Health and Human Services",
                "recipient": "NEW YORK, CITY OF",
                "value": 807512729,
                "savings": 39516923,
                "link": null,
                "description": null
              },
              {
                "date": "3/23/2025",
                "agency": "Department of Health and Human Services",
                "recipient": "RESEARCH TRIANGLE INSTITUTE",
                "value": 716790486,
                "savings": 428698791,
                "link": null,
                "description": null
              },
              {
                "date": "3/23/2025",
                "agency": "Department of Health and Human Services",
                "recipient": "HEALTH RESEARCH, INC.",
                "value": 700248982,
                "savings": 62262226,
                "link": null,
                "description": null
              },
              {
                "date": "3/23/2025",
                "agency": "Department of Health and Human Services",
                "recipient": "STATE OF OHIO - DEPARTMENT OF HEALTH",
                "value": 672805694,
                "savings": 220743894,
                "link": null,
                "description": null
              }
            ]
          },
          "meta": {
            "total_results": 9221,
            "pages": 923
          }
        };
        
        setGrantsData(data.result.grants);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Metrics calculations for dashboard
  const totalGrantsValue = grantsData.reduce((sum, grant) => sum + grant.value, 0);
  const totalSavings = grantsData.reduce((sum, grant) => sum + (grant.savings || 0), 0);
  const averageGrantValue = totalGrantsValue / (grantsData.length || 1);

  // Function to answer chatbot queries based on grant data
  const answerQuery = (query) => {
    query = query.toLowerCase();
    
    if (query.includes('highest grant') || query.includes('largest grant')) {
      const highestGrant = grantsData[0]; // Already sorted by value desc
      return `The highest value grant is ${highestGrant.value.toLocaleString('en-US', {style: 'currency', currency: 'USD'})} awarded to ${highestGrant.recipient} by ${highestGrant.agency} on ${highestGrant.date}.`;
    }
    
    if (query.includes('total savings') || query.includes('how much saved')) {
      return `The total savings across all displayed grants is ${totalSavings.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}.`;
    }
    
    if (query.includes('total grants') || query.includes('total value')) {
      return `The total value of all displayed grants is ${totalGrantsValue.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}.`;
    }
    
    if (query.includes('average') || query.includes('mean')) {
      return `The average grant value is ${averageGrantValue.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}.`;
    }
    
    if (query.includes('recipient') || query.includes('who received')) {
      const recipients = [...new Set(grantsData.map(grant => grant.recipient))];
      return `The recipients include: ${recipients.join(', ')}.`;
    }
    
    if (query.includes('agency') || query.includes('department')) {
      const agencies = [...new Set(grantsData.map(grant => grant.agency))];
      return `The agencies providing grants include: ${agencies.join(', ')}.`;
    }
    
    if (query.includes('fda') || query.includes('first doge agent')) {
      return `The First Doge Agent ($FDA) is the official tokenized representative of the DOGE initiative, created to enhance transparency and efficiency in government grant management.`;
    }
    
    return `I'm the First Doge Agent ($FDA) chatbot. I can answer questions about the DOGE grants data. Try asking about highest grants, total values, savings, or specific agencies.`;
  };

  return (
    <DataContext.Provider 
      value={{ 
        grantsData, 
        loading, 
        error, 
        totalGrantsValue, 
        totalSavings, 
        averageGrantValue,
        answerQuery
      }}
    >
      {children}
    </DataContext.Provider>
  );
};