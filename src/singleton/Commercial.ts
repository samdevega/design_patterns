class Commercial {
  protected address: String
  protected email: String
  protected name: String
  private static instance: Commercial

  private constructor() {}

  public static getInstance() {
    if (!this.instance) {
      this.instance = new Commercial()
    }
    return this.instance
  }

  public getName(): String {
    return this.name
  }

  public getAddress(): String {
    return this.address
  }

  public getEmail(): String {
    return this.email
  }

  public setName(name: String): void {
    this.name = name
  }

  public setAddress(address: String): void {
    this.address = address
  }

  public setEmail(email: String): void {
    this.email = email
  }
}

export { Commercial }
