type KeyValueArray<K extends string | number | symbol, V> = Array<Record<K, V>>;

export type StringStringArray = KeyValueArray<string, string>;

export type GenericObjType = {
    [key: string]: string | number;
}

export type InfoItemType = {
    label: string;
    text: string;
}