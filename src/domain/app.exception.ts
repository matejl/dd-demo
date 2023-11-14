export class AppException extends Error {
  private constructor(message: string) {
    super(message);
  }

  public static duplicateEntry(fieldName: string): AppException {
    return new AppException(`duplicated ${fieldName}`);
  }

  public static incorrectCredentials(): AppException {
    return new AppException(`incorrect credentials`);
  }
}
