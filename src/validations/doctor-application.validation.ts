export const MAX_FILE_SIZE = 5
export const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE * 1024 * 1024
export function isAcceptedFileSize(fileSize: number){
    return fileSize <= MAX_FILE_SIZE_BYTES

}
export const MAX_ADDITIONAL_FILES = 3
export const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/png",
  "image/jpeg",
];

export function isAcceptedFileType(fileType: string) {
  return ACCEPTED_FILE_TYPES.includes(fileType);
}