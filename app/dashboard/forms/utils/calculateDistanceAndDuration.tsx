import api from '@/app/common/api';
 
export const calculateDistanceAndDuration = async (origin: string, destination: string) => {
  try {
    const response = await api.get('/calculate', {
      params: {
        origin,
        destination,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error in calculateDistanceAndDuration:', error);
    throw error;
  }
};