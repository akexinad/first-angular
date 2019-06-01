// INTERFACE: A specification identifying a related set of properties and methods.
// A class commits to supporting the spec by IMPLEMENTING the interface.
// Defining an interface is necessary in order to continue using typescript's string typing capabilities.
export default interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
}