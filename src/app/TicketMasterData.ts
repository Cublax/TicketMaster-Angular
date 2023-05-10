export interface TicketMasterData {
  _embedded: Embedded
}

export interface Embedded {
  events: Event[]
}

export interface Event {
  name: string
  id: string
  url: string
  images: Image[]
  dates: Dates
  priceRanges: PriceRange[]
}

export interface Image {
  ratio: string
  url: string
  width: number
  height: number
  fallback: boolean
}

export interface Dates {
  start: Start
}

export interface Start {
  localDate: string
  localTime: string
}

export interface PriceRange {
  currency: string
  min: number
  max: number
}
