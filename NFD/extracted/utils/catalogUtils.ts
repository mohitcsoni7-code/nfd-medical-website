// Centralized catalog PDF management
// Replace this import with your actual PDF file from Figma:
// import catalogPDF from 'figma:asset/YOUR_PDF_HASH_HERE.pdf';

// For now, using a placeholder URL - replace with your actual PDF import
export const catalogPDF = 'https://your-website.com/path-to-catalog.pdf';

// Alternative example of how to import a PDF in Figma Make:
// export { default as catalogPDF } from 'figma:asset/YOUR_PDF_HASH_HERE.pdf';

/**
 * Downloads the NFD product catalog
 * @param filename - Optional custom filename for the download
 */
export const downloadCatalog = (filename: string = 'NFD-Product-Catalog.pdf') => {
  try {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = catalogPDF;
    link.download = filename;
    link.target = '_blank'; // Open in new tab as fallback
    
    // Temporarily add to DOM, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    return true;
  } catch (error) {
    console.error('Error downloading catalog:', error);
    return false;
  }
};

/**
 * Downloads a product-specific brochure PDF
 * @param pdfUrl - The URL of the product brochure PDF
 * @param productName - The name of the product for filename
 */
export const downloadProductBrochure = (pdfUrl: string, productName: string) => {
  try {
    // Create a safe filename from product name
    const safeFilename = productName
      .replace(/[^a-zA-Z0-9\s]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .trim();
    
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${safeFilename}-Brochure.pdf`;
    link.target = '_blank'; // Open in new tab as fallback
    
    // Temporarily add to DOM, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    return true;
  } catch (error) {
    console.error('Error downloading product brochure:', error);
    return false;
  }
};

/**
 * Opens the catalog in a new tab (for preview)
 */
export const previewCatalog = () => {
  try {
    window.open(catalogPDF, '_blank', 'noopener,noreferrer');
    return true;
  } catch (error) {
    console.error('Error opening catalog preview:', error);
    return false;
  }
};

/**
 * Gets the catalog URL for direct linking
 */
export const getCatalogUrl = () => catalogPDF;

/**
 * Checks if catalog is available
 */
export const isCatalogAvailable = () => {
  return catalogPDF && catalogPDF !== 'https://your-website.com/path-to-catalog.pdf';
};