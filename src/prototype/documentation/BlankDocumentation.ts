import { Document } from '../document'
import { Documentation } from './Documentation'

class BlankDocumentation extends Documentation {
  private static instance: BlankDocumentation | undefined

  private constructor() {
    super()
  }

  public static getInstance(): BlankDocumentation {
    if (!this.instance) {
      this.instance = new BlankDocumentation()
    }
    return this.instance
  }

  public include(document: Document): void {
    this.documents.push(document)
  }

  public exclude(document: Document): void {
    this.documents = this.documents.filter(storedDocument => storedDocument !== document)
  }
}

export { BlankDocumentation }
