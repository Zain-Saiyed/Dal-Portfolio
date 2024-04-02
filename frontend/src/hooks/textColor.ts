import React from 'react';

// Convert hex color to an RGB array
const hexToRgb = (hex: string): [number, number, number] => {
  // Remove the hash if it's there
  hex = hex.replace(/^#/, '');

  // Parse the hex string
  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  return [r, g, b];
};

// Calculate the luminance of an individual color component
const getLuminance = (colorComponent: number) => {
  const component = colorComponent / 255;
  return component <= 0.03928
    ? component / 12.92
    : Math.pow((component + 0.055) / 1.055, 2.4);
};

// Calculate the relative luminance of the RGB color
const calculateLuminance = (r: number, g: number, b: number) => {
  return (
    0.2126 * getLuminance(r) +
    0.7152 * getLuminance(g) +
    0.0722 * getLuminance(b)
  );
};

// Hook to determine if the text should be white or black based on the background color
const useTextColor = (backgroundColor: string): 'black' | 'white' => {
  let r: number, g: number, b: number;

  if (backgroundColor.startsWith('#')) {
    [r, g, b] = hexToRgb(backgroundColor);
  } else {
    // Extract the color components from the RGB or RGBa string
    const colorComponents = backgroundColor.match(/\d+\.?\d*/g)?.map(Number);
    if (!colorComponents || colorComponents.length < 3) {
      throw new Error('Invalid color format');
    }

    [r, g, b] = colorComponents;
    // The alpha channel (if present) is ignored for luminance calculation
  }

  const luminance = calculateLuminance(r, g, b);
  return luminance > 0.179 ? 'black' : 'white'; // Threshold of 0.179 can be adjusted
};

export default useTextColor;
