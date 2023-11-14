export class DateMapper {
  static toDomain(datetime: Date | string): Date {
    if (typeof datetime == 'string') {
      return new Date(datetime);
    }
    return datetime;
  }
}
