export const handleFileUpload = (
  event: any,
  uploadPercentage: any,
  setUploadPercentage: any
) => {
  if (setUploadPercentage && setUploadPercentage)
    setUploadPercentage(
      parseInt(String(Math.round(event.loaded * 100) / event.total))
    );
  if (uploadPercentage === 100) setUploadPercentage(0);
};
