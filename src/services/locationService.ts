
export const getCountryByIP = async (): Promise<string> => {
  try {
    // Using ipapi.co for free IP geolocation
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return data.country_name || 'Unknown Country';
  } catch (error) {
    console.error('Error fetching country:', error);
    return 'Unknown Country';
  }
};

export const sendLocationToAPI = async (country: string): Promise<void> => {
  try {
    const message = encodeURIComponent(country);
    const apiUrl = `http://api.callmebot.com/text.php?source=web&user=@bhumitnasit&text=${message}`;
    
    // Using fetch with no-cors mode to handle CORS issues
    await fetch(apiUrl, {
      method: 'GET',
      mode: 'no-cors'
    });
    
    console.log(`Location sent to API: ${country}`);
  } catch (error) {
    console.error('Error sending location to API:', error);
  }
};
