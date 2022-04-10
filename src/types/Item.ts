interface Item {
    ItemId: string;
    ItemInstanceId: string;
    PurchaseDate: Date;
    Annotation: string;
    CatalogVersion: string;
    DisplayName: string;
    UnitPrice: number;
    CustomData: {
        [key: string]: string;
    }
}
