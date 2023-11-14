export class UUID {
  private readonly _uuid: string;

  private constructor(uuid: string) {
    this._uuid = uuid;
  }

  toString(): string {
    return this._uuid;
  }

  static fromString(uuid: string) {
    return new this(uuid);
  }
}
