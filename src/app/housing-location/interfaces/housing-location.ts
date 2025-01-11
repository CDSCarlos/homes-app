export interface HousingLocation {
    id: number | null | undefined,
    name: string | null | undefined,
    city: string | null | undefined,
    state: string | null | undefined,
    photo: string | null | undefined,
    availableUnits: number | null | undefined,
    wifi: boolean | null | undefined,
    laundry: boolean | null | undefined,
}
