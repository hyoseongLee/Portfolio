export type ColorKey =
    | 'default'
    | 'primary'
    | 'second'
    | 'defaultText'
    | 'menuText'

export type BackGroundColorKey =
    | 'default'
    | 'second'
    | 'third'
    | 'contantsBg'

export type FontSizeKey = 
    | 'default'
    | 'small'
    | 'large'
    | 'xlarge'

export type FontWeightKey =
    | 'default'

export type FontFamilyKey =
    | 'default'

export interface Theme {
    color: Record<ColorKey, string>;
    fontSize: Record<FontSizeKey, string>
    backgroundColor: Record<BackGroundColorKey,string>
    fontWeight: Record<FontWeightKey, string>
    fontFamily: Record<FontFamilyKey, string>
}