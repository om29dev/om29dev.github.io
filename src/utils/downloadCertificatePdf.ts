/**
 * Converts a certificate image to JPEG and generates a high-fidelity PDF for instant download.
 * jsPDF is dynamically imported to keep the initial page bundle minimal.
 */
export async function downloadCertificatePdf(imageUrl: string, title: string): Promise<void> {
  const [{ jsPDF }, img] = await Promise.all([
    import('jspdf'),
    new Promise<HTMLImageElement>((resolve, reject) => {
      const el = new Image();
      el.crossOrigin = 'anonymous';
      el.onload = () => resolve(el);
      el.onerror = () => reject(new Error(`Failed to load certificate image: ${imageUrl}`));
      el.src = imageUrl;
    })
  ]);

  const width = img.naturalWidth || img.width;
  const height = img.naturalHeight || img.height;

  if (!width || !height) {
    throw new Error('Unable to determine certificate image dimensions.');
  }

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Failed to acquire canvas context.');
  }

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, width, height);
  ctx.drawImage(img, 0, 0, width, height);

  const jpegData = canvas.toDataURL('image/jpeg', 0.95);

  const orientation = width >= height ? 'landscape' : 'portrait';
  const pdf = new jsPDF({
    orientation,
    unit: 'px',
    format: [width, height],
    compress: true
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  pdf.addImage(jpegData, 'JPEG', 0, 0, pageWidth, pageHeight);

  const sanitized = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  const filename = `${sanitized || 'certificate'}.pdf`;

  pdf.save(filename);
}

