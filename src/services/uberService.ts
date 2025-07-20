interface UberPriceEstimate {
  price: number;
  duration: number;
  type: string;
}

export async function getUberPriceEstimate(
  startLat: number,
  startLng: number,
  endLat: number,
  endLng: number
): Promise<UberPriceEstimate> {
  try {
    // Calculate distance between points (simplified)
    const distance = Math.sqrt(
      Math.pow(endLat - startLat, 2) + Math.pow(endLng - startLng, 2)
    ) * 111; // Rough conversion to kilometers

    // Mock price calculation based on distance
    const basePrice = 50; // Base fare
    const pricePerKm = 15; // Price per kilometer
    const mockPrice = basePrice + (distance * pricePerKm);
    
    // Mock duration calculation (1 minute per kilometer + 5 minutes base)
    const mockDuration = Math.ceil(distance + 5);

    return {
      price: mockPrice,
      duration: mockDuration,
      type: 'UberX'
    };
  } catch (error) {
    console.error('Error calculating Uber price estimate:', error);
    throw error;
  }
} 