
import { useEffect } from 'react';
import { getCountryByIP, sendLocationToAPI } from '@/services/locationService';

export const useLocationTracking = () => {
  useEffect(() => {
    const trackLocation = async () => {
      try {
        const country = await getCountryByIP();
        await sendLocationToAPI(country);
      } catch (error) {
        console.error('Error in location tracking:', error);
      }
    };

    // Run the tracking when component mounts
    trackLocation();
  }, []);
};
