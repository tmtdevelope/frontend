export const ALLOWED_FILE_TYPES = {
  images: ['image/jpeg', 'image/png', 'image/gif'],
  documents: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
};

  
  export const FILE_TYPE_ERROR_MESSAGES = {
    documents: 'Only PDF, DOC, DOCX, and TXT files are allowed',
    images: 'Only JPEG, PNG, GIF, and WEBP images are allowed'
  };
  
  export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
  export const MAX_FILES = 5;

  