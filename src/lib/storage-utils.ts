/**
 * @fileOverview Utilities for secure and robust image storage management.
 */

import { StorageError } from 'firebase/storage';

/**
 * Sanitizes a filename and ensures it is unique.
 * Format: timestamp-random-name.ext
 */
export function generateUniqueFileName(originalName: string): string {
  const timestamp = Date.now();
  const randomStr = Math.random().toString(36).substring(2, 7);
  
  // Remove special characters, replace spaces with hyphens, lowercase
  const cleanName = originalName
    .toLowerCase()
    .replace(/[^a-z0-9.]/g, '-')
    .replace(/-+/g, '-') // collapse multiple hyphens
    .replace(/^-+|-+$/g, ''); // trim hyphens
    
  return `${timestamp}-${randomStr}-${cleanName}`;
}

/**
 * Validates if a file is an allowed image type and within size limits.
 */
export function validateImageFile(file: File, maxSizeMB: number = 10): { valid: boolean; error?: string } {
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
  
  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: 'Unsupported format. Please use JPG, PNG, WEBP, or GIF.' };
  }
  
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  if (file.size > maxSizeBytes) {
    return { valid: false, error: `File is too large. Maximum size is ${maxSizeMB}MB.` };
  }
  
  return { valid: true };
}

/**
 * Translates technical Firebase Storage errors into human-readable messages.
 */
export function translateStorageError(error: StorageError | any): string {
  const code = error.code || '';
  
  switch (code) {
    case 'storage/unauthorized':
      return 'Upload failed: You do not have permission. Please check your administrator access.';
    case 'storage/canceled':
      return 'Upload was canceled by the user.';
    case 'storage/quota-exceeded':
      return 'Storage quota exceeded. Please contact technical support.';
    case 'storage/server-file-not-found':
      return 'File not found on the server.';
    case 'storage/retry-limit-exceeded':
      return 'Network timeout. Please check your connection and try again.';
    default:
      return error.message || 'An unexpected error occurred during the upload process.';
  }
}

/**
 * Format bytes into human readable form
 */
export function formatBytes(bytes: number, decimals: number = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
